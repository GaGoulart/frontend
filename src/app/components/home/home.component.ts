import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomeProduto: string = 'Curso do Angular';
  anuncio: string = `O ${this.nomeProduto} está em promoção`;
  idProduto: number = 2.5123;
  precoProduto: number = 2.51;
  promocao: boolean = true;
  foto:string = 'assets/img/crud.png';
  dataValidade = '2021-12-31'

  constructor() {
    //this.anuncio = 'o' + this.nomeProduto + 'está em promoção';
    console.log('Nome do Produto: ', this.nomeProduto);
    console.log('Anuncio: ',this.anuncio);
    console.log('Id: ', this.idProduto);
    console.log('Preco: ', this.precoProduto);
    console.log('Promoção', this.promocao);
   /* var variavel1;
    let variavel2;
    const variavel3 : number = 10;
    var idade = 15;
    console.log('Minha idade é: ', idade);
    let idadeLet = 20;
    console.log('Minha idade é: ', idadeLet);

    function imprimeIdade(){
      var idade = 20;
      console.log('minha idade é :', idade);
    }

    function imprimeIdade(){
      let idade = 20;
      console.log('Sua idade é :', idade);
    }

     /* function imprimeIdadeFor() {
      for(var idade = 30; idade<=40; idade++){
        console.log('Idade dentro do for: ', idade);
      }
      console.log('Idade fora do for: ', idade);
    }

    let idade = 12;
    function imprimeIdadeFor() {
      for(let idade = 30; idade<=40; idade++){
        console.log('Idade dentro do for: ', idade);
      }
      console.log('Idade fora do for: ', idade);
    }
    imprimeIdade();

    imprimeIdadeFor();*/
  }

  ngOnInit(): void {
  }
}


