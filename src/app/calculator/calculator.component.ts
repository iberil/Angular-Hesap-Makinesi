import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';
import { CommonModule } from '@angular/common';
import { HistoryService } from '../services/history.service';
import { DoubleDigitPipe } from '../pipes/double-digit-pipe';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, DoubleDigitPipe],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  expression = '';
  result = '';
  historyVisible = false;
  history: string[] = [];

  // Tuş takımı değerlerini ayrı tanımladık
  keys: string[] = [
    'C',
    '()',
    '/',
    '←',
    '7',
    '8',
    '9',
    '*',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    'G',
    '0',
    '.',
    '=',
  ];

  constructor(
    private calcService: CalculatorService,
    private historyService: HistoryService
  ) {}

  // Tuşa basıldığında yapılacak işlemler
  press(key: string): void {
    switch (key) {
      case '=':
        this.result = this.expression;
        this.expression = this.calcService.evaluate(this.expression);
        break;
      case 'C':
        this.expression = '';
        break;
      case '←':
        this.expression = this.expression.slice(0, -1);
        break;
      case 'G':
        this.toggleHistory();
        break;
      default:
        this.expression += key;
        break;
    }
  }

  // Geçmiş görünürlüğünü aç/kapa yapar
  toggleHistory(): void {
    this.historyVisible = !this.historyVisible;
    if (this.historyVisible) {
      this.history = this.historyService.getHistory();
    }
  }
}
