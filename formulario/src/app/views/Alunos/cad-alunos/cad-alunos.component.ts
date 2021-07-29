import { Alunos } from './../alunos.model';
import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cad-alunos',
  templateUrl: './cad-alunos.component.html',
  styleUrls: ['./cad-alunos.component.css']
})
export class CadAlunosComponent implements OnInit {

  mySexo = '';

  aluno: Alunos = {
    nome: '',
    cpf: '',
    nascimento: '',
    sexo: '',
    responsavel: '',
    cep: '',
    endereco: '',
    numero: '',
    bairro: '',
    telefone: '',
    celular: ''

  }

  constructor(private alunosService: AlunosService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  createAlunos(): void {
    this.alunosService.create(this.aluno).subscribe(() => {
      this.alunosService.showMessage('Aluno cadastrado!')
      this.router.navigate(['/alunos'])
    })

  }

  navigateToCadastrar(): void {
    console.log('Navegando...')
  }

  listAlunos(): void {
    this.router.navigate(['/alunos'])
  }

}
