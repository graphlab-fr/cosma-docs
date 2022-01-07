---
title: Manuel des développeurs de Cosma
date: 2021-11-19
flag: fr
layout: doc
---

Cette documentation est destinée aux développeurs souhaitant participer ou reprendre le projet (code source) Cosma. Nous vous recommandons vivement de lire la documentation des utilisateurs pour bien saisir l'ensemble des usages en jeu dans le code source présenté ci-dessous.

Cosma repose sur l'environnement de développement NodeJS et les **technologies du Web** (HTML, CSS). Il est intégralement développé en JavaScript (ES2019). Une bonne connaissance de ces langages est requise.

# Code source

Les principales fonctionnalités de Cosma sont programmées dans le [dépôt Cosma-core](https://github.com/graphlab-fr/cosma-core).

- La lecture et le traitement d'un répertoire de fichier Mardown ;
- La génération de données d'un graphe (nœuds et liens) format JSON ;
- L'intégration des données (JSON), styles (CSS) et scripts (JavaScript) dans un *template* de fichier HTML ;

Ces fonctionnalités peuvent être utilisées via deux interfaces, stockées dans deux autres dépôts où est intégré (via [Git modules](https://git-scm.com/book/fr/v2/Utilitaires-Git-Sous-modules)) le Cosma-core.

- Interface graphique (GUI), basée sur le *framework* [Electron,](https://www.electronjs.org/) stockée dans le dépôt [Cosma](https://github.com/graphlab-fr/cosma)
- Interface en ligne de commande (CLI) stockée dans le dépôt [Cosma-cli](https://github.com/graphlab-fr/cosma-cli)

# Terminologie

Les fichiers Markdown interprétés par Cosma sont qualifiés ici de « fiches » plutôt que de « notes », en référence à la tradition de la fiche érudite et à l'histoire de la documentation. L'acception documentaire de « fiche » n'a pas de traduction directe en anglais (sinon *index card*). En revanche, elle est conceptuellement proche du mot « *record* » issu du [*records management*](https://fr.wikipedia.org/wiki/Records_management). Le code de Cosma emploie donc le mot record pour désigner une fiche.

# Traduction

Pour ajouter une entrée de traduction au logiciel, il faut ajouter son code (norme [ISO 639-1](https://fr.wikipedia.org/wiki/Liste_des_codes_ISO_639-1)) à la variable `validLangages` de la classe Config (`/cosma-core/models/config`) tel que ci-dessous.

```js
static validLangages = {
	...
	es: "Español"
};
```
Vous pouvez ensuite compléter le fichier `/cosma-core/lang.yml` en ajoutant ce drapeau comme dernier enfant d'une arboresence tel que ci-dessous :

```yaml
dialog:
  btn:
    cancel:
      fr: Annuler
      en: Cancel
      es: Cancelar
```

Vous pouvez appeler l'objet traduit via le module `/cosma-core/models/lang.js` tel que ci-dessous. Selon le langue configurée par l'utilisateur, c'est l'entrée correspondante qui sera appelée.

```js
const lang = require('./cosma-core/models/lang');

lang.getFor(lang.i.dialog.btn.cancel)
```

Vous pouvez également insérer des chaînes à compléter tel que ci-dessous. 

```yaml
dialog:
  btn:
    file_filter:
      fr: Fichiers $1 envoyé vers $2
      en: $1 file send to $2
      es: Archivo $1 enviado a $2
```

Pour chaque `$n`, vous pouvez insérer depuis un tableau une valeur de remplacement.

```js
const lang = require('../cosma-core/models/lang');

lang.getWith(
    lang.i.dialog.btn.file_filter,
    [
        fileExtension.toUpperCase(), // $1
        fileTarget // $2
    ]
)
```

