# Noto Emoji (Google)

- Images fixes (`*.svg`) : dépôt googlefonts/noto-emoji, dossier `2D/svg`, sous licence Apache 2.0
  (https://github.com/googlefonts/noto-emoji). Copyright 2013 Google LLC.
- Animations (`*.js`, données Lottie converties depuis `lottie.json`) : Noto Emoji Animation,
  sous licence Creative Commons Attribution 4.0 International (CC BY 4.0)
  (https://googlefonts.github.io/noto-emoji-animation/).

Les fichiers `.js` contiennent les données Lottie d'origine, inchangées, enveloppées dans un appel
`__noto(code, json)` pour pouvoir être chargées aussi quand la page est ouverte depuis un fichier local.
