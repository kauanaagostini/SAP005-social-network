import { validatePassword, validateEmptyInput } from './validation.js';

describe('Validate Password', () => {
  it('should be a function', () => {
    expect(typeof validatePassword).toBe('function');
  });

  it('should return false if the passwords are diferents', () => {
    const validate = validatePassword('123456', '654321');
    expect(validate).toEqual(false);
  });

  it('should return true if the passwords are iquals', () => {
    const validate = validatePassword('123456', '123456');
    expect(validate).toEqual(true);
  });
});

describe('Validate Empty Input', () => {
  it('should be a function', () => {
    expect(typeof validateEmptyInput).toBe('function');
  });

  it('should return false if the input name is empty - part1', () => {
    const validate = validateEmptyInput('Joao', '');
    expect(validate).toEqual(false);
  });

  it('should return false if the input name is empty - part2', () => {
    const validate = validateEmptyInput('', 'Silva');
    expect(validate).toEqual(false);
  });

  it('should return false if the input name is empty - part3', () => {
    const validate = validateEmptyInput('', '');
    expect(validate).toEqual(false);
  });

  it('should return true if the inputs are filled', () => {
    const validate = validateEmptyInput('Joao', 'Silva');
    expect(validate).toEqual(true);
  });
});
