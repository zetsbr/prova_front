import { Component, OnInit } from '@angular/core';
import { GetElement } from 'src/app/models/GetElement';
import { PElement } from 'src/app/models/PElement';
import { api_connService } from 'src/app/services/api_conn.services';

@Component
({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [api_connService]
})
export class HomeComponent implements OnInit 
{
  displayedColumns: string[] = ['id', 'nome_produto', 'valor', 'data_vencimento', 'situacao'];
  dataSource !: GetElement[];
  aux!: GetElement;

  id!: number;
  nome_Produto !: string;
  valor!: number;
  data_Vencimento!: Date;

  constructor(public api_connService: api_connService) {  }
  
  getId(id: number): void
  {
    this.api_connService.getIdHttp(this.id)
    .subscribe((data: GetElement) => 
    {
      this.aux = data;
    })
    this.nome_Produto = this.aux.nome_Produto;
    this.valor = this.aux.valor;
    this.data_Vencimento = this.aux.data_Vencimento;
  }

  post(body: PElement): void 
  {
    this.api_connService.postHttp(body)
    .subscribe(result => 
    {
      console.log("post");
    })
  }

  put(id: number, body: PElement): void
  {
    this.api_connService.putHttp(id, body)
    .subscribe(result => 
    {
      console.log("put");
    })
  }

  delete(id: number): void
  {
    this.api_connService.deleteHttp(id)
    .subscribe(result => 
    {
      console.log("delete");
    })
  }

  getAll(): void
  {
    this.api_connService.getAllHttp()
    .subscribe((data: GetElement[]) => 
    {
      this.dataSource = data;
    })
  }

  ngOnInit(): void {
  }



}
