import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/sevice/user.service';
import { User } from '../class/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id_input_text:any;
  nom_input_text:any;
  prenom_input_text:any;
  date_naissance_input_text:any;
  classe_input_text:any;
  data_user:any=[];
  user_for_deleting:any;
  data_is_vide:boolean=false;
  user_to_update:any=[];
  constructor(private userService:UserService) {}

  ngOnInit(): void {
    this.findAllUser();
  }

  insertUser(){
    this.id_input_text=this.data_user.length+1;
    var user=new User(this.id_input_text,this.nom_input_text,this.prenom_input_text,this.date_naissance_input_text,this.classe_input_text);
    this.userService.insert_user(user);
    this.ngOnInit();
  }
  findAllUser(){
    var data=this.userService.findAllUser();
    console.log(data);
    var result=[];
    if(data!=="vide"){
      for(var a=0;a<data.length;a++){
        console.log("i="+a);
        if(data[a]=="vide"){
          console.log("VIDEEEE");
          a++;
        }
        else{
          var userObject=JSON.parse(data[a]);
          result[a]=this.json2array(userObject);
        }
      }
      this.data_user=result;
      this.data_is_vide=false;
    }
    else if(data=="vide"){
      this.data_is_vide=true;
    }
  }
  deleteUser(userId:any){
    this.userService.deleteUser(userId);
    this.ngOnInit();
  }
  deleteLocalStorage(){
    this.userService.deleteStorage();
    this.ngOnInit();
  }
  json2array(json:any){
    var result :any= [];
    var keys = Object.keys(json);
    keys.forEach(function(key){
        result.push(json[key]);
    });
    return result;
  }
  findUserById(userId:any){
    var user:any=this.userService.findUserById(userId);
    return user;
  }
  updateUserToUpdate(userId:any){
    var user_ancien:any=this.findUserById(userId);
    var userObject=JSON.parse(user_ancien);
    this.user_to_update=this.json2array(userObject);
  }
  updateUser(userId:any){
    this.updateUserToUpdate(userId);
  }
  finalUpdatingUser(){
    var newUser=new User(this.user_to_update[0],this.user_to_update[1],this.user_to_update[2],this.user_to_update[3],this.user_to_update[4]);
    this.userService.updateUser(newUser);
    this.ngOnInit();
  }
}
