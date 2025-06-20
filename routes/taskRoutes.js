import express from 'express';
import { getTasks, createTask, updateTask, deleteTask, getTaskById } from '../controllers/taskController.js';

const router = express.Router();

router.get('/', getTasks);
router.post('/create', createTask);
router.get("/:id",getTaskById);
router.put('/update/:id', updateTask);
router.delete('/delete/:id', deleteTask);

export default router;