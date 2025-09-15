import {Router} from 'express'
const router = Router();

import uploadConfig from './config/multer';
import multer from 'multer';

import { CreateCategoryController } from './controllers/category/CreateCategoryController'
import { ListCategoryController } from './controllers/category/ListCategoryController'

import { isAuthenticated } from './middlewares/isAuthenticated'

import { CreateClienteController } from './controllers/cliente/CreateClienteController'
import { AuthClienteController } from './controllers/cliente/AuthClienteController'
import { EditClienteController } from './controllers/cliente/EditClienteController'
import { ForgotPasswordClienteController } from './controllers/cliente/ForgotPasswordClienteController'

import { CreateFavoritoController } from './controllers/favorito/createFavoritoController'
import { RemoveFavoritoController } from './controllers/favorito/removeFavoritoController'
import { ListFavoritoController } from './controllers/favorito/listFavoritoController'

import { CreateFuncionarioController } from './controllers/funcionario/createFuncionarioController'
import { AuthFuncionarioController } from './controllers/funcionario/authFuncionarioController'

import { CreateProductController } from './controllers/product/createProductController'
import { DeleteProductController } from './controllers/product/deleteProductController'
import { EditProductController } from './controllers/product/editProductController'

import { OpenComandaController } from './controllers/comanda/openComandaController'
import { CloseComandaController } from './controllers/comanda/closeComandaController'

import { OpenPedidoController } from './controllers/pedido/openPedidoController'

import { CreateItemController } from './controllers/item/createItemController'
import { DeleteItemController } from './controllers/item/deleteItemController'
import { EditItemController } from './controllers/item/editItemController'

const upload = multer(uploadConfig);

//CATEGORIES ROUTE
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/category/list', isAuthenticated, new ListCategoryController().handle)

//CLIENTES ROUTE
router.post('/cadastro', new CreateClienteController().handle)
router.post('/login', new AuthClienteController().handle)
router.put("/edit", isAuthenticated, new EditClienteController().handle.bind(new EditClienteController()));
router.put('/login/esqueciMinhaSenha', new ForgotPasswordClienteController().handle.bind(new ForgotPasswordClienteController()));

//FAVORITOS ROUTE
router.post('/favorito', isAuthenticated, new CreateFavoritoController().handle)
//nesse o front tem q manda o id do favorito pra url de algum jeito
router.delete('/favorito', isAuthenticated, new RemoveFavoritoController().handle)
router.get('/favoritos', isAuthenticated, new ListFavoritoController().handle)


//FUNCIONARIOS ROUTE
router.post('/funcionario', new CreateFuncionarioController().handle.bind(new CreateFuncionarioController()))
router.post('/funcionario/login', new AuthFuncionarioController().handle)

//PRODUCTS ROUTE
router.post('/product', isAuthenticated, upload.single('image'), new CreateProductController().handle.bind(new CreateProductController()))  
router.delete('/product/delete', isAuthenticated, new DeleteProductController().handle.bind(new DeleteProductController()))
router.put('/product/:id', isAuthenticated, new EditProductController().handle.bind(new EditProductController()))

router.post('/comanda', isAuthenticated, new OpenComandaController().handle)
router.put('/comanda/fechar', isAuthenticated, new CloseComandaController().handle)

router.post('/pedido', isAuthenticated, new OpenPedidoController().handle)

router.post('/item', isAuthenticated, new CreateItemController().handle.bind(new CreateItemController()))
router.delete('/item/delete', isAuthenticated, new DeleteItemController().handle.bind(new DeleteItemController))
router.put('/item/edit', isAuthenticated, new EditItemController().handle.bind( new EditItemController))

export { router };
