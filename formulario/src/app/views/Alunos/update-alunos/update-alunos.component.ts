import { Alunos } from './../alunos.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-update-alunos',
  templateUrl: './update-alunos.component.html',
  styleUrls: ['./update-alunos.component.css']
})
export class UpdateAlunosComponent implements OnInit {
  aluno!: Alunos;

  constructor(
    private alunosService: AlunosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.alunosService.readById(id).subscribe(alunos => {
      this.aluno = alunos
    });
  }

  updateAlunos(): void {
    this.alunosService.update(this.aluno).subscribe(() => {
      this.alunosService.showMessage('Aluno atualizado com sucesso!')
      this.router.navigate(['/alunos']);
    })
  }

  listAlunos(): void {
    this.router.navigate(['/alunos'])
  }
}
