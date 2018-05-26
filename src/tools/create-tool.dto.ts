import { IsString, Length } from 'class-validator';

export class CreateToolDto {
  @IsString() @Length(5, 128) readonly name: string;
}
