import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';

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

  constructor (private multimediaService: MultimediaService) { }

  ngOnInit(): void {

  }

  sendPlay(track: TrackModel): void {
    this.multimediaService.trackInfo$.next(track)
  }


}
