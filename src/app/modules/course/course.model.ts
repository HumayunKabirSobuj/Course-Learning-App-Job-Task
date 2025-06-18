import { Schema, model } from 'mongoose';
import { ICourse } from './course.interface';

const topicSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  quiz: { type: String },
});

const lessonSchema = new Schema({
  title: { type: String, required: true },
  lessonNumber: { type: Number, required: true },
  topics: [topicSchema],
});

const courseSchema = new Schema<ICourse>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    lessons: [lessonSchema],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export const Course = model<ICourse>('Course', courseSchema);
