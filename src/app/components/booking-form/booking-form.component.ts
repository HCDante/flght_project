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

  keyword = 'name';
  jsonAirport: any;
  data = [ ];
  selectedOptionDeparture: string = '';
  selectedOptionDestination: string = '';
  currentDate = new Date();
  selectedDayCheckIn:number = 0;
  selectedDayCheckOut:number = 0;
  currentDay: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.getJson();
  }

  getJson(){
    this.http.get('assets/aeropuertos.json').subscribe(data => {
       this.jsonAirport = data;
       this.data = this.jsonAirport.rows;
       //console.log("esto es data", this.data);
       //console.log(this.jsonAirport.rows); // Muestra el contenido del JSON en la consola
   });
  }

  onOptionSelectedDeparture(option: any){
    this.selectedOptionDeparture = option.iata;
    console.log("opcion seleccionada Departure", this.selectedOptionDeparture);
  }
  onOptionSelectedDestination(option: any){
    this.selectedOptionDestination = option.iata;
    console.log("opcion seleccionada Destination", this.selectedOptionDestination);
  }

  isDateValidCheckIn(): boolean{
    this.selectedDayCheckIn = Number(this.model.checkIn.split("-")[2]);
    this.currentDay = Number(this.currentDate.toString().split(" ")[2]);
    if (this.selectedDayCheckIn < this.currentDay) {
      return false;
    }
    return true;
  }

  isDateValidCheckOut(): boolean{
    this.selectedDayCheckIn = Number(this.model.checkIn.split("-")[2]);
    this.selectedDayCheckOut = Number(this.model.checkOut.split("-")[2]);
    this.currentDay = Number(this.currentDate.toString().split(" ")[2]);
    if (this.selectedDayCheckOut < this.currentDay || this.selectedDayCheckOut <= this.selectedDayCheckIn){
      return false;
    }
    return true;
  }
  
  onSubmit(){
    this.model.departure = this.selectedOptionDeparture;
    this.model.destination = this.selectedOptionDestination;
    this.http.post('https://jsonplaceholder.typicode.com/users', this.model)
      .subscribe(response => {
        console.log('Datos guardados:', response);
      });
  }
}

