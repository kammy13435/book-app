import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        LoginComponent
    ]
})
export class LoginModule {}