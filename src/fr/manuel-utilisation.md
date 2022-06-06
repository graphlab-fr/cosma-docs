---
title: Cosma — Manuel d’utilisation
date: Last Modified
description: >-
  Manuel d’utilisation de Cosma. Explique comment installer
  et utiliser les deux versions du logiciel (GUI, CLI).
flag: fr
layout: doc
tags: user
---

## Présentation

Cosma est un logiciel de visualisation de graphe documentaire. Il permet de représenter des notes interreliées sous la forme d’un réseau interactif dans une interface web. Le logiciel est conçu pour fonctionner avec des fichiers texte en Markdown et s’adapte aussi bien à une petite collection (centaine de documents) qu’à une vaste documentation (jusqu'à plusieurs milliers de documents).

Cosma est développé dans le cadre du programme de recherche ANR [HyperOtlet](https://hyperotlet.hypotheses.org/).

### Spécificités de Cosma

Dans le vaste champ des outils qui servent à penser (*tools for thought*), Cosma se démarque par trois originalités :

D'abord, Cosma n'est pas lui-même un logiciel de prise de notes. Il est pensé pour fonctionner en complémentarité avec ces logiciels. Nous nous sommes inspirés ici du fonctionnement de logiciels comme [Deckset](https://www.deckset.com), qui applique ce principe aux présentations.

Ensuite, Cosma repose sur des normes d'écriture interopérables, ouvertes et standardisées. Ceci accroît la pérennité des données, facilite l'utilisation combinée avec des outils qui partagent ces normes (comme [Zettlr](https://www.zettlr.com)), tout en laissant la possibilité de changer d'outil à tout moment.

Enfin, Cosma permet de partager simultanément les données et les outils pour les explorer. La plupart des outils de visualisation concentrent leurs fonctionnalités dans une application à interface graphique, à partir de laquelle il est possible d'exporter des données structurées ou des images statiques. Cosma inverse cette logique : l'application installée, surnommée cosmographe, est un simple outil de création et d'affichage qui accueille un fichier HTML surnommé cosmoscope ; c'est ce dernier qui constitue la véritable interface de visualisation, avec un graphe interactif, des outils de navigation interne (index, moteur de recherche, filtres) et le texte intégral des fiches. Or il s'agit d'un fichier autonome, qui inclut aussi les données sources au format JSON et peut être utilisé hors connexion. Ainsi dans Cosma, l'export est aussi puissant que l'application : en partageant un cosmoscope vous ne transmettez pas seulement des données mais des capacités heuristiques.

### Un degré élevé de contrôle utilisateur

Cosma est conçu pour laisser un degré élevé de contrôle à ses utilisateurs.

Premièrement, le logiciel fonctionne avec un répertoire de fichiers au format texte qu'il se contente de lire : utiliser ou désinstaller le logiciel n'altérera pas vos fichiers et vous permet donc de mettre en œuvre les pratiques de stockage, de versionnement et d'édition de votre choix. De cette manière, si le logiciel s'envole les données restent.

Deuxièmement, de nombreux éléments d'interface sont personnalisables : algorithme de dessin de réseau, couleurs des nœuds, tracé des liens, raccourcis vers des vues particulières, etc. Vous pouvez ajouter un fichier de style CSS pour personnaliser l'interface.

Troisièmement, des enrichissements documentaires (métadonnées) et sémantiques (qualification des liens) sont possibles et se font par des mécanismes génériques : l'utilisateur est libre d'appliquer les typologies et ontologies de son choix.

Quatrièmement, Cosma est un logiciel modulaire, interopérable et portable mais surtout, c'est un logiciel libre : le code est public, son développement est documenté, il est accessible et réutilisable gratuitement sous licence GNU GPL 3.0. Le travail peut ainsi être évalué, archivé et continué par d'autres.

### Un logiciel expérimental

Enfin, Cosma est un logiciel expérimental, développé dans le cadre d'une démarche de recherche-conception.

L'idée de Cosma est née dans le cadre d'une recherche doctorale conduite par Arthur Perret sous la direction d'Olivier Le Deuff. Ce logiciel reste donc un travail expérimental, son utilisation est soumise à caution et aucune garantie de suivi ou de maintenance ne peut être donnée à ce jour.

Néanmoins, des efforts importants ont été entrepris dès le prototype pour concevoir soigneusement les différents aspects de l'outil, qu'il s'agisse de la visualisation de données ou de l'interaction humain-machine, notamment grâce à la participation de chercheurs spécialistes de ces domaines. Et Cosma est au cœur d'une dynamique de recherche que nous espérons inscrire dans la durée.

Cosma peut être cité dans une bibliographie de la manière suivante :

> Arthur Perret, Guillaume Brioudes, Clément Borel, & Olivier Le Deuff. (2021). Cosma. Zenodo. <https://doi.org/10.5281/zenodo.5920615>

## Installation et mise à jour

Cosma est disponible en deux versions : une application à interface graphique (*graphical user interface*, GUI) et une application exécutable en ligne de commande (*command line interface*, CLI). Les informations concernant la version CLI sont détaillées [dans une section dédiée](#cosma-cli).

La version GUI de Cosma est disponible pour macOS et Windows. La version CLI est disponible pour macOS, Windows et Linux. Visitez [la page Télécharger du site pour obtenir la dernière version du logiciel](https://cosma.graphlab.fr/telecharger/). L'application n'est pas signée avec un certificat de sécurité, vous devez disposer des privilèges administrateurs sur votre session pour pouvoir l'exécuter.

Sur macOS
: Téléchargez puis décompressez le fichier `Cosma.app.zip` et placez le le fichier `Cosma.app` dans `~/Applications`. Au premier lancement, faites clic droit › Ouvrir sur l'application pour l'exécuter.

Sur Windows
: Téléchargez puis décompressez le fichier `Cosma-win32-x64.zip`, renommez le dossier « Cosma » et placez-le dans `C:\Programmes` ou `C:\Programmes (86)`.

### Dossier support

L’installation de Cosma crée automatiquement un dossier support à l’emplacement suivant (où `*` est à remplacer par le nom de l’utilisateur) :

Sur macOS
: `/Users/*/Library/Application Support/cosma`

Sur Windows
: `C:\Utilisateurs\*\AppData\Roaming\cosma`

C’est ici que se trouve, entre autres, le fichier `config.json` dans lequel sont inscrits automatiquement vos paramètres pour Cosma.

### Mises à jour

Cosma n’est pas mis à jour automatiquement. Vous pouvez être averti d’une mise à jour en vous abonnant à l’une ou l’autre de ces sources :

- [cosma-annonces](https://groupes.renater.fr/sympa/info/cosma-annonces) (liste de diffusion par email dédiée exclusivement aux annonces de mises à jour de Cosma) ;
- [flux RSS du site de Cosma](https://cosma.graphlab.fr/feed.xml) (contient les notes de version publiées sur le site).

::: important
**Si Cosma ne fonctionne plus suite à une mise à jour :** la structure du [dossier support](#dossier-support) a probablement été modifiée et n’est plus compatible avec l’ancienne version. Supprimez le dossier support et relancez l’application. Le dossier support sera recréé automatiquement et fonctionnera de nouveau correctement. Faites éventuellement au préalable une copie du fichier `config.json` : cela vous permettra de les rétablir plus rapidement.
:::

## Créer du contenu

::: important
Pour créer du contenu dans Cosma, il faut d'abord indiquer un répertoire dans Préférences (`Ctrl + o` ou `Cmd + ,`) › Général › Répertoire des fiches. Le répertoire peut être vide ou contenir des fiches. Cosma ignore les sous-répertoires éventuels : seules les fiches présentes immédiatement au niveau du répertoire sont prises en compte.
:::

### Créer une fiche

Cliquez sur Fichier › Nouvelle fiche (`Ctrl/Cmd + N`) pour ouvrir le formulaire de création de fiche de Cosma.

Le titre est obligatoire. Les autres champs sont facultatifs.

Vous pouvez assigner un type à la fiche. Le type doit être défini préalablement dans la configuration (Préférences › Types de fiche).

Vous pouvez également ajouter des mots-clés à la fiche. Les mots-clés doivent être séparés par des virgules. Exemple : `mots-clé 1, mot-clé 2`.

Cliquez sur OK pour créer la fiche.

::: note
Le nom de fichier est généré à partir du titre. Pour une meilleure interopérabilité entre les différents systèmes d'exploitation, le nom de fichier ne contient que des caractères alphanumériques non accentués et des tirets.

Exemple : une fiche intitulée « Métadonnées web sémantique » sera enregistrée comme `metadonnees-web-semantique.md`.
:::

### Format de données

Cosma ne prescrit pas l'utilisation d'un logiciel d'écriture particulier. En revanche, il interprète uniquement les fichiers respectant les règles suivantes :

- contenu rédigé en Markdown, extension de fichier `.md` ;
- métadonnées exprimées en YAML, dans un en-tête présent en début de fichier ;
- liens internes exprimés avec une syntaxe de type wiki (doubles crochets `[[ ]]`) et basés sur des identifiants uniques.

Les sous-sections qui suivent expliquent ces règles en détail.

::: note
Cette combinaison de normes d'écriture correspond au croisement de plusieurs cultures textuelles : la documentation (enrichir et indexer le contenu avec des métadonnées) ; les wikis (interrelier des connaissances) ; la méthode Zettelkasten (organiser ses notes) ; l'écriture académique avec Pandoc (utiliser le format texte comme source pour plusieurs autres formats).

Cosma fonctionne donc particulièrement bien lorsqu'il est utilisé en tandem avec des environnements d'écriture qui adoptent également cette approche, comme [Zettlr](https://zettlr.com) ou l'extension [Foam](https://foambubble.github.io/foam/) pour Visual Studio Code et VSCodium.
:::

Vous pouvez créer un fichier conforme pour Cosma via le formulaire de l'application (cliquez sur Fichier › Nouvelle fiche ou tapez `Ctrl + N`) ou bien en passant directement par votre éditeur de texte préféré. Certains éditeurs de texte peuvent vous faire gagner du temps en vous permettant d'enregistrer des modèles de documents, ce que vous pouvez utiliser pour créer rapidement des fiches à destination de Cosma.

#### Métadonnées

Pour être correctement interprétés par Cosma, les fichiers Markdown (`.md`) doivent respecter une certaine structure, et notamment la présence d'un en-tête en [YAML](http://yaml.org) au début du fichier.

Cet en-tête est créé automatiquement lorsque vous créez une fiche via Cosma. Vous pouvez le modifier ou le reproduire avec un autre logiciel ou manuellement.

Exemple :

```
---
title: Titre du document
id: 20201209111625
type: undefined
tags:
- mot-clé 1
- mot-clé 2
---
```

L'en-tête YAML est délimité par deux séries de trois tirets seuls sur une ligne (`---`).

Un champ en YAML est composé d'un nom et d'une valeur séparés par un double-points. Cosma reconnaît et utilise les quatre champs suivants :

`title`
: Obligatoire.
: Titre de la fiche.

`id`
: Obligatoire.
: Identifiant unique de la fiche. Par défaut, Cosma génère des identifiants à 14 chiffres par horodatage (année, mois, jour, heures, minutes et secondes) sur le modèle de certains logiciels de prise de notes type Zettelkasten comme [The Archive](https://zettelkasten.de/the-archive/) ou [Zettlr](https://www.zettlr.com).

`type`
: Type de la fiche. Facultatif. Un seul type peut être assigné à une fiche. Si le champ `type` n'est pas spécifié ou bien que sa valeur ne correspond à l'un des types enregistrés dans la configuration, Cosma interprètera le type de la fiche comme non défini (`undefined`).

`tags` (ou `keywords`)
: Mots-clés de la fiche. Facultatif. La valeur doit être une liste. Une fiche peut disposer d'autant de mot-clés que vous souhaitez. Vous pouvez utiliser `keywords` au lieu de `tags`, dans une logique de compatibilité avec Pandoc. Si une fiche comporte un champ `tags` et un champ `keywords`, seuls les mots-clés déclarés dans le champ `tags` sont interprétés par Cosma.

Conformément à la spécification YAML, la liste des mots-clés peut être inscrite en mode *block* :

```yaml
tags:
- mot-clé 1
- mot-clé 2
```

Ou bien en mode *flow* :

```yaml
tags: [mot-clé 1, mot-clé 2]
```

Vous pouvez ajouter des champs supplémentaires de manière arbitraire, par exemple ceux reconnus par Pandoc.

::: note
**Pourquoi un en-tête en YAML ?**

Certains logiciels identifier les métadonnées d'un fichier de manière heuristique. Par exemple, si la première ligne du fichier est un titre de niveau 1, alors il sera interprété comme le titre du fichier ; si la seconde ligne contient des mots préfixés par un croisillon `#`, alors ils seront interprétés comme des mots-clés.

L'inconvénient de ce fonctionnement est qu'il n'est pas interopérable : chaque logiciel a ses propres conventions, ce qui limite la capacité de l'utilisateur à changer d'outil.

Utiliser un en-tête en YAML permet de déclarer des métadonnées comme le titre et l'identifiant unique d'une fiche de manière explicite. Ceci présente l'avantage de rendre triviale la détection et la manipulation de ces métadonnées, aussi bien par une machine que par un humain. L'utilisation d'un format commun (comme YAML) augmente le nombre d'outils compatibles avec un même ensemble de fichiers. Et des outils informatiques très répandus comme les expressions régulières et les scripts *shell* permettent aux utilisateurs de convertir eux-mêmes leurs données de manière relativement simple si besoin.
:::

#### Contenu

Cosma interprète les fichiers comme étant rédigés en [CommonMark](https://spec.commonmark.org/0.30/), une version strictement définie du langage de balisage léger Markdown.

::: astuce
Le [tutoriel CommonMark traduit en français](https://www.arthurperret.fr/tutomd/) permet d'apprendre les bases de Markdown en 10 minutes.

Si vous souhaitez découvrir l'utilisation conjointe de Markdown et Pandoc, vous pouvez consulter le cours en ligne [Markdown et vous](https://infolit.be/md/).
:::

Cosma génère un rendu des fichiers Markdown en HTML. Par conséquent, les fichiers Markdown peuvent également inclure du code HTML, ainsi que des images vectorielles en SVG. Cosma supporte également l'[ajout d'attributs via des accolades](https://www.npmjs.com/package/markdown-it-attrs), comme présenté ci-dessous.

```markdown
<div class="red">Ce paragraphe sera en rouge</div>

Ce paragraphe sera en rouge{.red}
```

Des images *bitmap* peuvent être incluses dans le rendu via la syntaxe Markdown. Exemple :

```markdown
![Texte alternatif](image.jpg)
```

Cependant, les fichiers images ne sont pas intégrés à l'export. Pour que les images s'affichent à l'export, privilégiez donc les images hébergées sur le Web et incluses via une URL. Exemple :

```markdown
![Texte alternatif](http://domaine.fr/image.jpg)
```

#### Liens

À l'intérieur des fiches, vous pouvez créer des liens avec l'identifiant de la fiche cible entre double crochets.

Exemple :

```
Un lien vers [[20201209111625]] une fiche.
```

Cosma permet de définir des [types de liens](#types-de-liens). Chaque type de lien est caractérisé par un nom, une couleur et un tracé. Pour qualifier un lien dans une fiche, préfixez l'identifiant par le nom d'un type de lien suivi d'un deux-points.

Exemple :

```
Le concept B dérive du [[générique:20201209111625]] concept A.

La personne D a écrit contre [[opposant:20201209111625]] la personne C.
```

::: astuce
Pour améliorer la lisibilité des fiches dans le cosmoscope, Cosma inclut une option pour personnaliser le texte des liens. Dans Préférences › Symbole de lien, saisissez un ou plusieurs caractères Unicode (lettres, chiffres, symboles…). Exemple : ☞. Cette chaîne de caractères remplace l'identifiant entre crochets dans le rendu HTML des fiches.
:::

#### Identifiants uniques

Pour être correctement interprétée par Cosma, chaque fiche doit avoir un identifiant unique. Cet identifiant sert de cible aux liens internes.

Par défaut, Cosma génère des identifiants à 14 chiffres par horodatage (année, mois, jour, heures, minutes et secondes). Nous nous inspirons ici du fonctionnement de logiciels de prise de notes type Zettelkasten comme [The Archive](https://zettelkasten.de/the-archive/) et [Zettlr](https://www.zettlr.com).

::: note
De nombreux logiciels de prise de notes interreliées proposent d'établir les liens entre fichiers via leurs noms, et de gérer automatiquement la maintenance des liens lorsque les noms de fichiers sont modifiés. En choisissant plutôt d'utiliser des identifiants uniques, nous avons donné à Cosma un fonctionnement plus classique, plus strict, proche de celui du Web. Nous pensons qu'il s'agit de la manière la plus simple d'éviter les [liens morts](https://fr.wikipedia.org/wiki/Lien_mort) de façon pérenne. Le fait de ne pas recourir à une maintenance automatique des liens notamment rend les données moins dépendantes d'une solution logicielle en particulier.
:::

::: astuce
L'inconvénient d'un lien basé sur un identifiant unique, c'est qu'il peut gêner la lecture du contenu, notamment lorsque l'identifiant est une longue série de chiffres. Dans Préférences › Symbole de lien, vous pouvez définir une convention personnelle, comme par exemple une petite manicule (☞), qui allège visuellement le rendu HTML des fiches en remplaçant les identifiants par une chaîne de caractères arbitraire.
:::

## Créer un cosmoscope

Cliquez sur Nouveau cosmoscope (`Cmd/Ctrl + R`) pour lancer la génération d'un nouveau cosmoscope. Il s'affiche automatiquement dans l'interface du logiciel.

Cosma crée automatiquement un rapport d'erreurs qui décrit les problèmes éventuellement rencontrés durant la génération d'un cosmoscope. Cliquez sur Fichier › Historique (`Cmd/Ctrl + H`) et sélectionnez une entrée pour consulter le rapport d'erreurs associé.

## Citations et bibliographies

Cosma intègre une fonctionnalité de traitement des citations. Elle repose sur le même écosystème que [Zettlr](https://www.zettlr.com) : les données et styles bibliographiques utilisent la norme [Citation Style Language (CSL)](https://citationstyles.org), tandis que l'insertion des citations dans le texte se fait avec la [syntaxe de citation de Pandoc](https://pandoc.org/MANUAL.html#citation-syntax).

### Fichiers requis

Pour traiter automatiquement les citations, Cosma requiert trois fichiers :

Données bibliographiques
: Fichier contenant les métadonnées décrivant des références bibliographiques. Le format requis est CSL JSON (extension `.json`).

Style bibliographique
: Fichier contenant les règles de mise en forme des citations et bibliographies. Le format requis est CSL (extension `.csl`). Vous pouvez télécharger des fichiers de style depuis le [répertoire de styles CSL de Zotero](https://www.zotero.org/styles).

Localisation bibliographique
: Fichier contenant les traductions dans une certaine langue des termes employés en bibliographie (ex : éditeur, numéro…). Le format requis est XML (extension `.xml`). Vous pouvez télécharger des fichiers de localisation depuis le [dépôt GitHub du projet CSL](https://github.com/citation-style-language/locales/tree/6b0cb4689127a69852f48608b6d1a879900f418b).

Dans le fichier de données, chaque référence doit posséder un identifiant unique (`id`) qui sert de clé de citation. Exemple :

```json
[
  {
    "id":"goody1979",
    "author":[{"family":"Goody","given":"Jack"}],
    "citation-key":"goody1979",
    "event-place":"Paris",
    "ISBN":"978-2-7073-0240-3",
    "issued":{"date-parts":[[1979]]},
    "language":"fr",
    "publisher":"Les Editions de Minuit",
    "publisher-place":"Paris",
    "title":"La Raison graphique : la domestication de la pensée sauvage",
    "title-short":"La Raison graphique",
    "type":"book"
  }
]
```

::: astuce
Vous pouvez utiliser le gestionnaire de références bibliographiques [Zotero](https://www.zotero.org/) avec l'extension [Better BibTeX](https://retorque.re/zotero-better-bibtex/) afin de créer des clés de citation uniques pour chaque référence ainsi que des exports automatiquement mis à jour.
:::

### Syntaxe de citation

Pour citer une référence dans une fiche, intégrez la clé de citation de cette référence en utilisant la [syntaxe de citation de Pandoc](https://pandoc.org/MANUAL.html#citation-syntax).

Exemple :

```
À propos de raison graphique [@goody1979, 46-52]…
```

### Créer un cosmoscope avec citations

Cliquez sur Fichier › Nouveau cosmoscope avec citations (`Cmd/Ctrl + Maj + R`) pour générer un cosmoscope avec le traitement des citations activé. Le traitement des citations est également disponible lors de l'[export](#partager-un-cosmoscope). Chaque clé de citation est alors remplacée par du texte formaté et une bibliographie est générée en-dessous du corps de chaque fiche contenant des références.

Exemple :

```
À propos de raison graphique [@goody1979, 46-52]…

Bibliographie
-------------

GOODY, Jack, 1979. La Raison graphique : la domestication de la pensée sauvage.
  Paris : Les Editions de Minuit. ISBN 978-2-7073-0240-3.
```

Les données CSL JSON correspondant aux références citées sont enregistrées dans le cosmoscope au format JSON. Vous pouvez consulter et télécharger ces données dans le cosmoscope en cliquant sur le bouton « Données » en bas du menu latéral gauche. Vous pouvez également y accéder en consultant le code source du cosmoscope au niveau de la balise `<article id="citation-references">`.

## Historique

Par défaut, Cosma exporte automatiquement chaque cosmoscope dans un répertoire `cosma-history` situé dans les répertoires temporaires du système d'exploitation.

Cliquez sur Préférences (`Ctrl + o` ou `Cmd + ,`) › Enregistrer automatiquement les cosmoscopes dans l'historique pour activer ou désactiver l'enregistrement automatique.

Le cosmocope actif est toujours enregistré dans l'historique comme dernière entrée. C'est cette dernière entrée qui est ouverte lors du lancement de l'application. Si l'enregistrement automatique des cosmoscopes est désactivé, cette dernière entrée sera simplement écrasée à chaque nouvelle génération de cosmoscope.

Cliquez sur Fichier › Historique (`Cmd/Ctrl + H`) pour consulter et gérer les entrées de l'historique à l'aide des boutons suivants :

Modifier la description
: Ajouter ou modifier le texte décrivant l'entrée d'historique.

Ouvrir dans Cosma
: Ouvrir le cosmoscope dans l'interface de Cosma.

Localiser le fichier
: Révèler le cosmoscope dans l'explorateur de fichiers du système d'exploitation.

Rapport d'erreurs
: Afficher le rapport d'erreurs créé lors de la génération du cosmoscope.

Supprimer
: Supprimer une entrée d'historique.

Vider l'historique…
: Supprimer le répertoire temporaire `cosma-history` et toutes les entrées d'historique contenues.

## Utilisation du cosmoscope

### Description générale de l'interface

L'interface de Cosma est organisée en trois colonnes :

Panneau latéral gauche (Menu)
: Regroupe les fonctionnalités permettant de chercher de l'information et de modifier l'affichage de manière globale.

Zone centrale (Graphe)
: Affiche le graphe et les contrôles associés (zoom, focus).

Panneau latéral droit (Fiche)
: Affiche les fiches (métadonnées et contenu) ainsi qu'une liste des liens sortants (Liens) et entrants (Rétroliens).

Vous retrouverez la même interface, les mêmes raccourcis et outils de visualisation dans un cosmoscope ouvert dans l'application Cosma que dans un export ouvert dans un navigateur web, à une différence près : les boutons permettant d'interagir avec l'application Cosma (Nouvelle fiche, Nouveau cosmoscope, etc.) ne s'affichent que dans l'application, pas dans les exports.

### Graphe

Le graphe situé dans la zone centrale de l'interface affiche des nœuds étiquetés et interreliés. Chaque nœud correspond à une fiche ; l'étiquette correspond au titre de la fiche. Les liens correspondent aux liens établis entre les fiches via leur identifiant.

Survoler un nœud le met temporairement en surbrillance, lui et ses connexions. Cliquer sur un nœud le met en surbrillance, ainsi que ses connexions, et ouvre la fiche correspondante.

Vous pouvez zoomer librement dans le graphe à la souris, au pavé tactile, en double cliquant sur le fond du graphe ou bien avec les boutons dédiés situés en bas à gauche. Appuyez sur la touche `C` pour zoomer sur un nœud sélectionné (dont la fiche est ouverte). Le bouton Recentrer (raccourci : touche `R`) réinitialise le zoom.

Les nœuds sont organisés dans l'espace par un algorithme de simulation de forces. Une barre colorée sous le logo Cosma témoigne de l'état de la simulation (stable ou en calcul). Cliquez sur cette barre (raccourci : touche `Espace`) pour lancer un cycle de simulation supplémentaire.

::: astuce
Quelques pressions rapides sur la touche `Espace` permettent de « déplier » progressivement un graphe emmêlé.
:::

Le graphe n'est pas figé, les nœuds peuvent donc être déplacés par cliquer-glisser. Cependant, les nœuds et liens restent soumis en permanence à la simulation, donc il n'est pas possible de les disposer manuellement de manière arbitraire. Chaque modification du cosmoscope est susceptible de modifier la disposition des nœuds dans l'espace.

L'affichage du graphe peut être modifié de manière temporaire via les contrôles placés sous Paramètres du graphe dans le panneau latéral gauche. Pour modifier l'affichage de manière permanente, modifiez les valeurs par défaut des paramètres correspondants dans Préférences › Graphe.

::: astuce
Modifiez la force et la distance maximale entre les nœuds pour adapter l'affichage à la résolution et la taille de votre écran. Ajoutez une force d'attraction vers l'axe vertical/horizontal pour resserrer le graphe et ramener les nœuds isolés plus près du centre.
:::

L'affichage est possible sur tous types d'écrans mais n'est pas optimisé pour les terminaux mobiles : le tactile ne donne pas accès à certaines interactions comme le survol, et les petits écrans restreignent l'utilité du graphe.

### Fiches

Les fiches peuvent êtres ouvertes en cliquant sur un nœud, une entrée de l'index, une suggestion du moteur de recherche, ou un lien dans le corps ou le pied d'une fiche. Ouvrir une fiche affiche son contenu dans le panneau latéral droit.

Dans l'application Cosma, vous pouvez naviguer dans l'historique d'ouverture des fiches avec les boutons Précédent / Suivant situés dans le panneau latéral gauche.

Dans un navigateur web où est ouvert un cosmoscope, ouvrir une fiche met à jour l'URL de la page avec l'identifiant de la fiche : ceci permet de naviguer entre les fiches visitées via les fonctionnalités Précédent / Suivant du navigateur, mais aussi de les retrouver dans l'historique du navigateur ou encore d'obtenir un lien direct vers la fiche à partager.

Cliquer sur le bouton « Fermer » referme le panneau latéral droit de lecture et désélectionne le nœud correspondant dans le graphe.

Les liens présents dans les fiches sont cliquables. Dans un navigateur où est ouvert un cosmoscope, vous pouvez ouvrir ces liens dans un nouvel onglet via un clic droit. Le titre du lien (affiché en infobulle après 1-2 secondes de survol) est celui de la fiche correspondante.

::: astuce
Pour améliorer la lisibilité des fiches dans le cosmoscope, Cosma inclut une option pour personnaliser le texte des liens. Dans Préférences › Symbole de lien, saisissez un ou plusieurs caractères Unicode (lettres, chiffres, symboles…). Exemple : ☞. Cette chaîne de caractères remplace l'identifiant entre crochets dans le rendu HTML des fiches.
:::

En bas de chaque fiche se trouve une liste des liens sortants et des liens entrants (ou rétroliens). Les liens et rétroliens sont contextualisés : au survol, une infobulle s'affiche, montrant le paragraphe qui entoure ce lien dans la fiche correspondante.

::: note
Les liens et rétroliens contextualisés font partie des fonctionnalités les plus utiles des systèmes hypertextuels. C'est une fonctionnalité notoirement absente du Web. En revanche, de nombreuses applications de prise de notes interreliées traitent les liens comme un élément de première importance, et cela inclut les rétroliens contextualisés. Cependant, lorsque ces notes sont partagées sur le Web, cette fonctionnalité n'est pas toujours incluse, ou alors elle fait partie d'un service de publication payant. Avec Cosma, les rétroliens contextualisés font partie du logiciel, que vous soyez l'auteur d'un cosmoscope travaillant sur sa machine, ou quelqu'un qui explore un cosmoscope sur le Web.
:::

### Mode focus

Le bouton Activer le focus (raccourci : touche `F`) situé en bas à gauche du graphe permet de restreindre l'affichage au nœud sélectionné : en mode focus, seules les connexions directes à la fiche sélectionnée sont affichées dans l'interface. Le mode focus ne fonctionne que si vous avez sélectionné une fiche.

Le curseur qui apparaît sous le bouton Activer le focus permet de faire varier la distance d'affichage, jusqu'au maximum indiqué dans Préférences › Niveau maximum de focus. Une valeur de 1 signifie que seules les connexions immédiates seront affichées en mode Focus. Une valeur de 2 signifie que vous pouvez étendre le focus aux connexions des connexions, et ainsi de suite.

::: astuce
Le curseur du niveau de focus est contrôlable via les flèches du clavier. Vous pouvez enchaîner les raccourcis : `F` pour activer le focus, puis les flèches pour augmenter le niveau de focus.
:::

### Moteur de recherche

Le champ de texte situé en haut du panneau latéral gauche est un moteur de recherche qui fonctionne sur les titres de fiches. Il suggère une liste de fiches dont le titre est le plus proche de ce que vous saisissez dans la barre de recherche (*fuzzy search*). Cliquer sur une suggestion sélectionne le nœud correspondant dans le graphe et ouvre la fiche correspondante dans le panneau latéral de droite.

::: important
Les suggestions disponibles sont contraintes par les [filtres](#filtrer-laffichage-par-types) et le [mode focus](#mode-focus) : une fiche masquée par l'une ou l'autre de ces fonctionnalités ne sera pas accessible via le moteur de recherche. Lorsque vous voulez repartir de zéro pour une nouvelle requête, vous pouvez cliquer sur Réinitialiser l'affichage (raccourci : `Alt` + `R`).
:::

### Filtrer l'affichage par types

La liste des types de fiches située en haut du panneau latéral gauche permet de filtrer l'affichage. Cliquer sur un type permet de masquer et réafficher les fiches du type correspondant dans le graphe, l'index et les suggestions du moteur de recherche. Cliquer sur un type en maintenant la touche `Alt` enfoncée permet de masquer et réafficher les fiches des autres types.

Pour qu'un type apparaisse, il doit être déclaré dans Préférences › Types de fiches et être attribué à au moins une fiche.

### Mots-clés

La liste des mots-clés située dans le panneau latéral gauche permet de mettre en évidence les fiches qui utilisent chaque mot-clé sélectionné. Sélectionner un mot-clé met en surbrillance l'étiquette des nœuds correspondants dans le graphe et restreint l'index aux fiches correspondantes. Vous pouvez activer simultanément plusieurs mots-clés. Pour désactiver un mot-clé, cliquez à nouveau sur le bouton correspondant.

Pour qu'un mot-clé apparaisse, il suffit qu'il ait été déclaré dans l'en-tête YAML d'au moins une fiche avec le champ `tags` .

### Index

L'index alphabétique des fiches situé dans le panneau latéral gauche permet d'accéder directement à une fiche sans passer par le graphe. Cliquer sur un titre sélectionne le nœud correspondant dans le graphe et ouvre la fiche correspondante. L'index peut être trié par ordre alphabétique croissant ou décroissant. Les filtres, les mots-clés et le mode focus modifient l'affichage de l'index.

### Vues

À tout moment, l'état du graphe (fiche sélectionnée, filtres actifs, mode focus) peut être sauvegardé pour un accès rapide. Ceci fonctionne comme un marque-page. Cliquez sur le bouton Sauvegarder la vue et indiquez un nom. Ceci ajoute un bouton éponyme dans la section Vues du panneau latéral gauche. Cliquer sur ce bouton applique tous les paramètres qui étaient actifs au moment de l'enregistrement de la vue. Cliquer à nouveau sur le bouton rétablit l'affichage normal.

Les vues sont conservées à l'export. En revanche, il n'est pas possible de créer de nouvelle vue depuis un export. Ceci n'est possible que dans l'application.

## Partager un cosmoscope

Cliquez sur Fichier › Partager (`Cmd/Ctrl + E`) pour lancer la génération d'un cosmoscope destiné à être partagé.

Deux options sont disponibles :

Traiter les citations
: Traiter les clés de citation et ajouté la bibliographie aux fiches.

CSS personnalisé
: Appliquer les même modifications d'interface (via CSS) de l'application au cosmoscope exporté.

::: note
Si les options sont grisées, c'est que les paramètres correspondants dans Préférences ne sont pas renseignés.
:::

Les cosmoscopes exportés via le menu Partager intègrent les métadonnées (titre, auteur, description, mots-clés) éventuellement renseignées dans Préférences › Métadonnées. Elles sont affichées dans le panneau « À propos ». Elles sont également incluses dans le code source du cosmoscope sous la forme de balises `meta`, afin d'améliorer la description d'un cosmoscope destiné à être publié sur le Web.

La barre d'outils présente au sommet du menu latéral gauche ne fonctionne que dans l'application Cosma. Elle est donc masquée dans les cosmoscopes exportés via Partager. Si un titre a été renseigné dans Préférences › Métadonnées, il s'affiche à l'emplacement qu'occupe habituellement la barre d'outils.

Le fichier `cosmoscope.html` exporté peut être partagé comme n'importe quel fichier informatique : email, transfert de fichiers, messagerie, mise en ligne sur un serveur…

Dans le cas d'un cosmoscope publié sur le Web, il est possible de créer un lien directement vers une fiche en ajoutant son identifiant précédé d'un croisillon `#` en fin d'URL. Exemple :

`https://domaine.fr/cosmoscope.html#20210427185546`

## Configuration

Cliquez sur Préférences (`Ctrl + o` ou `Cmd + ,`) pour configurer Cosma.

::: important
La majorité des options de configuration ne fonctionnent que si un répertoire est renseigné dans Préférences › Général › Répertoire des fiches.
:::

### Général

Sélectionner une langue d'affichage
: Permet de choisir la langue que vous souhaitez appliquer à l'interface de l'application ainsi qu'aux cosmoscopes générés et exportés.
: Un redémarrage de l'application est nécessaire pour que le changement de langue prenne effet dans l'interface. De plus, Cosma ne re-génère pas automatiquement un cosmoscope suite au changement de langue : il faut donc re-générer manuellement un cosmoscope pour voir le changement prendre effet.

Répertoire des fiches
: Chemin du répertoire contenant les fichiers Markdown. Les nouvelles fiches créées via Cosma sont ajoutées dans ce répertoire.

Enregistrer automatiquement les cosmoscopes dans l’historique
: Par défaut, Cosma exporte automatiquement chaque cosmoscope dans un répertoire `cosma-history` situé dans les répertoires temporaires du système d'exploitation. Décochez cette option pour désactiver cet export automatique.
: Le cosmocope actif est toujours enregistré dans l'historique comme dernière entrée. C'est cette dernière entrée qui est ouverte lors du lancement de l'application. Si l'enregistrement automatique des cosmoscopes est désactivé, cette dernière entrée sera simplement écrasée à chaque nouvelle génération de cosmoscope.

Symbole de lien
: Saisissez ici une chaîne de caractères Unicode arbitraire. Elle remplacera les identifiants entre les crochets dans le rendu HTML des fiches. Ceci permet d'alléger visuellement le texte de vos fiches en remplaçant les longs identifiants numériques par une convention personnelle (par exemple une petite manicule : ☞).

### Types de fiches

Cette section permet de définir différents types de fiches. Pour chaque type de fiche, renseignez un nom et une couleur.

Ajoutez `type: nom` à l'en-tête en YAML d'une fiche pour lui attribuer ce type. Un seul type peut être assigné à une fiche. Si le champ `type` n'est pas spécifié ou bien que sa valeur ne correspond à l'un des types enregistrés dans la configuration, Cosma interprètera le type de la fiche comme non défini (`undefined`).

::: note
Le type "undefined" (couleur par défaut des nœuds) peut être modifié, mais ne peut être retiré.
:::

### Types de liens

Cette section permet de définir différent types de liens. Pour chaque type de lien, renseignez un nom, une couleur et un tracé. Les tracés disponibles sont :

- continu (*simple*)
- double (*double*)
- tirets (*dash*)
- pointillés (*dotted*)

Pour qualifier un lien dans une fiche, préfixez l'identifiant par le nom d'un type de lien suivi d'un deux-points.

::: note
Le type "undefined" (couleur et type de trait par défaut des liens) peut être modifié, mais ne peut être retiré.
:::

::: astuce
Le paramétrage visuel des liens a une incidence sur leur lisibilité au sein du graphe. Par exemple, si vous définissez les liens non qualifiés (`undefined`) en pointillés (`dotted`) gris (`grey`) et un type de lien spécial en trait continu (`simple`) noir (`black`), les liens spéciaux seront plus visibles dans le graphe.
:::

### Graphe

Les paramètres du graphe peuvent être modifiés en direct dans le cosmoscope. Vous pouvez ainsi tester différentes valeurs avant de les reporter dans la configuration. Ce sont les valeurs définies dans la configuration qui sont rétablies à chaque rechargement du cosmoscope, et chaque nouvelle génération d'un cosmoscope.

Couleur de fond
: La couleur de fond du graphe.

Couleur de surbrillance
: La couleur qui s'applique aux nœuds ainsi qu'aux liens lors du survol et de la sélection.

::: note
Les deux paramètres de couleur ci-dessus sont accessibles via l'interface car ils sont susceptibles d'être modifiés par de nombreux utilisateurs. Mais toutes les couleurs de l'interface peuvent être modifiées en utilisant une feuille de style CSS personnalisée (voir Configuration › Avancé).
:::

Taille du texte des étiquettes
: Définit la taille du texte des étiquettes des nœuds du graphe, c'est-à-dire la place que prend le titre de chaque fiche sous le nœud correspondant. L'unité implicite est le pixel. Les valeurs possibles sont comprises entre 5 et 15.

Niveau maximum de focus
: Le mode focus restreint l'affichage au nœud sélectionné et à ses connexions directes (1 nœud de distance). Il est possible de faire varier la distance d'affichage du mode focus : passer à 2 affiche les connexions jusqu'à 2 nœuds de distance ; passer à 3 étend l'affichage à 3 nœuds de distance ; etc. La valeur indiquée dans Niveau maximum de focus définit le seuil maximum pour cette fonctionnalité. Une valeur élevée consomme plus de ressources à l'affichage.

Afficher des flèches sur les liens
: Permet d'obtenir un graphe orienté ou non orienté.

#### Spatialisation

Force d'attraction
: Correspond à la puissance globale de l'attraction simulée. Plus la valeur est faible, plus les liens entre les nœuds sont relâchés.

Distance maximum entre les nœuds
: Correspond au seuil maximal de répulsion entre les nœuds, quelle que soit la force. Au-delà d'une valeur de 1000, ce paramètre n'a pas d'effet mesurable.

Attraction verticale/horizontale
: Force d'attraction vers l'axe vertical/horizontal, de 0 à 1. Une valeur de 0 signifie que le paramètre est désactivé. Appliquer une force verticale/horizontale resserre le graphe et permet de ramener plus près du centre les nœuds isolés.

### Métadonnées

Vous pouvez définir des métadonnées globales pour le cosmoscope :

- titre
- auteur
- mots-clés
- description

Les cosmoscopes exportés via le menu Partager intègrent ces métadonnées si elles sont renseignées. Le titre vient remplacer les boutons situés en haut à gauche du menu, et qui ne s'affichent que dans l'application. Les métadonnées sont affichées dans le panneau « À propos ». Elles sont également incluses dans le code source du cosmoscope sous la forme de balises `meta`.

### Bibliographie

Indiquez ici les chemins des fichiers de données, style et localisation bibliographique. Les trois fichiers sont requis pour le [traitement des citations](#citations-et-bibliographies).

Données bibliographiques
: Fichier contenant les métadonnées décrivant des références bibliographiques. Le format requis est CSL JSON (extension `.json`).

Style bibliographique
: Fichier contenant les règles de mise en forme des citations et bibliographies. Le format requis est CSL (extension `.csl`). Vous pouvez télécharger des fichiers de style depuis le [répertoire de styles CSL de Zotero](https://www.zotero.org/styles).

Localisation bibliographique
: Fichier contenant les traductions dans une certaine langue des termes employés en bibliographie (ex : éditeur, numéro…). Le format requis est XML (extension `.xml`). Vous pouvez télécharger des fichiers de localisation depuis le [dépôt GitHub du projet CSL](https://github.com/citation-style-language/locales/tree/6b0cb4689127a69852f48608b6d1a879900f418b).

### Vues

Gérez ici les [vues](#vues) enregistrées dans le cosmoscope.

### Avancé

Afficher les outils de développement
: Cette option permet d'afficher les outils de développement du logiciel depuis Affichage › Outils de développement. Cliquez sur Afficher l'inspecteur web pour inspecter le code de l'interface de Cosma.

CSS personnalisée
: Indiquez ici le chemin d'un fichier CSS pour personnaliser l'interface du cosmocope. Il est nécessaire de re-générer un cosmoscope pour que la CSS personnalisée soit prise en compte.

::: astuce
Pour connaître les sélecteurs à utiliser pour telle ou telle déclaration, vous pouvez :

- cliquer sur Affichage › Outils de développement (nécessite d'avoir activé Afficher les outils de développement) ;
- ouvrir le cosmoscope dans un navigateur web et utiliser les outils de développement du navigateur ;
- consulter le code source de Cosma, spécifiquement `/cosma-core/template.njk` (pour connaître la structure HTML du cosmoscope), `/cosma-core/styles.css` et `/cosma-core/print.css` (pour les styles d'impression activés lors de l'impression d'une fiche).

Les feuilles de style du cosmoscope utilisent notamment des variables CSS pour définir les couleurs et les polices utilisées. Vous pouvez redéfinir uniquement ces variables pour modifier tous les éléments d'interface auxquels elles s'appliquent. Dans l'exemple ci-dessous, le fichier `custom.css` contient des déclarations qui modifient les polices utilisées dans le cosmoscope :

```css
:root {
  --sans: "IBM Plex Sans", sans-serif;
  --serif: "IBM Plex Serif", serif;
  --mono: "IBM Plex Mono", monospace;
  --condensed: 'Avenir Next Condensed', sans-serif;
}
```
:::

## Cosma CLI

### Installation (CLI)

La version CLI de Cosma est disponible sur macOS, Windows et Linux.

L'installation de [NodeJS](https://nodejs.org/) version 15 minimum est requise.

Entrez la commande suivante dans votre terminal pour installer Cosma CLI :

```
npm i @graphlab-fr/cosma -g
```

### Configuration (CLI)

La configuration de la version CLI s'effectue dans un fichier YAML `config.yml`. Ce fichier est généré par l'application lors de la première exécution, à la racine du répertoire de l'application :

- Windows : `%USERPROFILE%\AppData\Roaming\npm\node_modules\@graphlab-fr\cosma\config.yml`
- macOS, Linux : `/usr/local/lib/node_modules/@graphlab-fr/cosma/config.yml`

Le fichier `config.yml` généré par Cosma contient les valeurs par défaut des différents paramètres. Ces paramètres sont identiques à la version GUI. Consultez la section [Configuration](#configuration) pour connaître leur fonctionnement. Si vous retirez un paramètre du fichier, Cosma considère qu'il a sa valeur par défaut.

::: important
Les types de fiches et de liens « undefined » sont requis pour le fonctionnement de l'application, ne les supprimez pas.
:::

### Commandes

Vous pouvez afficher la liste des commandes avec la commande suivante. Vous pouvez également afficher les options disponibles pour une commande précise.

```
cosma --help
cosma modelize --help
```

#### Générer un fichier de configuration

```
cosma config
cosma c
```

#### Créer une fiche (mode formulaire)

```
cosma record
cosma r
```

Cette commande permet de créer une fiche en mode formulaire. Elle demande successivement un titre, un type et un ou plusieurs mots clés. Seul le titre est obligatoire.

#### Créer une fiche (mode *one-liner*)

```
cosma autorecord <titre> <type> <mots-clés>
cosma a <titre> <type> <mots-clés>
```

Cette commande vous permet de créer une fiche en une seule commande.

Dans la commande ci-dessus :

`<titre>`
: Obligatoire.
: Le titre de la fiche.

`<type>`
: Facultatif.
: L’un des types définis dans la configuration (`undefined` par défaut).

`<mots-clés>`
: Facultatif.
: Une liste de mots-clés séparés par des virgules (sans espaces). Exemple : `mot-clé1,mot-clé2`.

#### Créer un lot de fiches

```
cosma batch <path>
cosma b <path>
```

Cette commande permet de créer plusieurs fiches d'un coup.

`<path>`
: Emplacement d'un fichier au format JSON décrivant les fiches à créer. Le fichier doit être structuré de la manière suivante :

```json
[
  {
    "title": "Titre de la fiche",
    "type": "type de fiche",
    "tags": "mot-clé 1,mot-clé 2",
    "content": "Texte de la fiche, [[20210704100343]] liens inclus."
  },
  ...
]
```

Comme pour tous les autres modes de création de fiches, le titre (`title`) est obligatoire et les autres champs sont facultatifs.

::: note
**Identifiants des fiches créées par lot**

Cosma génère des identifiants à 14 chiffres par horodatage : année, mois, jour, heures, minutes et secondes. Par conséquent, il est possible de créer manuellement une fiche par seconde, soit 86 400 fiches par jour. Ceci signifie qu'il existe une plage de 86 400 identifiants « réservés » à la création manuelle de fiches. Pour le 15 janvier 2022 par exemple, ces identifiants vont de 20220115000000 à 20220115235959.

Pour conserver ce fonctionnement sans risquer de générer des identifiants en double, le mode de création par lots génère des identifiants par pseudo-horodatage. Les 8 premiers chiffres, correspondant à la date (année, mois, jour), sont réels. Exemple : 20220115 (15 janvier 2022). En revanche, ceux correspondant aux heures, minutes et secondes sont générés en dehors des plages horaires réelles. Exemple : 256495. Comme il est impossible de créer une fiche manuellement à 25h 64min et 95s, il n'y a pas de risque de générer des identifiants en double en utilisant simultanément les deux méthodes. 

Du fait de ce fonctionnement, il est possible de créer par lot jusqu'à 913 599 fiches par jour et par répertoire avant d'être à cours d'identifiants.
:::

#### Créer un cosmoscope (CLI)

```
cosma modelize
cosma m
```

La commande suivante vous permet de générer un Cosmoscope sans avoir entré de répertoire de fiches source. Il s'agit d'un export d'exemple contenant des explications sur l'utilisation du logiciel.

```
cosma modelize --sample
```

### Options

Différentes options peuvent être ajoutées à la commande `modelize`.

Comme les commandes, les options existent en version longue et version courte, qui sont fonctionnellement identiques, la version courte servant simplement à gagner du temps en raccourcissant la commande.

Les options servent également à réécrire à la volée les paramètres de la configuration pour une commande précise.

#### Créer un cosmoscope avec citations (CLI)

```
cosma modelize --citeproc
cosma m -c
```

#### Inclure une feuille de style CSS personnalisée

```
cosma modelize --custom-css
cosma m -css
```

::: astuce
Vous pouvez combiner les différentes options d'export comme suit :

```
cosma modelize --citeproc --custom-css
cosma m -c -css
```
:::

## Crédits

### Équipe

- [Arthur Perret](https://www.arthurperret.fr/) (porteur du projet)
- [Guillaume Brioudes](https://myllaume.fr/) (développeur)
- [Clément Borel](https://mica.u-bordeaux-montaigne.fr/borel-clement/) (chercheur)
- [Olivier Le Deuff](http://www.guidedesegares.info/) (chercheur)

### Bibliothèques utilisées

Pour améliorer la maintenabilité et la lisibilité du code source, l’équipe de développement a recouru aux bibliothèques suivantes :

- [D3.js](https://d3js.org/) v4.13.0 (BSD 3-Clause) : Génération du graphe
- [Nunjucks](https://mozilla.github.io/nunjucks/) v3.2.3 (BSD 2-Clause) : Génération du template du cosmoscope
- [Js-yaml](https://github.com/nodeca/js-yaml) v4.1.0 (MIT License) : Lecture du fichier de configuration et écriture de l'en-tête YAML
- [Js-yaml-front-matter](https://github.com/dworthen/js-yaml-front-matter) v4.1.1 (MIT License) : Lecture de l'en-tête YAML des fichiers Markdown
- [Markdown-it](https://github.com/markdown-it/markdown-it) v12.3.0 (MIT License) : Conversion Markdown → HTML
- [Markdown-it-attrs](https://www.npmjs.com/package/markdown-it-attrs) v4.0.0  (MIT License) : Traitement des hyperliens Markdown au sein des fiches
- [Citeproc-js](https://github.com/Juris-M/citeproc-js) v2.4.62 (CPAL et AGPL) : Conversion des clés de citation
- [Fuse.js](https://fusejs.io/) v6.4.6 (Apache License 2.0) : Moteur de recherche
- [Moment](https://momentjs.com/) v2.29.1 (MIT License) : Gestion de l'horodatage

## Versions

### GUI

#### GUI 1.2

Cette mise à jour ajoute quelques fonctionnalités de lecture et d'écriture des fiches :

- Le répertoire de fiches est désormais lu de manière récursive. Ceci permet de prendre en compte toutes les fiches, quel que soit leur emplacement dans une éventuelle structure de sous-répertoires.
- Les éléments HTML insérés dans le corps des fiches sont désormais reconnus et interprétés.

Des bugs ont également été résolus :

- Les infobulles de contexte ne sont plus vides lorsque le lien est qualifié (ticket #15).
- Le fonctionnement des vues enregistrées est rétabli (ticket #16).
- Le réglage de l'attraction verticale et horizontale n'est plus inversé (ticket #18).

#### GUI 1.1

Cette mise à jour ajoute la possibilité de changer de langue (anglais ou français), résout des bugs et améliore l'interface, notamment au niveau de la configuration.

- L'application est traduite en anglais, il est possible de changer de langue dans Préférences.
- Créer une fiche sans spécifier de répertoire ne cause plus d'erreur mais renvoie un message informatif (ticket #6).
- Créer une fiche avec un titre déjà utilisé n'écrase plus silencieusement la fiche existante mais demande une confirmation (ticket #5).
- Il est possible d'utiliser `keywords` au lieu de `tags` dans l'en-tête YAML des fiches (ticket #3).
- Il n'est plus nécessaire de déclarer un type de fiche dans la configuration avant de pouvoir l'assigner à une nouvelle fiche.
- La fenêtre Préférences a été réorganisée en sections.
- La lisibilité des rapports d'erreur a été améliorée.
- L'option `minify` permettant de réduire la taille des exports, non fonctionnelle en v1.0, a été supprimée.
- L'application est distribuée avec sa documentation, accessible via Aide › Manuel ou bien en cliquant sur le bouton Aide en bas à gauche dans le cosmoscope.
- Le code source a été réorganisé pour permettre le développement simultané d'une version exécutable en ligne de commande ([cosma-cli](https://github.com/graphlab-fr/cosma-cli)) à partir de la même base de code ([cosma-core](https://github.com/graphlab-fr/cosma-core)).
- Mise à jour de Electron v13 vers v15.

#### GUI 1.0

Version initiale.

#### CLI 1.1

Cette mise à jour ajoute quelques fonctionnalités de lecture et d'écriture des fiches :

- Nouvelle option de `modelize`, `--config`, dont la valeur doit être le chemin absolu d'un fichier de configuration. Ceci rend Cosma CLI capable de travailler avec plusieurs répertoires, sans que l'utilisateur doive échanger manuellement les fichiers de configuration au niveau du dossier support.
- Si un fichier de configuration contient des erreurs de syntaxe YAML, une erreur est générée avec un message informatif.
- Le répertoire de fiches sont désormais lus de manière récursive. Ceci permet de prendre en compte toutes les fiches, quel que soit leur emplacement dans une éventuelle structure de sous-répertoires.
- Les éléments HTML insérés dans le corps des fiches sont désormais reconnus et interprétés.

Des bugs ont également été résolus :

- Les infobulles de contexte ne sont plus vides lorsque le lien est qualifié (ticket #15).
- Le fonctionnement des vues enregistrées est rétabli (ticket #16).
- Le réglage de l'attraction verticale et horizontale n'est plus inversé (ticket #18).
- L'option `--custom-css` (ou `-css`) est de nouveau reconnue (ticket #19).

#### CLI 1.0

Les modifications suivantes ont été faites depuis la version alpha :

- Le code source a été réorganisé pour permettre le développement simultané des versions GUI et CLI à partir de la même base de code ([cosma-core](https://github.com/graphlab-fr/cosma-core)).
- Le fichier de configuration `config.yml` a été réorganisé. Le logiciel n'est pas rétrocompatible : si vous aviez un fichier `config.yml` datant de l'alpha, il sera nécessaire de re-créer un fichier `config.yml` conforme via la commande `cosma config` puis le modifier. L'emplacement du fichier dépend désormais du chemin d'installation de Cosma CLI. Sur Windows : `%USERPROFILE%\AppData\Roaming\npm\node_modules\@graphlab-fr\cosma\config.yml`. Sur macOS et Linux : `/usr/local/lib/node_modules/@graphlab-fr/cosma/config.yml`.
- Une nouvelle commande `cosma batch` permet de créer des fiches par lots. Elle est documentée [ici](https://cosma.graphlab.fr/docs/manuel-utilisation/#creer-un-lot-de-fiches).
- L'option `minify` permettant de réduire la taille des exports, non fonctionnelle en v1.0, a été supprimée.

#### CLI 1.0-alpha

Prototype initial.