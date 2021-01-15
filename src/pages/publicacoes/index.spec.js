import { publicacoes } from './index.js';
// import * as services from '../../services/index.js';

// services.handleSignOut = jest.fn(() => Promise.resolve(true));

describe('Publicações', () => {
  it('should be a function', () => {
    expect(typeof publicacoes).toBe('function');
  });
});
