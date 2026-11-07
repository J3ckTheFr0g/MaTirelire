// Copie la version web (dossier parent) dans www/ : index.html reste la seule source de l'application.
import {cpSync, mkdirSync, rmSync} from 'node:fs';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const www = join(root, 'mobile', 'www');
const FILES = ['index.html', 'favicon.svg', 'mascotte.svg', 'apple-touch-icon.png'];
const DIRS = ['img', 'vendor'];   // emojis et mascottes Noto (images, animations) et lecteur Lottie, utilisés depuis la v2.40

rmSync(www, {recursive: true, force: true});
mkdirSync(www, {recursive: true});
for (const f of FILES) cpSync(join(root, f), join(www, f));
for (const d of DIRS) cpSync(join(root, d), join(www, d), {recursive: true});
console.log(`www/ : ${FILES.length} fichiers et ${DIRS.length} dossiers (${DIRS.join(", ")}) copiés depuis la version web`);
