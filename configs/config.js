import isProd from '../client/src/utils/util';
import devConfig from './config.dev';
import prodConfig from './config.prod';

let config;
if (isProd) {
  config = prodConfig;
} else {
  config = devConfig;
}

export default config;
