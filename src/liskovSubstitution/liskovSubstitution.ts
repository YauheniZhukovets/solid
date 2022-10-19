export class Database {
    connect(){}
    read(){}
    write(){}
    //joinTable(){}
}

/*
class MySQLDatabase extends Database {
    connect(){}
    read(){}
    write(){}
    joinTable(){}
}

class MongoDatabase extends Database {
    connect(){}
    read(){}
    write(){}
    joinTable(){
        throw new Error('У монго БД нет таблиц') // нарушаем принцип подстановки
    }
}*/


// Ниже показан принцип подстановки
export class SQLDatabase extends Database {
    connect(){}
    read(){}
    write(){}
    joinTable(){}
}

export class NoSQLDatabase extends Database {
    connect(){}
    read(){}
    write(){}
    createIndex(){}
}

export class MySQLDatabase extends SQLDatabase {
    connect(){}
    read(){}
    write(){}
    joinTable(){}
}

export class MongoDatabase extends NoSQLDatabase {
    connect(){}
    read(){}
    write(){}
    createIndex(){}
    mergeDocuments(){}
}

