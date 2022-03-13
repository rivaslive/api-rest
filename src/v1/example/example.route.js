import express from 'express';
import { getAllExample } from './example.controller';

const router = express.Router();

router.get('/', getAllExample);

export default router;
