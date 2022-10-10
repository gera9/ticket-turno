import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ticket-turno';
  
  regexs = {
    name: /^[a-zA-ZÀ-ÿ\s]{3,20}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{10}$/,
    curp: /^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$/,
    age: /^\d{1,2}$/,
  };

  ticketTurnoForm = new FormGroup({
    name: new FormControl('', Validators.pattern(this.regexs.name)),
    curp: new FormControl('', Validators.pattern(this.regexs.curp)),
    name2: new FormControl('', Validators.pattern(this.regexs.name)),
    paternal: new FormControl('', Validators.pattern(this.regexs.name)),
    maternal: new FormControl('', Validators.pattern(this.regexs.name)),
    phone: new FormControl('', Validators.pattern(this.regexs.phone)),
    cel: new FormControl('', Validators.pattern(this.regexs.phone)),
    email: new FormControl('', Validators.email),
    age: new FormControl('', Validators.pattern(this.regexs.age)),
  });

  onSubmit() {
    alert('¡Turno generado!')
}
}
