import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  selectedColor: string = '';
  menuItems = [
    { name: 'Menu Item', color: 'red' },
    { name: 'Menu Item', color: 'blue' },
    { name: 'Menu Item', color: 'green' },
    //...
  ];

  router = inject(Router);

  submit(form: NgForm) {
    console.log(form);
    this.router.navigateByUrl("/");
    // navigate to the other component
  }

  reset(form: NgForm) {
    form.reset();
    this.selectedColor = '';
    // reset the colors of the app
  }

  changeColor(color: string) {
    this.selectedColor = color;
    // change the background color of HEADER, FOOTER and buttons
  }
}
