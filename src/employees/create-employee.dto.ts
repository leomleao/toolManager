import { IsString, Length } from 'class-validator';

export class CreateEmployeeDto {
  @IsString() @Length(5, 128) readonly name: string;
}
