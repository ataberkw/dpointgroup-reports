import {
  // decorators here


IsString,


IsNumber,

} from 'class-validator';

import { 
  // decorators here
ApiProperty,

} from '@nestjs/swagger';

export class CreateReportDto {
  @ApiProperty()
      @IsNumber()
      ownerId: number;

  @ApiProperty()
    @IsString()
        body: string;

  // Don't forget to use the class-validator decorators in the DTO properties.
}
