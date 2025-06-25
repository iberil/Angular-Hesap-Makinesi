import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private history: string[] = [];

  add(entry: string): void {
    this.history.unshift(entry);
    if (this.history.length > 5) {
      this.history.pop();
    }
  }

  getHistory(): string[] {
    return this.history;
  }

  clear(): void {
    this.history = [];
  }
}
