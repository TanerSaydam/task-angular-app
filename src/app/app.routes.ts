import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: ()=> import("./flex/flex.component").then(c=> c.FlexComponent)
    },
    {
        path: "grid",
        loadComponent: ()=> import("./grid/grid.component").then(c=> c.GridComponent)
    }
];
