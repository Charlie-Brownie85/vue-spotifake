import getSongDuration from './getSongDuration';

describe('getSongDuration', () => {
  it('should return the formatted duration string', () => {
    expect(getSongDuration(45000)).toBe('0:45');

    expect(getSongDuration(150000)).toBe('2:30');
  });
});
