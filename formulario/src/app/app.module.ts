import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';

import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './views/home/home.component';
import { ListAlunosComponent } from './views/Alunos/list-alunos/list-alunos.component';
import { CadAlunosComponent } from './views/Alunos/cad-alunos/cad-alunos.component';
import { FinanceiroComponent } from './views/financeiro/financeiro.component';
import { ListTurmaComponent } from './views/Turmas/list-turma/list-turma.component';
import { CadTurmaComponent } from './views/Turmas/cad-turma/cad-turma.component';
import { CadCursosComponent } from './views/Cursos/cad-cursos/cad-cursos.component';
import { ListCursosComponent } from './views/Cursos/list-cursos/list-cursos.component';
import { ListMatriculasComponent } from './views/matriculas/list-matriculas/list-matriculas.component';
import { CadMatriculasComponent } from './views/matriculas/cad-matriculas/cad-matriculas.component';
import { AlunosReadComponent } from './views/Alunos/alunos-read/alunos-read.component';
import { UpdateAlunosComponent } from './views/Alunos/update-alunos/update-alunos.component';
import { DeleteAlunosComponent } from './views/Alunos/delete-alunos/delete-alunos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ListAlunosComponent,
    CadAlunosComponent,
    HomeComponent,
    FinanceiroComponent,
    ListTurmaComponent,
    CadTurmaComponent,
    CadCursosComponent,
    ListCursosComponent,
    ListMatriculasComponent,
    CadMatriculasComponent,
    AlunosReadComponent,
    UpdateAlunosComponent,
    DeleteAlunosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSnackBarModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
