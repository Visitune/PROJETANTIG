/**
 * IFS Broker Tool - Logic
 * Expects 'checklistData' to be available globally (from data.js)
 */

// ==========================================
// 1. STORAGE & UTILS
// ==========================================
const STORAGE_KEY = 'ifs_broker_progress_v4';

function loadData() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : { checklist: {}, settings: {}, documents: {} };
}

function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  window.dispatchEvent(new Event('dataUpdated'));
}

// --- IndexedDB Helper for Files ---
const DB_NAME = 'IFS_Broker_DB';
const DB_VERSION = 1;
const STORE_NAME = 'files';

const dbHelper = {
  open: () => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
      request.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME); // Key is docId
        }
      };
    });
  },
  saveFile: async (docId, file) => {
    const db = await dbHelper.open();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const fileData = {
          id: docId,
          name: file.name,
          type: file.type,
          size: file.size,
          data: reader.result, // Base64
          lastModified: file.lastModified
        };
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        const req = store.put(fileData, docId);
        req.onsuccess = () => resolve(fileData);
        req.onerror = () => reject(req.error);
      };
      reader.readAsDataURL(file);
    });
  },
  getFile: async (docId) => {
    const db = await dbHelper.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(docId);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  },
  getAllFiles: async () => {
    const db = await dbHelper.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  },
  putFileData: async (fileData) => {
    const db = await dbHelper.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(fileData, fileData.id);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  },
  clear: async () => {
    const db = await dbHelper.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.clear();
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }
};

function getStats() {
  const data = loadData();
  const progress = data.checklist || {};
  let totalItems = 0;
  let compliant = 0;
  let nonCompliant = 0;
  let na = 0;

  if (typeof checklistData !== 'undefined') {
    checklistData.forEach(chapter => {
      chapter.items.forEach(item => {
        totalItems++;
        const itemData = progress[item.id] || {};
        const status = itemData.status;

        if (status === 'compliant') compliant++;
        else if (status === 'non-compliant') nonCompliant++;
        else if (status === 'na') na++;
      });
    });
  }

  const completed = compliant + nonCompliant + na;
  const percentage = totalItems === 0 ? 0 : Math.round((compliant / (totalItems - na)) * 100) || 0;

  return { totalItems, compliant, nonCompliant, na, completed, percentage };
}

function getChapterStats(chapter, progress) {
  let total = 0;
  let completed = 0;
  let nc = 0;

  chapter.items.forEach(item => {
    total++;
    const status = progress[item.id]?.status;
    if (status) completed++;
    if (status === 'non-compliant') nc++;
  });

  return {
    percentage: total === 0 ? 0 : Math.round((completed / total) * 100),
    nc: nc
  };
}

// ==========================================
// 2. EXPORT / IMPORT (.brok)
// ==========================================

