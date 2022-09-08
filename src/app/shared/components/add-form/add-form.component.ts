import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';


@Component({
    selector: 'add-form',
    templateUrl: './add-form.component.html'
})

export class AddFormComponent implements OnInit {

    form!: FormGroup;
    priorityList: any[] = ['Cricital', 'High', 'Average'];

    constructor(
        private router: Router,
        private commonService: CommonService
    ){}
    
    ngOnInit(): void {
        this.formInit();
    }

    formInit(){
        this.form = new FormGroup({
            title: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
            priority: new FormControl('', Validators.required)
        });
    }

    goToDashboard(){
        this.router.navigate(['/']);
    }

    submit(){
        let data = this.commonService.getTasks();
        data.todo.unshift(this.form.value);
        this.router.navigate(['/']);
    }
    
}