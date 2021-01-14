import { handleSignUp, handleGoogleSignIn, handleSignIn, handleSignOut, validatePassword, validateEmptyInput } from './index.js';

describe('Google Sign Up', () => {
  it('should be a function', () => {
    expect(typeof handleSignUp()).toBe('function');
  });
});

describe('Google Sign In', () => {
  it('should be a function', () => {
    expect(typeof handleGoogleSignIn()).toBe('function');
  });
});

describe('Sign In with Email and Password', () => {
  it('should be a function', () => {
    expect(typeof handleSignIn()).toBe('function');
  });
});

describe('Sign Out', () => {
  it('should be a function', () => {
    expect(typeof handleSignOut()).toBe('function');
  });
});

describe('Validate Password', () => {
  it('should be a function', () => {
    expect(typeof validatePassword()).toBe('function');
  });

  it('should return false if the passwords are diferents', () => {
    expect(validatePassword("123456", "654321")).toBe(false);
  });

  it('should return true if the passwords are iquals', () => {
    expect(validatePassword("123456", "123456")).toBe(true);
  });
});

describe('Validate Empty Input', () => {
  it('should be a function', () => {
    expect(typeof validateEmptyInput()).toBe('function');
  });

  it('should return false if the inputs are empty', () => {
    expect(() => validateEmptyInput("Joao", "")).toBe(false);
    expect(() => validateEmptyInput("", "Silva")).toBe(false);
    expect(() => validateEmptyInput("", "")).toBe(false);
  });

  it('should return true if the inputs are filled', () => {
    expect(validateEmptyInput("Joao", "Silva")).toBe(true);
  });
});
