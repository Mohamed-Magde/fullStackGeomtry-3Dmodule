import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CubeService } from '../cube.service';
import { Cube } from '../cube';
import * as THREE from 'three';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  cubes: Cube[] = [];
  constructor(public cubeService: CubeService) {}

  ngOnInit(): void {
    this.cubeService.getAll().subscribe((data: Cube[]) => {
      this.cubes = data;
      console.log(this.cubes);
    });
  }

  deleteCube(id) {
    this.cubeService.delete(id).subscribe((res) => {
      this.cubes = this.cubes.filter((item) => item.id != id);
      console.log('Cube deleted successfully!');
    });
  }
}
