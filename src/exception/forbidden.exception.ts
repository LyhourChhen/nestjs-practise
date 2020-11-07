import { HttpException, HttpStatus } from '@nestjs/common';

export class CForbiddenException extends HttpException {
  constructor() {
    super('Forbidden', HttpStatus.FORBIDDEN);
  }
}
