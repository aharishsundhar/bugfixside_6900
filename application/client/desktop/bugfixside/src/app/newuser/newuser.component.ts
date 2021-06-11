import { Component, OnInit } from '@angular/core';
import { NewuserService } from './newuser.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.scss'],
})

export class NewuserComponent implements OnInit {
    public add = {
        Enter_Name: '',
    }

    constructor (
        private newuserService: NewuserService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.newuserService.GpCreate(this.add).subscribe(data => {
            this.add.Enter_Name = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}