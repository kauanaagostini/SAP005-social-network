import { addPost } from './post.js';
import * as services from '../services/index.js';

services.likePost = jest.fn(() => Promise.resolve(true));
services.removeLike = jest.fn(() => Promise.resolve(true));
services.editPost = jest.fn(() => Promise.resolve(true));
services.dislikePost = jest.fn(() => Promise.resolve(true));
services.removeDislike = jest.fn(() => Promise.resolve(true));
services.deletePost = jest.fn(() => Promise.resolve(true));

describe('addPost', () => {
  it('should be a function', () => {
    expect(typeof addPost).toBe('function');
  });

  it('click on the Like button', () => {
    addPost().querySelector('#btn-like-').dispatchEvent(new Event('click'));
    expect(services.likePost).toHaveBeenCalled();
  });

  it('click on the Button dislike', () => {
    addPost().querySelector('#btn-dislike-').dispatchEvent(new Event('click'));
    expect(services.dislikePost).toHaveBeenCalled();
  });
});
