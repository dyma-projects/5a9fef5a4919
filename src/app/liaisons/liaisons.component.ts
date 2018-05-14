import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liaisons',
  templateUrl: './liaisons.component.html',
  styleUrls: ['./liaisons.component.css']
})
export class LiaisonsComponent implements OnInit {

    liaisonsStyles = {
              'background-color': 'pink'
    };

    clic($event){
        alert('clic')
    };

    constructor() { }

    ngOnInit() {
    }

}
