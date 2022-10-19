import React from 'react';
import {User, UserLogger} from 'singleResponsibility/singleResponsibility';
import {Character, Crossbow, Sword, Weapon} from 'openClosed/openClosed';
import {Database, MongoDatabase, MySQLDatabase} from 'liskovSubstitution/liskovSubstitution';

function App() {

    //single responsibility
    const user = new User('Evgen', 'Zhukavets')
    const userLogger = new UserLogger()
    userLogger.log(user)


    //open/closed principe
    //const sword = new Weapon('sword', 15, 2) //создаём оружие(меч)
    const sword = new Sword(15,2)
    const character = new Character('EvgenLeon', sword)
    character.attack()

    //const crossbow = new Weapon('crossbow', 40, 100)// создаём арбалет
    const crossbow = new Crossbow(40, 100)
    character.changeWeapon(crossbow) // меняем меч на арбалет
    character.attack()

    //Liskov Substitution Principe
    function startApp(database: Database) {
        database.connect()
    }
    startApp(new MongoDatabase())
    startApp(new MySQLDatabase())

    return (
        <div>
            <h3>Single responsibility</h3>
            <h3>Open closed</h3>
            <h3>Liskov Substitution</h3>
            <h3>Interface segregation</h3>
            <h3>Dependency inversion</h3>
        </div>
    );
}

export default App;
