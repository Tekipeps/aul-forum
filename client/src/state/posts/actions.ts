import { asyncRequest } from '../util';

export enum Actions {
    GET_ALL_POSTS = 'GET_ALL_POSTS'
}

export const getAllPosts = () => {
    return asyncRequest(Actions.GET_ALL_POSTS, '/posts', 'get');
};
