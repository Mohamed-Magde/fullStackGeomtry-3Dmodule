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
  ) {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    this.camera.position.z = 1000;

    const geometry = new THREE.BoxGeometry(300, 300, 300);
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true,
    });
    this.mesh = new THREE.Mesh(geometry, material);

    this.scene.add(this.mesh);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['cubeId'];

    this.cubeService.find(this.id).subscribe((data: Cube) => {
      this.cube = data;
    });
  }

  ngAfterViewInit() {
    this.renderer.setSize(window.innerWidth / 5, window.innerHeight / 5);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.animate();
  }

  animate() {
    window.requestAnimationFrame(() => this.animate());
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.02;
    this.renderer.render(this.scene, this.camera);
  }
}
