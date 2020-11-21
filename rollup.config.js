import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import path from 'path';

const PACKAGE_ROOT_PATH = process.cwd();
const PKG_JSON = require(path.join(PACKAGE_ROOT_PATH, 'package.json'));

const name = PKG_JSON.name
    .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
    .replace(/^\w/, (m) => m.toUpperCase())
    .replace(/-\w/g, (m) => m[1].toUpperCase());

export default {
    input: PKG_JSON.svelte,
    output: [
        { file: PKG_JSON.module, format: 'es' },
        { file: PKG_JSON.main, format: 'umd', name },
    ],
    plugins: [
        svelte({
            customElement: true,
        }),
        svelte(),
        resolve(),
    ],
};
