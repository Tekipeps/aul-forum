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
    switch (action.type) {
        case asyncActionNames(Actions.GET_ALL_POSTS).success:
            return { ...state, posts: action.payload };
        default:
            return state;
    }
};
export default reducer;
