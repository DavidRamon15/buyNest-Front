import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Producto {
    id: number;
    nombre: string;
    titulo: string;
    categoria: string;
    imagen: string;
    url: string;
}

export interface Categoria {
    id: number;
    nombre: string;
}

@Injectable({ providedIn: 'root' })
export class ProductoService {
    private apiUrl = 'http://localhost:3000/api/productos';
    private categoriasUrl = 'http://localhost:3000/api/categorias';

    constructor(private http: HttpClient) { }

    getProductos(): Observable<Producto[]> {
        return this.http.get<Producto[]>(this.apiUrl);
    }


    getProductoById(id: number): Observable<Producto> {
        return this.http.get<Producto>(`${this.apiUrl}/${id}`);
    }

    getProductosPorCategoria(categoriaId: number): Observable<Producto[]> {
        return this.http.get<Producto[]>(`http://localhost:3000/api/productos/categoria/${categoriaId}`);
    }

    getCategorias(): Observable<Categoria[]> {
        return this.http.get<Categoria[]>(this.categoriasUrl);
    }
}
