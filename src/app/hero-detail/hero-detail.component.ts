import { Component} from '@angular/core';
import { FormBuilder, FormGroup , Validators }       from '@angular/forms';

import { states } from '../data-model';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  heroForm: FormGroup;
  states = states;

  constructor(private fb: FormBuilder){
    this.createForm();
  }

  createForm(){
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      street: '',
      city: '',
      state: '',
      zip: '',
      power: '',
      sidekick: '',
    })
  }

}
