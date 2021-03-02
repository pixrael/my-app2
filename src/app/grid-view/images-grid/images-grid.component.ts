import { Component, Input, OnInit, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-images-grid',
  templateUrl: './images-grid.component.html',
  styleUrls: ['./images-grid.component.scss']
})
export class ImagesGridComponent implements OnInit {



  colsRowsValues = [
    { cols: 3, rows: 1 },
    { cols: 1, rows: 2 },
    { cols: 1, rows: 1 },
    { cols: 2, rows: 1 }];

  @Input() images = [];



  tiles = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    /* { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },

    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },

    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' }, */
  ];

  constructor() { }

  ngOnChanges(changes: SimpleChange): void {
    console.log('changes ', changes);

    let iCurrentRowCol = 0;

    this.tiles = this.images.map(images => {

      if (iCurrentRowCol === 4) {
        iCurrentRowCol = 0;
      }

      const cols = this.colsRowsValues[iCurrentRowCol].cols;
      const rows = this.colsRowsValues[iCurrentRowCol].rows;

      const src = images.cropped_picture;

      iCurrentRowCol++
      return { text: 'One', cols: 1, rows: 1, color: 'lightblue', src }

    });


  }

  ngOnInit(): void {
    console.log('images-grid ', this.images);
  }

}
