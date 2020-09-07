import fs from 'fs';
import path from 'path';
import http from 'http';
import https from 'https';

import app from './app';
import config from './configs';

const httpServer = http.createServer(app);
const httpsServerOptions = {
  key: fs.readFileSync(path.resolve(process.cwd(), './https/key.pem')),
  cert: fs.readFileSync(path.resolve(process.cwd(), './https/cert.pem')),
};
const httpsServer = https.createServer(httpsServerOptions, app);

const { HTTP_PORT, HTTPS_PORT } = config;

httpServer.listen(HTTP_PORT, () => {
    console.log(`Blasthire backend is live!
         - http://localhost:${HTTP_PORT}`);

    httpsServer.listen(HTTPS_PORT, () => {
        console.log(`\t - https://localhost:${HTTPS_PORT}`);
    });
});
