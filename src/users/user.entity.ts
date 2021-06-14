import { Cat } from "src/cats/cat.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string

  @Column()
  password: string

  @Column()
  isActive: boolean

  @OneToOne((type) => Cat)
  @JoinColumn()
  cat: Cat;
}