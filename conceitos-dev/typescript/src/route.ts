import { Request, Response } from 'express';
import createUSer from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
    const user = createUSer({
        email: 'igorapalvesribeiro@gmail.com',
        password: '123456',
        techs: ['Node.js', 'React', 'React Native',
            { title: 'Javascript', experience: 100 }]
    });

    return response.json({ message: 'Hello World' });
}