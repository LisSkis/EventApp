import mongoose, { Schema } from 'mongoose';

const eventSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  eventDate: {
    type: String,
    required: true,
  }
});

export default mongoose.model('Event', eventSchema);
