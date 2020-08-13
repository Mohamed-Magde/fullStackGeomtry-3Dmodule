import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cube } from '../cube';
import { CubeService } from '../cube.service';
import * as THREE from 'three';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  @ViewChild('rendererContainer') rendererContainer: ElementRef;

  // three js vars
  renderer = new THREE.WebGLRenderer();
  scene = null;
  camera = null;
  mesh = null;

  // cube related vars
  id: number;
  cube: Cube;

  constructor(
    public cubeService: CubeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['cubeId'];

    this.cubeService.find(this.id).subscribe((data: Cube) => {
      this.cube = data;
      console.log(this.cube);
      //the attribute
      let { width, height, depth, color, wireFrame } = this.cube;

      // the logic of the cube
      this.scene = new THREE.Scene();

      this.camera = new THREE.PerspectiveCamera(
        35,
        window.innerWidth / window.innerHeight,
        1,
        10000
      );

      this.camera.position.z = 1000;

      const geometry = new THREE.BoxGeometry(width, height, depth);

      const material = new THREE.MeshBasicMaterial({
        color: Number(color),
        wireframe: wireFrame,
      });

      this.mesh = new THREE.Mesh(geometry, material);

      this.scene.add(this.mesh);
    });
  }
  //size of the cube and the selected element
  ngAfterViewInit() {
    this.renderer.setSize(
      window.innerWidth / this.cube.size,
      window.innerHeight / this.cube.size
    );
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.animate();
  }
  // the animation
  animate() {
    window.requestAnimationFrame(() => this.animate());
    this.mesh.rotation.x += this.cube.animationX / 100;
    this.mesh.rotation.y += this.cube.animationY / 100;
    this.renderer.render(this.scene, this.camera);
  }
}
