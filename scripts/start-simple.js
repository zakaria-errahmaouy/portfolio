const upath = require('upath');

const browserSyncPath = upath.resolve(upath.dirname(__filename), '../node_modules/.bin/browser-sync');

console.log('Starting simple server from root directory...');

const { spawn } = require('child_process');

const browserSync = spawn(browserSyncPath, [
    '--reload-delay', '2000',
    '--reload-debounce', '2000',
    '.',
    '-w',
    '--no-online'
], {
    stdio: 'inherit',
    shell: true,
    cwd: upath.resolve(upath.dirname(__filename), '..')
});

browserSync.on('close', (code) => {
    console.log(`BrowserSync process exited with code ${code}`);
});

browserSync.on('error', (err) => {
    console.error('Failed to start BrowserSync:', err);
});
