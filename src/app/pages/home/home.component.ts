import { Component, OnInit } from '@angular/core';
import { ProductoService, Producto } from '../../services/producto.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
    productos: any[] = [];
    categorias: any[] = [];


    categoriaSeleccionada: number | null = null;

    constructor(private productoService: ProductoService) { }

    ngOnInit(): void {
        this.cargarProductos();
        this.productoService.getCategorias().subscribe((cats) => {
            this.categorias = cats;
        });
    }

    cargarProductos() {
        this.productoService.getProductos().subscribe((data: Producto[]) => {
            this.productos = data.map(p => ({
                id: p.id,
                title: p.titulo || p.nombre,
                image: p.imagen || 'assets/logo.jpg',
                description: p.categoria || ''
            }));
        });
    }

    filtrarPorCategoria(categoriaId: number) {
        this.categoriaSeleccionada = categoriaId;
        this.productoService.getProductosPorCategoria(categoriaId).subscribe((data: Producto[]) => {
            this.productos = data.map(p => ({
                id: p.id,
                title: p.titulo || p.nombre,
                image: p.imagen || 'assets/logo.jpg',
                description: p.categoria || ''
            }));
        });
    }

    mostrarTodos() {
        this.categoriaSeleccionada = null;
        this.cargarProductos();
    }
}
