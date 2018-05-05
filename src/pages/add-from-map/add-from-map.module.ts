import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddFromMapPage } from './add-from-map';

@NgModule({
  declarations: [
    AddFromMapPage,
  ],
  imports: [
    IonicPageModule.forChild(AddFromMapPage),
  ],
})
export class AddFromMapPageModule {}
