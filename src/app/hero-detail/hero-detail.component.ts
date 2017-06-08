import { Component} from '@angular/core';
import { FormControl, FormGroup }       from '@angular/forms';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  name = new FormControl();

  heroForm = new FormGroup ({
    name: new FormControl()
  });

}
