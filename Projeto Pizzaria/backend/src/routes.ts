import { Router } from 'express'
const router = Router();
import prismaClient from './prisma';

import uploadConfig from './config/multer';
import multer from 'multer';

const upload = multer(uploadConfig);

import { CreateCategoryController } from './controllers/category/CreateCategoryController'
import { ListCategoryController } from './controllers/category/ListCategoryController'
import { EditCategoryController } from './controllers/category/editCategoryController';
import { DeleteCategoryController } from './controllers/category/deleteCategoryController';

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
import { ListProductByCategoryController } from './controllers/product/listProductController';

import { OpenComandaController } from './controllers/comanda/openComandaController'
import { CloseComandaController } from './controllers/comanda/closeComandaController'
import { ListComandaController } from './controllers/comanda/listComandasController';
import { PagarComandaController } from './controllers/comanda/pagarComandaController';
import { PagarComandaPorPontosController } from './controllers/comanda/pagarComandaPorPontosController';


import { OpenPedidoController } from './controllers/pedido/openPedidoController'
import { ListPedidoPorComandaController } from './controllers/pedido/listPedidosPorComandaController';
import { PagarPedidoController } from './controllers/pedido/pagarPedidoSeparadoController';
import { EditarPedidoPagoController } from './controllers/pedido/editPedidoPagoController';
import { EditPedidoStatusController } from './controllers/pedido/editPedidoStatusController';
import { ListPedidoGarcomController } from './controllers/pedido/listPedidoGarcomController';
import { PagarPedidoPorPontosController } from './controllers/pedido/pagarPedidoPorPontosController'

import { CreateItemController } from './controllers/item/createItemController'
import { DeleteItemController } from './controllers/item/deleteItemController'
import { EditItemController } from './controllers/item/editItemController'
import { ListItensPorPedidoController } from './controllers/item/listItensPorPedidoController';


import { CreateIngredienteController } from './controllers/ingrediente/createIngredienteController'
import { DeleteIngredienteController } from './controllers/ingrediente/deleteIngredienteController'
import { EditIngredienteController } from './controllers/ingrediente/editIngredienteController';

import { CreateProductIngredienteController } from './controllers/product_ingrediente/createProdutoIngredienteController'
import { DeleteProductIngredienteController } from './controllers/product_ingrediente/deleteProdutoIngredienteController';
import { ListIngredientePorProdutoController } from './controllers/product_ingrediente/listIngredienteProdutoController';

import { CreateAdicionalController } from './controllers/adicionais/createAdicionaisController';
import { EditAdicionalController } from './controllers/adicionais/editAdicionalController';
import { DeleteAdicionalController } from './controllers/adicionais/deleteAdicionalController';
import { ListAdicionaisController } from './controllers/adicionais/listAdicionaisController';

import { CreateItemAdicionalController } from './controllers/item_adicionais/addItemAdicionalController';
import { RemoveItemAdicionalController } from './controllers/item_adicionais/removeItemAdicionalController';
import { SearchProductController } from './controllers/product/searchProductController';

import { CreateMesaController } from './controllers/mesa/createMesaController';

import { CreateAvalicaoController } from './controllers/avaliacao/createAvaliacaoController';
import { ListComandaPorClienteController } from './controllers/comanda/ListComandaPorClienteController';

//CATEGORIES ROUTE
router.post('/category', isAuthenticated, upload.single('image'), new CreateCategoryController().handle.bind(new CreateCategoryController()))
router.get('/category/list', isAuthenticated, new ListCategoryController().handle)
router.put('/category/editar', isAuthenticated, upload.single('image'), new EditCategoryController().handle.bind(new EditCategoryController()))
router.delete("/category/delete", isAuthenticated, new DeleteCategoryController().handle)

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
router.get('/category/products', isAuthenticated, new ListProductByCategoryController().handle.bind(new ListProductByCategoryController))
router.get('/product/search', isAuthenticated, new SearchProductController().handle)

