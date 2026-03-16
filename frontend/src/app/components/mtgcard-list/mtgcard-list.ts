import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MTGCard } from '@mtgcardvis/shared';

@Component({
  selector: 'app-mtgcard-list',
  imports: [CommonModule],
  templateUrl: './mtgcard-list.html',
  styleUrl: './mtgcard-list.scss',
  standalone: true,
})
export class MtgCardListComponent {
  @Input() cards: MTGCard[] = [];
}
