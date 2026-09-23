import express from 'express';
import Thread from '../models/Thread.js';
import getOpenAIAPIResponse from '../utils/openai.js';

const router = express.Router();

router.get('/thread', async (req, res) => {
    try {
        const thread = await Thread.find({}).sort({ updatedAt: -1 });
        res.json(thread);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to fetch threads" });
    }
});

router.get('/thread/:threadId', async (req, res) => {
    const { threadId } = req.params;
    try {
        const thread = await Thread.findOne({ threadId });
        if (!thread) {
            return res.status(404).json({ error: "thread not found" });
        }
        res.json(thread.messages);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to fetch threads" });
    }
});

router.delete('/thread/:threadId', async (req, res) => {
    const { threadId } = req.params;
    try {
        const thread = await Thread.findOneAndDelete({ threadId });
        if (!thread) {
            return res.status(404).json({ error: "thread not found" });
        }
        res.status(200).json({ message: 'Thread deleted' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to fetch threads" });
    }
});

router.post('/chat', async (req, res) => {
    const { threadId, message } = req.body;
    if (!threadId || !message) {
        return res.status(400).json({ error: 'missing required fields' });
    }
    try {
        console.log("1. Finding thread...");
        let thread = await Thread.findOne({ threadId });

        if (!thread) {
            thread = new Thread({
                threadId,
                title: message,
                messages: [{ role: 'user', content: message }],
            });
        } else {
            thread.messages.push({ role: 'user', content: message });
        }

        const assistantReply = await getOpenAIAPIResponse(message);

        thread.messages.push({ role: 'assistant', content: assistantReply });
        thread.updatedAt = new Date();
        await thread.save();
        console.log("6. Thread saved successfully");
        return res.status(200).json({ reply: assistantReply });
    } catch (err) {
        console.log("ERROR CAUGHT:", err);
        return res.status(500).json({ error: "Failed to save thread" });
    }
});

export default router;