import { Injectable } from '@angular/core';
import { HistoryService } from '../services/history.service';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor(private historyService: HistoryService) {}

  evaluate(expression: string): string {
    const isValid = /^[0-9+\-*/().\s]+$/.test(expression);
    if (!isValid) return 'Error';

    try {
      const result = Function(`return (${expression})`)();
      if (isNaN(result) || !isFinite(result)) {
        return 'Error';
      }

      const resultStr = result.toString();
      this.historyService.add(`${expression} = ${resultStr}`); // ✅ geçmişe ekle
      return resultStr;
    } catch {
      return 'Error';
    }
  }
}
