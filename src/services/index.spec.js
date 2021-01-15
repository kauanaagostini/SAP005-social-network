import {
  handleSignUp,
  handleGoogleSignIn,
  handleSignIn,
  handleSignOut,
  createPost,
  getPosts,
  likePost,
  removeLike,
  dislikePost,
  removeDislike,
  editPost,
  deletePost,
} from './index.js';

describe('Google Sign Up', () => {
  it('should be a function', () => {
    expect(typeof handleSignUp).toBe('function');
  });
});

describe('Google Sign In', () => {
  it('should be a function', () => {
    expect(typeof handleGoogleSignIn).toBe('function');
  });
});

describe('Sign In with Email and Password', () => {
  it('should be a function', () => {
    expect(typeof handleSignIn).toBe('function');
  });
});

describe('Sign Out', () => {
  it('should be a function', () => {
    expect(typeof handleSignOut).toBe('function');
  });
});

describe('Create a Post', () => {
  it('should be a function', () => {
    expect(typeof createPost).toBe('function');
  });
});

describe('Get the Posts', () => {
  it('should be a function', () => {
    expect(typeof getPosts).toBe('function');
  });
});

describe('Like a post', () => {
  it('should be a function', () => {
    expect(typeof likePost).toBe('function');
  });
});

describe('Remove the Like in a post', () => {
  it('should be a function', () => {
    expect(typeof removeLike).toBe('function');
  });
});

describe('Do not like a post', () => {
  it('should be a function', () => {
    expect(typeof dislikePost).toBe('function');
  });
});

describe('Remove the do not like in a post', () => {
  it('should be a function', () => {
    expect(typeof removeDislike).toBe('function');
  });
});

describe('Edit a post', () => {
  it('should be a function', () => {
    expect(typeof editPost).toBe('function');
  });
});

describe('Delete a post', () => {
  it('should be a function', () => {
    expect(typeof deletePost).toBe('function');
  });
});
