import { Controller, Get, Post, HttpException, Body, HttpCode, UseInterceptors, UploadedFiles, Param, Res } from '@nestjs/common';
import { Response } from "express";
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
const { v4: uuidv4 } = require('uuid');
import { GameService } from './game.service';

@Controller('games')
export class GameController {
	constructor(private readonly gameService: GameService) { }


	@Get('all')
	public async getAll() {
		try {
			const result = this.gameService.getAllGames();
			return result;
		} catch (error) {
			console.log("error in get all testimonials", error);
			throw new HttpException('Un error has been encountered during the get', 503)
		}
	}

	@Post('create')
	@HttpCode(200)
	@UseInterceptors(AnyFilesInterceptor(
		{
			storage: diskStorage({
				destination: './uploads',
				filename: (req, file, collback) => {
					const imageName: string = file.originalname.split(".")[0] + uuidv4() + "." + file.originalname.split(".")[1]
					collback(null, imageName);
				}
			})
		}
	))
	public async create(@Body() bodyParam: any, @UploadedFiles() file: Express.Multer.File) {
		try {
			//console.log("file----", file);
			const result = await this.gameService.createGame(bodyParam, file[0].filename);
			return result;

		} catch (error) {
			console.log("error in get all testimonials", error);
			throw new HttpException('Un error has been encountered during the get', 503)
		}
	}

	@Get('uploads/:path')
	public async getImage(
		@Param('path') path: string,
		@Res() res: Response
	) {
		console.log("path----", path);
		res.setHeader('Content-Type', 'image/jpeg');
		res.sendFile(path, { root: 'uploads' })
	}

}