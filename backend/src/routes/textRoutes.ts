import { Router } from 'express';
import { getAllTexts, createText } from '../controllers/textControllers';

const router = Router();

router.get('/texts', getAllTexts);
router.post('/texts', createText);

export default router;