async function exportAudit() {
  const data = loadData();
  const btn = document.getElementById('btn-export');
  const originalText = btn.innerText;
  btn.innerText = '⏳ Préparation...';
  btn.disabled = true;

  try {
    // Fetch all files from IndexedDB
    const files = await dbHelper.getAllFiles();

    const exportObj = {
      version: '1.2',
      date: new Date().toISOString(),
      data: data,
      files: files // Embedded Base64 files
    };

    const blob = new Blob([JSON.stringify(exportObj, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `audit_ifs_${data.settings?.company || 'export'}_${new Date().toISOString().slice(0, 10)}.brok`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } catch (err) {
    console.error(err);
    alert('Erreur lors de l\'exportation : ' + err.message);
  } finally {
    btn.innerText = originalText;
    btn.disabled = false;
  }
}

function importAudit(file) {
  const reader = new FileReader();
  reader.onload = async (e) => {
    try {
      const json = JSON.parse(e.target.result);

      // Restore Data
      let dataToSave;
      if (json.data) {
        dataToSave = json.data;
      } else if (json.progress) {
        dataToSave = { checklist: json.progress, settings: {}, documents: {} };
      } else {
        alert('Format de fichier invalide.');
        return;
      }
      saveData(dataToSave);

      // Restore Files
      if (json.files && Array.isArray(json.files)) {
        await dbHelper.clear();
        for (const f of json.files) {
          await dbHelper.putFileData(f);
        }
      }

      alert('Audit importé avec succès !');
      location.reload();
    } catch (err) {
      alert('Erreur lors de la lecture du fichier.');
      console.error(err);
    }
  };
  reader.readAsText(file);
}

// ==========================================
// 3. UI COMPONENTS
// ==========================================

function renderChecklist() {
  const container = document.createElement('div');
  const data = loadData();
  const progress = data.checklist || {};

  if (typeof checklistData === 'undefined') {
    container.innerHTML = '<div class="card"><p>Erreur: Les données ne sont pas chargées (data.js manquant).</p></div>';
    return container;
  }

  checklistData.forEach((chapter, index) => {
    const chapterEl = document.createElement('div');
    chapterEl.className = 'accordion-item';
    if (index === 0) chapterEl.classList.add('open');

    const chapterStats = getChapterStats(chapter, progress);

    chapterEl.innerHTML = `
      <div class="accordion-header">
        <div class="header-content">
          <h3>${chapter.title}</h3>
          <div class="chapter-stats">
            <span class="stat-badge progress">${chapterStats.percentage}%</span>
            ${chapterStats.nc > 0 ? `<span class="stat-badge nc">${chapterStats.nc} NC</span>` : ''}
          </div>
        </div>
        <span class="accordion-icon">▼</span>
      </div>
      <div class="accordion-content">
        <div class="chapter-actions">
          <button class="btn btn-sm btn-outline btn-bulk-compliant" data-chapter="${index}">
            ✨ Tout le reste Conforme
          </button>
        </div>
        <div class="checklist-items"></div>
      </div>
    `;

    chapterEl.querySelector('.accordion-header').addEventListener('click', () => {
      chapterEl.classList.toggle('open');
    });

    chapterEl.querySelector('.btn-bulk-compliant').addEventListener('click', (e) => {
      e.stopPropagation();
      markChapterCompliant(index);
    });

    const itemsContainer = chapterEl.querySelector('.checklist-items');

    chapter.items.forEach(item => {
      const itemEl = document.createElement('div');
      itemEl.className = 'checklist-item';

      const itemData = progress[item.id] || {};
      const currentStatus = itemData.status || null;
      const ncText = itemData.ncText || '';
      const comment = itemData.comment || '';
      const koBadge = item.isKo ? '<span class="badge-ko">KO</span>' : '';

      itemEl.innerHTML = `
        <div class="item-header">
          <div class="item-title-row">
            <span class="item-id">${item.id}</span> ${koBadge}
            <span>${item.text}</span>
          </div>
          <div class="status-group">
            <button class="status-btn ${currentStatus === 'compliant' ? 'active' : ''}" data-id="${item.id}" data-status="compliant" title="Conforme">Conforme</button>
            <button class="status-btn ${currentStatus === 'non-compliant' ? 'active' : ''}" data-id="${item.id}" data-status="non-compliant" title="Non-Conforme">Non-Conforme</button>
            <button class="status-btn ${currentStatus === 'na' ? 'active' : ''}" data-id="${item.id}" data-status="na" title="Non Applicable">N/A</button>
          </div>
          <button class="btn-details" type="button">ℹ️ Détails</button>
        </div>
        
        <div class="nc-container" style="display: ${currentStatus === 'non-compliant' ? 'block' : 'none'};">
          <label class="text-area-label">Description de la Non-Conformité :</label>
          <textarea class="styled-textarea nc-input" data-id="${item.id}" placeholder="Décrivez la non-conformité...">${ncText}</textarea>
        </div>

        <div class="input-group">
          <label class="text-area-label">Notes / Commentaires :</label>
          <textarea class="styled-textarea comment-input" data-id="${item.id}" placeholder="Ajouter une note...">${comment}</textarea>
        </div>
        
        <div class="item-details" style="display: none;">
          ${renderDetailsSection('Questions d\'audit', item.questions)}
          ${renderDetailsSection('Documentation requise', item.documentation)}
          ${renderDetailsSection('Conseils', item.advice)}
        </div>
      `;

      const detailsBtn = itemEl.querySelector('.btn-details');
      const detailsDiv = itemEl.querySelector('.item-details');
      detailsBtn.addEventListener('click', () => {
        const isHidden = detailsDiv.style.display === 'none';
        detailsDiv.style.display = isHidden ? 'block' : 'none';
        detailsBtn.classList.toggle('active', isHidden);
      });

      itemsContainer.appendChild(itemEl);
    });

    container.appendChild(chapterEl);
  });

  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('status-btn')) {
      handleStatusClick(e.target);
    }
  });

  container.addEventListener('input', (e) => {
    if (e.target.classList.contains('nc-input')) {
      handleTextInput(e.target, 'ncText');
    }
    if (e.target.classList.contains('comment-input')) {
      handleTextInput(e.target, 'comment');
    }
  });

  return container;
}

