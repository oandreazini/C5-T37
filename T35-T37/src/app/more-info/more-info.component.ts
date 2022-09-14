import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css'],
})
export class MoreInfoComponent implements OnInit {

  characters: any = null;

  id = this.activatedRoute.snapshot.paramMap.get('id');

  constructor(private activatedRoute: ActivatedRoute, private charactersService: CharactersService) {}

  ngOnInit() {
    this.charactersService
      .giveInfo(this.id)
      .subscribe((result) => (this.characters = result));
  }
}
