import fs from 'fs';
import path from 'path';
import http from 'http';
import https from 'https';

import app from './app';
import config from './configs';
import Logger from './helpers/logger';

const httpServer = http.createServer(app);
const httpsServerOptions = {
  key: fs.readFileSync(path.resolve(process.cwd(), './https/key.pem')),
  cert: fs.readFileSync(path.resolve(process.cwd(), './https/cert.pem')),
};
const httpsServer = https.createServer(httpsServerOptions, app);

const { HTTP_PORT, HTTPS_PORT } = config;

httpServer.listen(HTTP_PORT, () => {
  Logger.info(`Meet backend is live!
         - http://localhost:${HTTP_PORT}`);

  httpsServer.listen(HTTPS_PORT, () => {
    Logger.info(`\t - https://localhost:${HTTPS_PORT}`);
  });
});
