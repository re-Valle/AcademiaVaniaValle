import { DeleteAlunosComponent } from './views/Alunos/delete-alunos/delete-alunos.component';
import { UpdateAlunosComponent } from './views/Alunos/update-alunos/update-alunos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ListAlunosComponent } from './views/Alunos/list-alunos/list-alunos.component';
import { FinanceiroComponent } from './views/financeiro/financeiro.component';
import { CadAlunosComponent } from './views/Alunos/cad-alunos/cad-alunos.component';
import { ListCursosComponent } from './views/Cursos/list-cursos/list-cursos.component';
import { CadCursosComponent } from './views/Cursos/cad-cursos/cad-cursos.component';
import { ListTurmaComponent } from './views/Turmas/list-turma/list-turma.component';
import { CadTurmaComponent } from './views/Turmas/cad-turma/cad-turma.component';
import { ListMatriculasComponent } from './views/matriculas/list-matriculas/list-matriculas.component';
import { CadMatriculasComponent } from './views/matriculas/cad-matriculas/cad-matriculas.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "alunos",
    component: ListAlunosComponent
  },
  {
    path: "cad-alunos",
    component: CadAlunosComponent
  },
  {
    path: "alunos/update/:id",
    component: UpdateAlunosComponent
  },
  {
    path: "alunos/delete/:id",
    component: DeleteAlunosComponent
  
  },
  {
    path: "financeiro",
    component: FinanceiroComponent
  },
  {
    path: "cursos",
    component: ListCursosComponent
  },
  {
    path: "cad-cursos",
    component: CadCursosComponent
  },
  {
    path: "turmas",
    component: ListTurmaComponent
  },
  {
    path: "cad-turmas",
    component: CadTurmaComponent
  },
  {
    path: "matriculas",
    component: ListMatriculasComponent
  },
  {
    path: "cad-matriculas",
    component: CadMatriculasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
