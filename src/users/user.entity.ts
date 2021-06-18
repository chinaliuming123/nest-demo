import { Cat } from "src/cats/cat.entity";
import { Photo } from "src/photos/photo.entity";
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

  @OneToOne((type) => Cat, cat => cat.metadata, {
    cascade: true
  })
  @JoinColumn()
  cat: Cat;

  @OneToMany((type) => Photo, photo => photo.userdata, {
    cascade: true
  })
  photos: Photo[]
}