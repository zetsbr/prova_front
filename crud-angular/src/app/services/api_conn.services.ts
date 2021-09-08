import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { GetElement } from "../models/GetElement";
import { PElement } from "../models/PElement";

@Injectable()
export class api_connService{
    api_url = "https://localhost:44397/Pedido";
    constructor(private http: HttpClient){ }   
    
    getIdHttp(id: number): Observable<GetElement>{
        return this.http.get<GetElement>(this.api_url+'/'+id);
    }

    postHttp(body: PElement): Observable<any>{
        return this.http.post(this.api_url,body);
    }

    putHttp(id: number, body: PElement): Observable<any>{
        return this.http.put(this.api_url+'/'+id,body);
    }

    deleteHttp(id: number): Observable<any>{
        return this.http.delete(this.api_url+'/'+id);
    }

    getAllHttp(): Observable<GetElement[]>{
        return this.http.get<GetElement[]>(this.api_url);
    }
}

