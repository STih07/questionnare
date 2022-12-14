import {Inject, Injectable} from '@angular/core';
import {STORAGE} from "../utils/storage.key";
import {BehaviorSubject, map, Observable, of} from "rxjs";
import {Question} from "../models/question";

@Injectable()
export class QuestionsService {

  readonly STORAGE_KEY = 'questions';

  private questionsState$ = new BehaviorSubject<Question[]>(this.getAll());

  constructor(
    @Inject(STORAGE) private storage: Storage
  ) { }

  getQuestions$(): Observable<Question[]> {
    return this.questionsState$.pipe(
      map(questions => [...questions])
    );
  }

  addQuestion(question: Omit<Question, 'id' | 'createdAt'>) {
    const questions = [...this.questionsState$.value];
    questions.push({
      ...question,
      id: this.getNewId(),
      createdAt: new Date(),
    } as Question);
    this.updateState(questions);
  }

  removeQuestion(id: number) {
    const questions = [...this.questionsState$.value].filter(q => q.id !== id);
    this.updateState(questions);
  }

  editQuestion(id: number, data: Question) {
    const questions = [...this.questionsState$.value];
    const indexOfQuestion = questions.findIndex(q => q.id === id);
    console.log(questions[indexOfQuestion] );
    const oldQuestion = questions[indexOfQuestion];
    questions[indexOfQuestion] = {
      ...data,
      createdAt: oldQuestion.createdAt,
      id: oldQuestion.id,
      lastUpdatedAt: new Date()
    };
    console.log(questions[indexOfQuestion] );
    this.updateState(questions);
  }

  answerQuestion<T extends Question = any>(id: number, answer: T['answer']) {
    const questions = [...this.questionsState$.value];
    const question = questions.find(q => q.id === id);
    if (question) {
      question.answer = answer;
      question.answeredAt = new Date();
      question.lastUpdatedAt = new Date();
    }
    this.updateState(questions);
  }

  clearAnswer<T extends Question = any>(id: number) {
    const questions = [...this.questionsState$.value];
    const question = questions.find(q => q.id === id);
    if (question) {
      question.answer = undefined;
      question.answeredAt = undefined;
      question.lastUpdatedAt = new Date();
    }
    this.updateState(questions);
  }



  private getNewId() {
    const questions = this.questionsState$.value;
    const lastId = questions[questions.length - 1]?.id ?? 0;
    return lastId + 1;
  }

  private getAll(): Question[] {
    const data = this.storage.getItem(this.STORAGE_KEY);
    const questions = JSON.parse(data as string) ?? [];
    return questions;
  }

  private updateState(data: Question[]): void {
    this.storage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    this.questionsState$.next(data);
  }

}
