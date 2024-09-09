import { Module } from '@nestjs/common';
import { GameModule } from './games/game.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameEntity } from './games/models/Game.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'Andi',
      password: 'andi',
      database: 'summer_school',
      entities: [GameEntity],
      synchronize: true,
    })
    ,
    GameModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
