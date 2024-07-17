import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  DB_CONNECTION_ENABLED: boolean = false;

  constructor() { 
  }
}
