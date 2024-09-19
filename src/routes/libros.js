import express from 'express';
const router = express.Router();

// Datos temporales
let categorias = [
    { id: 1, nombre: 'Programacion', descripcion: 'Libros de programacion' },
];

let libros = [
    { id: 1, titulo: 'HTML', autor: 'Miguel', categoria_id: 1 },
    { id: 2, titulo: 'CSS', autor: 'Gabriel', categoria_id: 1 },
    { id: 3, titulo: 'JAVASCRIPT', autor: 'Jose Lopez ', categoria_id: 1 }
];

// Ruta para mostrar los libros
router.get('/', (req, res) => {
    res.render('libros', { libros, categorias });
});

// Ruta para agregar un nuevo libro
router.post('/agregar', (req, res) => {
    const { titulo, autor, categoria_id } = req.body;
    const newLibro = { id: libros.length + 1, titulo, autor, categoria_id: parseInt(categoria_id) };
    libros.push(newLibro);
    res.redirect('/libros');
});

export default router;
