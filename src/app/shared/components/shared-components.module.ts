import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TaskCardCompoent } from './task-card/task-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddFormComponent } from './add-form/add-form.component';
import { AppSharedMaterialModule } from '../shared-material.module';

const components = [
    TaskCardCompoent,
    AddFormComponent
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AppSharedMaterialModule
    ],
    declarations: [ ...components ],
    exports: [ ...components, AppSharedMaterialModule ]
})

export class SharedComponentModule {}