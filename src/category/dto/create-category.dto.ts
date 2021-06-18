import { Question } from "src/questions/question.entity"

export class CreateCategoryDto {
  readonly id: number
  readonly name: string
  readonly questions: Question[]
}