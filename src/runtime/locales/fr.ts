/* eslint-disable max-len */
export default {
  title: 'INNOCV Smart Doc AI',
  description: '',
  header: {},
  footer: {
    copyright: '© INNOCV Smart Doc AI. Tous droits réservés.'
  },
  name: 'Nom',
  addName: 'Ajouter le nom du nouveau type de document',
  prompt: 'Prompt',
  addPrompt: 'Ajouter la demande pour le nouveau type de document',
  processPageByPage: 'Processus de page par page',
  processSinglePage: 'Traitement des pages en une seule page',
  samples: 'Exemples',
  sample: 'Exemple',
  optionalSamples: 'Optionnel. Ajouter un fichier d\'exemple',
  upload: 'Télécharger des documents',
  loading: 'Chargement',
  login: 'Connexion',
  logout: 'Déconnexion',
  user: 'Nom d\'utilisateur',
  pass: 'Mot de passe',
  processQueue: 'Traitement de la file d\'attente',
  docType: 'Type de document',
  newType: 'Nouveau type de document',
  noSelected: 'Aucun type de document sélectionné',
  addDocType: 'Créer un nouveau type de document',
  editDocType: 'Modifier le type de document',
  confirmDelete: 'Veuillez confirmer la suppression du type de document.',
  deleteDescription: 'AVERTISSEMENT : Cette action est irréversible, vous perdrez tout l\'historique du document.',
  uploadAndProcess: 'Télécharger et traiter le fichier(s)',
  emptyChat: 'Il n\'y a pas encore de documents traités. Téléchargez un fichier pour commencer le processus.',
  selectDoc: 'Sélectionnez un type de document',
  docNoSelected: 'Aucun type de document sélectionné. Veuillez d\'abord sélectionner un type de document.',
  expResponse: 'Réponse attendue',
  addResponse: 'Ajoutez la réponse souhaitée pour chaque document',
  deleteResponse: 'Supprimer la réponse',
  confirmDeleteResult: 'Veuillez confirmer la suppression du mensaje.',
  editResponse: 'Modifier la réponse de l\'IA',
  addSample: 'Ajouter exemple',
  addNewSample: 'Ajouter un nouvel exemple',
  errorProcessing: 'Erreur de traitement du fichier',
  datetime: 'Date et heure',
  engine: 'Moteur',
  tokens: 'Tokens',
  responseIn: 'Réponse en',
  system: 'Système',
  enterAValidVideoURL: 'Ajouter une URL de vidéo valide',
  showOptions: 'Montrer les options',
  showVideo: 'Montrer vidéo',
  videoURL: 'URL de la vidéo',
  videoOpacity: 'Opacité de la vidéo',
  flashlight: 'Lampe de poche',
  unauthorized: 'Non autorisé',
  volume: 'Volume',
  volumeFX: 'Volume des effets',
  volumeVideo: 'Volume de la vidéo',
  aiIsProcessingTheFile: 'est en train de traiter le fichier',
  extension: 'Extension',
  status: 'Statut',
  btn: {
    go: 'ALLER',
    accept: 'Accepter',
    submit: 'Soumettre',
    send: 'Envoyer',
    upload: 'Télécharger',
    edit: 'Modifier',
    duplicate: 'Dupliquer',
    copy: 'Copier',
    delete: 'Supprimer',
    deleted: 'Supprimé',
    cancel: 'Annuler',
    add: 'Ajouter',
    rmv: 'Retirer',
    back: 'Retour',
    next: 'Suivant',
    prev: 'Précédent',
    search: 'Rechercher',
    clear: 'Effacer',
    save: 'Enregistrer'
  },
  toast: {
    login: {
      success: {
        title: 'Connexion réussie',
        desc: 'Vous vous êtes connecté avec succès'
      },
      error: {
        title: 'Erreur de connexion',
        desc: 'Une erreur s\'est produite lors de la connexion'
      }
    },
    logout: {
      success: {
        title: 'Déconnexion réussie',
        desc: 'Vous vous êtes déconnecté avec succès'
      },
      error: {
        title: 'Erreur de déconnexion',
        desc: 'Une erreur s\'est produite lors de la déconnexion'
      }
    },
    addType: {
      success: {
        title: 'Type de document ajouté avec succès',
        desc: 'Le type de document a été ajouté avec succès'
      },
      error: {
        title: 'Erreur d\'ajout de type de document',
        desc: 'Une erreur s\'est produite lors de l\'ajout du type de document'
      }
    },
    editType: {
      success: {
        title: 'Type de document modifié avec succès',
        desc: 'Le type de document a été modifié avec succès'
      },
      error: {
        title: 'Erreur de modification de type de document',
        desc: 'Une erreur s\'est produite lors de la modification du type de document'
      }
    },
    duplicateType: {
      success: {
        title: 'Type de document dupliqué',
        desc: 'Le type de document a été dupliqué avec succès'
      },
      error: {
        title: 'Erreur de duplication de type de document',
        desc: 'Une erreur s\'est produite lors de la duplication du type de document'
      }
    },
    deleteType: {
      success: {
        title: 'Type de document supprimé avec succès',
        desc: 'Le type de document a été supprimé avec succès'
      },
      error: {
        title: 'Erreur de suppression de type de document',
        desc: 'Une erreur s\'est produite lors de la suppression du type de document'
      }
    },
    downloadFile: {
      success: {
        title: 'Fichier téléchargé avec succès',
        desc: 'Le fichier a été téléchargé avec succès'
      },
      error: {
        title: 'Erreur de téléchargement de fichier',
        desc: 'Une erreur s\'est produite lors du téléchargement du fichier'
      }
    },
    uploadFile: {
      success: {
        title: 'Fichier téléchargé avec succès',
        desc: 'Le fichier a été téléchargé avec succès et l\'IA est en train de le traiter'
      },
      error: {
        title: 'Erreur de téléchargement de fichier',
        desc: 'Une erreur s\'est produite lors du téléchargement du fichier'
      },
      missing: {
        title: 'Fichier manquant',
        desc: 'Aucun fichier sélectionné pour le téléchargement'
      },
      errorProcessing: {
        title: 'Erreur de traitement de fichier',
        desc: 'Une erreur s\'est produite lors du traitement du fichier téléchargé'
      }
    },
    deleteResult: {
      success: {
        title: 'Mensaje supprimé',
        desc: 'Le mensaje a été supprimé avec succès'
      },
      error: {
        title: 'Erreur de suppression de mensaje',
        desc: 'Une erreur s\'est produite lors de la suppression du mensaje'
      }
    },
    editResult: {
      success: {
        title: 'Mensaje modifié',
        desc: 'Le mensaje a été modifié avec succès'
      },
      error: {
        title: 'Erreur de modification de mensaje',
        desc: 'Une erreur s\'est produite lors de la modification du mensaje'
      }
    },
    simple: {
      copy: {
        success: {
          title: 'Copié dans le presse-papiers',
          desc: 'Texte copié dans le presse-papiers avec succès'
        },
        error: {
          title: 'Erreur de copie',
          desc: 'Une erreur s\'est produite lors de la copie du texte dans le presse-papiers'
        }
      }
    }
  },
  error: {
    back: 'Retour à l\'accueil',
    video: 'Votre navigateur ne supporte pas la balise vidéo.',
    loadingImage: 'Échec du chargement de l\'image',
    404: {
      title: 'Page non trouvée',
      desc: 'La page que vous cherchez n\'existe pas.'
    }
  }
};
