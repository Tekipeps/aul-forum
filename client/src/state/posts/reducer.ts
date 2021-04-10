import { AnyAction as Action } from 'redux';
import { asyncActionNames } from '../util';
import { CustomError, PostType } from './../../types';
import { Actions } from './actions';

export interface State {
    posts: PostType[];
    isLoggedIn: boolean;
    error?: CustomError;
    isLoading: boolean;
}
const rootState: State = {
    posts: [],
    isLoggedIn: false,
    error: {},
    isLoading: false
};

const reducer = (state: State = rootState, action: Action) => {
    let posts: PostType[];
    switch (action.type) {
        case asyncActionNames(Actions.GET_ALL_POSTS).success:
            posts = action.payload;
            return { ...state, posts: posts.reverse() }; // post.revrse() temporary to mimic  ordering of 'most-recent' post
        case asyncActionNames(Actions.CREATE_POST).success:
            return { ...state, posts: [action.payload, ...state.posts] };
        default:
            return state;
    }
};
export default reducer;
