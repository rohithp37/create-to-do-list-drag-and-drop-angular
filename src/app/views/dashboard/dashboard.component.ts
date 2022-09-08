import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonService } from 'src/app/shared/services/common.service';
import { TaskModel } from 'src/app/shared/models/common.model';
import { Router } from '@angular/router';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})

export class AppDashbaordComponent implements OnInit {

    taskList: any = {};
    todo: TaskModel[] = [];
    progress: TaskModel[] = [];
    completed: TaskModel[] = [];

    constructor(
        private commonService: CommonService,
        private router: Router
    ){}

    ngOnInit(): void {
        this.taskList = this.commonService.getTasks();
        this.todo = JSON.parse(JSON.stringify(this.taskList.todo));
        this.progress = JSON.parse(JSON.stringify(this.taskList.progress));
        this.completed = JSON.parse(JSON.stringify(this.taskList.completed));
    }

    drop(event: CdkDragDrop<TaskModel[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex,
            );
        }
    }

    addNewTask(){
        this.router.navigate(['./add']);
    }

}