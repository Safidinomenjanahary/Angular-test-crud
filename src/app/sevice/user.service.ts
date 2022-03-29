import { Injectable } from '@angular/core';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { User } from '../component/class/user'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { 
    this.findAllUser();
  }

  insert_user(user:User){
      let user_number=JSON.parse(JSON.stringify(localStorage.getItem("nombre")));
      if(localStorage.getItem("nombre")==="" || localStorage.getItem("nombre")===null || localStorage.getItem("nombre")==='NaN' || localStorage.getItem("nombre")==="NaN"){
        user_number="0";
      }
      let number=Number(user_number)+1;
      localStorage.setItem("user"+(number),JSON.stringify(user));
      localStorage.setItem("nombre",""+number);
      
  }
  findAllUser(){
    let user_number=Number(localStorage.getItem('nombre'));
    if(user_number==null || user_number==0){
      user_number=0;
    }
    localStorage.clear();
    let data=[];
    for(let i=1;i<user_number;i++){
      data[i]=localStorage.getItem("user"+i);
    }
    return data;
  }
  deleteUser(todoText:any) {
    localStorage.removeItem(""+todoText);
  }
  updateUser(oldText:any, newText:any){
    // let todos = JSON.parse(localStorage.getItem('todos'));
    // for(let i = 0; i <todos.length; i++) {
    //  if(todos[i].text == oldText) {
    //    todos[i].text = newText;
    //  }
  }
}
