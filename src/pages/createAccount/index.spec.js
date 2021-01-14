import { createAccount } from './index.js';
import * as services from '../../services/index.js';

services.handleSignUp = jest.fn(() => Promise.resolve(true));

describe('Create Account', () => {
  it('should be a function', () => {
    expect(typeof createAccount).toBe('function');
  });

  it('click on the Sing Up button', () => {
    createAccount().querySelector('#btnCreateAccount').dispatchEvent(new Event('click'));
    expect(services.handleSignUp).toHaveBeenCalled();
  });
});
