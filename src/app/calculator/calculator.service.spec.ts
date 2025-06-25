import { CalculatorService } from '../calculator/calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  const mockHistoryService = {
    add: jasmine.createSpy('add'),
    getHistory: () => [],
    clear: () => {},
  };

  beforeEach(() => {
    service = new CalculatorService(mockHistoryService as any);
  });

  it('should add numbers correctly', () => {
    expect(service.evaluate('2+3')).toBe('5');
  });
});
