
-- Tabla de categorías
CREATE TABLE categoria (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(80) NOT NULL UNIQUE
);

-- Tabla de productos para BuyNest
CREATE TABLE producto (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    titulo VARCHAR(150) NOT NULL,
    categoria_id INT NOT NULL,
    imagen VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL,
    FOREIGN KEY (categoria_id) REFERENCES categoria(id)
);


-- Ejemplo de inserción de categorías
INSERT INTO categoria (nombre) VALUES
('Tecnología'),
('Hogar'),
('Moda'),
('Electrodomésticos');

-- Ejemplo de inserción de productos
INSERT INTO producto (nombre, titulo, categoria_id, imagen, url) VALUES
('Super Gadget 3000', 'Producto Destacado', 1, 'assets/logo.jpg', 'https://tutienda.com/producto/1'),
('Oferta Especial', 'Oferta Limitada', 2, 'assets/logo.jpg', 'https://tutienda.com/producto/2'),
('Novedad', 'Nuevo Lanzamiento', 3, 'assets/logo.jpg', 'https://tutienda.com/producto/3'),
('Recomendado', 'Recomendación del Experto', 4, 'assets/logo.jpg', 'https://tutienda.com/producto/4');
