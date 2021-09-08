import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { POperationComponent } from 'src/app/shared/poperation/poperation.component';

export interface GetElement {
  id: number;
  nome_produto: string;
  valor: number;
  data_vencimento: string;
  situacao: string;
}

export interface PElement {
  nome_produto: string;
  valor: number;
  data_vencimento: string;
}

export interface DialogData {
  animal: string;
}

const ELEMENT_DATA: GetElement[] = [
  {id: 1, nome_produto: "sla", valor: 1291, data_vencimento: "2021/09/10", situacao: "valido"},
  {id: 1, nome_produto: "sla", valor: 1291, data_vencimento: "2021/09/10", situacao: "valido"},
  {id: 1, nome_produto: "sla", valor: 1291, data_vencimento: "2021/09/10", situacao: "valido"},
  {id: 1, nome_produto: "sla", valor: 1291, data_vencimento: "2021/09/10", situacao: "valido"},
  {id: 1, nome_produto: "sla", valor: 1291, data_vencimento: "2021/09/10", situacao: "valido"},
  {id: 1, nome_produto: "sla", valor: 1291, data_vencimento: "2021/09/10", situacao: "valido"},
  {id: 1, nome_produto: "sla", valor: 1291, data_vencimento: "2021/09/10", situacao: "valido"},
  {id: 1, nome_produto: "sla", valor: 1291, data_vencimento: "2021/09/10", situacao: "valido"},
  {id: 1, nome_produto: "sla", valor: 1291, data_vencimento: "2021/09/10", situacao: "valido"},
  {id: 1, nome_produto: "sla", valor: 1291, data_vencimento: "2021/09/10", situacao: "valido"},
  {id: 1, nome_produto: "sla", valor: 1291, data_vencimento: "2021/09/10", situacao: "valido"},
  {id: 1, nome_produto: "sla", valor: 1291, data_vencimento: "2021/09/10", situacao: "valido"},
  {id: 1, nome_produto: "sla", valor: 1291, data_vencimento: "2021/09/10", situacao: "valido"},
  {id: 1, nome_produto: "sla", valor: 1291, data_vencimento: "2021/09/10", situacao: "valido"},
];



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome_produto', 'valor', 'data_vencimento', 'situacao'];
  dataSource = ELEMENT_DATA;

  id_b!:number;
  nome_produto!: string;
  valor!: number;
  data_vencimento!: string;


  constructor(public dialog: MatDialog) {}

  postPut(post: boolean): void {
    const dialogRef = this.dialog.open(POperationComponent, {
      width: '250px',
      data: {nome_produto: this.nome_produto, valor: this.valor, data_vencimento: this.data_vencimento}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined){
        this.nome_produto = result.nome_produto;
        this.valor = result.valor;
        this.data_vencimento = result.data_vencimento;
        const out = {nome_produto: this.nome_produto, valor: this.valor, data_vencimento: this.data_vencimento};
        if(post){
          //faz o post
        }
        else{
          //faz o put
        }
      }
    });

  }

  delete(id_b: number): void{

  }

  getAll(): void{

  }

  getId(id_b: number): void{
    
  }

  ngOnInit(): void {
  }



}
