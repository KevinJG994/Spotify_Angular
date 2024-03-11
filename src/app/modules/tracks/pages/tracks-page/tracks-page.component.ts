import { TracksService } from './../../services/tracks.service';
import { TrackModel} from './../../../../core/models/tracks.model';
import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit, OnDestroy{

  tracksTrending:  Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []

  listObservers$: Array<Subscription> = []

  constructor(private tracksService: TracksService) {  }

  ngOnInit(): void {
    this.loadDataAll()
    this.loadDataRandom()

  }

    async loadDataAll(): Promise<any> {
    this.tracksTrending = await this.tracksService.getAllTracks$().toPromise()
    }


  loadDataRandom(): void {
    this.tracksService.getAllRandom$()
      .subscribe((response: TrackModel[]) => {
        this.tracksRandom= response
    })
  }



  ngOnDestroy(): void {
  }
}
