export class User {

  constructor(public Id: number, public nombre: String, public email: String, public password:String, public token:String) {
  }
}

export class Form{

  constructor(public Id: number, public name:String, public ask: String, public email:String){
  }
}
