import { Schema, model } from 'mongoose';
import { ICourse } from './course.interface';

const topicSchema = new Schema({
  title: String,
  content: String,
  quiz:{ type: String, required: false },
});

const lessonSchema = new Schema({
  title: { type: String, required: true },
  lessonNumber: Number,
  topics: [topicSchema],
});

const courseSchema = new Schema<ICourse>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    User: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    lessons: [lessonSchema],
  },
  { timestamps: true }
);

export const Course = model<ICourse>('Course', courseSchema);
