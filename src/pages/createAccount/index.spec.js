import { createAccount } from './index.js';

describe('Cadastro', () => {
  it('should be a function', () => {
    expect(typeof createAccount).toBe('function');
  });
});
