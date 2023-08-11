import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent {
  model = {
    departure: '',
    destination: '',
    checkIn: '',
    checkOut: '',
    baggage: '',
    adults: '',
    children: ''
  }

  constructor(private http: HttpClient) {}
  
  onSubmit(){
    this.http.post('https://jsonplaceholder.typicode.com/users', this.model)
      .subscribe(response => {
        console.log('Datos guardados:', response);
      });
    //console.log("Valores del formulario", form.value); 
  }
}

