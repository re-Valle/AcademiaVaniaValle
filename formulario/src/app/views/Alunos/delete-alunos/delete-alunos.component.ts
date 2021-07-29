import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from './../alunos.service';
import { Alunos } from './../alunos.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-alunos',
  templateUrl: './delete-alunos.component.html',
  styleUrls: ['./delete-alunos.component.css']
})
export class DeleteAlunosComponent implements OnInit {

  aluno!: Alunos;

  constructor(private alunosService: AlunosService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.alunosService.readById(id).subscribe(alunos => {
      this.aluno = alunos;
    })
  }

  deleteAlunos(): void {
    this.alunosService.delete(this.aluno).subscribe(() => {
      this.alunosService.showMessage('Aluno excluído com sucesso!')
      this.router.navigate(["/alunos"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/alunos"]);
  }

}
