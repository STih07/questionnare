import { Pipe, PipeTransform } from '@angular/core';
import {QuestionType} from "../models/question";

@Pipe({
  name: 'questionType'
})
export class QuestionTypePipe implements PipeTransform {

  transform(value: QuestionType): string {
    switch (value) {
      case QuestionType.SINGLE:
        return 'Single';
      case QuestionType.MULTIPLE:
        return 'Multiple';
      case QuestionType.OPEN:
        return 'Open';
      default:
        return 'O_o';
    }
  }

}
