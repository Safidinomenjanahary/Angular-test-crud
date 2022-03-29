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
  data_user:any;
  user_for_deleting:any;
  constructor(private userService:UserService) {}

  ngOnInit(): void {
    this.findAllUser();
  }

  insertUser(){
    let id=this.id_input_text;
    let nom=this.nom_input_text;
    let prenom=this.prenom_input_text;
    let date_naissance=this.date_naissance_input_text;
    let classe=this.classe_input_text;
    let user=new User(id,nom,prenom,date_naissance,classe);
    this.userService.insert_user(user);
    this.ngOnInit();
  }
  findAllUser(){

    var data:any=this.userService.findAllUser();
    console.log(data);
    let result=[];
    for(let a=1;a<data.length;a++){
      result[a]=JSON.parse(data[a]);
      
    }
    console.log(result[1].nom);
    this.data_user=result;
  }
  deleteUser(userId:any){
    this.userService.deleteUser(userId);
    this.ngOnInit();
  }
  addObjectInLocalStorage(object:string){
    localStorage.getItem('nombre')
  }
}
