import { _decorator, Component, Node, EditBox } from "cc";
const { ccclass, property } = _decorator;

@ccclass("LoginPopUp")
export class LoginPopUp extends Component {
  loginCallback: Function = null;

  @property(EditBox) emailEditbox: EditBox = null;
  @property(EditBox) passwordEditbox: EditBox = null;

  start() {}

  callbackFunc(login_info: object) {
    let email = this.emailEditbox.string;
    let password = this.passwordEditbox.string;

    login_info = {
      emailId: email,
      password: password,
    };
    console.log(login_info);
  }

  loginBtn() {
    this.loginCallback();
  }

  update(deltaTime: number) {}
}
