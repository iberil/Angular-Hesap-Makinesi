import { DoubleDigitPipe } from './double-digit-pipe';

describe('DoubleDigitPipe', () => {
  const pipe = new DoubleDigitPipe();

  it('should add leading zero for single digits', () => {
    expect(pipe.transform(2)).toBe('02');
  });

  it('should return number as is if >= 10', () => {
    expect(pipe.transform(12)).toBe('12');
  });
});
