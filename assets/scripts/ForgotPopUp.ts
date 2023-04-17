import { _decorator, Component, Node, EditBox } from "cc";
import { Main } from "./Main";
const { ccclass, property } = _decorator;

@ccclass("ForgotPopUp")
export class ForgotPopUp extends Component {
  forgot_info_callback: Function = null;
  @property(EditBox) emailEditbox: EditBox = null;
  start() {}

  initForgotDetails = (forgot_info: Function) => {
    this.forgot_info_callback = forgot_info;
  };

  forgotBtn() {
    let email = this.emailEditbox.string;
    this.forgot_info_callback({ email: email });
    this.backBtn();
  }
  backBtn() {
    this.node.active = false;
    this.node.parent.getComponent(Main).settingsNode.active = true;
  }
  update(deltaTime: number) {}
}
