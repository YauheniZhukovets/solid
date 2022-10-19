
export const generateId = () => Date.now() * Math.random();

export class User {
    id
    username
    password

    constructor(username: string, password: string,) {
        this.id = generateId()
        this.username = username
        this.password = password
    }

    // saveToDatabase нарушает принц single responsibility
    saveToDatabase(){
       //сохранение в бд
    }

    ////метод log нарушает принц single responsibility
    log(){
        console.log(this)
    }
}

//стоило бы вынести методы saveToDatabase и log в отдельные классы

class UserRepository {
    save(user: User){
        //сохранение в бд
    }
}

export class UserLogger {
    log(user:User) {
        console.log(user)
    }
}

