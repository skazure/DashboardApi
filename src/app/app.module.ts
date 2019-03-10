import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './ui/product/product.component';
import { ProductService } from './product.service';
import { ReminderService } from './reminder.service';
import { TaskService } from './task.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UiModule,       
    RouterModule.forRoot([
    { 
      path: 'home', component: ProductComponent}    
     ])
  ],
  providers: [ProductService, ReminderService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
