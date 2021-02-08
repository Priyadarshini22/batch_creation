import { Members } from './members.model';

export class RegisterForm {
  constructor(
    public id: number,
    public batch_id: number,
    public code: number ,
    public title: string,
    public members: Members[]) {}

}
