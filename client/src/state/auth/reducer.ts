import { AnyAction as Action } from 'redux';
import { asyncActionNames } from '../util';
import { CustomError } from './../../types';
import { Actions } from './actions';

export interface State {
    username: string;
    isLoggedIn: boolean;
    error?: CustomError;
    isLoading: boolean;
}
const rootState: State = {
    username: '',
    isLoggedIn: false,
    error: {},
    isLoading: false
};
const reducer = (state: State = rootState, action: Action) => {
    let user;
    switch (action.type) {
        case asyncActionNames(Actions.AUTH_LOGIN).success:
            user = action.payload.user;
            window.localStorage.setItem('user', user);
            window.localStorage.setItem('token', action.payload.token);
            return { ...state, isLoggedIn: true, username: user.username };
        case asyncActionNames(Actions.AUTH_LOGIN).failure:
            return { ...state, error: action.payload };
        case asyncActionNames(Actions.AUTH_LOGIN).loading:
            return { ...state, isLoading: action.payload };
        case asyncActionNames(Actions.AUTH_REGISTER).success:
            user = action.payload.user;
            window.localStorage.setItem('user', user);
            window.localStorage.setItem('token', action.payload.token);
            return { ...state, isLoggedIn: true, username: user.username };
        case asyncActionNames(Actions.AUTH_REGISTER).failure:
            return { ...state, error: action.payload };
        case asyncActionNames(Actions.AUTH_REGISTER).loading:
            return { ...state, isLoading: action.payload };
        default:
            return state;
    }
};
export default reducer;
