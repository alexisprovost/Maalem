# Maalem
Application web d'aide scolaire

## Installation version de développement sur windows

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
