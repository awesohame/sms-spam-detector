import { Router } from 'express';

import { predictSpamSms } from '../controllers/predictspam.controller.js';

const router = Router();

router.route('/sms').post(predictSpamSms);

export default router;