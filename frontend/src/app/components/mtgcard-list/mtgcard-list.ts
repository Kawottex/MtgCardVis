import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MTGCard } from '@mtgcardvis/shared';
import { Base64Pipe } from '../../pipes/base64.pipe';

@Component({
  selector: 'app-mtgcard-list',
  imports: [CommonModule, Base64Pipe],
  templateUrl: './mtgcard-list.html',
  styleUrl: './mtgcard-list.scss',
  standalone: true,
})
export class MtgCardListComponent {
  @Input() inCards: MTGCard[] = [];
}
