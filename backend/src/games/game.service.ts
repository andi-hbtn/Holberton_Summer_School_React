import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GameEntity } from './models/Game.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GameService {
	constructor(@InjectRepository(GameEntity) private readonly gameRepo: Repository<GameEntity>) { }


	public async getAllGames() {
		const result = await this.gameRepo.find();
		return result;
	}

	public async createGame(data: any, imageUrl: string) {

		const newGame = {
			title: data.title,
			category: data.category,
			price: data.price,
			discount: data.discount,
			description: data.description,
			image: imageUrl,
		}
		const result = await this.gameRepo.save(newGame);
		return result;
	}


}
