import express from 'express';
const router = express.Router();

// Datos temporales en memoria (sin BD)
let categorias = [
    { id: 1, nombre: 'Ficción', descripcion: 'Libros de narrativa ficticia' },
    { id: 2, nombre: 'Ciencia', descripcion: 'Libros científicos' }
];

let libros = [
    { id: 1, titulo: 'El Quijote', autor: 'Miguel de Cervantes', categoria_id: 1 },
    { id: 2, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', categoria_id: 1 },
    { id: 3, titulo: 'La Odisea', autor: 'Homero', categoria_id: 1 }
];

// Ruta para mostrar las categorías
router.get('/', (req, res) => {
    res.render('categorias', { categorias, libros });
});

// Ruta para agregar una nueva categoría
router.post('/agregar', (req, res) => {
    const { nombre, descripcion } = req.body;
    const newCategoria = { id: categorias.length + 1, nombre, descripcion };
    categorias.push(newCategoria);
    res.redirect('/categorias');
});

export default router;
