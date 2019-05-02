import { Component, OnInit } from '@angular/core';
import { PetService } from '../api/services';

@Component({
  selector: 'app-pet',
  providers: [PetService],
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.less']
})
export class PetComponent {
  pets: Array<any>;
  constructor(private service: PetService) {
    this.service.findPetsByStatus(['available'])
      .subscribe(pets => this.pets = pets);
  }
}
