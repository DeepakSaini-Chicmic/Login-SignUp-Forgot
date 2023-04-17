import { _decorator, Component, Node, Prefab, instantiate, Button } from "cc";
import { LoginPopUp } from "./LoginPopUp";
import { Settings } from "./Settings";
import { SignUpPopUP } from "./SignUpPopUP";
const { ccclass, property } = _decorator;

@ccclass("Main")
export class Main extends Component {
  @property(Prefab) SettingsPrefab: Prefab = null;
  @property(Node) SettingsBtn: Node = null;
  settingsNode: Node = null;

  start() {}

  settingsBtn() {
    this.settingsNode = instantiate(this.SettingsPrefab);
    this.node.addChild(this.settingsNode);
    this.SettingsBtn.active = false;
  }

  update(deltaTime: number) {}
}
