import { Router } from 'express';
import RespondEx from '@respondex/core';

const router = Router();

router.use('/', (req, res) => RespondEx.successWithoutData('Success', res));

export default router;
