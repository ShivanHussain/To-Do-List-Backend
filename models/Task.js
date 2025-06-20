import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  title: 
  { 
    type: String, 
    required: true 
  },
  description: 
  {
    type: String,
    required: true
  },
  priority: 
  { 
    type: String, 
    enum: ['Low', 'Medium', 'High'], 
    default: 'Low' 
  },
  category: 
  {
    type: String
  },
  dueDate:
  {
    type: Date
  },
  completed: 
  { 
    type: Boolean, 
    default: false 
  }
}, { timestamps: true });

export default mongoose.model('Task', TaskSchema);