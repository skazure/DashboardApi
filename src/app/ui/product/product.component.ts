import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/products';
import { ProductService } from 'src/app/product.service';
import { ReminderService } from 'src/app/reminder.service';
import { IReminder } from 'src/app/reminders';
import { TaskService } from 'src/app/task.service';
import { ITask } from 'src/app/tasks';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  errorMessage: string;

  products: IProduct[] = [];
  reminders: IReminder[] = [];
  tasks: ITask[] = [];  

  constructor(private productService: ProductService, private reminderService: ReminderService, private taskService: TaskService) { }

  ngOnInit(): void {

    this.productService.getProducts().subscribe(
      products => this.products = products,
      error => this.errorMessage = <any> error
    );

    this.reminderService.getReminders().subscribe(
      reminders => this.reminders = reminders,
      error => this.errorMessage = <any> error
    );

    this.taskService.getTasks().subscribe(
      tasks => this.tasks = tasks,
      error => this.errorMessage = <any> error
    );
  }

  onProductSubmit(f: NgForm){
    console.log("submitting Product request... + " + f);
    const product = f.value;  
    this.CreateProduct(product);      
  }

  onTaskSubmit(f: NgForm){
    console.log("submitting Task request... + " + f);
    const task = f.value;  
    this.CreateTask(task)   ;
  }


  onReminderSubmit(f: NgForm){
    console.log("submitting Reminder request... + " + f);
    const product = f.value;  
    this.CreateReminder(product);      
  }


  onSubmit(){
    console.log("1 submitting request...");
  }

  CreateProduct(product: IProduct){

    this.productService.createProduct(product).subscribe(
      () => {   
                  
        console.log("Creating Product... + ");
      }
    )
  } 

  CreateTask(task: ITask){

    this.taskService.createTask(task).subscribe(
      () => {   
                  
        console.log("Creating Task... + ");
      }
    )
  } 

  CreateReminder(reminder: IReminder){

    this.reminderService.createReminder(reminder).subscribe(
      () => {                    
        console.log("Creating Reminder... + ");
      }
    )
  } 

}
