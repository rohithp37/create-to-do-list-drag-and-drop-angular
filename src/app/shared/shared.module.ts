import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedComponentModule } from "./components/shared-components.module";
import { AppSharedMaterialModule } from "./shared-material.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        AppSharedMaterialModule,
        SharedComponentModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        AppSharedMaterialModule,
        SharedComponentModule
    ]
})

export class AppSharedModule {}