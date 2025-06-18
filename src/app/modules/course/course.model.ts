// import { Schema, model } from 'mongoose';
// import { ICourse } from './course.interface';

// const topicSchema = new Schema({
//   title: { type: String, required: true },
//   content: { type: String, required: true },
//   quiz: { type: String },
// });

// const lessonSchema = new Schema({
//   title: { type: String, required: true },
//   lessonNumber: { type: Number, required: true },
//   topics: [topicSchema],
// });

// const courseSchema = new Schema<ICourse>(
//   {
//     title: { type: String, required: true },
//     description: { type: String, required: true },
//     createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//     lessons: [lessonSchema],
//   },
//   {
//     timestamps: true,
//     toJSON: { virtuals: true },
//     toObject: { virtuals: true },
//   }
// );



// export const Course = model<ICourse>('Course', courseSchema);


import { Schema, model } from 'mongoose';
import { ICourse } from './course.interface';

// Topic Schema
const topicSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    quiz: { type: String },
  },
  { _id: false } // nested schema গুলোর জন্য _id disable করা ভালো
);

// Lesson Schema
const lessonSchema = new Schema(
  {
    title: { type: String, required: true },
    lessonNumber: { type: Number, required: true },
    topics: [topicSchema],
  },
  { _id: false }
);

// Course Schema
const courseSchema = new Schema<ICourse>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    lessons: [lessonSchema],

    // Performance tracking fields:
    views: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    feedbacks: [
      {
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        comment: { type: String },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Export Course model
export const Course = model<ICourse>('Course', courseSchema);
