# Maalem
Application web d'aide scolaire

## Installation version de Dev sur windows

[Installer chocolatey](https://chocolatey.org/install)

*Installation de git
```bash
choco install git
```

[Installer Docker Desktop](https://www.docker.com/products/docker-desktop)

* Clone les fichiers depuis github avec git
```
git clone https://github.com/alexisprovost/Maalem.git
```
* Changer le répertoire vers le projet
```bash
cd Maalem
```
* Démarer le stack pour la première fois
```bash
(Windows) => firstrun.bat
```
ou
```
(Linux) => firstrun.sh
```
* Démarer le stack par la suite avec docker-compose
```bash
docker-compose up -d
```

Fermer tout les containers dans le stack sauf mongodb

Rajouter un fichier .env dans le dossier api
```
PORT=9000
DB_URI=mongodb://app:8F1fFToPC39K@localhost:27017/api
GOOGLE_CLIENT_ID='Google Secret ID'
GOOGLE_CLIENT_SECRET='Google Secret'
GOOGLE_CLIENT_CALLBACK='http://localhost:9000/auth/google/callback'
```

Créer un utilisateur dans MongoDB à l'aide d'un logiciel comme Robot 3t

DB: api

utilisateur: app

mot de passe: 8F1fFToPC39K

### Dans le fichier DB_URI modifier localhost à mongodb (le nom du conteneur) si l'api est démaré dans docker.

### Démarer l'app React et l'API

```
cd app
npm start
```

```
cd api
npm start
```

## Installation version de Prod sur windows

| Attention: ouvrir powershell ou cmd en tant qu'administrateur lors de l'installation! |
| --- |

[Installer chocolatey](https://chocolatey.org/install)

*Installation de git
```bash
choco install git
```

* Installation de docker avec chocolatey
```bash
choco install docker-cli
choco install docker-compose
choco install docker-desktop
```

[Installer Docker Desktop](https://www.docker.com/products/docker-desktop)

* Clone les fichiers depuis github avec git
```
git clone https://github.com/alexisprovost/Maalem.git
```
* Changer le répertoire vers le projet
```bash
cd Maalem
```
* Démarer le stack pour la première fois
```bash
(Windows) => firstrun.bat
```
ou
```
(Linux) => firstrun.sh
```
* Démarer le stack par la suite avec docker-compose
```bash
docker-compose up -d
```
### Sur l'instance de développement, il faut fermer les conteneurs NGINX et CERTBOT

## Push sur github
```
git add *
```
* `*` fichiers modifiés
ou
* 'nom fichier'

Commit + Message
```
git commit -m "Message sur les modifications"
```

Push sur github
```
git push origin main
```