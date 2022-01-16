# cosma-docs

Shared manuals for [cosma](https://github.com/graphlab-fr/cosma) and [cosma-cli](https://github.com/graphlab-fr/cosma-cli). The manuals are translated (english, french) and written for users and developers.

You can open the documentation in each repository with the following command.

```
npm run doc
```

Updates to cosma-docs must me pulled manually in each repository by running one of these commands:

```
npm run modules
git submodule foreach git pull origin master
```