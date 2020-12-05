import strip from '@rollup/plugin-strip';

import path from 'path';

const PACKAGE_ROOT_PATH = process.cwd();
const PKG_JSON = require(path.join(PACKAGE_ROOT_PATH, 'package.json'));

export default {
    input: PKG_JSON.input,
    external: Object.keys(PKG_JSON.dependencies || {}).filter((key) =>
        /(^core-)|(^d3-)/.test(key)
    ),
    output: {
        format: 'esm',
        dir: 'dist',
        exports: 'named',
        banner: `// ${PKG_JSON.name} v${
            PKG_JSON.version
        } \n// Copyright ${new Date().getFullYear()} ${PKG_JSON.author.name}\n`,
    },
    plugins: [
        strip({
            include: '**/*.(mjs|js)',
            exlude: 'tests/**/*',
            debugger: true,
            sourceMap: false,
        }),
    ],
};
