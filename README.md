# AppAideDevoir
Application web d'aide scolaire

## Installation version de développement sur windows

| Attention: ouvrir powershell ou cmd en tant qu'administrateur lors de l'installation! |
| --- |

[Installer chocolatey](https://chocolatey.org/install)

[Installer git](https://chocolatey.org/packages/git)

* Installation de docker-cli avec chocolatey
```bash
choco install docker-cli
```
* Installation de docker-compose avec chocolatey
```bash
choco install docker-compose
```
* Clone les fichiers depuis github avec git
```
git clone https://github.com/alexisprovost/AppAideEtudiants.git
```
* Changer le répertoire vers le projet
```bash
cd AppAideEtudiants
```
* Démarer le dock avec docker compose
```bash
docker-compose up
```

## Dev App

```
cd C:/app/AppAideEtudiants
git pull
```

### Démarer l'app React
```
npm start
```

## Push sur github

```
git add *
```
* `*` modifiés
* 'nom fichier'

Message + commit
```
git commit -m "Message des modifications"
```

Envoie
```
git push origin main
```
