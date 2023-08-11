import { Component, OnInit } from '@angular/core';

interface dataform {
  
  "name1": string,
  "lastname1": string,
  "gender1": string,
  "birthDate1": string,
  "country1": string,
  "email1": string,
  "phoneNumber1": number,
  "noAdult": number

}

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent {
  model:dataform = {
    
    name1: "",
    lastname1: "",
    gender1: "",
    birthDate1: "",
    country1: "",
    email1: "",
    phoneNumber1: 0,
    noAdult: 0 
  
}
constructor() { }

ngOnInit(): void {
}

onSubmit(values: any): void {
  console.log('Form Value:', values);
  localStorage.setItem('contact', JSON.stringify(values));
  localStorage.getItem('contact');
}

}
