
import { User } from "src/users/user.entity"

export class CreatePhotoDto {
  readonly id: number
  readonly name: string
  readonly description: string
  readonly isPublish: boolean
  readonly userdata: User
}