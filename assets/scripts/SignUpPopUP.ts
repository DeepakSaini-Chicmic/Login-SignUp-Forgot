import {
  _decorator,
  Component,
  Node,
  EditBox,
  ToggleContainer,
  Prefab,
  instantiate,
  ScrollView,
  JsonAsset,
  Label,
} from "cc";
import { GenderOptions } from "./GenderOptions";
import { Main } from "./Main";
const { ccclass, property } = _decorator;

@ccclass("SignUpPopUP")
export class SignUpPopUP extends Component {
  @property(EditBox) usernameEditbox: EditBox = null;
  @property(EditBox) emailEditbox: EditBox = null;
  @property(EditBox) passwordEditbox: EditBox = null;
  @property(JsonAsset) gendersJson: JsonAsset = null;
  @property(Label) selectedGender: Label = null;
  @property(Node) genderScroll: Node = null;
  @property(Prefab) genderOptions: Prefab = null;
  signUp_info_callback: Function = null;

  optionsJson: any = null;
  start() {
    this.optionsJson = this.gendersJson.json;
    this.optionsJson = this.optionsJson.Options;
    let jsonLength = this.optionsJson.length;
    this.genderScroll.active = false;
    for (let i = 0; i < jsonLength; i++) {
      let gender = instantiate(this.genderOptions);
      this.genderScroll.getComponent(ScrollView).content.addChild(gender);
      this.genderScroll
        .getComponent(ScrollView)
        .content.children[i].getComponent(GenderOptions)
        .gender.getComponent(Label).string = this.optionsJson[i];
    }
  }

  initSignUpDetails = (signUp_info: Function) => {
    this.signUp_info_callback = signUp_info;
  };

  signUpBtn() {
    let name = this.usernameEditbox.string;
    let gender = this.selectedGender.string;
    let email = this.emailEditbox.string;
    let password = this.passwordEditbox.string;
    this.signUp_info_callback({
      name: name,
      gender: gender,
      email: email,
      password: password,
    });
    this.backBtn();
  }

  openDropDown() {
    if (!this.genderScroll.active) this.genderScroll.active = true;
    else this.genderScroll.active = false;
  }
  backBtn() {
    this.node.active = false;
    this.node.parent.getComponent(Main).settingsNode.active = true;
  }
  update(deltaTime: number) {}
}
