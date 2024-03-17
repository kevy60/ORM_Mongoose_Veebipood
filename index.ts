import express from 'express';
import mongoose from 'mongoose';
import { createProduct, getProduct, updateProduct, deleteProduct } from './controllers/productController';
import { createOrder, getOrder, updateOrder, deleteOrder } from './controllers/orderController';
import { createCategory, getCategory, updateCategory, deleteCategory } from './controllers/categoryController';
import { createCartProduct, getCartProduct, updateCartProduct, deleteCartProduct } from './controllers/cartproductController';

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://Kevin:Qwerty@cluster3.ujow7ky.mongodb.net/");
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})

app.post('/products', createProduct);
app.get('/products/:id', getProduct);
app.put('/products/:id', updateProduct);
app.delete('/products/:id', deleteProduct);

app.post('/orders', createOrder);
app.get('/orders/:id', getOrder);
app.put('/orders/:id', updateOrder);
app.delete('/orders/:id', deleteOrder);

app.post('/categories', createCategory);
app.get('/categories/:id', getCategory);
app.put('/categories/:id', updateCategory);
app.delete('/categories/:id', deleteCategory);

app.post('/cartproducts', createCartProduct);
app.get('/cartproducts/:id', getCartProduct);
app.put('/cartproducts/:id', updateCartProduct);
app.delete('/cartproducts/:id', deleteCartProduct);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});