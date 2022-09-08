
import { Component, Input } from '@angular/core';
import { TaskModel } from '../../models/common.model';

@Component({
    selector: 'task-card',
    templateUrl: './task-card.component.html'
})

export class TaskCardCompoent {
    @Input() task: TaskModel = {};

    getPriorityClass(task: any){
        if(task){
        return task.toLowerCase();
        }
    }
}