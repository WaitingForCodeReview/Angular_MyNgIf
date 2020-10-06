import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-ng-if-test',
  templateUrl: './my-ng-if-test.component.html',
  styleUrls: ['./my-ng-if-test.component.css']
})
export class MyNgIfTestComponent implements OnInit {
  showDiv: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
