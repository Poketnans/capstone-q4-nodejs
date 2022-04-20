export interface IUser{
    id: string;
    name: string;
    password: string;
    email: string;
    employed: boolean;
    created_at: Date;
    updated_at: Date;
}