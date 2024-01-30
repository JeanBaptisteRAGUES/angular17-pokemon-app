import { Component } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [ProgressSpinnerModule],
  template: `
      <p-progressSpinner></p-progressSpinner>
  `
})
export class LoaderComponent {}