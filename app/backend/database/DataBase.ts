import hashValue from "../hashing/hash";
import {UserAlreadyExistsException} from "./database_errors/UserAlreadyExistsException";

class DataBase {
    private readonly b16PublicKey: string;
    private userPasswordTable: { [userName: string]: string; };

    constructor() {
        this.b16PublicKey = this.generatePublicKey();
        this.userPasswordTable = {};

    }

    private generatePublicKey(): string {
        let key: string = '';

        for (let i: number = 0; i < 16; i++) {
            key += Math.floor(Math.random() * 16).toString(16);
        }

        return key;
    }

    public addUser(name: string, plainTextPassword: string){
        if(this.userPasswordTable[name] !== undefined){
            throw new UserAlreadyExistsException(`Error: ${name} already exists, please choose another username`);
        }

        const hashedPassword: string = hashValue(plainTextPassword, this.b16PublicKey);

        this.userPasswordTable[name] = hashedPassword
    }

    public verifyUser(user: string, hashedPassword: string): boolean{
        return this.userPasswordTable[user] === hashedPassword;
    }

    public userExists(user: string){
        return this.userPasswordTable[user] !== undefined;
    }

    public deleteUser(user: string, hashedPassword: string): boolean{
        if(this.verifyUser(user, hashedPassword)){
            delete this.userPasswordTable[user];
            return true;
        }
        else{
            return false;
        }
    }

    public getPublicKey(): string {
        return this.b16PublicKey;
    }

}

let db: DataBase = new DataBase();
db.addUser('Admin', 'password');
db.addUser('Roger','bunnies');
