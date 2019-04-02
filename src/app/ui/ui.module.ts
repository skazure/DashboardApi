import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';

@NgModule({
  declarations: [ProductComponent,LayoutComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    FormsModule    
  ],
  exports: [LayoutComponent]
})
export class UiModule { }
