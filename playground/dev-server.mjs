import {execSync} from 'child_process';
import DevServer from 'serve-dev';
import build from './build.mjs';

new DevServer({
  root: 'public',
  port: 9000,
  openPageOnStart: true,
  watch: {
    paths: ['src', 'public/index.html', '../src'],
    async onChange(filePath) {
      if (filePath.startsWith('..')) {
        execSync('cd ../ && yarn build');
        await build();
        return {shouldReloadPage: true};
      }

      if (filePath.includes('.ts')) {
        await build();
        return {shouldReloadPage: true};
      }

      return {shouldReloadPage: true};
    }
  },
}).start()
