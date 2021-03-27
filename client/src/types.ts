export enum Gender {
    MALE = 'MALE',
    FEMALE = 'FEMALE'
}

export interface CustomError {
    message?: string;
    type?: string; // why string? who knows?
}
