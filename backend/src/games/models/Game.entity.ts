import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

enum categoryEnum {
	war = "war",
	race = "race",
	action = "action"
}

@Entity('games')
export class GameEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	title: string

	@Column({
		type: "enum",
		enum: categoryEnum,
		default: categoryEnum.war
	})
	category: categoryEnum

	@Column()
	price: number

	@Column()
	discount: number

	@Column({ length: 1500 })
	description: string;

	@Column()
	image: string;
}