function renderDocuments() {
  const container = document.createElement('div');
  const data = loadData();
  const docStatus = data.documents || {};

  container.innerHTML = `
    <div class="card">
      <h3>Checklist Documentaire & Fichiers</h3>
      <p class="text-muted mb-4">Gérez les documents requis et attachez vos preuves (PDF, Images).</p>
    </div>
  `;

  if (typeof checklistData === 'undefined') return container;

  checklistData.forEach((chapter, index) => {
    // Filter items that have documentation requirements
    const itemsWithDocs = chapter.items.filter(item => item.documentation && item.documentation.length > 0);

    if (itemsWithDocs.length === 0) return;

    const chapterEl = document.createElement('div');
    chapterEl.className = 'accordion-item';
    if (index === 0) chapterEl.classList.add('open');

    chapterEl.innerHTML = `
      <div class="accordion-header">
        <h3>${chapter.title}</h3>
        <span class="accordion-icon">▼</span>
      </div>
      <div class="accordion-content">
        <div class="doc-list"></div>
      </div>
    `;

    chapterEl.querySelector('.accordion-header').addEventListener('click', () => {
      chapterEl.classList.toggle('open');
    });

    const list = chapterEl.querySelector('.doc-list');

    itemsWithDocs.forEach(item => {
      item.documentation.forEach((doc, docIndex) => {
        const docId = `${item.id}_doc_${docIndex}`;
        const isChecked = docStatus[docId] || false;

        const docItem = document.createElement('div');
        docItem.className = 'doc-item';
        docItem.innerHTML = `
          <div class="doc-row">
            <label class="checkbox-label">
              <input type="checkbox" class="doc-checkbox" data-doc-id="${docId}" ${isChecked ? 'checked' : ''}>
              <span class="checkbox-custom"></span>
              <div class="doc-text">
                <span class="doc-name">${doc}</span>
                <span class="doc-ref">Réf: ${item.id}</span>
              </div>
            </label>
            <div class="file-upload-area">
              <input type="file" id="file-${docId}" class="file-input" data-doc-id="${docId}" style="display: none;">
              <label for="file-${docId}" class="btn btn-sm btn-outline">📎 Joindre</label>
              <span class="file-status" id="status-${docId}"></span>
            </div>
          </div>
        `;

        // Check if file exists
        dbHelper.getFile(docId).then(file => {
          if (file) {
            const statusEl = docItem.querySelector(`#status-${docId}`);
            statusEl.innerHTML = `<span class="badge" style="background: var(--success-color); color: white;">${file.name}</span>`;
          }
        });

        list.appendChild(docItem);
      });
    });

    container.appendChild(chapterEl);
  });

  // Event Delegation for Checkboxes
  container.addEventListener('change', async (e) => {
    if (e.target.classList.contains('doc-checkbox')) {
      const docId = e.target.dataset.docId;
      const checked = e.target.checked;

      const currentData = loadData();
      if (!currentData.documents) currentData.documents = {};
      currentData.documents[docId] = checked;
      saveData(currentData);
    }

    if (e.target.classList.contains('file-input')) {
      const file = e.target.files[0];
      const docId = e.target.dataset.docId;
      if (file) {
        const statusEl = document.getElementById(`status-${docId}`);
        statusEl.innerText = '⏳ Upload...';
        try {
          await dbHelper.saveFile(docId, file);
          statusEl.innerHTML = `<span class="badge" style="background: var(--success-color); color: white;">${file.name}</span>`;
        } catch (err) {
          console.error(err);
          statusEl.innerText = '❌ Erreur';
        }
      }
    }
  });

  return container;
}

