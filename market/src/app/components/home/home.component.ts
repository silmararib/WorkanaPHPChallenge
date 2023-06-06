import { Component } from '@angular/core';
import {NgFor} from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [MatGridListModule, NgFor]
})
export class HomeComponent {

  tiles: Tile[] = [
    {text: 'Sale', cols: 4, rows: 1, color: '#e27809'},
    {text: 'Product', cols: 2, rows: 1, color: '#e99f51'},
    {text: 'Product Type', cols: 2, rows: 1, color: '#e99f51'},
  ];
}
