---
title: Manuel d’utilisation
date: Last Modified
flag: fr
layout: doc
tags: user
---

## Présentation

Cosma est un logiciel de visualisation de graphe documentaire. Il permet de représenter des notes interreliées sous la forme d’un réseau interactif dans une interface web. Le logiciel est conçu pour fonctionner avec des fichiers texte en Markdown et s’adapte aussi bien à une petite collection (centaine de documents) qu’à une vaste documentation (jusqu'à plusieurs milliers de documents).

Cosma est développé dans le cadre du programme de recherche ANR [HyperOtlet](https://hyperotlet.hypotheses.org/).

### Spécificités de Cosma

Dans le vaste champ des outils qui servent à penser (*tools for thought*), Cosma se démarque par trois originalités :

D'abord, Cosma n'est pas lui-même un logiciel de prise de notes. Il est pensé pour fonctionner en complémentarité avec ces logiciels. Nous nous sommes inspirés ici du fonctionnement de logiciels comme [Deckset](https://www.deckset.com), qui applique ce principe aux présentations.

Ensuite, Cosma repose sur des normes d'écriture interopérables, ouvertes et standardisées. Ceci accroît la pérennité des données, facilite l'utilisation combinée avec des outils qui partagent ces normes (comme [Zettlr](https://www.zettlr.com)), tout en laissant la possibilité de changer d'outil à tout moment.

Enfin, Cosma permet de partager simultanément les données et les outils pour les explorer. La plupart des outils de visualisation concentrent leurs fonctionnalités dans une application à interface graphique, à partir de laquelle il est possible d'exporter des données structurées ou des images statiques. Cosma inverse cette logique : l'application installée, surnommée cosmographe, est un simple outil de création et d'affichage qui accueille un fichier HTML surnommé cosmoscope ; c'est ce dernier qui constitue la véritable interface de visualisation, avec un graphe interactif, des outils de navigation interne (index, moteur de recherche, filtres) et le texte intégral des fiches. Or il s'agit d'un fichier autonome, qui inclut aussi les données sources au format JSON et peut être utilisé hors connexion. Ainsi dans Cosma, l'export est aussi puissant que l'application : en partageant un cosmoscope vous ne transmettez pas seulement des données mais des capacités heuristiques.

### Un degré élevé de contrôle utilisateur

Cosma est conçu pour laisser un degré élevé de contrôle à ses utilisateurs.

Premièrement, le logiciel fonctionne avec un répertoire de fichiers au format texte qu'il se contente de lire : utiliser ou désinstaller le logiciel n'altérera pas vos fichiers et vous permet donc de mettre en œuvre les pratiques de stockage, de versionnement et d'édition de votre choix. De cette manière, si le logiciel s'envole les données restent.

Deuxièmement, de nombreux éléments d'interface sont personnalisables : algorithme de dessin de réseau, couleurs des nœuds, tracé des liens, raccourcis vers des vues particulières, etc. Vous pouvez ajouter un fichier de style CSS pour personnaliser l'interface.

Troisièmement, des enrichissements documentaires (métadonnées) et sémantiques (qualification des liens) sont possibles et se font par des mécanismes génériques : l'utilisateur est libre d'appliquer les typologies et ontologies de son choix.

Quatrièmement, Cosma est un logiciel modulaire, interopérable et portable mais surtout, c'est un logiciel libre : le code est public, son développement est documenté, il est accessible et réutilisable gratuitement sous licence GNU GPL 3.0. Le travail peut ainsi être évalué, archivé et continué par d'autres.

### Un logiciel expérimental

Enfin, Cosma est un logiciel expérimental, développé dans le cadre d'une démarche de recherche-conception.

L'idée de Cosma est née dans le cadre d'une recherche doctorale conduite par Arthur Perret sous la direction d'Olivier Le Deuff. Ce logiciel reste donc un travail expérimental, son utilisation est soumise à caution et aucune garantie de suivi ou de maintenance ne peut être donnée à ce jour.

Néanmoins, des efforts importants ont été entrepris dès le prototype pour concevoir soigneusement les différents aspects de l'outil, qu'il s'agisse de la visualisation de données ou de l'interaction humain-machine, notamment grâce à la participation de chercheurs spécialistes de ces domaines. Et Cosma est au cœur d'une dynamique de recherche que nous espérons inscrire dans la durée.

La version actuelle de Cosma peut être citée dans une bibliographie de la manière suivante :

> Arthur Perret, Guillaume Brioudes, Clément Borel, & Olivier Le Deuff. (2021). Cosma (1.0). Zenodo. <https://doi.org/10.5281/zenodo.5412315>

## Installation

Cosma est disponible pour macOS et Windows. [Visitez la page Releases pour obtenir la dernière version du logiciel.](https://github.com/graphlab-fr/cosma/releases/latest) L'application n'est pas signée avec un certificat de sécurité, vous devez disposer des privilèges administrateurs sur votre session pour pouvoir l'exécuter.

Sur macOS
: Téléchargez puis décompressez le fichier `Cosma.app.zip` et placez le le fichier `Cosma.app` dans `~/Applications`. Au premier lancement, faites clic droit › Ouvrir sur l'application pour l'exécuter.

Sur Windows
: Téléchargez puis décompressez le fichier `Cosma-win32-x64`, renommez le dossier « Cosma » et placez-le dans `C:\Programmes` ou `C:\Programmes (86)`.

::: astuce
Depuis le dépôt Cosma-help, [téléchargez un répertoire de fiches d'exemple](https://github.com/graphlab-fr/cosma-help/archive/refs/heads/main.zip). Après avoir décompressé `cosma-help-main.zip` vous pouvez utiliser ces fiches pour tester Cosma et les lire pour apprendre à utiliser le logiciel. Indiquez le chemin du répertoire dans Préférences (`Ctrl + o` ou `Cmd + ,`) › Général › Répertoire des fiches.
:::

## Créer du contenu

::: important
Pour créer du contenu dans Cosma, il faut d'abord indiquer un répertoire dans Préférences (`Ctrl + o` ou `Cmd + ,`) › Général › Répertoire des fiches. Le répertoire peut être vide ou contenir des fiches. Cosma ignore les sous-répertoires éventuels : seules les fiches présentes immédiatement au niveau du répertoire sont prises en compte.
:::

### Créer une fiche

Cliquez sur Fichier › Nouvelle fiche (`Ctrl/Cmd + N`) pour ouvrir le formulaire de création de fiche de Cosma.

Le titre est obligatoire. Il deviendra le nom du fichier Markdown enregistré. Vous pouvez aussi assigner un type à la fiche, à définir préalablement dans la configuration (Préférences › Types de fiche). Vous pouvez également ajouter des mots-clés arbitraires à la fiche, en les séparant par des virgules tel que `mots-clé 1, mot-clé 2`.

Cliquez sur OK crée une fiche dans le répertoire indiqué dans Préférences › Répertoire des fiches.

::: important
Afin de garantir la pérennité de vos fichiers et leur enregistrement, certains caractères comme les accents sont remplacés (ex : `é` devient `e`).
:::

### Format de données

Cosma ne prescrit pas l'utilisation d'un logiciel d'écriture particulier. En revanche, seuls les fichiers Mardown (`.md`) répondant à certaines normes d'écriture sont analysés par le logiciel :

- YAML pour les métadonnées inscrites au début des fichiers (voir Métadonnées) ;
- Markdown pour le reste du contenu des fichiers ;
- une syntaxe de type wiki (doubles crochets `[[ ]]`) pour créer des liens internes ;
- des identifiants uniques qui servent de cible aux liens internes.

::: note
Cette combinaison de normes d'écriture correspond au croisement de plusieurs cultures textuelles : la documentation (enrichir et indexer le contenu avec des métadonnées) ; les wikis (interrelier des connaissances) ; la méthode Zettelkasten (organiser ses notes) ; l'écriture académique avec Pandoc (utiliser le format texte comme source pour plusieurs autres formats). Cosma fonctionne donc particulièrement bien lorsqu'il est utilisé en tandem avec des environnements d'écriture qui adoptent également cette approche, comme [Zettlr](https://zettlr.com) ou l'extension [Foam](https://foambubble.github.io/foam/) pour Visual Studio Code et VSCodium.
:::

Vous pouvez créer un fichier conforme pour Cosma via le formulaire de l'application (cliquez sur Fichier › Nouvelle fiche ou tapez `Ctrl + N`) ou bien en passant directement par votre éditeur de texte préféré. Certains éditeurs de texte peuvent vous faire gagner du temps en vous permettant d'enregistrer des modèles de documents, ce que vous pouvez utiliser pour créer rapidement des fiches à destination de Cosma.

#### Métadonnées

Pour être correctement interprétés par Cosma, les fichiers Markdown (`.md`) doivent respecter une certaine structure, et notamment la présence d'un en-tête en [YAML](http://yaml.org) au début du fichier.

Cet en-tête est automatiquement intégré lorsque vous créez une fiche via Cosma. Vous pouvez le modifier ou le reproduire avec un autre logiciel ou manuellement.

Exemple :

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

Un champ en YAML est composé d'un nom et d'une valeur séparés par un double-points. Cosma reconnaît et utilise les quatre champs suivants :

`title`
: Obligatoire.
: Titre de la fiche.

`id`
: Obligatoire.
: Identifiant unique de la fiche. Par défaut, Cosma génère des identifiants à 14 chiffres par horodatage (année, mois, jour, heures, minutes et secondes) sur le modèle de certains logiciels de prise de notes type Zettelkasten comme [The Archive](https://zettelkasten.de/the-archive/) ou [Zettlr](https://www.zettlr.com).

`type`
: Type de la fiche. Facultatif. Un seul type peut être assigné à une fiche. Si le champ `type` n'est pas spécifié ou bien que sa valeur ne correspond à l'un des types enregistrés dans la configuration sous le paramètre `record_types`, Cosma interprètera le type de la fiche comme non défini (`undefined`).

`tags`
: Mots-clés de la fiche. Facultatif. La valeur doit être une liste. Une fiche peut disposer d'autant de mot-clés que vous souhaitez.

Conformément à la spécification YAML, la liste des mots-clés peut être inscrite en mode *block* :

```yaml
tags:
- mot-clé 1
- mot-clé 2
```

Ou bien en mode *flow* :

```yaml
tags: [mot-clé 1, mot-clé 2]
```

Vous pouvez ajouter des champs supplémentaires de manière arbitraire, par exemple un champ `description`.

::: note
Certains logiciels établissent une série de présupposés qui servent à identifier les métadonnées d'un fichier de manière heuristique. Par exemple, si la première ligne du fichier est un titre de niveau 1, alors il s'agit du titre du fichier ; si la seconde ligne contient des mots préfixés par un croisillon `#`, alors il s'agit de mots-clés.

L'inconvénient de ce fonctionnement est qu'il n'est pas interopérable : chaque logiciel a ses propres conventions, ce qui limite la capacité de l'utilisateur à changer d'outil.

Utiliser un en-tête en YAML permet de déclarer des métadonnées comme le titre et l'identifiant unique d'une fiche de manière explicite. Ceci présente l'avantage de rendre triviale la détection et la manipulation de ces métadonnées, aussi bien par une machine que par un humain. L'utilisation d'un format commun (comme YAML) augmente le nombre d'outils compatibles avec un même ensemble de fichiers. Et des outils informatiques très répandus comme les expressions régulières et les scripts *shell* permettent aux utilisateurs de convertir eux-mêmes leurs données de manière relativement simple si besoin.
:::

#### Contenu

Cosma interprète les fichiers en analysant leur contenu (suivant l'en-tête YAML) selon la syntaxe Markdown [CommonMark](https://spec.commonmark.org/0.30/) afin de rendre les fiches. Vous pouvez [suivre ce tutoriel pour apprendre les bases de ce mode d'écriture](https://www.arthurperret.fr/tutomd/).

Le rendu des fichiers Markdown sous forme de fiche HTML dans le cosmoscope est limité aux éléments textuels (Markdown, HTML, SVG etc.). Les images *bitmap* peuvent être incluses en indiquant un lien vers leur emplacement. Toutefois, elles ne seront pas intégrées à l'export : si le lien est brisé, l'image disparaît et est remplacée par son texte alternatif le cas échéant.

#### Liens

À l'intérieur des fiches, vous pouvez créer des liens avec l'identifiant de la fiche cible (inscrit dans son en-tête YAML) entre double crochets. Cosma reconnaît ces liens et les utilise pour modéliser le graphe des fiches.

Exemple :

```
Un lien vers [[20201209111625]] une fiche.
```

Vous pouvez également paramétrer Cosma avec des types de liens ayant une couleur et un type de trait particuliers (voir [Configuration](#configuration)). Pour qualifier un lien dans une fiche, préfixez l'identifiant par le nom d'un type de lien suivi d'un deux-points.

Exemple :

```
Le concept B dérive du [[générique:20201209111625]] concept A.

La personne D a écrit contre [[opposant:20201209111625]] la personne C.
```

::: astuce
Cosma inclut également une option pour personnaliser l'apparence des liens dans le texte des fiches. Dans Préférences › Symbole de lien, entrez n'importe quelle chaîne de caractères Unicode qui remplacera l'identifiant entre les crochets dans le rendu HTML des fiches.
:::

#### Identifiants uniques

De nombreux logiciels de prise de notes interreliées proposent d'établir les liens entre fichiers via leurs noms, et de gérer automatiquement la maintenance des liens lorsque les noms de fichiers sont modifiés.

Cosma adopte un fonctionnement plus classique, proche de celui du Web. Chaque fiche possède un identifiant unique qui sert de cible aux liens. Par ailleurs Cosma n'intervient pas sur le contenu des fiches après leur création : il n'y a pas de maintenance automatique des liens susceptible de dysfonctionner. Ceci diminue le risque de [lien mort](https://fr.wikipedia.org/wiki/Lien_mort) quel que soit le devenir des données.

Par défaut, Cosma génère des identifiants à 14 chiffres par horodatage (année, mois, jour, heures, minutes et secondes) sur le modèle de certains logiciels de prise de notes type Zettelkasten comme [The Archive](https://zettelkasten.de/the-archive/) ou [Zettlr](https://www.zettlr.com).

::: astuce
L'inconvénient d'un lien basé sur un identifiant unique, c'est qu'il peut gêner la lecture du contenu, notamment lorsque l'identifiant est une longue série de chiffres. Ajouter un symbole de remplacement dans Préférences (`Ctrl + o` ou `Cmd + ,`) › Symbole de lien pour alléger visuellement le texte de vos fiches en remplaçant les identifiants par une convention personnelle (par exemple une petite manicule : ☞).
:::

## Créer un cosmoscope

Cliquez sur Nouveau cosmoscope (raccourci : `Cmd/Ctrl + R`) pour lancer la génération d'un nouveau cosmoscope. Il s'affiche automatiquement dans l'interface du logiciel.

Cosma crée automatiquement un rapport d'erreurs qui décrit les problèmes éventuellement rencontrés durant la génération d'un cosmoscope. Cliquez sur Fichier › Historique… (`Cmd/Ctrl + H`) et séletionnez une entrée pour consulter le rapport d'erreurs associé.

#### Citations et bibliographies

Cosma intègre une fonctionnalité de traitement des citations qui repose sur le même écosystème que Zettlr : des données et styles bibliographiques respectant la norme CSL, et la syntaxe définie par Pandoc pour insérer des citations dans un texte.

Vous pouvez utiliser le gestionnaire de références bibliographiques [Zotero](https://www.zotero.org/) avec l'extension [Better BibTeX](https://retorque.re/zotero-better-bibtex/) afin de générer des clés de citation uniques pour chaque référence. Exportez vos données bibliographiques au format CSL JSON et renseignez le fichier dans la configuration de Cosma (voir [Configuration](#configuration)).

Vous pouvez ensuite intégrer les clés de citation au sein de vos fiches en utilisant une syntaxe inspirée par [celle de Pandoc](https://pandoc.org/MANUAL.html#extension-citations) :

```
Sur la raison et la déraison graphique [@goody1979; @christin1995, 46-52]…
```

Cliquez sur Fichier › Nouveau cosmoscope avec citations (`Cmd/Ctrl + Maj + R`) pour générer un cosmoscope avec le traitement des citations activé. Chaque clé de citation est alors remplacée par du texte formaté et une bibliographie est générée en-dessous du corps de chaque fiche contenant des références.

```
Sur la raison et la déraison graphique (Goody 1979 ; Christin 1995, p. 46-52)…

Bibliographie
-------------

GOODY, Jack, 1979. La Raison graphique : la domestication de la pensée sauvage.
  Paris : Les Editions de Minuit. ISBN 978-2-7073-0240-3.

CHRISTIN, Anne-Marie, 1995. L’image écrite, ou, La déraison graphique.
  Paris : Flammarion. Idées et recherches. ISBN 978-2-08-012635-1. 
```

Vous devez relier un fichier de style de citation CSL dans la configuration. Téléchargez des styles depuis la [base de données de Zotero](https://www.zotero.org/styles).

Vous devez relier un fichier de traduction des mots-clés de la notice bibliographique dans la configuration. Téléchargez une nouvelle traduction depuis la [base de donnée CSL](https://github.com/citation-style-language/locales/tree/6b0cb4689127a69852f48608b6d1a879900f418b).

Les données CSL JSON correspondant aux références citées sont enregistrées dans le cosmoscope au format JSON. Vous pouvez retrouver et télécharger ces données en cliquant sur le lien « Données », au bas du menu latéral gauche. Dans le code source du cosmoscope, elles se situent sous la balise `<article id="citation-references">`.

## Historique

Par défaut, Cosma exporte automatiquement chaque cosmoscope horodaté répertoire temporaire  `cosma-history` localisé par le système d'exploitation. Cliquez sur Préférences (`Ctrl + o` ou `Cmd + ,`) › Enregistrer automatiquement les cosmoscopes dans l'historique pour activer ou désactiver l'enregistrement automatique.

Le cosmocope actif est toujours enregistré dans l'historique comme dernière entrée. C'est cette dernière entrée qui est ouverte lors du lancement de l'application. Si l'enregistrement automatique des cosmoscopes est désactivé, cette dernière entrée sera simplement écrasée à chaque nouvelle génération de cosmoscope.

Cliquez sur Fichier › Historique… (`Cmd/Ctrl + H`) pour consulter et gérer les entrées de l'historique à l'aide des boutons suivants.

Modifier la description
: Descrire une entrée pour l'identifier parmis les autres.

Ouvrir dans Cosma
: Ouvrir le cosmoscope dans l'interface de Cosma.

Localiser le fichier
: Révèler le cosmoscope dans l'explorateur de fichier du système d'exploitation.

Rapport d'erreurs
: Afficher le rapport d'erreurs créé lors de la génération du cosmoscope.

Supprimer
: Supprimer une entrée d'historique.

Vider l'historique…
: Supprimer le répertoire temporaire `cosma-history` et toutes les entrées d'historique contenues.

## Utilisation du cosmoscope

### Description générale de l'interface

L'interface de Cosma est organisée en trois colonnes :

Panneau latéral gauche (Menu)
: Regroupe les fonctionnalités permettant de chercher de l'information et de modifier l'affichage de manière globale.

Zone centrale (Graphe)
: Affiche le graphe et les contrôles associés (zoom, focus).

Panneau latéral droit (Fiche)
: Affiche les fiches (métadonnées et contenu) ainsi qu'une liste des liens sortants (Liens) et entrants (Rétroliens).

Vous retrouverez la même interface, les mêmes raccourcis et outils de visualisation dans un cosmoscope ouvert dans l'application Cosma que dans un export ouvert dans un navigateur web. À ceci près que les boutons permettant d'intéragir avec l'application ne s'affichent que dans l'application.

### Graphe

Le graphe situé dans la zone centrale de l'interface affiche des nœuds étiquetés et interreliés. Chaque nœud correspond à une fiche ; l'étiquette correspond au titre de la fiche. Les liens correspondent aux liens établis entre les fiches via leur identifiant.

Survoler un nœud le met temporairement en surbrillance, lui et ses connexions. Cliquer sur un nœud le met en surbrillance, ainsi que ses connexions, et ouvre la fiche correspondante.

Vous pouvez zoomer librement dans le graphe à la souris, au pavé tactile, en double cliquant sur le fond du graphe ou bien avec les boutons dédiés situés en bas à gauche. Appuyez sur la touche `C` pour zoomer sur un nœud sélectionné (dont la fiche est ouverte). Le bouton Recentrer (raccourci : touche `R`) réinitialise le zoom.

Les nœuds sont organisés dans l'espace par un algorithme de simulation de forces. Une barre colorée sous le logo Cosma témoigne de l'état de la simulation (stable ou en calcul). Cliquez sur cette barre (raccourci : touche `Espace`) pour lancer un cycle de simulation supplémentaire.

::: astuce
Quelques pressions rapides sur la touche `Espace` permettent de « déplier » progressivement un graphe emmêlé.
:::

Le graphe n'est pas figé, les nœuds peuvent donc être déplacés par cliquer-glisser. Un nœud déplacé entraine alors toutes ses connexion après lui. Les nœuds et liens restent soumis en permanence à la simulation, donc il n'est pas possible de les disposer manuellement de manière arbitraire. Chaque chargement de cosmoscope entraine une disposition différente de ces entités.

L'affichage du graphe peut être modifié de manière temporaire via les contrôles placés sous Paramètres du graphe dans le panneau latéral gauche. Pour modifier l'affichage de manière permanente, modifiez les valeurs par défaut des paramètres correspondants dans Préférences (`Ctrl + o` ou `Cmd + ,`) › Graphe.

::: astuce
Modifiez la force et la distance maximale entre les nœuds pour adapter l'affichage à la résolution et la taille de votre écran. Ajoutez une force d'attraction vers l'axe vertical/horizontal pour resserrer le graphe et ramener les nœuds isolés plus près du centre.
:::

L'affichage est possible sur tous types d'écrans mais n'est pas optimisé pour les terminaux mobiles : le tactile ne donne pas accès à certaines interactions comme le survol, et les petits écrans restreignent l'utilité du graphe.

### Fiches

Les fiches peuvent êtres ouvertes en cliquant sur un nœud, une entrée de l'index, une suggestion du moteur de recherche, ou un lien dans le corps ou le pied d'une fiche. Ouvrir une fiche affiche son contenu dans le panneau latéral droit.

Dans l'application Cosma, vous pouvez naviguer dans l'historique d'ouverture des fiches avec les boutons Précédent / Suivant situés dans le panneau latéral gauche.

Dans un navigateur web où est ouvert un cosmoscope, ouvrir une fiche met à jour l'URL de la page avec l'identifiant de la fiche : ceci permet de naviguer entre les fiches visitées via les fonctionnalités Précédent / Suivant du navigateur, mais aussi de les retrouver dans l'historique du navigateur ou encore d'obtenir un lien direct vers la fiche à partager.

Cliquer sur le bouton « Fermer » referme le panneau latéral droit de lecture et désélectionne le nœud correspondant dans le graphe.

Les liens présents dans les fiches sont cliquables. Dans un navigateur où est ouvert un cosmoscope, vous pouvez ouvrir ces liens dans un nouvel onglet via un clic droit. Le titre du lien (affiché en infobulle après 1-2 secondes de survol) est celui de la fiche correspondante.

::: astuce
Cliquez sur Préférences (`Ctrl + o` ou `Cmd + ,`) › Symbole de lien pour saisir une chaîne de caractères Unicode arbitraire qui remplacera l'identifiant entre les crochets dans le rendu HTML des fiches. Ceci permet d'alléger visuellement le texte de vos fiches en remplaçant les longs identifiants numériques par une convention personnelle (par exemple une petite manicule : ☞)
:::

En bas de la fiche se trouve une liste des fiches vers lesquelles elle renvoie (liens sortants), ainsi que des fiches qui pointent vers elles (liens entrants ou rétroliens). Les liens et rétroliens sont contextualisés : au survol, une infobulle s'affiche, montrant le paragraphe dans lequel ce lien se trouve dans la fiche correspondante.

### Mode focus

Le bouton Activer le focus (raccourci : touche `F`) situé en bas à gauche du graphe permet de restreindre l'affichage au nœud sélectionné : en mode focus, seules les connexions directes à la fiche sélectionnée sont affichées dans l'interface. Le mode focus ne fonctionne que si vous avez sélectionné une fiche.

Une fois le mode focus activé, vous zoomez automatiquement sur le nœud sélectionné.

Le curseur qui apparaît sous le bouton Activer le focus permet de faire varier la distance d'affichage, jusqu'au maximum indiqué dans Préférences (`Ctrl + o` ou `Cmd + ,`) › Niveau maximum de focus.

::: astuce
Le curseur du niveau de focus est contrôlable via les flèches du clavier. Vous pouvez enchaîner les raccourcis : `F` pour activer le focus, puis les flèches pour augmenter le niveau de focus.
:::

### Moteur de recherche

Le champ de texte situé en haut du panneau latéral gauche est un moteur de recherche qui fonctionne sur les titres de fiches. Il suggère une liste de fiches dont le titre est le plus proche de ce que vous saisissez dans la barre de recherche (*fuzzy search*). Cliquer sur une suggestion sélectionne le nœud correspondant dans le graphe et ouvre la fiche correspondante dans le panneau latéral de droite.

::: important
Les suggestions disponibles sont contraintes par les [filtres](#filtrer-laffichage-par-types) et le [mode focus](#mode-focus) : une fiche masquée par l'une l'autre de ces fonctionnalités ne sera pas accessible via le moteur de recherche. Lorsque vous voulez repartir de zéro pour une nouvelle requête, vous pouvez cliquer sur Réinitialiser l'affichage (raccourci : `Alt` + `R`).
:::

### Filtrer l'affichage par types

La liste des types de fiches située en haut du panneau latéral gauche permet de filtrer l'affichage. Cliquer sur un type permet de masquer et réafficher les fiches du type correspondant dans le graphe, l'index et les suggestions du moteur de recherche. Cliquer sur un type en maintenant la touche `Alt` enfoncée permet de masquer et réafficher les fiches des autres types.

Pour qu'un type apparaisse, il doit être déclaré dans Préférences (`Ctrl + o` ou `Cmd + ,`) › Types de fiches et être attribué à au moins une fiche.

### Mots-clés

La liste des mots-clés située dans le panneau latéral gauche permet de mettre en évidence les fiches qui utilisent chaque mot-clé sélectionné. Sélectionner un mot-clé met en surbrillance l'étiquette des nœuds correspondants dans le graphe et restreint l'index aux fiches correspondantes. Vous pouvez activer simultanément plusieurs mots-clés. Pour désactiver un mot-clé, cliquez à nouveau sur le bouton correspondant.

Pour qu'un mot-clé apparaisse, il suffit qu'il ait été déclaré dans l'en-tête YAML d'au moins une fiche avec le champ `tags` .

### Index

L'index alphabétique des fiches situé dans le panneau latéral gauche permet d'accéder directement à une fiche sans passer par le graphe. Cliquer sur un titre sélectionne le nœud correspondant dans le graphe et ouvre la fiche correspondante. L'index peut être trié par ordre alphabétique croissant ou décroissant. Les filtres, les mots-clés et le mode focus modifient l'affichage de l'index.

### Vues

À tout moment, l'état du graphe (fiche sélectionnée, filtres actifs, mode focus) peut être sauvegardé pour un accès rapide. Ceci fonctionne comme un marque-page. Cliquez sur le bouton Sauvegarder la vue et indiquez un nom. Ceci ajoute un bouton éponyme dans la section Vues du panneau latéral gauche. Cliquer sur ce bouton applique tous les paramètres qui étaient actifs au moment de l'enregistrement de la vue. Cliquer à nouveau sur le bouton rétablit l'affichage normal.

## Partager un cosmoscope

Cliquez sur Fichier › Partager (`Cmd/Ctrl + E`) pour lancer la génération d'un cosmoscope destiné à être partagé.

Cochez les options que vous souhaitez. Elles sont grisés si elles ne sont pas disponibles (nécessite de compléter les Préférences, `Ctrl + o` ou `Cmd + ,`).

Traiter les citations
: Traiter les clés de citation et ajouté la bibliographie aux fiches.

CSS personnalisé
: Appliquer les même modifications d'interface (via CSS) de l'application au cosmoscope exporté.

Le volet À propos du cosmoscope intègre automatiquement les métadonnées (titre, auteur, description, mots-clés) éventuellement renseignées dans Préférences (`Ctrl + o` ou `Cmd + ,`) › Métadonnées.

La barre d'outils présente au sommet du menu latéral gauche ne fonctionne que dans l'application Cosma. Elle est donc masquée dans les cosmoscopes exportés via Partager. Si un titre a été renseigné dans Préférences (`Ctrl + o` ou `Cmd + ,`) › Métadonnées, il s'affiche à l'emplacement qu'occupe habituellement la barre d'outils.

Le fichier `cosmoscope.html` exporté peut être partagé comme n'importe quel fichier informatique : email, transfert de fichiers, messagerie, mise en ligne sur un serveur…

Vous pouvez envoyer un lien vers une fiche en particulier en ajoutant son identifiant précédé d'un croisillon `#` en fin d'URL. Exemple :

`https://domaine.fr/cosmoscope.html#20210427185546`

## Configuration

Cliquez sur Préférences (`Ctrl + o` ou `Cmd + ,`) pour configurer Cosma.

Pour utiliser le logiciel, vous devez impérativement sélectionner dans l'option Général › Répertoire des fiches un répertoire cible d'où sont importés les fichiers Mardown (fiches). Ce répertoire peut être vide ; il en résultera un graphe vide, mais vous pourrez y ajouter des fiches via Fichier › Nouvelle fiche… (`Cmd/Ctrl + N`)

### Général

Sélectionner une langue d'affichage
: Vous choissiez la langue que vous souhaitez appliquer à l'interface de l'application ainsi qu'au cosmoscope générés et exportés.
: Un redémarrage de l'application et/ou une re-génération du cosmoscope est nécessaire pour mettre à jour la langue.

Répertoire des fiches
: Chemin du répertoire contenant les fichiers Markdown à scanner. C'est également le répertoire cible l'ajout de fiches via Fichier › Nouvelle fiche… (`Cmd/Ctrl + N`).

Enregistrer automatiquement les cosmoscopes dans l’historique
: Si coché, chaque cosmoscope généré est ajouté à un répertoire temporaire, peut être renommé pour être retrouvé, réouvert dans l'application Cosma ou partagé.

Symbole de lien
: Saisissez ici une chaîne de caractères Unicode arbitraire. Elle remplacera les identifiants entre les crochets dans le rendu HTML des fiches. Ceci permet d'alléger visuellement le texte de vos fiches en remplaçant les longs identifiants numériques par une convention personnelle (par exemple une petite manicule : ☞).

### Types de fiches

Liste des types de fiches. Chaque type est défini par un nom et une couleur prévisualisée dans le sélecteur, puis dans le tableau. Ajoutez `type: nom` à l'en-tête en YAML d'une fiche pour lui attribuer ce type et ainsi attribuer une couleur au nœud correspondant à la fiche.

::: note
Le type "undefined" (couleur par défaut des nœuds) peut être modifié, mais ne peut être retiré.
:::

### Types de liens

Liste des types de liens. Chaque type est défini par un nom, une couleur et un type de trait. Les types de traits disponibles sont :

- continu (*simple*)
- double (*double*)
- tirets (*dash*)
- pointillés (*dotted*)

Pour qualifier un lien (lui attribuer la couleur et le type de trait) dans une fiche, préfixez l'identifiant par le nom d'un type de lien suivi d'un deux-points. Exemple : `[[type_de_lien:ID]]`.

::: note
Le type "undefined" (couleur et type de trait par défaut des liens) peut être modifié, mais ne peut être retiré.
:::

::: astuce
Le paramétrage visuel des liens a une incidence sur leur lisibilité au sein du graphe. La capture d'écran ci-dessous montre la configuration d'un utilisateur qui a défini trois types de liens qualifiés à la manière d'un thésaurus (`s` pour spécifique, `g` pour générique et `a` pour associé). Les couleurs et les types de traits ont été choisis de manière à renforcer la visibilité des liens qualifiés : les liens non qualifiés (`undefined`) sont en pointillés (`dotted`) gris (`grey`), tandis que les liens qualifiés sont plus lisibles, grâce à des traits continus (`simple`) et une couleur plus foncée (`black`).
:::

![Exemple de configuration des types de liens](https://hyperotlet.huma-num.fr/cosma/img/link-types.png)

### Graphe

Couleur de fond
: La couleur de fond du graphe.

::: note
Modifier la couleur des autres éléments de l'interface nécessite d'ajouter une feuille de style CSS dans Préférences › Avancé.
:::

Couleur de surbrillance
: La couleur qui s'applique aux nœuds ainsi qu'aux liens lors du survol et de la sélection.

Taille du texte des étiquettes
: Texte au-dessous des nœuds.

Niveau maximum de focus
: Le mode focus restreint l'affichage au nœud sélectionné et à ses connexions directes (1 nœud de distance). Il est possible de faire varier la distance d'affichage du mode focus : passer à 2 affiche les connexions à 1 et 2 nœuds de distance ; passer à 3 étend l'affichage à 3 nœuds de distance ; etc. La valeur indiquée dans Niveau maximum de focus définit le seuil maximum pour cette fonctionnalité et le nombre de niveaux à analyser (nécessite plus de ressources si augmente).

Afficher des flèches sur les liens
: Permet d'obtenir un graphe orienté ou non orienté.

Les paramètres suivants peuvent être modifiés en direct dans le cosmoscope. Vous pouvez ainsi tester différentes valeurs avant de les reporter dans la configuration. Ce sont les valeurs définies dans la configuration qui sont rétablies à chaque rechargement du cosmoscope, et chaque nouvelle génération d'un cosmoscope.

Taille du texte des étiquettes
: Définit la taille du texte des étiquettes des nœuds du graphe, c'est-à-dire de la place que prend le titre de chaque fiche sous le nœud correspondant. L'unité implicite est le pixel.

Force d'attraction
: Correspond à la puissance globale de l'attraction simulée. Plus la valeur est faible, plus les liens entre les nœuds sont relâchés.

Distance maximum entre les nœuds
: Correspond au seuil maximal de répulsion entre les nœuds, quelle que soit la force. Au-delà d'une valeur de 1000, ce paramètre n'a pas d'effet mesurable.

Attraction verticale/horizontale
: Force d'attraction vers l'axe vertical/horizontal, de 0 à 1. Une valeur de `0` signifie que le paramètre est désactivé. Appliquer une force verticale/horizontale resserre le graphe et permet de ramener plus près du centre les nœuds isolés.

### Métadonnées

Les champs suivants sont intégrés à l'en-tête (`<head>`) du code source des cosmoscope exportés.

Titre
: Texte ajouté en haut du panneau latéral gauche à l'export.

Auteur, Mots-clés, Description
: Notés dans le panneau latéral droit au clique sur le bouton À propos.

### Bibliographie

Indiquez ici les chemins des fichiers de données, style et localisation bibliographique. Les trois fichiers sont requis pour le traitement des citations.

### Vues

Gérez ici les vues enregistrées dans le cosmoscope.

### Avancé

Afficher les outils de développement
: Cette option permet d'afficher les outils de développement du logiciel depuis Affichage › Outils de développement. Cliquez sur Afficher l'inspecteur web pour inspecter le code de l'interface de Cosma.

CSS personnalisée
: Indiquez ici le chemin d'un fichier CSS pour personnaliser l'interface du cosmocope. Il sera nécessaire de re-générer un cosmoscope (`Cmd/Ctrl + R`).

Pour connaître les sélecteurs à utiliser pour telle ou telle déclaration, vous pouvez :

- cliquer sur Affichage › Outils de développement (nécessite d'avoir activé Afficher les outils de développement) ;
- ouvrir le cosmoscope dans un navigateur web et utiliser les outils de développement du navigateur ;
- consulter le code source de Cosma, spécifiquement `/cosma-core/template.njk` (pour connaître la structure HTML du cosmoscope), `/cosma-core/styles.css` et `/cosma-core/print.css` (pour les styles d'impression activés lors de l'impression d'une fiche).

::: astuce
Les feuilles de style du cosmoscope utilisent notamment des variables CSS pour définir les couleurs et les polices utilisées. Vous pouvez redéfinir uniquement ces variables pour modifier tous les éléments d'interface auxquels elles s'appliquent. Dans l'exemple ci-dessous, le fichier `custom.css` contient des déclarations qui modifient les polices utilisées dans le cosmoscope :

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

En plus de l'interface graphique de Cosma ("GUI"), nous proposons une interface en ligne de commande ("CLI"). Cette dernière vous permet, comme avec l'interface graphique, de générer des cosmoscopes. La différence est que la génération, la création de fiches et la configuration se font avec des lignes de commandes.

### Téléchargement et installation

Vous devez installer [NodeJS](https://nodejs.org/), version 15 minimum.

Entrer la commande suivante dans votre terminal pour installer Cosma CLI.

```
npm i @graphlab-fr/cosma -g
```

### Configuration

La configuration est contenus dans un fichier YAML `config.yml` à la racine du répertoire de l'application. Il est généré par Cosma-Cli avec les paramètres par défaut si un fichier du même nom n'existe pas.

Pour accéder au fichier de configuration et l'éditer, rendez-vous dans le répertoire

- windows : `%USERPROFILE%\AppData\Roaming\npm\node_modules\@graphlab-fr\cosma`
- macOS, linux : `/usr/local/lib/node_modules\@graphlab-fr\cosma`

La configuration par défaut vous sert de modèle. Elle comporte les mêmes paramètres que l'interface graphique de Cosma. Un paramètre qui n'est pas inscrit dans le fichier a une valeur par défaut.

::: important
Ne supprimez pas les types "undefined" qui servent à définir l'apparence par défaut des éléments.
:::

### Commandes

Pour entrer les commandes suivantes, vous devez ouvrir un terminal à la racine du dépôt de Cosma-cli que vous avez décompressé.

Générer un fichier de configuration modèle :

```
cosma config
cosma c
```

Créer une fiche (mode formulaire) :

```
cosma record
cosma r
```

Créer une fiche (mode *one-liner*) :

```
cosma autorecord <titre> <type> <mots-clés>
cosma a <titre> <type> <mots-clés>
```

- `<titre>` correspond au titre de la fiche, qui est aussi le nom du fichier généré ;
- `<type>` (facultatif) correspond à l’un des types définis dans la configuration ("undefined" par défaut) ;
- `<mots-clés>` (facultatif) est une liste de mots-clés séparés par des virgules (sans espaces).

Créer une série de fiches :

```
cosma batchrecord <path>
cosma b <path>
```

Seuls les fichiers JSON sont pris en charge, pour le moment. Votre fichier (pointé par le `<path>`) doit être formaté comme l'exemple ci-dessous. Les identifiants des fiches générés sont des horodatages arrangés. Ils indiquent l'année, le mois, le jour, mais les heures, minutes et secondes dépassent les horaire normaux (ex : 25 heures, 64 minutes et 95 secondes).

```json
[
  {
    "title": "record name 1",
    "type": "idea",
    "tags": "tag 1,tag 2",
    "content": "Lorem ipsum dolor sit [[20210704100343]] amet, consectetur adipiscing elit."
  },
  ...
]
```

Créer un cosmoscope :

```
cosma modelize
cosma m
```

Avec citations :

```
cosma modelize --citeproc
cosma m -c
```

En mode publication :

```
cosma modelize --publish
cosma m -p
```

En incluant la feuille de style CSS personnalisée

```
cosma modelize --load_css_custom
cosma m -css
```

Vous pouvez combiner les différentes options d'export comme suit :

```
cosma modelize --publish --citeproc --load_css_custom
cosma m -p -c -css
```

Vous pouvez réécrire les paramètres de ce fichier de configuration "à la volée" (uniquement pour cette commande) directement dans la commande pour générer un cosmoscope.

Réécrire le chemin du répertoire des fiches

```
cosma modelize --files_origin:"D:\fiches"
cosma m -f:"D:\fiches"
```

Réécrire le chemin d'export du cosmoscope

```
cosma modelize --export_target:"C:\desktop"
cosma m -e:"C:\desktop"
```

Réécrire la langue utilisée

```
cosma modelize --lang:"en"
cosma m -l:"en"
```

Réécrire l'enregistrement de l'historique

```
cosma modelize --history:false
cosma m -h:false
```

Enregistrer dans la configuration les paramètres réécrits

```
cosma modelize --save
cosma m -s

cosma m -l:"en" -s
```

## Crédits

### Équipe

- [Arthur Perret](https://www.arthurperret.fr/) (porteur du projet)
- [Guillaume Brioudes](https://myllaume.fr/) (développeur)
- [Clément Borel](https://mica.u-bordeaux-montaigne.fr/borel-clement/) (chercheur)
- [Olivier Le Deuff](http://www.guidedesegares.info/) (chercheur)

### Bibliothèques utilisées

Pour améliorer la maintenabilité et la lisibilité du code source, l’équipe de développement a recouru aux bibliothèques suivantes.

- [D3.js](https://d3js.org/) v4.13.0 (BSD 3-Clause) : Génération du graphe
- [Nunjucks](https://mozilla.github.io/nunjucks/) v3.2.3 (BSD 2-Clause) : Génération du template du Cosmoscope
- [Js-yaml](https://github.com/nodeca/js-yaml) v4.1.0 (MIT License) : Lecture du fichier de configuration et écriture des YAML Front Matter
- [Js-yaml-front-matter](https://github.com/dworthen/js-yaml-front-matter) v4.1.1 (MIT License) : Lecture des YAML Front Matter des fichiers Markdown
- [Markdown-it](https://github.com/markdown-it/markdown-it) v12.3.0 (MIT License) : Conversion Markdown → HTML
- [Markdown-it-attrs](https://www.npmjs.com/package/markdown-it-attrs) v4.0.0  (MIT License) : Traitement des hyperliens Markdown au sein des fiches
- [Citeproc-js](https://github.com/Juris-M/citeproc-js) v2.4.62 (CPAL et AGPL) : Conversion des clés de citation
- [Fuse.js](https://fusejs.io/) v6.4.6 (Apache License 2.0) : Moteur de recherche
- [Moment](https://momentjs.com/) v2.29.1 (MIT License) : Gestion de l'horodatage
