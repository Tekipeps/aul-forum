import { AnyAction as Action } from 'redux';
import { asyncActionNames } from '../util';
import { CustomError, AuthenticatedUser } from './../../types';
import { Actions } from './actions';

export interface State {
    user: AuthenticatedUser;
    isLoggedIn: boolean;
    error?: CustomError;
    isLoading: boolean;
}
const rootState: State = {
    user: {
        username: '',
        avatar: '',
        id: '',
        role: 'USER',
        email: ''
    },
    isLoggedIn: false,
    error: {},
    isLoading: false
};
const reducer = (state: State = rootState, action: Action) => {
    let user;
    switch (action.type) {
        case asyncActionNames(Actions.AUTH_LOGIN).success:
        case asyncActionNames(Actions.AUTH_REGISTER).success:
            user = action.payload.user;
            window.localStorage.setItem('user', JSON.stringify(user));
            window.localStorage.setItem('token', action.payload.token);
            return { ...state, isLoggedIn: true, user };
        case asyncActionNames(Actions.AUTH_LOGIN).failure:
        case asyncActionNames(Actions.AUTH_REGISTER).failure:
            return { ...state, error: action.payload };
        case asyncActionNames(Actions.AUTH_VALID_TOKEN).loading:
        case asyncActionNames(Actions.AUTH_REGISTER).loading:
        case asyncActionNames(Actions.AUTH_LOGIN).loading:
            return { ...state, isLoading: action.payload };
        case asyncActionNames(Actions.AUTH_VALID_TOKEN).success:
            user = action.payload;
            window.localStorage.setItem('user', JSON.stringify(user));
            return { ...state, isLoggedIn: true, user };
        case asyncActionNames(Actions.AUTH_VALID_TOKEN).failure:
        case Actions.AUTH_LOGOUT:
            window.localStorage.removeItem('user');
            window.localStorage.removeItem('token');
            return rootState;
        default:
            return state;
    }
};
export default reducer;
