define({
	"ERR_LOADING" : "Le chargement a échoué :(",

	"SIDEPANEL_TITLE" : "eqFTP",
	"SIDEPANEL_OPENCONNMANGR" : "Ouvrir le gestionnaire de connexion",
	"SIDEPANEL_FILETREE_NAME" : "Nom",
	"SIDEPANEL_FILETREE_SIZE" : "Taille",
	"SIDEPANEL_FILETREE_TYPE" : "Type",
	"SIDEPANEL_FILETREE_MODIFIED" : "Modifié",
	"SIDEPANEL_CONDISCONNECT" : "(Dé)connecter",
	"SIDEPANEL_REFRESH" : "Rafraîchir",
	"SIDEPANEL_RELOADSETTINGS" : "Recharger les paramètres et re-rentrer son mot de passe",

	"ERR_DIAG_SERVNOEXIST_TITLE" : "Le serveur n'existe pas",
	"ERR_DIAG_SERVNOEXIST_CONTENT" : "Il semblerait que ce serveur n'existe pas.<br>Vérifiez les serveurs renseignés dans le gestionnaire de connexion.",
	"ERR_DIAG_SERVCANTREACH_TITLE" : "Impossible d'atteindre le serveur",
	"ERR_DIAG_SERVCANTREACH_CONTENT" : "Je ne peux pas joindre le serveur<br>Peut-être que votre pare-feu m'en empêche.",
	"ERR_DIAG_AUTHORIZEERR_TITLE" : "Accès impossible",
	"ERR_DIAG_AUTHORIZEERR_CONTENT" : "Je ne peux pas vous autoriser l'accès avec le nom d'utilisateur et le mot de passe que vous m'avez fourni.<br>Merci de les vérifier.",
	"ERR_DIAG_NOSERVERFOUND_TITLE" : "Impossible de trouver la connexion",
	"ERR_DIAG_NOSERVERFOUND_CONTENT" : "Il n'y a aucune connexion eqFTP liée à ce projet et aucun serveur connecté.<br>Connectez-vous à un serveur ou précisez le chemin du projet en cours comme chemin local comme connexion dans les paramètres.",
	"ERR_DIAG_ECONNRESET_TITLE" : "Le serveur refuse la connexion",
	"ERR_DIAG_ECONNRESET_CONTENT" : "Je ne peux pas me connecter au serveur, il ne me laisse pas faire.<br>Essayez de redémarrer Brackets.",
    "ERR_DIAG_ECONNABORTED_TITLE" : "Vous avez étés déconnecté du serveur", //NEW
	"ERR_DIAG_ECONNABORTED_CONTENT" : "Connection interrompue. Essayez de vous reconnecter...", //NEW
	"ERR_DIAG_UNIVERSAL_TITLE" : "Il y a une erreur",
	"ERR_DIAG_UNIVERSAL_CONTENT" : "Regardez-moi cette erreur ! Comment ça a pu arriver ?",
    "ERR_DIAG_NORSAKEYFOUND" : "Il n'y a pas de Clé RSA trouvée dans: ", //NEW A path to RSA file will be appended after colon.

    "NOT_DIAG_CONNECTED" : "Connecté au serveur.", //NEW
    "NOT_DIAG_DISCONNECTED" : "Déconnecté du serveur.", //NEW
    "NOT_DIAG_FILESDIFFERENT" : "Il y a une différence entre les fichiers locaux et distants. Cliquez ici pour plus d'options.", //NEW
    
	"PASSWDWIND_TITLE" : "Merci de renseigner votre mot de passe",
	"PASSWDWIND_CONTENT" : "Votre mot de passe pour eqFTP:",

    "CHECKDIFF_TITLE" : "Il y a des différences entre les fichiers.", //NEW
    "CHECKDIFF_CONTENT" : "Les copies distante et locale du fichier sont différentes. Veuillez choisir l'opération que vous voulez effectuer.", //NEW
    "CHECKDIFF_BUTTON_COMPARE" : "Comparer les fichiers", //NEW
    "CHECKDIFF_BUTTON_SHOWCHANGES" : "Montrer les modifications", //NEW
    "CHECKDIFF_BUTTON_KEEPLOCAL" : "Garder la version locale", //NEW
    "CHECKDIFF_BUTTON_KEEPLOCALALL" : "Garder les copies locales pour la file d'attente actuelle.", //NEW
    "CHECKDIFF_BUTTON_GETREMOTE" : "Télécharger les Distantes", //NEW
    "CHECKDIFF_BUTTON_GETREMOTEALL" : "Télécharger les copies distantes pour la file d'attente actuelle.", //NEW

	"SETTINGSWIND_TITLE" : "Gestionnaire de connexion eqFTP",
	"SETTINGSWIND_ERR_BLANKS" : "Oh ! On dirait que quelque chose ne va pas. Vérifiez les champs et ré-essayez.",
	"SETTINGSWIND_ERR_CANTWRITE" : "Quelque chose ne va vraiment pas ! Je ne peux pas sauvegarder les paramètres !",
	"SETTINGSWIND_ERR_LOCALPATHREPEAT" : "Le chemin que vous essayez de renseigner est déjà utilisé par une autre connexion.",
	"SETTINGSWIND_NOTIF_DONE" : "Tout est sauvegardé ! :)",
	"SETTINGSWIND_SAVEDCONN" : "Connexions FTP sauvegardée",
	"SETTINGSWIND_DELETECONN_HOVER" : "Supprimer Cette Connexion",
    "SETTINGSWIND_COPYCONN_HOVER" : "Copier Cette Connexion", //NEW
    "SETTINGSWIND_ERROR_DELETE_CURCONNSERV" : "Vous ne pouvez pas effacer la connexion que vous êtes en train d'utiliser !", //NEW
	"SETTINGSWIND_ADDCONN_HOVER" : "Ajouter une nouvelle connexion",
	"SETTINGSWIND_ADDCONN_STRING" : "Créer une nouvelle connexion ...",
	"SETTINGSWIND_DELETECONNCONF_1" : "Veuillez confirmer la suppression de ",
	"SETTINGSWIND_DELETECONNCONF_2" : " connexion(s).",
	"SETTINGSWIND_OPENGLOBSET" : "Ouvrir les paramètres FTP généraux...",
	"SETTINGSWIND_NOTHINGYETMSG" : "Choisissez la connexion à modifier dans la barre latérale ou créez en une nouvelle.",
	"SETTINGSWIND_GLOB_FOLDERFORPROJ" : "Dossier pour vos projets :",
	"SETTINGSWIND_GLOB_FOLDERFORPROJ_DIAGTITLE" : "Chemin pour les projets téléchargés :",
	"SETTINGSWIND_GLOB_FOLDERFORSET" : "Dossier pour vos paramètres:",
	"SETTINGSWIND_GLOB_FOLDERFORSET_DIAGTITLE" : "Chemin pour sauvegarder vos paramètres",
	"SETTINGSWIND_GLOB_DONTOPENPROJECTS" : "Ne pas ouvrir le projet après le téléchargement",
	"SETTINGSWIND_GLOB_MASTERPASSWORD" : "Mot de passe principal", //NEW
	"SETTINGSWIND_GLOB_CONNECTIONNAME_TITLE" : "Nom de la connexion :",
	"SETTINGSWIND_GLOB_CONNECTIONNAME_FIELD" : "Renseignez le nom de votre connexion",
	"SETTINGSWIND_GLOB_SERVER_TITLE" : "Serveur :",
	"SETTINGSWIND_GLOB_PROTOCOL_TITLE" : "Protocole :",
	"SETTINGSWIND_GLOB_USERNAME_TITLE" : "Nom d'utilisateur :",
	"SETTINGSWIND_GLOB_USERNAME_FIELD" : "Nom d'utilisateur FTP",
	"SETTINGSWIND_GLOB_PASSWORD_TITLE" : "Mot de passe:",
	"SETTINGSWIND_GLOB_PASSWORD_FIELD" : "Mot de passe FTP",
    "SETTINGSWIND_GLOB_RSA_TITLE" : "Clé RSA", //NEW
    "SETTINGSWIND_GLOB_RSA_FIELD" : "Cliquez pour sélectionner la clé RSA", //NEW
    "SETTINGSWIND_GLOB_FOLDERFORRSA_DIAGTITLE" : "Choisissez le chemin pour la clé RSA", //NEW
	"SETTINGSWIND_GLOB_REMOTEPATH_TITLE" : "Chemin d'accès distant :",
	"SETTINGSWIND_GLOB_REMOTEPATH_FIELD" : "Renseignez le chemin d'accès distant à votre projet",
	"SETTINGSWIND_GLOB_LOCALPATH_TITLE" : "Chemin d'accès local :",
	"SETTINGSWIND_GLOB_LOCALPATH_FIELD" : "Créé un dossier dans chemin par défaut si non renseigné",
	"SETTINGSWIND_GLOB_UPLOADONSAVE" : "Charger les fichiers à la sauvegarde",
    "SETTINGSWIND_GLOB_UPLOADONSAVEPAUSED" : "Ajouter à la file d'attente en pause.", //NEW
	"SETTINGSWIND_GLOB_EVENDISCONN" : "Même si deconnecté",
	"SETTINGSWIND_GLOB_EVENDISCONN_EXPLAIN" : "Cette option vous permet de vous connecter automatiquement au serveur quand le fichier sauvegardé est ouvert depuis le serveur ou que le fichier appartient au projet ouvert et que celui-ci a été créé par cette extension FTP. Oh, j'espère sincèrement que j'ai réussi à me faire comprendre ...",
	"SETTINGSWIND_GLOB_LOCALPATH_FILLWPROJECT_TITLE" : "Renseignez le chemin du projet actuel",
    "SETTINGSWIND_GLOB_FRM_TITLE" : "Choose folder retrieving method:", //NEW
    "SETTINGSWIND_GLOB_FRM_LIST" : "Utilisez la commande LIST", //NEW
    "SETTINGSWIND_GLOB_FRM_MLSD" : "Utilisez la commande MLSD", //NEW
	"SETTINGSWIND_GLOB_KEEPALIVE" : "Intervalle de connexion persistante:",
	"SETTINGSWIND_GLOB_KEEPALIVE_DESC" : "En secondes. Recommandé à 10s. Utilisez 0 pour désactiver la connexion persistante et se déconnecter à chaque fin de commande.",
	"SETTINGSWIND_GLOB_DEBUG" : "Debug :",
	"SETTINGSWIND_GLOB_TIMEFORMAT" : "Format de date :",
	"SETTINGSWIND_GLOB_TIMEFORMAT_US" : "US",
	"SETTINGSWIND_GLOB_TIMEFORMAT_EU" : "Européen",
	"SETTINGSWIND_GLOB_TIMEFORMAT_ASIAN" : "Asiatique", //NEW
	"SETTINGSWIND_GLOB_AUTOCLEAR" : "Effacement automatique de la file d'attente", //NEW
    "SETTINGSWIND_GLOB_NOTIFICATIONS" : "Notifications", //NEW
    "SETTINGSWIND_GLOB_TIMEOFFSET" : "Décalage de temps :", //NEW
    "SETTINGSWIND_GLOB_TIMEOFFSET_DESC" : "Utilisez cette option pour définir le temps correcte pour une colonne modfiée correct", //NEW
    "SETTINGSWIND_GLOB_CONNECTIONTAB" : "Connection", //NEW
    "SETTINGSWIND_GLOB_AUTOMATIZATIONTAB" : "Automatisation", //NEW
    "SETTINGSWIND_GLOB_ADVANCEDTAB" : "Avancé", //NEW
    "SETTINGSWIND_GLOB_AUTO_SET_TITLE" : "Définir l'automatisation:", //NEW
    "SETTINGSWIND_GLOB_AUTO_SYNC" : "Synchro", //NEW
    "SETTINGSWIND_GLOB_AUTO_CLASSIC" : "Classique", //NEW
    "SETTINGSWIND_GLOB_AUTO_SYNC_SELECT_TITLE" : "Sélectionner les éléments à sychroniser", //NEW
    "SETTINGSWIND_GLOB_AUTO_SYNC_FILECREATION" : "Création de fichier", //NEW
    "SETTINGSWIND_GLOB_AUTO_SYNC_FOLDERCREATION" : "Création de dossier", //NEW
    "SETTINGSWIND_GLOB_AUTO_SYNC_FILEUPLOAD" : "Fichier mis à jour", //NEW
    "SETTINGSWIND_GLOB_AUTO_SYNC_RENAMING" : "Renommage", //NEW
    "SETTINGSWIND_GLOB_AUTO_SYNC_MOVING" : "Déplacement", //NEW
    "SETTINGSWIND_GLOB_AUTO_SYNC_DELETING" : "Effacement", //NEW
    "SETTINGSWIND_GLOB_AUTO_SYNC_EXTRASETTINGS_TITLE" : "Paramètres supplémentaires", //NEW
    "SETTINGSWIND_GLOB_AUTO_SYNC_CHECKDIFF" : "Vérifier les Différences", //NEW
    "SETTINGSWIND_GLOB_AUTO_SYNC_CHECKDIFF_EXPLAIN" : "Quand vous ouvrez un fchier local ou distant", //NEW
    "SETTINGSWIND_GLOB_AUTO_SYNC_IGNORELIST_TITLE" : "Ignorer la liste", //NEW
    "SETTINGSWIND_GLOB_AUTO_SYNC_IGNORELIST_EXPLAIN" : "Même syntaxe que dans .gitignore", //NEW
    "SETTINGSWIND_GLOB_SYNCLOCPROJWCONN" : "Open related Local project after switching connection and vice versa", //NEW
    "SETTINGS_NOTIF_RELOADED" : "Paramètres quand recharché avec succès.", //NEW
    "SETTINGS_ERROR_RELOADED" : "Impossible de recharger les Paramètres.", //NEW
    "SETTINGSWIND_GLOB_SCE_TITLE" : "Utiliser les Commandes SSH avec le SFTP", //NEW

    "QUEUE_TITLE" : "File d'attente eqFTP",
    "QUEUE_HEADER_NAME" : "Nom",
    "QUEUE_HEADER_PATH" : "Répertoire",
    "QUEUE_HEADER_FROM" : "Chemin source",
    "QUEUE_HEADER_TO" : "Chemin de destination",
    "QUEUE_HEADER_STATUS" : "Statut",
    "QUEUE_CLEARQ" : "Vider la file d'attente",
    "QUEUE_STARTQ" : "Démarer la File d'attente", //NEW
    "QUEUE_PAUSEQ" : "Suspendre la File d'attente", //NEW
    "QUEUE_RESTARTQ" : "Echec du Redémarrage", //NEW
    "QUEUE_CONTEXTM_STARTT" : "Démarrer", //NEW
    "QUEUE_CONTEXTM_PAUSET" : "Pause", //NEW
    "QUEUE_CONTEXTM_REMOVET" : "Enlever", //NEW
    "QUEUE_CONTEXTM_RESTARTT" : "ReDémarrer", //NEW
    "QUEUE_TASK_STATUS_WAITING" : "En Attente", //NEW
    "QUEUE_TASK_STATUS_SUCCESS" : "Fait", //NEW
    "QUEUE_TASK_STATUS_FAIL" : "Echec", //NEW
    "QUEUE_TASK_STATUS_PAUSE" : "Suspendu", //NEW
    "QUEUE_TASK_STATUS_STARTED" : "Démarré", //NEW
    "QUEUE_TASK_STATUS_DELETED" : "Effacé", //NEW
    "QUEUE_DONT_ADD_COMPLETED" : "Effacement Automatique des Tâches finies", //NEW
    
    "ERR_FILE_ACCESSDENIED" : "Accès impossible. Vérifiez les droits.",
    "ERR_FILE_AUTHORIZATION" : "Erreur d'autorisation. Vérifiez votre nom d'utilisateur et votre mot de passe.",
    "ERR_FILE_SERVNOEXIST" : "Le serveur n'existe pas. Peut-être l'avez-vous mal écrit.",
    "ERR_FILE_SERVCANTREACH" : "Impossible de joindre le serveur. Vérifiez votre pare-feu.",
    "ERR_FILE_FILESIZE0" : "Impossible de télécharger le fichier. La Taille du Fichier est 0.", //NEW
    "ERR_FILE_DOWNLOAD" : "Impossible de télécharger le fichier.", //NEW
    "ERR_FILE_UPLOAD" : "Impossible d'envoyer le fichier.", //NEW
    "ERR_FILE_DOESNTEXIST" : "Le Fichier n'existe pas", //NEW
    "ERR_FILE_CANTRENAME" : "Impossible de renommer le Fichier: ", //NEW
    "ERR_FILE_CANTDELETE" : "Impossible d'effacer le Fichier: ", //NEW
    "ERR_FILE_CANTCREATEDIR" : "Impossible de créer le Dossier: ", //NEW
    "ERR_FILE_CANTDELETEDIR" : "Impossible d'effacer le Dossier: ", //NEW
    "ERR_FILE_CANTCREATEFILE" : "Impossible de créer le Fichier: ", //NEW
    "ERR_FOLDER_OPEN" : "Erreur d'ouverture du Dossier en temps que Projet", //NEW

	"CONTEXTM_DOWNLOAD" : "Télécharger",
	"CONTEXTM_UPLOAD" : "Charger",
	"CONTEXTM_ADDQUEUE" : "Ajouter à la liste d'attente",
	"CONTEXTM_OPEN" : "Ouvrir",
	"CONTEXTM_DELETE" : "Supprimer",
	"CONTEXTM_RENAME" : "Renommer",
	"CONTEXTM_REDOWNLOAD" : "Télécharger à partir du Serveur", //NEW
    "CONTEXTM_CREATEFILE" : "Créer un Fichier", //NEW
    "CONTEXTM_CREATEFOLDER" : "Créer un Dossier", //NEW

	"OTHER_SELECT_SERVER_DROPDOWN" : "Sélectionnez le serveur distant à ouvrir ...",
	"OTHER_ERROR" : "Erreur",
	"OTHER_PAUSED" : "En pause",
	"OTHER_COMPLETED" : "Terminé",
	"OTHER_CANCELLED" : "Annulé",
	"OTHER_WAITING" : "En attente",
    "OTHER_YES" : "Oui", //NEW
    "OTHER_NO" : "Non", //NEW
	"OTHER_OK" : "Ok",
    "OTHER_OFF" : "Arrêt", //NEW
	"OTHER_CANCEL" : "Annuler",
	"OTHER_APPLY" : "Appliquer",
    "OTHER_SAVE" : "Sauvegarder", //NEW
	"OTHER_CLOSE" : "Fermer",
	"OTHER_DELETE" : "Supprimer",
	"OTHER_CONFIRM_DELETE" : "Etes vous sure de vouloir effacer cet élément?", //NEW
    "OTHER_CONFIRM_SETTINGSCLOSE" : "Il y a des changements non sauvegardés qui seront perdus si vous cliquez OK.<br> Voulez vous continuer? ", //NEW
	"OTHER_ERROR_EVENDISCONN" : "Impossible d'envoyer le Fichier. l'option 'Même si Déconnecté' est désactivée.", //NEW
    "OTHER_ERROR_CANTREADSETTINGS" : "Impossible de lire le fichier des Paramètres. Vous avez probablement mal tapé votre mot de passe principal." //NEW
});
