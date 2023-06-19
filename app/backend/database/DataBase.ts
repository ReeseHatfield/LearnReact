
class DataBase {
    private readonly b16PublicKey: string;
    private userPasswordTable: { [userName: string]: string; };

    constructor() {
        this.b16PublicKey = this.generatePublicKey();
        this.userPasswordTable = {};

        console.log(this.b16PublicKey)
    }

    private generatePublicKey(): string {
        const randomHex = Math.floor(Math.random()*16777215).toString(16);
        return randomHex.toString();
    }

    getPublicKey(): string {
        return this.b16PublicKey;
    }

    addUser(userName: string, password: string): void {
        this.userPasswordTable[userName] = password;
    }
}

let db: DataBase = new DataBase();
