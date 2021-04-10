export enum Gender {
    MALE = 'MALE',
    FEMALE = 'FEMALE'
}

export interface CustomError {
    message?: string;
    type?: string; // why string? who knows?
}

export interface LoginError {
    username: null | string;
    password: null | string;
    [index: string]: null | string; // Solves the expression of type 'string' cant be used to index type <Type> ts error
}

export interface RegistrationError extends LoginError {
    matric: null | string;
    confirmPassword: null | string;
    email: null | string;
}

export interface AuthenticatedUser {
    email: string;
    id: string;
    role: 'USER' | 'ADMIN';
    username: string;
}

export interface PostType {
    id: string;
    author: {
        username: string;
        avatar: string;
        id: string;
    };
    createdAt: string;
    title: string;
    content: string;
    views?: number;
    comments: [];
}
