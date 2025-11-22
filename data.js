const checklistData = [
  {
    "id": 1,
    "title": "1. Responsabilité de la Direction",
    "items": [
      {
        "id": "1.1.1",
        "text": "La direction doit élaborer et mettre en œuvre une politique d'entreprise claire",
        "isKo": false,
        "questions": [
          "Comment et où est documentée la politique d'entreprise ?",
          "Quel est le contenu de la politique d'entreprise ?",
          "Quels points de la politique sont les plus importants pour la direction ?",
          "Comment sont-ils communiqués aux employés ?"
        ],
        "documentation": [
          "Politique d'entreprise adoptée",
          "Preuves documentées de la communication de la politique d'entreprise (bulletin, matériel de formation, liste de signatures, présentation, brochure, etc.)"
        ],
        "advice": [
          "Différents types possibles, par exemple texte continu ou principes directeurs séparés",
          "La responsabilité en matière de durabilité est incluse dans l'IFS Broker même s'il s'agit d'une norme de management de la sécurité et de la qualité des produits - pour initier une prise de conscience de l'entreprise",
          "Interrogez les employés sur la politique de l'entreprise",
          "Vérifiez si tous les aspects requis sont inclus dans la politique"
        ]
      },
      {
        "id": "1.1.2",
        "text": "Le contenu de la politique d'entreprise doit être décomposé en objectifs mesurables",
        "isKo": false,
        "questions": [
          "Le contenu de la politique d'entreprise est-il adapté à des objectifs mesurables ?",
          "Quels objectifs de qualité et de sécurité des produits sont actuellement définis ?",
          "Ces objectifs sont-ils clairement formulés et mesurables ?",
          "Quels outils sont utilisés pour mesurer la réalisation des objectifs ?"
        ],
        "documentation": [
          "Objectifs de qualité et de sécurité des produits définis",
          "Enregistrements de formations ou bulletins",
          "Affiches présentant les différents objectifs des départements"
        ],
        "advice": [
          "Les employés peuvent être interrogés pendant l'audit"
        ]
      },
      {
        "id": "1.1.3",
        "text": "Toutes les informations pertinentes liées à la sécurité, à la qualité et à l'authenticité des produits doivent être communiquées",
        "isKo": false,
        "questions": [
          "Comment le courtier communique-t-il en interne les informations sur la sécurité des produits, par exemple si des alertes concernant les produits commercialisés sont connues ?",
          "Y a-t-il eu récemment des situations de ce genre ? Comment le courtier a-t-il procédé ?"
        ],
        "documentation": [
          "Preuves de formation",
          "Descriptions de procédures"
        ],
        "advice": []
      },
      {
        "id": "1.2.1",
        "text": "Un organigramme indiquant clairement la structure de l'entreprise doit être disponible",
        "isKo": false,
        "questions": [
          "Quelles fonctions dans le courtier sont expliquées dans l'organigramme ?",
          "Les compétences, y compris la délégation, sont déterminées sous quelle forme (par ex. descriptions de poste) ?",
          "Des descriptions de poste existent pour quels employés/fonctions ?",
          "Quelles tâches sont réglementées en ce qui concerne la personne ?",
          "Est-ce que des réglementations de délégation existent pour toutes les fonctions importantes ?",
          "Comment est assurée la joignabilité des fonctions importantes, par ex. la direction en situation de crise ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "1.2.2",
        "text": "La direction doit être responsable de la politique et des objectifs d'entreprise",
        "isKo": true,
        "questions": [
          "Comment l'entreprise fait-elle tracer et évaluer les objectifs ?",
          "Comment les ressources nécessaires ont-elles été déterminées ?",
          "Y a-t-il régulièrement des contrôles de succès ?"
        ],
        "documentation": [
          "Revue de direction (y compris l'évaluation de la planification des ressources)",
          "Documents de planification ou planification de projet",
          "Procès-verbaux de réunions, cycle qualité"
        ],
        "advice": []
      },
      {
        "id": "1.2.3",
        "text": "La direction doit s'assurer que les employés sont conscients de leurs responsabilités",
        "isKo": false,
        "questions": [
          "Comment le courtier s'assure-t-il que toutes les tâches liées à la sécurité et à la qualité des produits sont assignées à des employés spécifiques et qu'elles sont correctement remplies par ces employés ?",
          "Comment les employés connaissent-ils leurs responsabilités ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "1.2.4",
        "text": "L'entreprise doit s'assurer que tous les processus sont connus et appliqués",
        "isKo": false,
        "questions": [
          "Comment le courtier s'assure-t-il que tous les processus sont connus du personnel et appliqués de manière cohérente ?",
          "Le courtier effectue-t-il des formations suite aux changements de processus et de documents ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "1.2.5",
        "text": "L'entreprise doit avoir un système pour se tenir informée de la législation et des développements",
        "isKo": false,
        "questions": [
          "Quelles lois ou directives normatives sont particulièrement pertinentes pour le courtier ?",
          "Existe-t-il une liste des directives/spécifications ?",
          "Comment est-elle mise à jour et qui en est responsable ?",
          "Comment le courtier s'assure-t-il que les produits échangés répondent aux exigences légales ?",
          "Qui vérifie la mise en œuvre de ces changements ?",
          "Comment les informations concernant les changements sont-elles transmises aux fournisseurs concernés ?"
        ],
        "documentation": [
          "Abonnement aux lois sur les produits",
          "Formations",
          "Séminaires",
          "Newsletters",
          "Information des associations",
          "Adhésions à des associations"
        ],
        "advice": []
      },
      {
        "id": "1.2.6",
        "text": "L'entreprise doit informer ses clients de tout problème lié aux spécifications produit",
        "isKo": false,
        "questions": [
          "Existe-t-il une règle indiquant à quel moment le client potentiellement affecté par une non-conformité doit être informé ?",
          "Qui informe le client, si nécessaire, et comment ?",
          "Les compétences sont-elles réglementées pour cela ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "1.2.7",
        "text": "La direction doit s'assurer que l'organisme de certification est informé des changements",
        "isKo": false,
        "questions": [
          "Quand a eu lieu le dernier rappel ?",
          "Quand l'organisme de certification a-t-il été informé ?"
        ],
        "documentation": [
          "Enregistrements de rappel",
          "E-mail"
        ],
        "advice": []
      },
      {
        "id": "1.3.1",
        "text": "La direction doit examiner les systèmes de management de la qualité et de la sécurité des produits",
        "isKo": false,
        "questions": [
          "Quels points substantiels sont abordés dans la revue de direction ?",
          "Les sujets relatifs à la culture de la sécurité des produits sont-ils examinés ?",
          "Qui compile les données requises pour la revue de direction ?",
          "Quelles conclusions la direction tire-t-elle de la revue de direction ?",
          "Quels résultats de la revue de direction ont été mis en œuvre ?"
        ],
        "documentation": [
          "Actions d'amélioration",
          "Rapport(s) de revue",
          "Rapports d'audit"
        ],
        "advice": []
      },
      {
        "id": "1.3.2",
        "text": "Cette revue doit inclure l'évaluation des mesures de contrôle et l'amélioration continue",
        "isKo": false,
        "questions": [
          "Quelles mesures le courtier a-t-il définies pour mesurer et évaluer sa propre qualité ?",
          "Qui maintient ces données et à quelle fréquence sont-elles enregistrées ?",
          "Qui suit les mesures issues d'une revue de direction et comment ?",
          "Est-il possible de déduire une évolution (processus d'amélioration continue) à partir des données existantes ?"
        ],
        "documentation": [],
        "advice": []
      }
    ]
  },
  {
    "id": 2,
    "title": "2. Système de Management Qualité et Sécurité",
    "items": [
      {
        "id": "2.1.1",
        "text": "Le système de management doit être documenté et conservé en un seul endroit",
        "isKo": false,
        "questions": [
          "Où est conservée la documentation concernant le système qualité pour l'assurance qualité et la sécurité des produits ?",
          "Comment la gestion de ces documents est-elle organisée ?",
          "Les changements et modifications sont-ils traçables ?",
          "Y a-t-il des responsabilités définies ?",
          "Comment la documentation est-elle structurée ?",
          "Où et sous quelle forme est-elle conservée ?",
          "Comment les employés y accèdent-ils ?"
        ],
        "documentation": [
          "Procédure de contrôle des documents",
          "Système de cloud computing"
        ],
        "advice": []
      },
      {
        "id": "2.1.2",
        "text": "Une procédure documentée doit exister pour le contrôle des documents et de leurs modifications",
        "isKo": false,
        "questions": [
          "Quelles règles existent concernant le contrôle des documents ?",
          "Les documents ont-ils un code d'identification ?",
          "Comment le code d'identification est-il structuré ?",
          "Y a-t-il des règles d'accès ou d'utilisation pour la documentation basée sur l'informatique ?",
          "Comment une révision peut-elle être identifiée ?",
          "Qui est responsable des changements ?",
          "Comment les employés concernés ont-ils accès aux documents ?",
          "Comment les changements de documents sont-ils communiqués aux employés concernés ?",
          "Existe-t-il des listes de distribution pour les documents ?",
          "Comment la validité des documents est-elle identifiée ?",
          "Comment est-il assuré que seuls les documents valides sont en circulation ?"
        ],
        "documentation": [
          "Procédure pour les documents",
          "Liste de distribution",
          "Manuel Qualité (QM)"
        ],
        "advice": []
      },
      {
        "id": "2.1.3",
        "text": "Tous les documents doivent être clairs, lisibles, non ambigus et complets",
        "isKo": false,
        "questions": [
          "Tous les documents sont-ils lisibles ?",
          "Les documents sont-ils non ambigus ?",
          "Les documents sont-ils disponibles aux bons endroits ? Aussi en dehors des heures de bureau ?",
          "Comment l'accès facile des employés à la documentation est-il assuré ?",
          "Les documents sont-ils structurés de manière compréhensible ?",
          "De quelle manière les documents sont-ils fournis aux employés ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "2.1.4",
        "text": "Les documents nécessaires à la conformité des produits doivent être disponibles dans leur dernière version",
        "isKo": false,
        "questions": [
          "Comment le courtier s'assure-t-il que les spécifications sont à jour ?",
          "Comment est-il possible de reconnaître qu'elles sont à jour ?",
          "Comment les employés sont-ils informés des changements ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "2.2.1",
        "text": "Tous les enregistrements pertinents doivent être complets, détaillés et conservés",
        "isKo": false,
        "questions": [
          "Quels enregistrements sont conservés pour les services de courtage ?",
          "Comment l'accès rapide aux enregistrements est-il assuré ?",
          "Les enregistrements électroniques sont-ils pris en compte en plus des enregistrements papier ?",
          "Quels enregistrements existent ?",
          "Les enregistrements sont-ils complets ?",
          "Les enregistrements sont-ils disponibles ?"
        ],
        "documentation": [
          "Différents enregistrements"
        ],
        "advice": []
      },
      {
        "id": "2.2.2",
        "text": "Les enregistrements doivent être lisibles et authentiques",
        "isKo": false,
        "questions": [
          "Comment le courtier s'assure-t-il que les données ne sont pas modifiées ultérieurement ?",
          "Comment la sauvegarde des données est-elle effectuée ?",
          "Existe-t-il un régime d'accès ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "2.2.3",
        "text": "Tous les enregistrements doivent être conservés conformément aux exigences légales et client",
        "isKo": false,
        "questions": [
          "Quels délais de conservation ont été déterminés ? Quelle en est la base ?",
          "Des produits semi-finis sont-ils livrés à des fabricants de produits surgelés ou de conserves ? Pour ceux-ci, la durée de conservation minimale est très longue ; est-ce pris en compte lors de la détermination des délais de conservation ?",
          "Comment le courtier vérifie-t-il si les enregistrements sont complets et conservés pendant une période suffisamment longue ?",
          "Où sont stockés les enregistrements ?",
          "Qui stocke les enregistrements ?",
          "Combien de temps les enregistrements sont-ils conservés ?",
          "Sur quelle base les délais de conservation des enregistrements ont-ils été définis ?",
          "Pour les produits à courte durée de vie, la définition du délai de conservation des enregistrements était-elle basée sur une analyse des risques ?"
        ],
        "documentation": [
          "Descriptions de procédures/documents"
        ],
        "advice": []
      },
      {
        "id": "2.2.4",
        "text": "Les enregistrements doivent être stockés de manière sécurisée et facilement accessibles",
        "isKo": false,
        "questions": [
          "Comment et où les enregistrements sont-ils classés ?",
          "Comment les enregistrements électroniques sont-ils sécurisés ?",
          "Comment un accès facile aux données d'un système de sauvegarde électronique est-il assuré ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "2.3.1",
        "text": "La base du système de contrôle de la sécurité des produits doit être un système de gestion des risques",
        "isKo": true,
        "questions": [
          "Le système de gestion des risques est établi selon quelles normes ?",
          "Tous les risques du processus commercial/services de courtage sont-ils suffisamment pris en compte ?"
        ],
        "documentation": [],
        "advice": [
          "Aucune structure reconnaissable d'une évaluation des risques n'est disponible",
          "L'évaluation des risques existante ne montre aucun lien avec les produits commercialisés",
          "Des risques critiques n'ont pas été pris en compte"
        ]
      },
      {
        "id": "2.3.2",
        "text": "L'entreprise doit s'assurer que le système de contrôle de la sécurité des produits de ses fournisseurs est un système de gestion des risques",
        "isKo": false,
        "questions": [
          "Le courtier a-t-il veillé à ce que le fournisseur dispose d'un système HACCP/gestion des risques en place ?",
          "Comment le courtier a-t-il recueilli les informations des fournisseurs ?",
          "Toutes les exigences légales applicables du pays d'origine/destination sont-elles connues et prises en compte ?"
        ],
        "documentation": [
          "Certificat valide (Standard reconnu par GFSI) du fournisseur",
          "Questionnaire fournisseur"
        ],
        "advice": []
      },
      {
        "id": "2.3.3",
        "text": "Un processus documenté d'évaluation des risques doit couvrir tous les processus",
        "isKo": false,
        "questions": [
          "Pour quelles activités l'organisation est-elle responsable ?",
          "Cela peut-il être retracé dans le processus d'évaluation des risques ?"
        ],
        "documentation": [
          "Évaluation des risques",
          "Descriptions de processus"
        ],
        "advice": []
      },
      {
        "id": "2.3.4",
        "text": "L'entreprise doit avoir une équipe de gestion des risques multidisciplinaire",
        "isKo": false,
        "questions": [
          "Qui est/sont le(s) membre(s) de l'équipe de gestion des risques ?",
          "L'équipe est-elle bien connue dans l'entreprise ? Comment a-t-elle été annoncée ?",
          "Quelles fonctions sont présentes dans l'équipe de gestion des risques ?",
          "Comment la qualification des membres de l'équipe de gestion des risques a-t-elle été vérifiée ?",
          "Quels dangers sont liés au produit ou au processus, ce qui signifie : la connaissance est-elle disponible dans l'équipe ?",
          "Qui a établi le système de gestion des risques ?",
          "Où ces employés ont-ils obtenu leur qualification ? Des preuves sont-elles disponibles ?",
          "Y a-t-il eu un soutien externe ? Sinon, comment les employés ont-ils été qualifiés en interne ?"
        ],
        "documentation": [
          "Preuves de formation",
          "Formation avancée",
          "Descriptions de poste",
          "Matrice d'équipe",
          "Avis au tableau d'affichage",
          "Système HACCP/gestion des risques",
          "Organigramme"
        ],
        "advice": []
      },
      {
        "id": "2.3.5",
        "text": "Des descriptions complètes des services et produits doivent être disponibles",
        "isKo": false,
        "questions": [
          "Une description complète des services est-elle en place ?",
          "Une évaluation des risques existe-t-elle pour tous les processus ?",
          "Quelles étapes sont incluses dans l'évaluation des risques ?",
          "Tous les aspects de la sécurité des produits sont-ils couverts ?",
          "Quelles activités commerciales sont effectuées ? Y a-t-il des conditions de transport spécifiques pour les marchandises qui doivent être respectées ?",
          "Les marchandises sont-elles importées d'un pays tiers ?",
          "Quelles étapes de processus sont listées dans le diagramme de flux ?",
          "Quels dangers ont été identifiés ?",
          "Comment les risques identifiés sont-ils contrôlés ?",
          "Comment l'évaluation des risques est-elle enregistrée ?"
        ],
        "documentation": [
          "Description(s) de service(s), exigences client",
          "Descriptions de processus"
        ],
        "advice": []
      },
      {
        "id": "2.3.6",
        "text": "Une analyse et une évaluation de tous les dangers doivent être entreprises",
        "isKo": false,
        "questions": [
          "Une analyse des dangers existe-t-elle pour chaque étape ?",
          "Tous les dangers sont-ils inclus ?",
          "Quels dangers biologiques, physiques et chimiques peuvent être attendus ?",
          "Comment l'analyse des dangers a-t-elle été réalisée ?",
          "Une analyse pour tous les groupes de produits incluant le danger et la probabilité existe-t-elle ?",
          "Les classes de risque sont-elles définies ? Si oui, lesquelles ?",
          "Ces classes de risque sont-elles examinées par l'analyse des dangers ?"
        ],
        "documentation": [
          "Analyse des dangers"
        ],
        "advice": []
      },
      {
        "id": "2.3.7",
        "text": "La détermination des mesures de contrôle pertinentes doit être démontrée par une approche logique",
        "isKo": false,
        "questions": [
          "Quelles mesures de contrôle sont définies ?",
          "Combien de mesures de contrôle existent ?",
          "Sur les mesures de contrôle définies, le processus peut-il être influencé afin de prévenir, éliminer ou réduire un danger pour la sécurité du produit ?",
          "Quelles mesures de contrôle sont définies ?",
          "Quelles mesures préventives ont été prises concernant les mesures de contrôle ?",
          "Quelles mesures préventives sont documentées ?",
          "Comment les mesures sont-elles documentées ?"
        ],
        "documentation": [
          "Évaluation des risques",
          "Diagramme de flux",
          "Arbre de décision",
          "Matrice des risques",
          "Mesures préventives"
        ],
        "advice": []
      },
      {
        "id": "2.3.8",
        "text": "Des procédures de surveillance doivent être établies sur la base de l'évaluation des risques",
        "isKo": false,
        "questions": [
          "Quelles actions correctives sont définies pour chaque mesure de contrôle ?",
          "Quand une action corrective a-t-elle été réalisée ?",
          "Où les actions correctives sont-elles documentées ?",
          "Qui documente la réalisation des actions correctives ?",
          "Les produits non conformes sont-ils également pris en considération ?",
          "Y a-t-il des actions correctives réalisées et leur efficacité est-elle évaluée ?"
        ],
        "documentation": [
          "Enregistrements des mesures de contrôle",
          "Actions correctives"
        ],
        "advice": []
      }
    ]
  },
  {
    "id": 3,
    "title": "3. Gestion des Ressources",
    "items": [
      {
        "id": "3.1",
        "text": "Le personnel doit avoir les compétences requises",
        "isKo": false,
        "questions": [
          "Quelles qualifications sont particulièrement importantes pour les opérations commerciales ?",
          "Quelle connaissance produit est requise ?",
          "Comment le courtier s'assure-t-il de la qualification requise lors de l'embauche de nouveaux employés ?",
          "Comment les employés ont-ils été qualifiés ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "3.2",
        "text": "L'entreprise doit mettre en œuvre des programmes de formation/instruction documentés",
        "isKo": false,
        "questions": [
          "Comment le courtier planifie-t-il les formations ?",
          "Comment identifie-t-il les besoins de formation ?",
          "Un aperçu des cours de formation est-il disponible, listant toutes les formations internes et externes réalisées ?",
          "Quelles formations ont été menées l'année dernière ?",
          "Existe-t-il des preuves pour les formations réalisées en interne et en externe ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "3.3",
        "text": "Des enregistrements doivent être disponibles pour tous les événements de formation",
        "isKo": false,
        "questions": [
          "Quand la dernière formation a-t-elle eu lieu ?",
          "Toutes les preuves de formation sont-elles complètes ?",
          "Tous les enregistrements contiennent-ils toutes les informations nécessaires ?",
          "Comment l'efficacité de la(des) formation(s) est-elle vérifiée ?"
        ],
        "documentation": [
          "Enregistrements de formation",
          "Enregistrements d'audit interne"
        ],
        "advice": []
      },
      {
        "id": "3.4",
        "text": "Le contenu de la formation doit être revu et mis à jour régulièrement",
        "isKo": false,
        "questions": [
          "Quand la révision du contenu de la formation a-t-elle été effectuée la dernière fois ?",
          "Quand le contenu de la formation a-t-il été mis à jour la dernière fois ?",
          "Y a-t-il eu des changements concernant les évaluations, les procédures ou les exigences client ?"
        ],
        "documentation": [],
        "advice": []
      }
    ]
  },
  {
    "id": 4,
    "title": "4. Planification et Processus de Services",
    "items": [
      {
        "id": "4.1.1",
        "text": "Les exigences définies entre les partenaires contractuels doivent être établies, examinées et convenues",
        "isKo": false,
        "questions": [
          "Quelles réglementations contractuelles existent pour le(s) service(s) de courtage ?",
          "Qui effectue la revue de contrat ? À quelle étape de la transaction commerciale la revue de contrat est-elle effectuée ?",
          "Quels points sont examinés en détail ? Comment la revue effectuée est-elle enregistrée ?",
          "Des critères de qualité ont-ils été déterminés ici ? Si oui, comment ces exigences sont-elles communiquées au sein du courtier ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "4.1.2",
        "text": "Les modifications des accords contractuels existants doivent être documentées et communiquées",
        "isKo": false,
        "questions": [
          "À quelle fréquence les modifications de commande se produisent-elles en pratique ?",
          "Comment sont-elles enregistrées ?",
          "Comment les fournisseurs et les propres employés sont-ils informés des modifications de commande des clients ?",
          "Comment les clients sont-ils informés ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "4.1.3",
        "text": "Les exigences spécifiques de qualité et de sécurité des clients doivent être communiquées",
        "isKo": false,
        "questions": [
          "Y a-t-il des exigences spécifiques des clients ?",
          "Le courtier a-t-il clairement déterminé les responsabilités et les procédures pour examiner les exigences client ?",
          "Si oui, comment sont-elles transmises aux fournisseurs ?",
          "Comment est-il possible de vérifier ultérieurement la transmission aux fournisseurs ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "4.2.1",
        "text": "Des spécifications doivent être disponibles et en place pour tous les produits",
        "isKo": false,
        "questions": [
          "Existe-t-il des règles pour le contrôle des spécifications (préparation, examen, approbation, distribution) ?",
          "Quel contenu minimal a été déterminé pour les spécifications ?",
          "Comment les produits de marque fournisseur sont-ils spécifiés ?",
          "Si des spécifications sont disponibles : qui les examine et s'assure qu'elles sont à jour ?",
          "Les réglementations légales de tous les pays de destination sont-elles prises en compte ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "4.2.2",
        "text": "Les spécifications du client doivent être respectées",
        "isKo": true,
        "questions": [
          "Comment le courtier s'assure-t-il que les exigences client, qui constituent la base de la transaction commerciale, sont transmises intégralement au fournisseur/fabricant ?",
          "Quels sont les paramètres clés dans les spécifications client ?",
          "Comment le courtier vérifie-t-il que les spécifications client sont entièrement respectées (par exemple, analyses en laboratoire, inspections des marchandises effectuées par des prestataires de services au port) ?"
        ],
        "documentation": [],
        "advice": [
          "Pays d'origine incorrect",
          "Composition des portions spécifiées non conforme",
          "Absence de substances indésirables spécifiées par le client manquante dans la spécification du fournisseur"
        ]
      },
      {
        "id": "4.2.3",
        "text": "Si requis par les clients, les spécifications produit doivent être formellement convenues",
        "isKo": false,
        "questions": [
          "Les clients exigent-ils un accord formel sur les spécifications produit ? Si oui, quels produits sont concernés ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "4.2.4",
        "text": "Une procédure doit exister pour la création, la modification et l'approbation des spécifications",
        "isKo": false,
        "questions": [
          "Quelles spécifications sont gérées par le courtier (par exemple, aperçu) ?",
          "Quels types de déterminations existent pour la préparation, l'examen et l'approbation des spécifications ?",
          "Quelles réglementations sont définies pour la transmission des informations des spécifications aux fournisseurs et aux clients ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "4.3.1",
        "text": "Une procédure de développement produit doit être en place",
        "isKo": false,
        "questions": [
          "Le courtier effectue-t-il des activités de développement ? Si oui, quel type de développements ?",
          "Existe-t-il une procédure indiquant le processus de développement ? Si oui, comment la conformité aux exigences légales et client est-elle assurée pour le développement ?",
          "Existe-t-il une planification du développement ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "4.3.2",
        "text": "L'entreprise doit assumer la responsabilité de la formulation, des processus et des paramètres",
        "isKo": false,
        "questions": [
          "Quels enregistrements concernant les essais de production sont conservés par les entreprises contractantes ?",
          "Comment le fournisseur informe-t-il le courtier des résultats des essais ?",
          "Des tests requis pendant un développement sont-ils déterminés sur la base des spécifications ? Comment est-il possible de vérifier le résultat ?",
          "Le laboratoire propre et/ou un laboratoire externe accrédité effectue-t-il l'analyse requise ? Qui sélectionne le laboratoire ?",
          "Le courtier accompagne-t-il les essais de production réalisés dans les entreprises ? Si oui, quels propres enregistrements en plus de ceux du fournisseur sont conservés ici ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "4.3.3",
        "text": "L'entreprise doit s'assurer que des tests de durée de vie sont effectués le cas échéant",
        "isKo": false,
        "questions": [
          "Comment la durée de vie des produits est-elle déterminée ? Y a-t-il des spécifications client pour cela ?",
          "Comment les tests de durée de vie sont-ils effectués ? Quels paramètres sont examinés ?",
          "Comment la durée de vie est-elle déterminée si les tests de durée de vie ne sont pas effectués ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "4.3.4",
        "text": "En relation avec le développement de produits alimentaires, des évaluations organoleptiques doivent être entreprises",
        "isKo": false,
        "questions": [
          "Quelles caractéristiques organoleptiques sont pertinentes pour le produit à développer ?",
          "Quels tests organoleptiques sont effectués ? Qui fait partie de l'équipe de dégustation ?",
          "Les tests organoleptiques sont-ils également effectués par un laboratoire externe ?",
          "Le client est-il impliqué dans les tests organoleptiques ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "4.3.5",
        "text": "Un processus doit être en place pour assurer la conformité de l'étiquetage",
        "isKo": false,
        "questions": [
          "Qui vérifie l'étiquetage/la déclaration du nouveau produit ?",
          "Comment la légalité est-elle assurée ?",
          "Les produits sont livrés dans quels pays ? Comment le courtier assure-t-il la déclaration correcte pour tous les pays de destination ?",
          "Existe-t-il des spécifications client liées à l'étiquetage/la déclaration ?",
          "Quelle est la forme des spécifications pour les vérifications de déclaration déterminée dans la documentation du courtier ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "4.3.6",
        "text": "Des recommandations pour la préparation/utilisation doivent être établies",
        "isKo": false,
        "questions": [
          "Existe-t-il des recommandations pour la préparation et/ou l'utilisation des produits ? Si oui, comment sont-elles coordonnées avec les exigences client ?",
          "Comment l'exactitude des recommandations pour la préparation et/ou l'utilisation des produits est-elle vérifiée ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "4.3.7",
        "text": "Si le développement produit est prédéfini par le client, l'entreprise doit s'assurer que toutes les exigences sont respectées",
        "isKo": false,
        "questions": [
          "Un client a-t-il des exigences spécifiques sur les procédures et/ou les étapes de développement ?",
          "Comment le courtier s'assure-t-il que ces exigences sont respectées ?"
        ],
        "documentation": [
          "Spécification client",
          "Enregistrements de vérification"
        ],
        "advice": []
      },
      {
        "id": "4.3.8",
        "text": "L'avancement et les résultats du développement produit doivent être correctement enregistrés",
        "isKo": false,
        "questions": [
          "Quels enregistrements et résultats le courtier a-t-il identifiés comme pertinents pour la sécurité, la légalité et la qualité du produit ?",
          "Quels enregistrements sont conservés et classés par le courtier concernant le travail de développement effectué ?",
          "Quels enregistrements de développement l'entreprise exécutante conserve-t-elle ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "4.4.1",
        "text": "L'entreprise doit contrôler les processus d'achat",
        "isKo": false,
        "questions": [
          "Les transactions d'achat sont basées sur quels critères ?",
          "Comment les exigences client sont-elles intégrées dans les spécifications d'achat ?",
          "Y a-t-il des spécifications fondamentales du client pour les sites de production des fournisseurs (par exemple, certificats) ? Comment sont-elles prises en compte ?",
          "Quelles spécifications du client existent pour les prestataires de services contractuels ? Le service des achats les transmet-il au fournisseur ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "4.4.2",
        "text": "Une procédure d'approbation et de suivi des fournisseurs et prestataires de services doit exister",
        "isKo": false,
        "questions": [
          "Quels sont les prérequis que les fournisseurs/prestataires de services doivent remplir avant d'être autorisés à livrer ?",
          "Comment le courtier informe-t-il les fournisseurs sur les exigences d'approbation ?",
          "Quelles déterminations pour l'évaluation des fournisseurs ont été faites ?",
          "Quels fournisseurs sont évalués ?",
          "Comment le courtier gère-t-il les fournisseurs bloqués et s'assure-t-il qu'aucune marchandise n'est achetée auprès d'eux ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "4.4.3",
        "text": "La procédure d'approbation et de suivi doit être basée sur l'analyse des dangers et l'évaluation des risques",
        "isKo": false,
        "questions": [
          "Quels critères sont pris en considération pour le processus d'approbation des fournisseurs ?",
          "Le fournisseur est-il certifié selon l'un d'eux ?",
          "Le courtier demande-t-il le renouvellement des certificats fournisseurs sur une base régulière ?",
          "Le courtier effectue-t-il des audits fournisseurs (seconde partie) ? Si oui, comment sont-ils enregistrés ? Y a-t-il un plan d'action issu des audits fournisseurs ? Qui effectue les audits fournisseurs (membres du personnel interne/prestataires de services) ? Comment les auditeurs ont-ils été qualifiés ?",
          "Les audits fournisseurs sont-ils effectués par des tiers contractuels ? Quels critères sont inspectés par le prestataire de services ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "4.4.4",
        "text": "Le fournisseur du produit doit être certifié selon une norme IFS ou une autre norme reconnue par GFSI",
        "isKo": false,
        "questions": [
          "Est-il possible d'appliquer une norme IFS (IFS Food, IFS HPC, IFS PACsecure, IFS Broker) ou le niveau intermédiaire IFS Progress aux produits échangés ?",
          "Est-il possible d'appliquer une norme reconnue par GFSI incluant le bon champ d'application aux produits échangés ?",
          "Quelles spécifications client existent concernant les certifications des fournisseurs ?",
          "Existe-t-il un aperçu transparent des certificats existants des fournisseurs (par exemple, IFS, BRC, GlobalGAP, SQF) ?",
          "En cas de questions concernant l'interprétation des normes et programmes IFS, veuillez contacter standardmanagement@ifs-certification.com"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "4.4.5",
        "text": "L'entreprise doit avoir un système basé sur les risques pour surveiller les zones d'approvisionnement",
        "isKo": false,
        "questions": [
          "Le courtier/client a-t-il spécifié les régions d'origine des produits ?",
          "Le courtier connaît-il l'origine de tous les produits échangés et y a-t-il des preuves pour chaque livraison individuelle ?",
          "Comment l'origine des produits achetés est-elle surveillée ? Un système a-t-il été mis en place pour cela ? Le courtier s'appuie-t-il sur des outils/sources déjà existants ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "4.4.6",
        "text": "Une évaluation des fournisseurs et prestataires de services doit être faite régulièrement",
        "isKo": false,
        "questions": [
          "À quelle fréquence les informations individuelles de l'évaluation fournisseur sont-elles résumées et examinées ?",
          "Quelles conséquences résultent de l'évaluation fournisseur (par exemple, statut) ? Quelles actions résultent d'une évaluation négative ?",
          "Comment le courtier informe-t-il les fournisseurs sur les résultats de l'évaluation ? Les fournisseurs sont-ils bloqués, le cas échéant ? Comment le blocage est-il effectué ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "4.4.7",
        "text": "Les produits achetés doivent être vérifiés conformément aux spécifications et à leur authenticité",
        "isKo": false,
        "questions": [
          "Comment le courtier vérifie-t-il la qualité des produits fournis ?",
          "Existe-t-il des spécifications pour un plan d'échantillonnage ? Le courtier effectue-t-il ses propres tests s'il n'y a pas de spécifications client ?",
          "Est-il possible d'identifier facilement l'authenticité des produits échangés ? Comment le courtier vérifie-t-il l'authenticité et est-ce vérifiable ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "4.4.8",
        "text": "En cas de produits de marque client, un système d'approbation des fournisseurs doit exister",
        "isKo": false,
        "questions": [
          "Des produits de marque client sont-ils fabriqués ? Si oui, quelles réglementations existent pour cela, par exemple, spécifications, questionnaire produit avec caractère de spécification ?",
          "Qui remplit les questionnaires client, par exemple de la vente au détail (courtier ou fabricant) ?",
          "Si le courtier remplit le questionnaire client : comment l'achèvement correct de toutes les sous-questions du questionnaire client est-il assuré ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "4.5.1",
        "text": "L'entreprise doit s'assurer que des spécifications détaillées existent pour tous les matériaux d'emballage",
        "isKo": false,
        "questions": [
          "Des produits sont-ils fabriqués pour le compte du courtier, par exemple des plats préparés, des légumes surgelés ?",
          "Des marchandises sont-elles emballées pour le compte du courtier, par exemple des fruits ou des légumes ?",
          "Des produits pré-emballés sont-ils importés, par exemple du vin, des spiritueux, des aliments emballés pour le consommateur final ?",
          "Des spécifications pour les matériaux d'emballage (primaire et - si applicable - secondaire) des cas mentionnés ci-dessus sont-elles disponibles ?",
          "Quelles dispositions légales pour l'emballage sont utilisées ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "4.5.2",
        "text": "Si le matériau d'emballage pourrait compromettre la sécurité du produit, une déclaration de conformité doit être fournie",
        "isKo": false,
        "questions": [
          "Des produits sont-ils fabriqués pour le compte du courtier, par exemple des plats préparés, de la volaille surgelée ?",
          "Des marchandises sont-elles emballées pour le compte du courtier, par exemple des fruits ou des légumes ?",
          "Des produits pré-emballés sont-ils importés, par exemple du vin, des spiritueux, des aliments emballés pour le consommateur final ?",
          "Des certificats de conformité pour les emballages plastiques et des déclarations d'innocuité pour d'autres matériaux d'emballage pour les cas mentionnés ci-dessus concernant le matériau d'emballage sont-ils disponibles ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "4.5.3",
        "text": "En cas de changement d'emballage, l'entreprise doit s'assurer qu'il est contrôlé par le fournisseur",
        "isKo": false,
        "questions": [
          "Comment le courtier s'assure-t-il que le fournisseur/fabricant utilise le bon emballage ? Des spécifications du courtier sont-elles disponibles ?",
          "Comment le fabricant vérifie-t-il cela ?",
          "Quelles informations le courtier reçoit-il du fabricant ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "4.5.4",
        "text": "En cas de changement d'étiquetage produit, l'entreprise doit s'assurer qu'il est modifié par le fournisseur",
        "isKo": false,
        "questions": [
          "Comment le courtier s'assure-t-il que le fabricant utilise l'étiquetage correct ? Des spécifications du courtier sont-elles disponibles ?",
          "Comment le fabricant vérifie-t-il l'étiquetage correct ?",
          "Comment le fournisseur informe-t-il le courtier sur les résultats des tests et l'exactitude de l'étiquetage ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "4.6.1",
        "text": "Un système de traçabilité doit être en place",
        "isKo": true,
        "questions": [
          "Comment les lots commercialisés sont-ils étiquetés ?",
          "Quels enregistrements pour une traçabilité complète des produits sont préparés et où sont-ils classés ?",
          "Comment l'entreprise informe-t-elle le courtier sur l'étiquetage des lots ou quelles spécifications le courtier donne-t-il pour l'étiquetage des lots ?",
          "Quelles quantités contient un lot ?",
          "Comment le numéro de lot utilisé est-il composé ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "4.6.2",
        "text": "Le système de traçabilité doit être testé régulièrement",
        "isKo": false,
        "questions": [
          "Quand le dernier test pour vérifier la traçabilité a-t-il été effectué ?",
          "L'échantillonnage a été sélectionné selon quels critères ?",
          "Des enregistrements complets pour le test sont-ils disponibles ?",
          "Quel est le pourcentage de la quantité qui a pu être tracée ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "4.6.3",
        "text": "Pour les produits de marque propre et client, la traçabilité doit être assurée jusqu'à la dernière étape de transformation",
        "isKo": false,
        "questions": [
          "Quand le dernier test pour vérifier la traçabilité a-t-il été effectué ?",
          "L'échantillonnage a été sélectionné selon quels critères ?",
          "Des enregistrements complets pour le test sont-ils disponibles ?",
          "Quel est le pourcentage de la quantité qui a pu être tracée ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "4.6.4",
        "text": "Si requis par le client, l'entreprise doit s'assurer que le fournisseur conserve des échantillons représentatifs",
        "isKo": false,
        "questions": [
          "Le client demande-t-il des échantillons de rétention ?",
          "L'échantillonnage représentatif des échantillons de rétention a-t-il été convenu avec le fabricant ? Si oui, où les échantillons de rétention sont-ils conservés ? Dans quelles conditions ?",
          "Comment l'échantillonnage correct des échantillons de rétention est-il surveillé chez le fabricant ?",
          "Le courtier dispose-t-il d'une liste à jour des échantillons de rétention effectivement prélevés ? À quelle fréquence la liste des échantillons de rétention est-elle mise à jour ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "4.7.1",
        "text": "La responsabilité de l'évaluation de la vulnérabilité à la fraude alimentaire et du plan d'atténuation doit être clairement définie",
        "isKo": false,
        "questions": [
          "Comment est-il assuré que la personne responsable possède les connaissances appropriées ?",
          "Comment le soutien de la direction est-il assuré ?"
        ],
        "documentation": [
          "Preuve de formation ou d'expérience professionnelle",
          "Certificats de formations avancées (externes/internes)"
        ],
        "advice": []
      },
      {
        "id": "4.7.2",
        "text": "Une évaluation documentée de la vulnérabilité à la fraude alimentaire doit être entreprise",
        "isKo": false,
        "questions": [
          "Quelle est la méthodologie d'évaluation de la vulnérabilité définie ?",
          "Tous les produits alimentaires et emballages sont-ils soumis à une évaluation de la vulnérabilité ?",
          "Des évaluations de la vulnérabilité sont-elles entreprises sur tous les (nouveaux) produits (y compris l'emballage) et les fournisseurs de ces produits ?",
          "Le courtier a-t-il regroupé des produits spécifiques en groupes ? Si oui, est-ce raisonnablement justifié ?",
          "Des scores de vulnérabilité, un classement ou une notation sont-ils disponibles pour examen ?",
          "Quels facteurs de risque sont définis pour le produit (et l'emballage) et les fournisseurs ?"
        ],
        "documentation": [
          "Procédure d'évaluation de la vulnérabilité",
          "Enregistrements d'évaluation de la vulnérabilité",
          "Liste des produits et emballages et de leurs fournisseurs",
          "Résultats de la revue d'audit interne"
        ],
        "advice": []
      },
      {
        "id": "4.7.3",
        "text": "Un plan documenté d'atténuation de la fraude alimentaire doit être développé",
        "isKo": true,
        "questions": [
          "Quelles sont les mesures de contrôle appliquées pour atténuer le risque d'activité potentielle de fraude alimentaire identifiée dans l'évaluation de la vulnérabilité ?",
          "Comment le plan d'atténuation de la fraude alimentaire est-il défini ?",
          "Les mesures de contrôle sont-elles régulièrement examinées quant à leur adéquation et leur efficacité ?",
          "Qui surveille, et le cas échéant prend des mesures, les problèmes identifiés par les mesures de contrôle ?",
          "Les mesures de contrôle sont-elles appliquées de manière appropriée et cohérente conformément aux risques identifiés ?"
        ],
        "documentation": [
          "Procédures du plan d'atténuation de la fraude alimentaire",
          "Liste des réclamations",
          "Résultats de l'audit interne",
          "Enregistrements des mesures de contrôle du plan d'atténuation de la fraude alimentaire et examen (et actions)"
        ],
        "advice": []
      },
      {
        "id": "4.7.4",
        "text": "L'évaluation de la vulnérabilité à la fraude alimentaire doit être régulièrement examinée",
        "isKo": false,
        "questions": [
          "À quelle fréquence une évaluation de la vulnérabilité est-elle entreprise ?",
          "Les exigences de contrôle et de surveillance sont-elles modifiées, et si oui, pourquoi ?",
          "Quels sont les critères définis, lorsque l'évaluation de la vulnérabilité à la fraude alimentaire doit être examinée en plus de l'examen annuel, c'est-à-dire lorsque des changements de risque pourraient survenir ?",
          "L'efficacité du plan d'atténuation de la fraude alimentaire est-elle examinée ? Si oui, comment cela est-il entrepris ?"
        ],
        "documentation": [
          "Plan d'atténuation de la fraude alimentaire (procédure)",
          "Procédure d'évaluation de la vulnérabilité et enregistrements d'évaluation",
          "Enregistrements des mesures de contrôle du plan d'atténuation de la fraude alimentaire et examen (et actions)",
          "Liste des réclamations",
          "Résultats de l'audit interne"
        ],
        "advice": []
      },
      {
        "id": "4.7.5",
        "text": "L'entreprise doit s'assurer que les fournisseurs ont effectué une évaluation de la vulnérabilité à la fraude",
        "isKo": false,
        "questions": [
          "L'évaluation de la vulnérabilité du fournisseur couvre-t-elle les produits achetés ?",
          "Tous les fournisseurs ont-ils un plan d'atténuation en place ?",
          "Le plan d'atténuation des fournisseurs couvre-t-il les produits achetés ?",
          "Tous les fournisseurs ont-ils une évaluation en place ?"
        ],
        "documentation": [
          "Questionnaire fournisseur",
          "Vérification croisée avec la documentation d'évaluation VA du courtier",
          "Réclamations produit possibles",
          "Résultats des audits fournisseurs (si applicable)"
        ],
        "advice": []
      },
      {
        "id": "4.8.1",
        "text": "Lorsque l'entreprise sous-traite un prestataire de transport/stockage, les exigences doivent être définies",
        "isKo": false,
        "questions": [
          "Y a-t-il des prestataires de services logistiques ? Quelles certifications ont-ils ?",
          "Si les prestataires de services logistiques ne sont pas certifiés selon IFS Logistics ou toute autre norme équivalente reconnue par GFSI, quelles exigences ont été fixées dans un contrat de service ?",
          "Quelles spécifications de transport du client existent ?",
          "Y a-t-il une sous-traitance occasionnelle à des sous-traitants ?",
          "Si oui, comment les critères de qualité pour le transport de leurs clients sont-ils pris en compte ?",
          "Comment le courtier surveille-t-il la conformité aux spécifications de transport (par exemple, enregistreur de température) ? Est-il possible pour le courtier d'inspecter, de recevoir et d'examiner les enregistrements concernant les prestataires de services de stockage ou de transport ?",
          "Quelles spécifications existent pour les prestataires de services de stockage contractuels ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "4.8.2",
        "text": "Si l'entreprise a son propre stockage/transport, ces processus doivent être certifiés IFS Logistics",
        "isKo": false,
        "questions": [
          "Les produits échangés passent-ils par un stockage propre ou sont-ils transportés par des véhicules de transport propres ?",
          "Quelles autres certifications existent si une certification combinée avec IFS Logistics n'est pas effectuée ?"
        ],
        "documentation": [],
        "advice": []
      }
    ]
  },
  {
    "id": 5,
    "title": "5. Mesures, Analyses, Améliorations",
    "items": [
      {
        "id": "5.1.1",
        "text": "Des audits internes efficaces doivent être menés selon un programme d'audit défini",
        "isKo": true,
        "questions": [
          "Comment le programme d'audit est-il organisé ? Y a-t-il un plan d'audit ?",
          "Comment le courtier s'assure-t-il que toutes les exigences de la norme IFS sont auditées ?"
        ],
        "documentation": [
          "Programme d'audit",
          "Analyse des dangers et évaluation des risques associés"
        ],
        "advice": []
      },
      {
        "id": "5.1.2",
        "text": "Les audits internes des activités critiques doivent être effectués au moins une fois par an",
        "isKo": false,
        "questions": [
          "Quels domaines sont audités annuellement ?",
          "Y a-t-il des domaines selon l'évaluation des risques qui ne sont pas audités annuellement ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "5.1.3",
        "text": "Les auditeurs doivent être compétents et indépendants du département audité",
        "isKo": false,
        "questions": [
          "Qui effectue les audits internes ?",
          "Comment les auditeurs internes ont-ils obtenu leur qualification ?",
          "Comment l'indépendance des auditeurs est-elle assurée ?",
          "Lors de l'utilisation d'auditeurs externes : Quelles sont les qualifications des auditeurs externes ?"
        ],
        "documentation": [
          "Preuve(s) de qualification"
        ],
        "advice": []
      },
      {
        "id": "5.1.4",
        "text": "Les résultats d'audit doivent être communiqués à la direction et aux personnes concernées",
        "isKo": false,
        "questions": [
          "Comment le courtier gère-t-il les non-conformités des audits internes, par exemple les rapports d'écart, les listes de tâches ?",
          "Comment les résultats des audits internes sont-ils communiqués aux employés ?",
          "Comment la direction est-elle informée des résultats de l'audit interne ?"
        ],
        "documentation": [
          "Rapport(s) d'audit interne",
          "Plan(s) d'action corrective"
        ],
        "advice": []
      },
      {
        "id": "5.2.1",
        "text": "Des procédures d'analyse/test produit doivent garantir la conformité aux exigences",
        "isKo": false,
        "questions": [
          "Comment le courtier vérifie-t-il la conformité aux exigences produit ?",
          "Quelles analyses sont requises (microbiologiques, physiques, chimiques) ?",
          "Quels paramètres sont examinés ?",
          "Quelles exigences client existent concernant les examens requis ?"
        ],
        "documentation": [],
        "advice": [
          "Le courtier commercialise des biens individuels, spécifiquement sélectionnés ou développés pour lui-même ou pour un client (comme les produits de marque propre du courtier ou de marque client) ou importe des produits, par exemple fruits surgelés, viande, fruits et légumes frais, plats préparés fabriqués pour le compte du courtier.",
          "Le courtier commercialise des articles standard tels que des produits de marque fournisseur, déjà étiquetés par le fabricant et que le client pourrait également acheter ailleurs, par exemple des produits standardisés qui peuvent être vendus dans les magasins de détail, des matières premières standardisées ou des additifs de grandes entreprises."
        ]
      },
      {
        "id": "5.2.2",
        "text": "Lorsque des analyses spéciales sont demandées par le client, elles doivent être définies dans un plan d'analyses",
        "isKo": true,
        "questions": [
          "Les produits sont livrés à quels clients ?",
          "Le client a-t-il des exigences pour les programmes d'analyse ?",
          "Existe-t-il des accords contractuels pour les programmes d'analyse ?",
          "Comment la comparaison des quantités est-elle effectuée si des analyses doivent être effectuées selon des quantités déterminées fournies ?",
          "Le plan d'inspection comprend-il toutes les analyses spécifiques et autres analyses requises ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "5.2.3",
        "text": "Les analyses pertinentes pour la sécurité produit doivent être effectuées par des laboratoires accrédités (ISO 17025)",
        "isKo": false,
        "questions": [
          "Quels laboratoires sont mandatés ? Sont-ils accrédités ?",
          "Le courtier effectue-t-il ses propres analyses ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "5.2.4",
        "text": "Un programme d'échantillonnage produit basé sur l'analyse des dangers doit être mis en œuvre",
        "isKo": false,
        "questions": [
          "L'analyse des dangers reflète-t-elle les différents types de produits ?",
          "Quels dangers produit sont identifiés pour les produits échangés ?",
          "Quels tests sont déterminés dans le plan de test ?",
          "Les paramètres déterminés sont-ils adaptés pour vérifier et valider la conformité des produits échangés ?",
          "Le plan de test inclut-il tous les paramètres et produits requis ?",
          "Des enregistrements des résultats de test sont-ils disponibles ?"
        ],
        "documentation": [],
        "advice": [
          "Le courtier commercialise de la volaille surgelée sous sa propre marque ou celle du client : le plan de test peut, par exemple, considérer la microbiologie, l'alimentation, l'identité, les pratiques d'élevage spécifiques, si annoncées ; les températures, le transport.",
          "Le courtier commercialise des produits finis surgelés étiquetés pour le consommateur final (produits de marque fournisseur) : le plan de test prend en compte : les températures de stockage et/ou de transport."
        ]
      },
      {
        "id": "5.2.5",
        "text": "Les résultats d'analyse doivent être évalués rapidement",
        "isKo": false,
        "questions": [
          "Comment les résultats des analyses sont-ils évalués ?",
          "Est-il possible d'identifier les tendances en utilisant les analyses ?",
          "Quelles actions seront prises en conséquence ?",
          "Des actions correctives sont-elles initiées, si approprié ?"
        ],
        "documentation": [
          "Rapports d'analyses",
          "Analyse des tendances",
          "Correspondance avec le(s) client(s) en cas de résultats insatisfaisants",
          "Plan d'action corrective"
        ],
        "advice": []
      },
      {
        "id": "5.2.6",
        "text": "Sur la base d'informations sur les risques produit, l'entreprise doit mettre à jour son plan de contrôle",
        "isKo": false,
        "questions": [
          "Quelles sources d'information sur les risques produit sont utilisées régulièrement ?",
          "Quels mécanismes sont stockés pour adapter les plans de test ?",
          "Des produits sont-ils commercialisés où l'adultération est facilement possible (par exemple, bœuf transformé) ?",
          "Si oui, comment l'adultération/fraude est-elle prévenue ?"
        ],
        "documentation": [
          "Plan de contrôle"
        ],
        "advice": []
      },
      {
        "id": "5.3.1",
        "text": "Dans le cadre de la gestion des incidents, s'assurer que le fournisseur dispose de systèmes pour identifier et contrôler les produits non conformes",
        "isKo": false,
        "questions": [
          "Comment le courtier s'assure-t-il que le fournisseur dispose d'une procédure fonctionnelle de quarantaine et de libération ?",
          "Quelles procédures de quarantaine sont maintenues pour bloquer rapidement les marchandises ?",
          "Le courtier a-t-il déjà effectué des mises en quarantaine, quelle en était la raison ?",
          "Comment la communication le long de la chaîne d'approvisionnement est-elle assurée pour effectuer les mises en quarantaine ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "5.3.2",
        "text": "Si les produits sont soumis à une procédure de blocage et libération, une procédure doit être définie",
        "isKo": false,
        "questions": [
          "Le courtier a-t-il de telles procédures ? Si oui, pour quel type de produits ?",
          "Quelles exigences produit sont définies pour la procédure spécifique ?",
          "Comment le courtier assure-t-il la conformité ?"
        ],
        "documentation": [
          "Documentation d'évaluation des risques",
          "Description de procédure/diagramme de flux",
          "Rapports d'analyse/certificats"
        ],
        "advice": []
      },
      {
        "id": "5.4.1",
        "text": "Un système doit être en place pour la gestion des réclamations produit",
        "isKo": false,
        "questions": [
          "Comment le courtier gère-t-il les réclamations ?",
          "Une réaction rapide à chaque réclamation est-elle assurée ?",
          "Quelles réclamations sont survenues récemment ?",
          "Comment une procédure uniforme de traitement des réclamations est-elle assurée ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "5.4.2",
        "text": "Toutes les réclamations doivent être évaluées par du personnel compétent",
        "isKo": false,
        "questions": [
          "Qui traite les réclamations ?",
          "Comment le courtier s'assure-t-il que les réclamations importantes ou celles pertinentes pour la sécurité sont rapidement transmises à la direction ?",
          "Combien de temps faut-il pour donner un retour au client ?",
          "Comment le courtier informe-t-il le client ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "5.4.3",
        "text": "Les réclamations doivent être analysées en vue d'actions préventives",
        "isKo": false,
        "questions": [
          "Comment les réclamations sont-elles évaluées ?",
          "Y a-t-il une ventilation adéquate en différentes raisons de réclamation ?",
          "Le courtier enquête-t-il sur les causes des réclamations ?",
          "Y a-t-il des exemples d'actions correctives résultant des réclamations ?",
          "Ces actions correctives étaient-elles efficaces, c'est-à-dire ces réclamations ne se sont-elles pas reproduites ?",
          "Qui est responsable du processus ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "5.4.4",
        "text": "Les résultats de l'analyse des données de réclamation doivent être connus des personnes concernées",
        "isKo": false,
        "questions": [
          "Comment la direction et les personnes concernées sont-elles informées de l'évaluation des réclamations et des causes des réclamations ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "5.5.1",
        "text": "Une procédure documentée doit être définie pour la gestion des incidents et des situations d'urgence",
        "isKo": false,
        "questions": [
          "Quelles étapes sont incluses dans la procédure de gestion des incidents déterminée par écrit ?",
          "Des crises/incidents se sont-ils déjà produits récemment et comment le courtier les a-t-il surmontés ?",
          "Le courtier a-t-il nommé une équipe de crise ? Comment et quand a-t-elle été formée ?",
          "Comment le courtier informe-t-il les clients sur les crises ?",
          "Quelles institutions ont été nommées pour soutenir dans les situations de crise ou doivent être informées ?"
        ],
        "documentation": [
          "Description de procédure/diagramme de flux",
          "Liste téléphonique"
        ],
        "advice": []
      },
      {
        "id": "5.5.2",
        "text": "Une procédure efficace pour le retrait et le rappel de tous les produits doit être en place",
        "isKo": true,
        "questions": [
          "Comment le courtier assure-t-il l'efficacité de la procédure de retrait et de rappel de tous les produits à tout moment ?",
          "Comment le courtier a-t-il assuré la responsabilité de la prise de décision en cas de délégation pendant les vacances ou la maladie ?",
          "Comment et quand le courtier informe-t-il les clients ?",
          "Qui est autorisé à informer les autorités/médias ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "5.5.3",
        "text": "Les coordonnées d'urgence doivent être disponibles et à jour",
        "isKo": false,
        "questions": [
          "Comment le courtier s'assure-t-il que des numéros de téléphone d'urgence spécifiques des clients et fournisseurs sont disponibles ?",
          "Comment le courtier s'assure-t-il que les numéros de téléphone d'urgence pour les situations de crise (par exemple, noms et numéros de téléphone des fournisseurs, clients, laboratoires et autorités compétentes) sont à jour ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "5.5.4",
        "text": "La faisabilité, l'efficacité et la rapidité de la procédure de retrait doivent être testées régulièrement",
        "isKo": false,
        "questions": [
          "Comment et quand le courtier a-t-il testé la procédure de retrait récemment ?",
          "Comment le courtier a-t-il procédé ?",
          "Comment le courtier s'assure-t-il que le test est représentatif des produits échangés et des activités commerciales ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "5.6.1",
        "text": "Une procédure doit exister pour la gestion de tous les produits non conformes",
        "isKo": false,
        "questions": [
          "Comment le courtier assure-t-il l'efficacité de la procédure de traitement des produits non conformes à tout moment ?",
          "Comment accède-t-on aux marchandises ?",
          "Comment le courtier s'assure-t-il que les marchandises non conformes sont correctement bloquées (par exemple, par le prestataire de services de stockage) ?",
          "Comment sont-elles étiquetées ? Y a-t-il des exigences pour cela ?",
          "Quels canaux de prise de décision ont été déterminés ?",
          "Quelles preuves existent pour les blocages et les produits non conformes ?"
        ],
        "documentation": [
          "Description de procédure ou diagramme de flux",
          "Étiquette"
        ],
        "advice": []
      },
      {
        "id": "5.6.2",
        "text": "La procédure de gestion des produits non conformes doit inclure au minimum certains éléments",
        "isKo": false,
        "questions": [
          "Comment le courtier assure-t-il l'efficacité de la procédure de traitement des produits non conformes à tout moment ?",
          "Comment accède-t-on aux marchandises ?",
          "Comment le courtier s'assure-t-il que les marchandises non conformes sont correctement bloquées en temps voulu (par exemple, par le fabricant ou le prestataire de services logistiques) ?",
          "Comment sont-elles étiquetées et y a-t-il des spécifications pour cela ?"
        ],
        "documentation": [
          "Analyse des dangers et évaluation des risques associés",
          "Description(s) de procédure(s)/diagramme(s) de flux",
          "Enregistrements de communication"
        ],
        "advice": []
      },
      {
        "id": "5.6.3",
        "text": "Les règles de la procédure doivent être comprises par tous les employés concernés",
        "isKo": false,
        "questions": [
          "Comment le courtier s'assure-t-il que chaque employé applique correctement la procédure ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "5.6.4",
        "text": "En cas de non-conformités, des corrections immédiates doivent être effectuées",
        "isKo": false,
        "questions": [
          "Comment le courtier initie-t-il les corrections nécessaires pour les non-conformités survenant au niveau du fournisseur/fabricant/prestataire de services ?",
          "Comment le courtier assure-t-il la chaîne d'information dans des circonstances difficiles, par exemple les jours fériés, les week-ends ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "5.6.5",
        "text": "Les produits finis hors spécifications ne doivent pas être mis sur le marché sans approbation",
        "isKo": false,
        "questions": [
          "Comment le courtier procède-t-il lorsqu'il est établi ultérieurement que les produits de marque client déjà emballés ne sont plus conformes aux spécifications ?",
          "Comment le courtier s'assure-t-il que le fournisseur/fabricant des marchandises n'utilise plus d'anciens matériaux d'emballage, à condition qu'ils soient encore en leur possession ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "5.7.1",
        "text": "Une procédure doit être en place pour l'enregistrement et l'analyse des non-conformités",
        "isKo": false,
        "questions": [
          "Comment fonctionne la procédure pour les actions correctives ?",
          "Quand et comment les actions correctives sont-elles déterminées ?",
          "La procédure est-elle pratique ?",
          "Quand et où les non-conformités sont-elles documentées ?",
          "Comment les données documentées sont-elles évaluées ?",
          "Les non-conformités vont-elles être utilisées pour déterminer des actions correctives ou préventives ?",
          "Pour quels cas une analyse des causes profondes a-t-elle été menée ?"
        ],
        "documentation": [
          "Descriptions de procédures",
          "Aperçu des non-conformités",
          "Évaluations sur l'état des actions correctives et préventives",
          "Document sur les actions correctives et préventives",
          "Rapports d'audit",
          "Plans d'action d'audit",
          "Analyse des causes profondes"
        ],
        "advice": []
      },
      {
        "id": "5.7.2",
        "text": "Les actions correctives doivent être clairement formulées, documentées et entreprises",
        "isKo": true,
        "questions": [
          "Quelles actions correctives ont été mises en œuvre depuis l'audit précédent ? Ont-elles été enregistrées ?",
          "Le courtier étudie-t-il les causes des non-conformités survenues ?",
          "Des actions correctives sont-elles prises pour déterminer les non-conformités en temps opportun ?"
        ],
        "documentation": [
          "Descriptions de procédures",
          "Documentation des actions correctives",
          "Aperçu des non-conformités",
          "Évaluations",
          "Procès-verbaux",
          "Échantillons d'action corrective",
          "Procès-verbaux/enregistrements d'évaluation"
        ],
        "advice": []
      },
      {
        "id": "5.7.3",
        "text": "La performance des actions correctives mises en œuvre doit être documentée et leur efficacité doit être vérifiée",
        "isKo": false,
        "questions": [
          "Quand et comment l'efficacité d'une action corrective est-elle vérifiée ?",
          "Les actions correctives mises en œuvre sont-elles efficaces ?",
          "Comment les actions correctives non efficaces sont-elles traitées ?"
        ],
        "documentation": [
          "Descriptions de procédures",
          "Actions correctives documentées",
          "Évaluation du statut des actions correctives",
          "Échantillons d'action corrective",
          "Examens de vérification (audits internes, etc.)"
        ],
        "advice": []
      }
    ]
  },
  {
    "id": 6,
    "title": "6. Évaluation de la défense des produits",
    "items": [
      {
        "id": "6.1",
        "text": "La société doit s'assurer que les responsabilités des fournisseurs en matière de défense des produits sont clairement définies",
        "isKo": false,
        "questions": [
          "Y a-t-il une personne chez le courtier qui est responsable du sujet de la défense des produits, qui est formée pour gérer professionnellement les exigences de défense des produits pour les courtiers ?",
          "Quelles informations sur la défense des produits provenant de leurs fournisseurs sont disponibles chez les courtiers ?",
          "Chaque fournisseur connaît-il les personnes responsables de la défense des produits ?"
        ],
        "documentation": [],
        "advice": []
      },
      {
        "id": "6.2",
        "text": "La société doit s'assurer que les fournisseurs et prestataires logistiques ont effectué une analyse des dangers",
        "isKo": false,
        "questions": [
          "Comment le courtier s'assure-t-il que les fournisseurs ont préparé une analyse des dangers pour la défense des produits ?",
          "Quels risques ont été pris en compte ici ?",
          "Les fournisseurs ont-ils identifié des zones critiques pour la sécurité ? Ces zones sont-elles adéquatement protégées ?",
          "Existe-t-il des exigences légales relatives à la défense des produits chez les fournisseurs ?"
        ],
        "documentation": [],
        "advice": []
      }
    ]
  }
];
