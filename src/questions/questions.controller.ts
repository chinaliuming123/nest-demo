import { Body, Controller, Post } from '@nestjs/common';
import { CreateCategoryDto } from 'src/category/dto/create-category.dto';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Question } from './question.entity';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
  constructor(private questionsService: QuestionsService) { }
  @Post()
  async create(@Body('question') question: CreateQuestionDto, @Body('category') category: CreateCategoryDto[]): Promise<Question> {
    return await this.questionsService.create(question, category)
  }
}
