import {execSync} from 'child_process';
import DevServer from 'serve-dev';

new DevServer({
  root: 'public',
  port: 9000,
  openPageOnStart: true,
  watch: {
    paths: ['src', '../src'],
    onChange(filePath) {
      if (filePath.startsWith('..')) {
        execSync('cd ../ && yarn build && cd playground && yarn build');
        return {shouldReloadPage: true};
      }

      if (filePath.includes('.ts')) {
        execSync('yarn build');
        return {shouldReloadPage: true};
      }

      return {shouldReloadPage: true};
    }
  },
}).start()
