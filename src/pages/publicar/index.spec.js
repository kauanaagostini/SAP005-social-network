import { publicar } from './index.js';
import * as services from '../../services/index.js';

let firebase = '';

describe('Publicar', () => {
  it('should be a function', () => {
    expect(typeof publicar).toBe('function');
  });

  it('click on the send post button', () => {
    beforeEach(() => {
      firebase = jest.fn();
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    publicar().querySelector('#postar').dispatchEvent(new Event('click'));
    expect(services.createPost).toHaveBeenCalled(firebase);
  });

  it('click on the sign out button', () => {
    publicar().querySelector('#exit').dispatchEvent(new Event('click'));
    expect(services.handleSignOut).toHaveBeenCalled();
  });
});
