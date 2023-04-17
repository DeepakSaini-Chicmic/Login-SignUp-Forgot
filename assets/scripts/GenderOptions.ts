import { _decorator, Component, Node, Label } from "cc";
import { signUpGenderContent } from "./signUpGenderContent";
const { ccclass, property } = _decorator;

@ccclass("GenderOptions")
export class GenderOptions extends Component {
  @property(Label) gender: Label = null;
  start() {}

  genderSelected() {
    this.node.parent.getComponent(signUpGenderContent).Selected.string =
      this.gender.getComponent(Label).string;
    this.node.parent.getComponent(signUpGenderContent).genderScroll.active =
      false;
  }
  update(deltaTime: number) {}
}
