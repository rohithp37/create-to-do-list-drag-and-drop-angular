import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppSharedModule } from './shared/shared.module';
import { CommonService } from './shared/services/common.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppDashbaordComponent } from './views/dashboard/dashboard.component';
import { TaskFormComponent } from './views/task-form/task-form.component';


@NgModule({
  declarations: [
    AppComponent,
    AppDashbaordComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppSharedModule,
    BrowserAnimationsModule
  ],
  providers: [ CommonService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
