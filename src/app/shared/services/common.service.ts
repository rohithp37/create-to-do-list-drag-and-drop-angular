import { Injectable } from "@angular/core";


@Injectable()

export class CommonService {
    tasks = {

        todo: [
            {
                title: 'Task First',
                description: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
                priority: 'Critical'
            },
            {
                title: 'Task Second',
                description: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
                priority: 'Average'
            },
            {
                title: 'Task Third',
                description: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
                priority: 'High'
            }
        ],

        progress: [
            {
                title: 'Task First',
                description: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
                priority: 'Critical'
            },
            {
                title: 'Task Second',
                description: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
                priority: 'Average'
            }
        ],

        completed: [
            {
                title: 'Task First',
                description: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
                priority: 'Critical'
            }
        ]
    };

    getTasks() {
        return this.tasks;
    }

    setTasks(tasks: any) {
        this.tasks = JSON.parse(JSON.stringify(tasks));
    }
}