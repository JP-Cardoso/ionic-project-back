import { Request } from "express-serve-static-core"
import { User } from "../entity/User"
import { BaseController } from './BaseController'

export class UserController extends BaseController<User> {

    constructor() {
        super(User)
    }

    async craeteUser(request: Request) {
        const {name, photo, email, password, confirmPassword, isRoot} = request.body;

        super.isRequired(name, 'Informe o nome');
        super.isRequired(photo, 'Informe a foto');
        super.isRequired(email, 'Informe o email');
        super.isRequired(password, 'Informe a senha');
        super.isRequired(confirmPassword, 'Confirme a senha');

        const _user = new User();

        return super.save()
    }

    async save(request: Request) {
        const user = <User>request.body;
        super.isRequired(user.name, 'O nome do usuário é obrigatório');
        super.isRequired(user.photo, 'A foto do usuário é obrigatório');
        return super.save(user);
  
    }

}