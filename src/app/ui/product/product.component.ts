import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/products';
import { ProductService } from 'src/app/product.service';
import { ReminderService } from 'src/app/reminder.service';
import { IReminder } from 'src/app/reminders';
import { TaskService } from 'src/app/task.service';
import { ITask } from 'src/app/tasks';

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

}
