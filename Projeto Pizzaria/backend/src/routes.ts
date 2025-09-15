import {Router} from 'express'

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

import { CreateIngredienteController } from './controllers/ingrediente/createIngredienteController'
import { DeleteIngredienteController } from './controllers/ingrediente/deleteIngredienteController'

import { CreateProductIngredienteController } from './controllers/product_ingrediente/createProdutoIngredienteController'

const router = Router()

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
router.post('/product', isAuthenticated, new CreateProductController().handle.bind(new CreateProductController()))
router.delete('/product/delete', isAuthenticated, new DeleteProductController().handle.bind(new DeleteProductController()))
router.put('/product/edit/:id', isAuthenticated, new EditProductController().handle.bind(new EditProductController()))

//COMANDA ROUTE
router.post('/comanda', isAuthenticated, new OpenComandaController().handle)
router.put('/comanda/fechar', isAuthenticated, new CloseComandaController().handle)

//PEDIDO ROUTE
router.post('/pedido', isAuthenticated, new OpenPedidoController().handle)

//ITEM ROUTE
router.post('/item', isAuthenticated, new CreateItemController().handle.bind(new CreateItemController()))
router.delete('/item/delete', isAuthenticated, new DeleteItemController().handle.bind(new DeleteItemController))
router.put('/item/edit', isAuthenticated, new EditItemController().handle.bind( new EditItemController))

//INGREDIENTE ROUTE
router.post('/ingrediente', isAuthenticated, new CreateIngredienteController().handle.bind(new CreateIngredienteController()))
router.delete('/ingrediente/delete', isAuthenticated, new DeleteIngredienteController().handle.bind(new DeleteIngredienteController()))

//PRODUTO_INGREDIENTE ROUTE
router.post('/produto_ingrediente', isAuthenticated, new CreateProductIngredienteController().handle.bind(new CreateProductIngredienteController()))

export { router };