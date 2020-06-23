export const FETCH_POSTS = 'FETCH_POSTS';
export const SAVE_POSTS = 'SAVE_POSTS';
export const SAVE_POST = 'SAVE_POST';
export const POST = 'POST';
export const DELETE_POST = 'DELETE_POST';
export const SAVE_DELETE_POST = 'SAVE_DELETE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const ADD_POST = 'ADD_POST';


export const fetchPosts = () => ({ type: FETCH_POSTS });
export const savePosts = (posts) => ({ type: SAVE_POSTS, posts });
export const savePost = (post) => ({ type: SAVE_POST, post });
export const post = () => ({ type: POST });
export const deletePost = (id) => ({ type: DELETE_POST, id});
export const removePost = (id) => ({ type: REMOVE_POST, id});
export const addPost = (post) => ({ type: ADD_POST, post });
export const saveDeletePost = (id_post) => ({ type: SAVE_DELETE_POST, id_post });
