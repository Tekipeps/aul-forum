import { AnyAction as Action } from 'redux';
import axios, { Method } from 'axios';
import { Dispatch } from 'react';

export const asyncActionNames = (baseName: string) => ({
    failure: `${baseName}_FAILURE`,
    loading: `${baseName}_LOADING`,
    success: `${baseName}_SUCCESS`
});

export const asyncActions = (
    actionName: string
): {
    loading: (bool: boolean) => Action;
    failure: (error: any) => Action;
    success: (payload: any) => Action;
} => ({
    loading: (bool): Action => ({
        type: asyncActionNames(actionName).loading,
        payload: bool
    }),
    failure: (error: any): Action => ({
        type: asyncActionNames(actionName).failure,
        payload: error
    }),
    success: (payload: any): Action => ({
        type: asyncActionNames(actionName).success,
        payload
    })
});

const handleInvalidTokenResponse = (err: any) => {
    if (
        err.response?.status === 401 &&
        (err.response.data?.errorName === 'TokenExpiredError' || err.response.data?.error === 'Invalid Token')
    ) {
        window.localStorage.remove('token');
        window.location.href = '/login';
    }
};

const constructToken = (token: string | null) => (token ? { Authorization: `Bearer ${token}` } : {});
const composeData = (method: Method, body: any) => (method === 'post' || method === 'put' ? { data: body } : {});

export const apiCall = (url: string, method: Method, body?: typeof Object, token?: string) => {
    const requestUrl = `/api'${url}`;
    return axios({
        method,
        url: requestUrl,
        ...composeData(method, body),
        headers: {
            ...constructToken(token || window.localStorage.getItem('token'))
        }
    });
};

export const asyncRequest = (actionName: string, url: string, method: Method, body: any | null = null, token?: string) => async (
    dispatch: Dispatch<any>
) => {
    dispatch(asyncActions(actionName).loading(true));
    try {
        const res = await apiCall(url, method, body, token);
        dispatch(asyncActions(actionName).success(res.data));
        return res.data;
    } catch (err) {
        console.log(err.response);
        if (err && err.response) {
            handleInvalidTokenResponse(err);
            dispatch(asyncActions(actionName).loading(false));
            dispatch(asyncActions(actionName).failure(err.response.data));
        }
    }
};
