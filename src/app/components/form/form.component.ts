import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor(private apiService: ApiService) {
    this.form = new FormGroup({
      machineName: new FormControl(''),
      tipologiaMacchina: new FormControl(''),
      puntiLubrificazione: new FormControl(''),
      nMacchineTipo: new FormControl(''),
      nOreAnno: new FormControl(''),
      datiTecniciPubblicati: new FormControl(''), // Corretto il nome del controllo
    });
  }

  ngOnInit() {
    this.apiService.getClientes().subscribe(
      data => {
        this.form.patchValue(data); // Popola il form con i dati ricevuti dall'API
      },
      error => {
        console.error('Errore durante il caricamento dei dati dall\'API:', error);
      }
    );
  }

  handleFileInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input && input.files) {
      const file = input.files[0];
      if (file) {
        // Gestisci il file qui
      }
    }
  }
}
