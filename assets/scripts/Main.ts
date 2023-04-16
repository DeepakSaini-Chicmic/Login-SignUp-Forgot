import { _decorator, Component, Node, Prefab, instantiate } from "cc";
import { LoginPopUp } from "./LoginPopUp";
import { Settings } from "./Settings";
import { SignUpPopUP } from "./SignUpPopUP";
const { ccclass, property } = _decorator;

@ccclass("Main")
export class Main extends Component {
  signUpCallback: Function = null;
  loginCallback: Function = null;

  @property(Prefab) SignUpPrefab: Prefab = null;
  @property(Prefab) SettingsPrefab: Prefab = null;

  SignUpNode: Node = null;
  settingsNode: Node = null;

  start() {
    this.settingsNode = instantiate(this.SettingsPrefab);
    this.node.addChild(this.settingsNode);
    this.settingsNode.getComponent(Settings).callbackFunc(this.signUpBtn);
    this.settingsNode.active = false;
  }

  settingsBtn() {
    this.settingsNode.active = true;
  }

  signUpBtn = () => {
    if (this.SignUpNode == null) {
      this.SignUpNode = instantiate(this.SignUpPrefab);
      this.node.addChild(this.SignUpNode);
    } else {
      this.SignUpNode.active = true;
    }
  };

  update(deltaTime: number) {}
}
