import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async (dispatch) => {
    const response =  await jsonPlaceholder.get('/posts');
    dispatch({ type: "FETCHPOSTS", payload: response })
    };
