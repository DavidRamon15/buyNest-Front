import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product-showcase',
    templateUrl: 'product-showcase.component.html',
    styleUrls: ['product-showcase.component.css']
})
export class ProductShowcaseComponent {
    productos = [
        {
            id: 1,
            name: 'Producto Destacado',
            description: 'Descubre nuestro producto estrella del mes, con la mejor calidad y precio garantizados. ¡No te lo pierdas!',
            images: ['assets/logo.jpg'],
            video: 'assets/product-demo.mp4'
        },
        {
            id: 2,
            name: 'Oferta Especial',
            description: 'Aprovecha nuestras ofertas limitadas en productos seleccionados. ¡Solo por tiempo limitado!',
            images: ['assets/logo.jpg'],
            video: 'assets/product-demo.mp4'
        },
        {
            id: 3,
            name: 'Novedad',
            description: 'Conoce los nuevos lanzamientos y mantente a la vanguardia en tecnología y moda.',
            images: ['assets/logo.jpg'],
            video: 'assets/product-demo.mp4'
        },
        {
            id: 4,
            name: 'Recomendado',
            description: 'Nuestros expertos recomiendan este producto por su excelente relación calidad-precio.',
            images: ['assets/logo.jpg'],
            video: 'assets/product-demo.mp4'
        }
    ];
    product: any;
    currentIndex = 0;
    showVideo = false;

    constructor(private route: ActivatedRoute) {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.product = this.productos.find(p => p.id === id) || this.productos[0];
    }

    nextMedia() {
        if (this.showVideo) {
            this.currentIndex = 0;
            this.showVideo = false;
        } else if (this.currentIndex < this.product.images.length - 1) {
            this.currentIndex++;
        } else {
            this.showVideo = true;
        }
    }

    prevMedia() {
        if (this.showVideo) {
            this.currentIndex = this.product.images.length - 1;
            this.showVideo = false;
        } else if (this.currentIndex > 0) {
            this.currentIndex--;
        }
    }
}
