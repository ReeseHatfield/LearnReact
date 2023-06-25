const hashValue = require("../hashing/hash");
const UserAlreadyExistsException = require("./database_errors/UserAlreadyExistsException");
const fs = require("fs");
const path = require("path");

export default class DataBase {
  private b16PublicKey: string;
  private userPasswordTable: { [userName: string]: string };

  constructor() {
    this.b16PublicKey = this.generatePublicKey();
    this.userPasswordTable = this.readUserPasswordFile();

    this.createDefaultAdministratorAccount();
  }

  private readUserPasswordFile(): { [userName: string]: string } {
    try {
      let usersFilePath: string = "./userPasswordFile.json";
      if (fs.existsSync(usersFilePath)) {
        let usersJSON: string = fs.readFileSync(usersFilePath, "utf-8");
        return JSON.parse(usersJSON);
      } else {
        console.error(`Error: ${usersFilePath} not found`);
        return {};
      }
    } catch (error) {
      console.error(`Error reading user password file: ${error}`);
      return {};
    }
  }

  private createDefaultAdministratorAccount(): void {
    if (this.userPasswordTable["Admin"] !== undefined) return;

    const name: string = "Admin";
    const defaultAdminPassword: string = "Admin"; // this is insecure

    this.addUser(name, defaultAdminPassword);
  }

  private generatePublicKey(): string {
    return "67D3D0797982EF10";
    //final public key
  }

  public addUser(name: string, plainTextPassword: string) {
    if (this.userPasswordTable[name] !== undefined) {
      throw new UserAlreadyExistsException(
        `Error: ${name} already exists, please choose another username`
      );
    }

    let usersFilePath: string = "./userPasswordFile.json";
    let usersJSON: string = fs.existsSync(usersFilePath)
      ? fs.readFileSync(usersFilePath, "utf-8")
      : "{}";
    let users = JSON.parse(usersJSON);

    const hashedPassword: string = hashValue(
      plainTextPassword,
      this.b16PublicKey
    );

    users[name] = hashedPassword;

    usersJSON = JSON.stringify(users);

    try {
      fs.writeFileSync(usersFilePath, usersJSON, "utf-8");
    } catch (error) {
      console.error(`Error writing user password file: ${error}`);
    }

    this.userPasswordTable[name] = hashedPassword;
  }

  public verifyUser(user: string, plainTextPassword: string): boolean {
    const hashedPassword: string = hashValue(
      plainTextPassword,
      this.getPublicKey()
    );
    return this.userPasswordTable[user] === hashedPassword;
  }

  public userExists(user: string) {
    return this.userPasswordTable[user] !== undefined;
  }

  public deleteUser(user: string, hashedPassword: string): boolean {
    if (this.verifyUser(user, hashedPassword)) {
      delete this.userPasswordTable[user];

      let usersFilePath: string = path.resolve(
        __dirname,
        "userPasswordFile.json"
      );
      let usersJSON: string = fs.existsSync(usersFilePath)
        ? fs.readFileSync(usersFilePath, "utf-8")
        : "{}";
      let users = JSON.parse(usersJSON);

      delete users[user];

      usersJSON = JSON.stringify(users);

      try {
        fs.writeFileSync(usersFilePath, usersJSON, "utf-8");
      } catch (error) {
        console.error(`Error writing user password file: ${error}`);
      }

      return true;
    } else {
      return false;
    }
  }

  public getPublicKey(): string {
    return this.b16PublicKey;
  }
}

module.exports = DataBase;
