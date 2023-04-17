import { _decorator, Component, Node, EditBox, Prefab, instantiate } from "cc";
import { ForgotPopUp } from "./ForgotPopUp";
import { Main } from "./Main";
const { ccclass, property } = _decorator;

@ccclass("LoginPopUp")
export class LoginPopUp extends Component {
  login_info_callback: Function = null;
  @property(EditBox) emailEditbox: EditBox = null;
  @property(EditBox) passwordEditbox: EditBox = null;
  @property(Prefab) ForgotPrefab: Prefab = null;
  ForgotNode: Node = null;

  start() {}

  initLogin = (callbackFunc: Function) => {
    this.login_info_callback = callbackFunc;
  };

  loginBtn() {
    let email = this.emailEditbox.string;
    let password = this.passwordEditbox.string;

    this.login_info_callback({
      email: email,
      password: password,
    });
    this.backBtn();
  }

  forgotBtn() {
    if (this.ForgotNode == null) {
      this.ForgotNode = instantiate(this.ForgotPrefab);
      this.node.parent.addChild(this.ForgotNode);
      this.ForgotNode.getComponent(ForgotPopUp).initForgotDetails(
        (forgotDetails: { email: string; password: string }) => {
          console.log(forgotDetails);
        }
      );
    } else {
      this.ForgotNode.active = true;
      this.ForgotNode.getComponent(ForgotPopUp).initForgotDetails(
        (forgotDetails: { email: string; password: string }) => {
          console.log(forgotDetails);
        }
      );
    }
    this.node.active = false;
  }
  backBtn() {
    this.node.active = false;
    this.node.parent.getComponent(Main).settingsNode.active = true;
  }
  update(deltaTime: number) {}
}
