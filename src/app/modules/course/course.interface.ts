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

export interface ICourse {
  title: string;
  description: string;
  User: Types.ObjectId;
  lessons?: ILesson[];
}
