import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  name: {
      type: String,
  },
  description: {
      type: String,
  }
})

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema)
