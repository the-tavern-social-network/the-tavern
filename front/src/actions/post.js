export const FETCH_POSTS = 'FETCH_POSTS';
export const SAVE_POSTS = 'SAVE_POSTS';
export const POST = 'POST';
export const DELETE_POST = 'DELETE_POST';


export const fetchPosts = () => ({ type: FETCH_POSTS });
export const savePosts = (posts) => ({ type: SAVE_POSTS, posts });
export const post = () => ({ type: POST });
export const deletePost = (id) => ({ type: DELETE_POST, id});

