import { Login } from './index.js';
import * as services from '../../services/index.js';

services.handleGoogleSignIn = jest.fn(() => Promise.resolve(true));
services.handleSignIn = jest.fn(() => Promise.resolve(true));

describe('Login', () => {
  it('should be a function', () => {
    expect(typeof Login).toBe('function');
  });

  it('click on the Sing In button', () => {
    Login().querySelector('#btnLogin').dispatchEvent(new Event('click'));
    expect(services.handleSignIn).toHaveBeenCalled();
  });

  it('click on the Google Sing In button', () => {
    Login().querySelector('#btnGoogle').dispatchEvent(new Event('click'));
    expect(services.handleGoogleSignIn).toHaveBeenCalled();
  });
});
