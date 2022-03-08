import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: 'diego',
    email: 'diego@gmail.com',
    password: '23445',
    techs: [
      'Node.js', 
      'ReactJS', 
      'React Native',
      { title: 'Javascript', experience: 90 },
    ],

  });

  return response.json({message: 'Hello World' });
}