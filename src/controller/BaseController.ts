import { NextFunction, Request, Response } from "express"
import { Repository, getRepository } from "typeorm"
import { BaseNotification } from "../entity/BaseNotification"
import { User } from "../entity/User"

export abstract class BaseController<T> extends BaseNotification {

    private _repository: Repository<T>

    constructor(entity: any) {
        super()
        this._repository = getRepository<T>(entity)
    }

    async all() {
        return this._repository.find()
    }

    async one(request: Request) {
        const id:any = request.params.id
        return this._repository.findOne(id)
    }

    async save(model: any) {
        if(model.uid) {
            const _modelInDB = await this._repository.findOne(model.uid);
            if(_modelInDB) {
                Object.assign(_modelInDB, model)
            }
        }

        if (this.valid()) {

            return this._repository.save(model)

        } else {

            return {
                status: 400,
                errors: this.allNotifications
            }
        }


    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const uid: any = request.params.id;
        const model: any = await this._repository.find(uid)

        if(model) {
            model.deleted = true
        }
        return await this._repository.save(model)
    }

}