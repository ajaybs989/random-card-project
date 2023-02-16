import { Component,Input } from '@angular/core';
import { faDatabase, faEnvelope, faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() user;

faEnvelope=faEnvelope;
faMapMarkedAlt=faMapMarkedAlt;
faPhone=faPhone;
faDatabase=faDatabase;

  constructor(){

  }

}

