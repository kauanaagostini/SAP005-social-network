import { createAccount } from './index.js';

describe('Create Account', () => {
  it('should be a function', () => {
    expect(typeof createAccount).toBe('function');
  });
});
