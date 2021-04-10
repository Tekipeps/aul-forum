import { applyMiddleware, combineReducers, createStore, Action } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkAction } from 'redux-thunk';
import authReducer from './auth/reducer';
import postsReducer from './posts/reducer';

const RootReducer = combineReducers({ auth: authReducer, post: postsReducer });

const store =
    process.env.NODE_ENV !== 'production'
        ? createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)))
        : createStore(RootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
store.subscribe(() => console.log('State after dispatch: ', store.getState()));

export default store;
