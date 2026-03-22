import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MtgCardService } from '../../services/mtgcard.service';
import { MTGCard } from '@mtgcardvis/shared';
  
@Component({
  selector: 'app-mtgcard-creator',
  imports: [CommonModule, FormsModule],
  templateUrl: './mtgcard-creator.html',
  styleUrl: './mtgcard-creator.scss',
  standalone: true,
})
export class MtgCardCreatorComponent {
  expansions = ['Alpha', 'Beta', 'Gamma'];
  rarities = ['Common', 'Uncommon', 'Rare', 'Mythic Rare'];

  /** Valeurs par défaut = 1re entrée des listes (doit matcher une [value] du <select>). */
  card: MTGCard = {
    name: '',
    manaCost: 0,
    colors: {
      red: false,
      black: false,
      blue: false,
      green: false,
      white: false
    },
    power: 0,
    toughness: 0,
    expansion: 'Alpha',
    rarity: 'Common',
    image: {
      data: [],
      contentType: ''
    }
  };

  constructor(private mtgCardService: MtgCardService) {}

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const arrayBuffer = reader.result as ArrayBuffer;
        this.card.image.data = Array.from(new Uint8Array(arrayBuffer));
        this.card.image.contentType = file.type;
      };
      reader.readAsArrayBuffer(file);
    }
  }

  onSubmit() {
    this.mtgCardService.createMTGCard(this.card).subscribe((response) => {
      console.log('Card created:', response);
    });
  }
}
