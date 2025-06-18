// import { Types } from 'mongoose';

// export interface ITopic {
//   title: string;
//   content: string;
//   quiz?: string;
// }

// export interface ILesson {
//   title: string;
//   lessonNumber: number;
//   topics: ITopic[];
// }

// export interface ICourse {
//   title: string;
//   description: string;
//   createdBy: Types.ObjectId;
//   lessons?: ILesson[];
// }


import { Types } from 'mongoose';

export interface ITopic {
  title: string;
  content: string;
  quiz?: string;
}

export interface ILesson {
  title: string;
  lessonNumber: number;
  topics: ITopic[];
}

export interface IFeedback {
  user: Types.ObjectId;
  comment: string;
  createdAt?: Date;
}

export interface ICourse {
  title: string;
  description: string;
  createdBy: Types.ObjectId;
  lessons?: ILesson[];

  views?: Types.ObjectId[]; // ✅ For tracking views
  likes?: Types.ObjectId[]; // ✅ For likes
  feedbacks?: IFeedback[];  // ✅ For feedback comments
}
