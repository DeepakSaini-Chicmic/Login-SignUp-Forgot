import { _decorator, Component, Node, Prefab, instantiate } from "cc";
import { LoginPopUp } from "./LoginPopUp";
const { ccclass, property } = _decorator;

@ccclass("Settings")
export class Settings extends Component {
  callbackLogin: Function = null;
  callbackSignUp: Function = null;

  @property(Prefab) LoginPrefab: Prefab = null;
  //   @property({ type: Node }) Login: Node = null;
  LoginNode: Node = null;
  start() {}
  callbackFunc(signUp: Function) {
    this.callbackSignUp = signUp;
    // this.callbackLogin = login;
  }
  signUpBtn() {
    this.callbackSignUp();
    this.node.active = false;
  }
  
  // loginBtn() {
  //   this.callbackLogin();
  //   this.node.active = false;
  //   this.LoginNode.getComponent(LoginPopUp).callbackFunc({
  //     email: "",
  //     password: "",
  //   });
  // }

  login() {
    if (this.LoginNode == null) {
      this.LoginNode = instantiate(this.LoginPrefab);
      this.node.addChild(this.LoginNode);
      this.LoginNode.getComponent(LoginPopUp).callbackFunc({
        email: "",
        password: "",
      });
    } else {
      this.LoginNode.active = true;
      this.LoginNode.getComponent(LoginPopUp).callbackFunc({
        email: "",
        password: "",
      });
    }
  }
  update(deltaTime: number) {}
}
