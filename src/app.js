import express from 'express';
import RespondEx from '@respondex/core';

import modules from './modules';
import config from './configs';

const app = express();

app.use(`/api/${config.API_VERSION}`, modules);

app.use('*', (req, res) => RespondEx.errorByType('NotFound', res));

export default app;
