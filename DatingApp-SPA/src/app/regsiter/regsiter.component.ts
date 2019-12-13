import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-regsiter',
  templateUrl: './regsiter.component.html',
  styleUrls: ['./regsiter.component.css']
})
export class RegsiterComponent implements OnInit {

  model: any = {};
  @Output() cancelRegister = new EventEmitter();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => { console.log('registration successful'); }, error => { console.log(error); });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
