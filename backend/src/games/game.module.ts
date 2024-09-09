import { Module } from '@nestjs/common';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { GameEntity } from './models/Game.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([GameEntity])],
  controllers: [GameController],
  providers: [GameService]
})
export class GameModule { }
