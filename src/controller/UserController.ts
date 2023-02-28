import { Request } from "express-serve-static-core"
import { User } from "../entity/User"
import { BaseController } from './BaseController'

export class UserController extends BaseController<User> {

    constructor() {
        super(User)
    }

    async save(request: Request) {
        const user = <User>request.body;
        super.isRequired(user.name, 'O nome do usuário é obrigatório');
        super.isRequired(user.photo, 'A foto do usuário é obrigatório');
        return super.save(user);
  
    }

}