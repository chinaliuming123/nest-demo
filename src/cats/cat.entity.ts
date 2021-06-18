import { User } from "src/users/user.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  weight: string

  @OneToOne((type) => User, userdata => userdata.cat)
  metadata: User
}