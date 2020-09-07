import express from 'express';
import RespondEx from '@respondex/core';

const app = express();

app.use('*', (req, res) => RespondEx.errorByType('NotFound', res));

export default app;
