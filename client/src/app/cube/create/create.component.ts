import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CubeService } from '../cube.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  constructor(public cubeService: CubeService, private router: Router) {}

  ngOnInit(): void {
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
    this.cubeService.create(this.form.value).subscribe((res) => {
      console.log('cube created successfully!');
      this.router.navigateByUrl('cube/index');
    });
  }
}
