export enum QuestionType {
  SINGLE,
  MULTIPLE,
  OPEN
}

interface DummyQuestion {
  id: number;
  description: string;
  type: QuestionType;
  createdAt: Date;
  answer?: string | string[];
}


export interface SingleQuestion extends DummyQuestion {
  type: QuestionType.SINGLE;
  options: string[];
  answer?: string;
}

export interface MultipleQuestion extends DummyQuestion {
  type: QuestionType.SINGLE;
  options: string[];
  answer?: string[];
}

export interface OpenQuestion extends DummyQuestion {
  type: QuestionType.SINGLE;
  answer?: string;
}


export type Question = SingleQuestion | MultipleQuestion | OpenQuestion;
