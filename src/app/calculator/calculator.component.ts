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

  constructor(
    private calcService: CalculatorService,
    private historyService: HistoryService
  ) {}

  press(key: string): void {
    if (key === '=') {
      this.result = this.expression;
      this.expression = this.calcService.evaluate(this.expression);
    } else if (key === 'C') {
      this.expression = '';
    } else if (key == '←') {
      this.expression = this.expression.slice(0, -1);
    } else if (key == 'G') {
      this.toggleHistory();
    } else {
      this.expression += key;
    }
  }

  toggleHistory(): void {
    this.historyVisible = !this.historyVisible;
    if (this.historyVisible) {
      this.history = this.historyService.getHistory();
    }
  }
}
