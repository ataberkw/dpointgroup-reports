import { ApiProperty } from '@nestjs/swagger';

export class Report {
@ApiProperty()
ownerId: number;

@ApiProperty()
body: string;

  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