//COMANDA ROUTE
router.post('/comanda/:mesa_id', isAuthenticated, new OpenComandaController().handle)
router.put('/comanda/fechar', isAuthenticated, new CloseComandaController().handle)
router.get('/comanda/lista', isAuthenticated, new ListComandaController().handle.bind(new ListComandaController))
router.put('/comanda/pagar', isAuthenticated, new PagarComandaController().handle)
router.put('/comanda/pagarPorPontos', isAuthenticated, new PagarComandaPorPontosController().handle.bind(new PagarComandaPorPontosController))
router.get('/comanda/listarComandaPorCliente', isAuthenticated, new ListComandaPorClienteController().handle.bind(new ListComandaPorClienteController))

//PEDIDO ROUTE
router.post('/pedido', isAuthenticated, new OpenPedidoController().handle)
router.get('/pedido/listaPorComanda', isAuthenticated, new ListPedidoPorComandaController().handle.bind(new ListPedidoPorComandaController))
router.put('/pedido/pagar', isAuthenticated, new PagarPedidoController().handle)
router.put('/pedido/editar', isAuthenticated, new EditarPedidoPagoController().handle)
router.put('/pedido/editarStatus', isAuthenticated, new EditPedidoStatusController().handle)
router.get('/pedido/listaProGarcom', isAuthenticated, new ListPedidoGarcomController().handle)
router.put('/pedido/pagarPorPontos', isAuthenticated, new PagarPedidoPorPontosController().handle.bind(new PagarPedidoPorPontosController()))

//ITEM ROUTE
router.post('/item', isAuthenticated, new CreateItemController().handle.bind(new CreateItemController()))
router.delete('/item/delete', isAuthenticated, new DeleteItemController().handle.bind(new DeleteItemController))
router.put('/item/edit', isAuthenticated, new EditItemController().handle.bind(new EditItemController))
router.get('/item/listaPorPedido', isAuthenticated, new ListItensPorPedidoController().handle.bind(new ListItensPorPedidoController))

//INGREDIENTE ROUTE
router.post('/ingrediente', isAuthenticated, new CreateIngredienteController().handle.bind(new CreateIngredienteController()))
router.delete('/ingrediente/delete', isAuthenticated, new DeleteIngredienteController().handle.bind(new DeleteIngredienteController()))
router.put('/ingrediente/edit', isAuthenticated, new EditIngredienteController().handle.bind(new EditIngredienteController()))

//PRODUTO_INGREDIENTE ROUTE
router.post('/produto_ingrediente', isAuthenticated, new CreateProductIngredienteController().handle.bind(new CreateProductIngredienteController()))
router.delete('/produto_ingrediente/delete', isAuthenticated, new DeleteProductIngredienteController().handle.bind(new DeleteProductIngredienteController()))
router.get('/produto_ingrediente/lista', isAuthenticated, new ListIngredientePorProdutoController().handle)

//ADICIONAIS ROUTE
router.post('/adicionais', isAuthenticated, new CreateAdicionalController().handle.bind(new CreateAdicionalController))
router.put('/adicionais/edit', isAuthenticated, new EditAdicionalController().handle.bind(new EditAdicionalController()))
router.delete('/adicionais/delete', isAuthenticated, new DeleteAdicionalController().handle.bind(new DeleteAdicionalController))
router.get('/adicionais/lista', isAuthenticated, new ListAdicionaisController().handle)

//ITEM_ADICIONAL ROUTE
router.post('/itemAdicional', isAuthenticated, new CreateItemAdicionalController().handle.bind(new CreateItemAdicionalController()))
router.delete('/itemAdicional/delete', isAuthenticated, new RemoveItemAdicionalController().handle.bind(new RemoveItemAdicionalController))

router.post('/mesa' , isAuthenticated, new CreateMesaController().handle.bind(new CreateMesaController()))

router.post('/avaliacao', isAuthenticated, new CreateAvalicaoController().handle.bind(new CreateAvalicaoController))

export { router };
