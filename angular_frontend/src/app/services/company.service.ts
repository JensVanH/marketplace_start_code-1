import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

 companyName: string = "SmartLearn"

 companies: string[] = ["SafaRide", "SmartLearn", "Ticketswap", "RetroKicks", "Airbnb"]

 
}

