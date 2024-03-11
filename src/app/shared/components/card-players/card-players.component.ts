import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-card-players',
  templateUrl: './card-players.component.html',
  styleUrl: './card-players.component.css'
})
export class CardPlayersComponent implements OnInit{
  @Input() mode: 'small' | 'big' = 'big'
  @Input() track: TrackModel = {
    _id: 0,
    name: '',
    album: '',
    url: '',
    cover: ''
  };

  constructor () { }

  ngOnInit(): void {

  }
}