function renderSettings() {
  const data = loadData();
  const settings = data.settings || {};

  const container = document.createElement('div');
  container.innerHTML = `
    <div class="card">
      <h3>Paramètres de l'Audit</h3>
      <div class="form-group">
        <label class="text-area-label">Nom de l'Entreprise</label>
        <input type="text" class="styled-input settings-input" data-field="company" value="${settings.company || ''}" placeholder="Ex: Ma Société SAS">
      </div>
      <div class="form-group">
        <label class="text-area-label">Nom de l'Auditeur</label>
        <input type="text" class="styled-input settings-input" data-field="auditor" value="${settings.auditor || ''}" placeholder="Ex: Jean Dupont">
      </div>
      <div class="form-group">
        <label class="text-area-label">Date de l'Audit</label>
        <input type="date" class="styled-input settings-input" data-field="date" value="${settings.date || ''}">
      </div>
    </div>

    <div class="card" style="border-color: var(--danger-color);">
      <h3 style="color: var(--danger-color)">Zone de Danger</h3>
      <p class="text-muted mb-4">Attention, ces actions sont irréversibles.</p>
      <div class="grid-2">
        <button id="btn-reset" class="btn btn-outline" style="color: var(--danger-color); border-color: var(--danger-color);">
          ⚠️ Réinitialiser Données
        </button>
        <button id="btn-clear-files" class="btn btn-outline" style="color: var(--danger-color); border-color: var(--danger-color);">
          🗑️ Supprimer Fichiers
        </button>
      </div>
    </div>
  `;

  container.addEventListener('input', (e) => {
    if (e.target.classList.contains('settings-input')) {
      const field = e.target.dataset.field;
      const value = e.target.value;

      const currentData = loadData();
      if (!currentData.settings) currentData.settings = {};
      currentData.settings[field] = value;
      saveData(currentData);
    }
  });

  const btnReset = container.querySelector('#btn-reset');
  btnReset.addEventListener('click', async () => {
    if (confirm('Êtes-vous sûr de vouloir effacer TOUTES les données de l\'audit (y compris les fichiers) ?')) {
      localStorage.removeItem(STORAGE_KEY);
      await dbHelper.clear();
      location.reload();
    }
  });

  const btnClearFiles = container.querySelector('#btn-clear-files');
  btnClearFiles.addEventListener('click', async () => {
    if (confirm('Êtes-vous sûr de vouloir supprimer TOUS les fichiers attachés ?')) {
      await dbHelper.clear();
      alert('Fichiers supprimés.');
      renderDocuments(); // Refresh if possible, or reload
    }
  });

  return container;
}

