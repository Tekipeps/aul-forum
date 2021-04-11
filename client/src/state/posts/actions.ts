import { asyncRequest } from '../util';

export enum Actions {
    GET_ALL_POSTS = 'GET_ALL_POSTS',
    CREATE_POST = 'CREATE_POST'
}

export const getAllPosts = () => {
    return asyncRequest(Actions.GET_ALL_POSTS, '/posts', 'get');
};

export const createPost = (title: string, content: string) => {
    return asyncRequest(Actions.CREATE_POST, '/posts', 'post', { title, content });
};
