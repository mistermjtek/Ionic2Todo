import {Storage, SqlStorage} from 'ionic/ionic';
import {Injectable} from 'angular2/core';

@Injectable()

export class DataService{
  constructor(){

    this.storage = new Storage(SqlStorage, {name: 'todoapp'});
    this.data = null;

    this.storage.get('todoapp').then((todos) =>{
      this.data = JSON.parse(todos);
      console.log(this.data);
    })
  }

  getData(){
    return this.storage.get('todoapp');
  }

  save(item){
    if(!this.data){
      this.data = [item];
      let newData = JSON.stringify(item);
      this.storage.set('todoapp', newData);
    } else {
        this.data.push(item);
        let newData = JSON.stringify(this.data);
        this.storage.set('todoapp', newData);
    }
  }
}