import {execSync} from 'child_process';
import DevServer from 'serve-dev';

new DevServer({
  root: 'public',
  port: 9000,
  openPageOnStart: true,
  watch: {
    paths: ['src', '../src'],
    onChange(filePath) {
      console.log(`${filePath} changed.`);
      return {shouldReloadPage: true};
    }
  },
}).start()
