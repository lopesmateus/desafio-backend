import { Provider } from '@nestjs/common';
import axios from 'axios';

export const libProviders: Provider[] = [
  {
    provide: 'HTTP_CLIENT',
    useValue: axios,
  },
];