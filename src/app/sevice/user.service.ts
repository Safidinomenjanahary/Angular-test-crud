import { Injectable } from '@angular/core';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { User } from '../component/class/user'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {}
  insert_user(user:User){
      var user_number=JSON.parse(JSON.stringify(localStorage.getItem("nombre")));
      var number=1;
      if(user_number>0 && user_number!=null){
        number=Number(user_number)+1;
      }
      localStorage.setItem("user"+(number),JSON.stringify(user));
      localStorage.setItem("nombre",""+number);
  }
  findAllUser(){
    var user_number=Number(localStorage.getItem("nombre"));
    var data:any=[];
    var all_data_is_null=true;
    for(var i=0;i<user_number;i++){
      var indice=i+1;
      if(localStorage.getItem("user"+indice)!=null)
      {
        data[i]=localStorage.getItem("user"+indice);
        all_data_is_null=false;
      }
      else if(localStorage.getItem("user"+indice)==null){
        data[i]="vide";
      }
    }
    if(all_data_is_null){
      console.log("vide");
      return "vide";
    }
    return data;
  }

  deleteUser(todoText:any) {
    console.log("user to delete= user"+todoText);
    localStorage.removeItem("user"+todoText);
  }
  deleteStorage(){
    localStorage.clear();
  }
  findUserById(userId:any){
    return localStorage.getItem("user"+userId);
  }
  updateUser(user:User){
    localStorage.setItem("user"+user.id,JSON.stringify(user));
  }
}
