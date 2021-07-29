import { AlunosService } from './../alunos.service';
import { Alunos } from './../alunos.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos-read',
  templateUrl: './alunos-read.component.html',
  styleUrls: ['./alunos-read.component.css']
})
export class AlunosReadComponent implements OnInit {

  aluno: Alunos[]
  displayedColumns = ['id', 'nome', 'cpf', 'nascimento', 'sexo', 'responsavel', 'cep', 'endereco', 'numero', 'bairro', 'telefone', 'celular', 'action']

  constructor(private alunosService: AlunosService) {
    this.aluno = []
  }

  ngOnInit(): void {
    this.alunosService.read().subscribe(alunos => {
      this.aluno = alunos
      console.log(alunos)
    })
  }

}
