import DevServer from 'serve-dev';

new DevServer({
  root: 'playground/public',
  port: 9000,
  watch: {
    paths: ['playground/public', 'playground/src', 'src'],
    onChange(filePath) {
      console.log(`${filePath} changed.`);
      return {shouldReloadPage: true};
    }
  },
}).start()
