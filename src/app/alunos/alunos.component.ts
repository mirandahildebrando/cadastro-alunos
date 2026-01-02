import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Aluno } from '../modelo/Aluno';
import { MediaPipe } from "../pipe/media.pipe";

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MediaPipe],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.css'
})
export class AlunosComponent {

    formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    nota1: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.min(0), Validators.max(10)]),
    nota2: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.min(0), Validators.max(10)]),
  });

  btnCadastrar: boolean = true;

  vetor: Aluno[] = [];
  indice: number = -1;


  cadastrar(){


  this.vetor.push(this.formulario.value as Aluno);


  this.formulario.reset();


  }

  selecionar(indice: number){

    this.indice = indice;


    this.formulario.setValue({nome: this.vetor[indice].nome,
                              nota1: this.vetor[indice].nota1,
                              nota2: this.vetor[indice].nota2});


    this.btnCadastrar = false;

    }

    alterar(){



      this.vetor[this.indice] = this.formulario.value as Aluno;


      this.formulario.reset();


      this.btnCadastrar = true;
    }

    excluir(){

      this.vetor.splice(this.indice, 1);


      this.formulario.reset();


      this.btnCadastrar = true;
    }

    cancelar(){

      this.formulario.reset();


      this.btnCadastrar = true;

    }


}
