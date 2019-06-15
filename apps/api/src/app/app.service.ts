import { Injectable } from '@nestjs/common';
import { Message } from '@npx-angular-ngrx-nest/api-interface';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
