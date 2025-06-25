import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doubleDigit',
  standalone: true, // Eğer standalone kullanıyorsan bu satır önemli!
})
export class DoubleDigitPipe implements PipeTransform {
  transform(value: number | string): string {
    const num = Number(value);
    return isNaN(num) ? String(value) : num < 10 ? `0${num}` : `${num}`;
  }
}
