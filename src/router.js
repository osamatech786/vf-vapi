import { Router } from 'express';
import { customLLMHandler } from './handlers/custom-llm/index.js';

const router = Router();

router.post('/chat/completions', customLLMHandler.dmAPI);

router.get('/chat/completions', (req, res) => {
    res.send({ message: 'GET is working, but this is a POST route.' });
});

export { router };
