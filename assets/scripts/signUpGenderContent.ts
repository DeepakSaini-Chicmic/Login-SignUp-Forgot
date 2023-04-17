import { _decorator, Component, Node, Label } from "cc";
const { ccclass, property } = _decorator;

@ccclass("signUpGenderContent")
export class signUpGenderContent extends Component {
  @property(Label) Selected: Label = null;
  @property(Node) genderScroll: Node = null;
  start() {}
  update(deltaTime: number) {}
}