function handleStatusClick(btn) {
  const id = btn.dataset.id;
  const status = btn.dataset.status;
  const parent = btn.parentElement;

  parent.querySelectorAll('.status-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const itemEl = parent.closest('.checklist-item');
  const ncContainer = itemEl.querySelector('.nc-container');
  if (status === 'non-compliant') {
    ncContainer.style.display = 'block';
  } else {
    ncContainer.style.display = 'none';
  }

  const currentData = loadData();
  if (!currentData.checklist) currentData.checklist = {};
  if (!currentData.checklist[id]) currentData.checklist[id] = {};
  currentData.checklist[id].status = status;
  saveData(currentData);
}

function handleTextInput(textarea, field) {
  const id = textarea.dataset.id;
  const value = textarea.value;

  const currentData = loadData();
  if (!currentData.checklist) currentData.checklist = {};
  if (!currentData.checklist[id]) currentData.checklist[id] = {};
  currentData.checklist[id][field] = value;
  saveData(currentData);
}

function markChapterCompliant(chapterIndex) {
  if (!confirm('Voulez-vous marquer tous les points restants de ce chapitre comme "Conforme" ?')) return;

  const chapter = checklistData[chapterIndex];
  const currentData = loadData();
  if (!currentData.checklist) currentData.checklist = {};

  let updated = false;

  chapter.items.forEach(item => {
    if (!currentData.checklist[item.id] || !currentData.checklist[item.id].status) {
      if (!currentData.checklist[item.id]) currentData.checklist[item.id] = {};
      currentData.checklist[item.id].status = 'compliant';
      updated = true;
    }
  });

  if (updated) {
    saveData(currentData);
    navigate('checklist');
  }
}

function renderDetailsSection(title, items) {
  if (!items || items.length === 0) return '';
  return `
    <div class="detail-section">
      <h4>${title}</h4>
      <ul>
        ${items.map(i => `<li>${i}</li>`).join('')}
      </ul>
    </div>
  `;
}

function renderDashboard() {
  const stats = getStats();
  const container = document.createElement('div');

  container.innerHTML = `
    <div class="grid-3 mb-4">
      <div class="card">
        <h4 class="text-muted mb-4">Conformité Globale</h4>
        <div style="font-size: 3rem; font-weight: 700; color: var(--primary-color)">
          ${stats.percentage}%
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${stats.percentage}%"></div>
        </div>
      </div>
      
      <div class="card">
        <h4 class="text-muted mb-4">Progression Audit</h4>
        <div style="font-size: 3rem; font-weight: 700; color: var(--text-color)">
          ${stats.completed} <span style="font-size: 1rem; color: var(--text-muted)">/ ${stats.totalItems}</span>
        </div>
        <p class="text-sm text-muted">Points audités</p>
      </div>
      
      <div class="card">
        <h4 class="text-muted mb-4">Non-Conformités</h4>
        <div style="font-size: 3rem; font-weight: 700; color: var(--danger-color)">
          ${stats.nonCompliant}
        </div>
        <p class="text-sm text-muted">Points critiques</p>
      </div>
    </div>

    <div class="card">
      <h3>Actions Rapides</h3>
      <div class="grid-2" style="margin-top: 1rem;">
        <button class="btn btn-primary" onclick="navigate('checklist')">
          Continuer l'Audit
        </button>
        <button class="btn btn-outline" onclick="exportAudit()">
          💾 Exporter le Rapport (.brok)
        </button>
      </div>
    </div>
  `;

  return container;
}

// ==========================================
// 4. MAIN APP LOGIC
// ==========================================

const routes = {
  dashboard: { title: 'Tableau de Bord', render: renderDashboard },
  checklist: { title: 'Audit IFS Broker', render: renderChecklist },
  documents: { title: 'Documents', render: renderDocuments },
  settings: { title: 'Paramètres', render: renderSettings }
};

function navigate(page) {
  const route = routes[page] || routes.dashboard;

  document.getElementById('page-title').textContent = route.title;

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });

  const contentArea = document.getElementById('content-area');
  contentArea.innerHTML = '';

  const content = route.render();
  if (typeof content === 'string') {
    contentArea.innerHTML = content;
  } else if (content instanceof HTMLElement) {
    contentArea.appendChild(content);
  }
}

window.navigate = navigate;
window.exportAudit = exportAudit;

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = e.currentTarget.dataset.page;
      navigate(page);
    });
  });

  const btnExport = document.getElementById('btn-export');
  const btnImport = document.getElementById('btn-import');
  const fileInput = document.getElementById('file-input');

  if (btnExport) btnExport.addEventListener('click', exportAudit);

  if (btnImport && fileInput) {
    btnImport.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        importAudit(e.target.files[0]);
      }
    });
  }

  // Mobile Menu Logic
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  const app = document.getElementById('app');

  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  app.appendChild(overlay);

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('visible');
    });
  }

  // Close sidebar when clicking overlay
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('visible');
  });

  // Close sidebar when clicking a nav link (mobile only)
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        sidebar.classList.remove('open');
        overlay.classList.remove('visible');
      }
    });
  });

  navigate('dashboard');
});
