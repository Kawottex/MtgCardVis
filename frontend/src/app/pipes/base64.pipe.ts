import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'base64' })
export class Base64Pipe implements PipeTransform {
  transform(value: number[] | string | null | undefined): string {
    if (!value) return '';

    // Si le backend renvoie directement une string base64, on la renvoie telle quelle.
    if (typeof value === 'string') return value;

    if (!value.length) return '';
    const binary = String.fromCharCode(...value);
    return btoa(binary);
  }
}