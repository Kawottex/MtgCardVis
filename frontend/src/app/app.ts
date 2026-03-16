import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MtgCardSearchComponent } from './components/mtgcard-search/mtgcard-search';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MtgCardSearchComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend');
}
