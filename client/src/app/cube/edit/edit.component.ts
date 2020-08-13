import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cube } from '../cube';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CubeService } from '../cube.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  id: number;
  cube: Cube;
  form: FormGroup;

  constructor(
    public cubeService: CubeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['cubeId'];
    this.cubeService.find(this.id).subscribe((data: Cube) => {
      this.cube = data;
    });

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      width: new FormControl(0, [Validators.required]),
      height: new FormControl(0, [Validators.required]),
      depth: new FormControl(0, [Validators.required]),
      color: new FormControl('', [Validators.required]),
      wireFrame: new FormControl(true, [Validators.required]),
      size: new FormControl(0, [Validators.required]),
      animationX: new FormControl(0, [Validators.required]),
      animationY: new FormControl(0, [Validators.required]),
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.cubeService.update(this.id, this.form.value).subscribe((res) => {
      console.log('cube updated successfully!');
      this.router.navigateByUrl('cube/index');
    });
  }
}
