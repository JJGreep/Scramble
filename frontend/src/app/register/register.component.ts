import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['',Validators.required],
      password: ['', Validators.required]

    });
  }

  onSubmit(){
    this.apiService.createUser(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['login'])
      });
  }

}
