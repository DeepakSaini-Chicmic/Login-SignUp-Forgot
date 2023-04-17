import { _decorator, Component, Node, EditBox } from "cc";
const { ccclass, property } = _decorator;

@ccclass("LoginPopUp")
export class LoginPopUp extends Component {
  loginCallback: Function = null;

  login_info_callback: object = null;

  @property(EditBox) emailEditbox: EditBox = null;
  @property(EditBox) passwordEditbox: EditBox = null;

  start() {}

  callbackFunc(login_info: object) {
    this.login_info_callback = login_info;
    console.log(this.login_info_callback);
  }

  loginBtn() {
    let email = this.emailEditbox.string;
    let password = this.passwordEditbox.string;

    this.login_info_callback = {
      email: email,
      password: password,
    };
    console.log(this.login_info_callback);
  }

  update(deltaTime: number) {}
}
