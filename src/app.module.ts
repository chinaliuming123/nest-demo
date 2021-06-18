import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { UploadController } from './upload/upload.controller';
import { UploadService } from './upload/upload.service';
import { UploadModule } from './upload/upload.module';
import { AuthModule } from './auth/auth.module';
import { PhotosController } from './photos/photos.controller';
import { PhotosService } from './photos/photos.service';
import { PhotosModule } from './photos/photos.module';
import { QuestionsController } from './questions/questions.controller';
import { QuestionsService } from './questions/questions.service';
import { QuestionsModule } from './questions/questions.module';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [CatsModule,
    TypeOrmModule.forRoot(),
    UsersModule,
    UploadModule,
    AuthModule,
    PhotosModule,
    QuestionsModule,
    CategoryModule,
  ],
  controllers: [AppController, CatsController, UsersController, UploadController, PhotosController, QuestionsController, CategoryController],
  providers: [AppService, CatsService, UsersService, UploadService, PhotosService, QuestionsService, CategoryService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // .forRoutes('cats')
      // .forRoutes({ path: 'cats', method: RequestMethod.GET })
      .forRoutes(CatsController)
  }
}
