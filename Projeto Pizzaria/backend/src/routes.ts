import {Router} from 'express'
import multer from 'multer'

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailUserController } from './controllers/user/DetailUserController'

import { CreateCategoryController } from './controllers/category/CreateCategoryController'
import { ListCategoryController } from './controllers/category/ListCategoryController'

import { CreateProductController } from './controllers/product/CreateProductController'
import { ListByCategoryController } from './controllers/product/ListByCategoryController'

import { isAuthenticated } from './middlewares/isAuthenticated'

import { CreateClienteController } from './controllers/cliente/CreateClienteController'
import { AuthClienteController } from './controllers/cliente/AuthClienteController'
import { EditClienteController } from './controllers/cliente/EditClienteController'
import { ForgotPasswordClienteController } from './controllers/cliente/ForgotPasswordClienteController'

import { CreateFavoritoController } from './controllers/favorito/createFavoritoController'
import { RemoveFavoritoController } from './controllers/favorito/removeFavoritoController'
import { ListFavoritoController } from './controllers/favorito/listFavoritoController'

import { OpenComandaController } from './controllers/comanda/openComandaController'

import uploadConfig from './config/multer'

const router = Router()

const upload = multer(uploadConfig.upload("./tmp"))

router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated, new DetailUserController().handle)

router.post('/category', isAuthenticated, new CreateCategoryController().handle)

router.get('/category', isAuthenticated, new ListCategoryController().handle)

router.post('/product', isAuthenticated, upload.single('file') ,new CreateProductController().handle)

router.get('/category/product', isAuthenticated, new ListByCategoryController().handle)

router.post('/cadastro', new CreateClienteController().handle)
router.post('/login', new AuthClienteController().handle)
router.put("/edit", isAuthenticated, new EditClienteController().handle.bind(new EditClienteController()));
router.put('/login/esqueciMinhaSenha', new ForgotPasswordClienteController().handle.bind(new ForgotPasswordClienteController()));

router.post('/favorito', isAuthenticated, new CreateFavoritoController().handle)
//nesse o front tem q manda o id do favorito pra url de algum jeito
router.delete('/favorito/:id', isAuthenticated, new RemoveFavoritoController().handle)
router.get('/favoritos', isAuthenticated, new ListFavoritoController().handle)

router.post('/comanda', new OpenComandaController().handle)

export {router};