import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-matriculas',
  templateUrl: './list-matriculas.component.html',
  styleUrls: ['./list-matriculas.component.css']
})
export class ListMatriculasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToMatriculas(): void {
    this.router.navigate(['cad-matriculas'])
  }

}
