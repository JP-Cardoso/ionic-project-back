export abstract class BaseNotification {
    notifications: Array<{message: string}>;

    constructor() {
        this.notifications = new Array<{message: string}>()
    }    

    AddNotification(message: string): void {
        this.notifications.push({message: message});
    }

    isTrue(value: any, message: string) {
        if(value) {
            this.notifications.push({message: message});
        }
    }

    isRequired(value: any, message:string) {
        if(!value || value.length <= 0) {
            this.notifications.push({message: message});
        }
    }

    hasMinLen(value: any, min: any, message: string) {
        if(!value || value.length < min) {
            this.notifications.push({message: message});
        }
    }

    hasMaxLen(value: any, max: any, message: string) {
        if(!value || value.length > max) {
            this.notifications.push({message: message});
        }
    }

    isFixedLen(value: any, len: any, message: string) {
        if(value.length !== len) {
            this.notifications.push({message: message});
        }
    }

    isEmail(value: any, message: string) {
        const reg = RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
        if(!reg.test(value)) {
            this.notifications.push({message: message});
        }
    }

    get allNotifications(): Array<{message: string}> {
        return this.notifications;
    }

    valid(): boolean {
        return this.notifications.length == 0;
    }
}