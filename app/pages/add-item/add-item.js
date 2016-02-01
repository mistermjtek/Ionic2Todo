import {Page, NavController, NavParams} from 'ionic/ionic';
// import { FORM_DIRECTIVES } from 'angular2/common';

@Page({
  // directives: [FORM_DIRECTIVES],
  templateUrl: 'build/pages/add-item/add-item.html'
})
export class AddItemPage {
  constructor(nav: NavController, navParams: NavParams) {

  	this.nav = nav;
    this.navParams = navParams;

    this.title = "";
    this.description = "";

  }

  saveItem() {
    let newItem = this.newItem;
    // event.preventDefault();

    // let newItem = {
    //   title: this.itemForm.value.title,
    //   description:this.itemForm.value.description
    // }

    this.navParams.get('listPage').saveItem(newItem);
    this.nav.pop();
  }
  // saveItem() {
  // 	let newItem = {
  //     title: this.title;
  //     description: this.description;
  //   }

  //   this.navParams.get('listPage').saveItem(newItem);
  //   this.nav.pop();
  // }
}
