import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flex',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.css']
})
export class FlexComponent {
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
    this.router.navigateByUrl("/grid");
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
