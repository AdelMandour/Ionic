import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTourPage } from './add-tour';

@NgModule({
  declarations: [
    AddTourPage,
  ],
  imports: [
    IonicPageModule.forChild(AddTourPage),
  ],
})
export class AddTourPageModule {}
