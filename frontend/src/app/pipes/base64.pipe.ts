import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'base64' })
export class Base64Pipe implements PipeTransform {
  transform(value: number[]): string {
    if (!value || !value.length) return '';
    const binary = String.fromCharCode(...value);
    return btoa(binary);
  }
}