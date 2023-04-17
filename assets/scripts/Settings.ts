import { _decorator, Component, Node, Prefab, instantiate } from "cc";
import { ForgotPopUp } from "./ForgotPopUp";
import { LoginPopUp } from "./LoginPopUp";
import { SignUpPopUP } from "./SignUpPopUP";
const { ccclass, property } = _decorator;

@ccclass("Settings")
export class Settings extends Component {
  @property(Prefab) SignUpPrefab: Prefab = null;
  @property(Prefab) LoginPrefab: Prefab = null;

  LoginNode: Node = null;
  SignUpNode: Node = null;

  start() {}
  callbackFunc() {}

  login() {
    if (this.LoginNode == null) {
      this.LoginNode = instantiate(this.LoginPrefab);
      this.node.parent.addChild(this.LoginNode);
      this.LoginNode.getComponent(LoginPopUp).initLogin(
        (loginDetails: { email: string; password: string }) => {
          console.log(loginDetails);
        }
      );
    } else {
      this.LoginNode.active = true;
      this.LoginNode.getComponent(LoginPopUp).initLogin(
        (loginDetails: { email: string; password: string }) => {
          console.log(loginDetails);
        }
      );
    }
    this.node.active = false;
  }

  signUpBtn() {
    if (this.SignUpNode == null) {
      this.SignUpNode = instantiate(this.SignUpPrefab);
      this.node.parent.addChild(this.SignUpNode);
      this.SignUpNode.getComponent(SignUpPopUP).initSignUpDetails(
        (signUpDetails: {
          name: string;
          gender: string;
          email: string;
          password: string;
        }) => {
          console.log(signUpDetails);
        }
      );
    } else {
      this.SignUpNode.active = true;
      this.SignUpNode.getComponent(SignUpPopUP).initSignUpDetails(
        (signUpDetails: {
          name: string;
          gender: string;
          email: string;
          password: string;
        }) => {
          console.log(signUpDetails);
        }
      );
    }
    this.node.active = false;
  }
  update(deltaTime: number) {}
}
