import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakedatabaseService {
  private fakeDatabase: any[] = [];

  constructor() { }

  // Aggiungi dati al "fake database"
  saveFormData(formData: any): void {
    this.fakeDatabase.push(formData);
  }

  // Recupera tutti i dati dal "fake database"
  getAllFormData(): any[] {
    return this.fakeDatabase;
  }
  
}
