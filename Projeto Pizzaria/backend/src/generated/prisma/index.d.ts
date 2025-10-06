
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Funcionario
 * 
 */
export type Funcionario = $Result.DefaultSelection<Prisma.$FuncionarioPayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Favorito
 * 
 */
export type Favorito = $Result.DefaultSelection<Prisma.$FavoritoPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Pedido
 * 
 */
export type Pedido = $Result.DefaultSelection<Prisma.$PedidoPayload>
/**
 * Model Comanda
 * 
 */
export type Comanda = $Result.DefaultSelection<Prisma.$ComandaPayload>
/**
 * Model Avaliacao
 * 
 */
export type Avaliacao = $Result.DefaultSelection<Prisma.$AvaliacaoPayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model Ingrediente
 * 
 */
export type Ingrediente = $Result.DefaultSelection<Prisma.$IngredientePayload>
/**
 * Model Product_ingrediente
 * 
 */
export type Product_ingrediente = $Result.DefaultSelection<Prisma.$Product_ingredientePayload>
/**
 * Model Adicional
 * 
 */
export type Adicional = $Result.DefaultSelection<Prisma.$AdicionalPayload>
/**
 * Model Item_adicional
 * 
 */
export type Item_adicional = $Result.DefaultSelection<Prisma.$Item_adicionalPayload>
/**
 * Model Mesa
 * 
 */
export type Mesa = $Result.DefaultSelection<Prisma.$MesaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Funcionarios
 * const funcionarios = await prisma.funcionario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Funcionarios
   * const funcionarios = await prisma.funcionario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.funcionario`: Exposes CRUD operations for the **Funcionario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funcionarios
    * const funcionarios = await prisma.funcionario.findMany()
    * ```
    */
  get funcionario(): Prisma.FuncionarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorito`: Exposes CRUD operations for the **Favorito** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favoritos
    * const favoritos = await prisma.favorito.findMany()
    * ```
    */
  get favorito(): Prisma.FavoritoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **Pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.PedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comanda`: Exposes CRUD operations for the **Comanda** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comandas
    * const comandas = await prisma.comanda.findMany()
    * ```
    */
  get comanda(): Prisma.ComandaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.avaliacao`: Exposes CRUD operations for the **Avaliacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avaliacaos
    * const avaliacaos = await prisma.avaliacao.findMany()
    * ```
    */
  get avaliacao(): Prisma.AvaliacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingrediente`: Exposes CRUD operations for the **Ingrediente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredientes
    * const ingredientes = await prisma.ingrediente.findMany()
    * ```
    */
  get ingrediente(): Prisma.IngredienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product_ingrediente`: Exposes CRUD operations for the **Product_ingrediente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Product_ingredientes
    * const product_ingredientes = await prisma.product_ingrediente.findMany()
    * ```
    */
  get product_ingrediente(): Prisma.Product_ingredienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adicional`: Exposes CRUD operations for the **Adicional** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Adicionals
    * const adicionals = await prisma.adicional.findMany()
    * ```
    */
  get adicional(): Prisma.AdicionalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item_adicional`: Exposes CRUD operations for the **Item_adicional** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Item_adicionals
    * const item_adicionals = await prisma.item_adicional.findMany()
    * ```
    */
  get item_adicional(): Prisma.Item_adicionalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mesa`: Exposes CRUD operations for the **Mesa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mesas
    * const mesas = await prisma.mesa.findMany()
    * ```
    */
  get mesa(): Prisma.MesaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Funcionario: 'Funcionario',
    Cliente: 'Cliente',
    Favorito: 'Favorito',
    Category: 'Category',
    Product: 'Product',
    Pedido: 'Pedido',
    Comanda: 'Comanda',
    Avaliacao: 'Avaliacao',
    Item: 'Item',
    Ingrediente: 'Ingrediente',
    Product_ingrediente: 'Product_ingrediente',
    Adicional: 'Adicional',
    Item_adicional: 'Item_adicional',
    Mesa: 'Mesa'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "funcionario" | "cliente" | "favorito" | "category" | "product" | "pedido" | "comanda" | "avaliacao" | "item" | "ingrediente" | "product_ingrediente" | "adicional" | "item_adicional" | "mesa"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Funcionario: {
        payload: Prisma.$FuncionarioPayload<ExtArgs>
        fields: Prisma.FuncionarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FuncionarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FuncionarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          findFirst: {
            args: Prisma.FuncionarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FuncionarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          findMany: {
            args: Prisma.FuncionarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>[]
          }
          create: {
            args: Prisma.FuncionarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          createMany: {
            args: Prisma.FuncionarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FuncionarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>[]
          }
          delete: {
            args: Prisma.FuncionarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          update: {
            args: Prisma.FuncionarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          deleteMany: {
            args: Prisma.FuncionarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FuncionarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FuncionarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>[]
          }
          upsert: {
            args: Prisma.FuncionarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          aggregate: {
            args: Prisma.FuncionarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuncionario>
          }
          groupBy: {
            args: Prisma.FuncionarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.FuncionarioCountArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Favorito: {
        payload: Prisma.$FavoritoPayload<ExtArgs>
        fields: Prisma.FavoritoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoritoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoritoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          findFirst: {
            args: Prisma.FavoritoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoritoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          findMany: {
            args: Prisma.FavoritoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>[]
          }
          create: {
            args: Prisma.FavoritoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          createMany: {
            args: Prisma.FavoritoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoritoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>[]
          }
          delete: {
            args: Prisma.FavoritoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          update: {
            args: Prisma.FavoritoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          deleteMany: {
            args: Prisma.FavoritoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoritoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoritoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>[]
          }
          upsert: {
            args: Prisma.FavoritoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          aggregate: {
            args: Prisma.FavoritoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorito>
          }
          groupBy: {
            args: Prisma.FavoritoGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoritoGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoritoCountArgs<ExtArgs>
            result: $Utils.Optional<FavoritoCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Pedido: {
        payload: Prisma.$PedidoPayload<ExtArgs>
        fields: Prisma.PedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findFirst: {
            args: Prisma.PedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findMany: {
            args: Prisma.PedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          create: {
            args: Prisma.PedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          createMany: {
            args: Prisma.PedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          delete: {
            args: Prisma.PedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          update: {
            args: Prisma.PedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          deleteMany: {
            args: Prisma.PedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          upsert: {
            args: Prisma.PedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.PedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      Comanda: {
        payload: Prisma.$ComandaPayload<ExtArgs>
        fields: Prisma.ComandaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComandaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComandaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComandaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComandaPayload>
          }
          findFirst: {
            args: Prisma.ComandaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComandaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComandaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComandaPayload>
          }
          findMany: {
            args: Prisma.ComandaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComandaPayload>[]
          }
          create: {
            args: Prisma.ComandaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComandaPayload>
          }
          createMany: {
            args: Prisma.ComandaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComandaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComandaPayload>[]
          }
          delete: {
            args: Prisma.ComandaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComandaPayload>
          }
          update: {
            args: Prisma.ComandaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComandaPayload>
          }
          deleteMany: {
            args: Prisma.ComandaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComandaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComandaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComandaPayload>[]
          }
          upsert: {
            args: Prisma.ComandaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComandaPayload>
          }
          aggregate: {
            args: Prisma.ComandaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComanda>
          }
          groupBy: {
            args: Prisma.ComandaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComandaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComandaCountArgs<ExtArgs>
            result: $Utils.Optional<ComandaCountAggregateOutputType> | number
          }
        }
      }
      Avaliacao: {
        payload: Prisma.$AvaliacaoPayload<ExtArgs>
        fields: Prisma.AvaliacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvaliacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvaliacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findFirst: {
            args: Prisma.AvaliacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvaliacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findMany: {
            args: Prisma.AvaliacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          create: {
            args: Prisma.AvaliacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          createMany: {
            args: Prisma.AvaliacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvaliacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          delete: {
            args: Prisma.AvaliacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          update: {
            args: Prisma.AvaliacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          deleteMany: {
            args: Prisma.AvaliacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvaliacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvaliacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          upsert: {
            args: Prisma.AvaliacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          aggregate: {
            args: Prisma.AvaliacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvaliacao>
          }
          groupBy: {
            args: Prisma.AvaliacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvaliacaoCountArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      Ingrediente: {
        payload: Prisma.$IngredientePayload<ExtArgs>
        fields: Prisma.IngredienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload>
          }
          findFirst: {
            args: Prisma.IngredienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload>
          }
          findMany: {
            args: Prisma.IngredienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload>[]
          }
          create: {
            args: Prisma.IngredienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload>
          }
          createMany: {
            args: Prisma.IngredienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngredienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload>[]
          }
          delete: {
            args: Prisma.IngredienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload>
          }
          update: {
            args: Prisma.IngredienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload>
          }
          deleteMany: {
            args: Prisma.IngredienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngredienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngredienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload>[]
          }
          upsert: {
            args: Prisma.IngredienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload>
          }
          aggregate: {
            args: Prisma.IngredienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngrediente>
          }
          groupBy: {
            args: Prisma.IngredienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredienteCountArgs<ExtArgs>
            result: $Utils.Optional<IngredienteCountAggregateOutputType> | number
          }
        }
      }
      Product_ingrediente: {
        payload: Prisma.$Product_ingredientePayload<ExtArgs>
        fields: Prisma.Product_ingredienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Product_ingredienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Product_ingredientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Product_ingredienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Product_ingredientePayload>
          }
          findFirst: {
            args: Prisma.Product_ingredienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Product_ingredientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Product_ingredienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Product_ingredientePayload>
          }
          findMany: {
            args: Prisma.Product_ingredienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Product_ingredientePayload>[]
          }
          create: {
            args: Prisma.Product_ingredienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Product_ingredientePayload>
          }
          createMany: {
            args: Prisma.Product_ingredienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Product_ingredienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Product_ingredientePayload>[]
          }
          delete: {
            args: Prisma.Product_ingredienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Product_ingredientePayload>
          }
          update: {
            args: Prisma.Product_ingredienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Product_ingredientePayload>
          }
          deleteMany: {
            args: Prisma.Product_ingredienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Product_ingredienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Product_ingredienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Product_ingredientePayload>[]
          }
          upsert: {
            args: Prisma.Product_ingredienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Product_ingredientePayload>
          }
          aggregate: {
            args: Prisma.Product_ingredienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct_ingrediente>
          }
          groupBy: {
            args: Prisma.Product_ingredienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<Product_ingredienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.Product_ingredienteCountArgs<ExtArgs>
            result: $Utils.Optional<Product_ingredienteCountAggregateOutputType> | number
          }
        }
      }
      Adicional: {
        payload: Prisma.$AdicionalPayload<ExtArgs>
        fields: Prisma.AdicionalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdicionalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdicionalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdicionalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdicionalPayload>
          }
          findFirst: {
            args: Prisma.AdicionalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdicionalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdicionalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdicionalPayload>
          }
          findMany: {
            args: Prisma.AdicionalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdicionalPayload>[]
          }
          create: {
            args: Prisma.AdicionalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdicionalPayload>
          }
          createMany: {
            args: Prisma.AdicionalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdicionalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdicionalPayload>[]
          }
          delete: {
            args: Prisma.AdicionalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdicionalPayload>
          }
          update: {
            args: Prisma.AdicionalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdicionalPayload>
          }
          deleteMany: {
            args: Prisma.AdicionalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdicionalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdicionalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdicionalPayload>[]
          }
          upsert: {
            args: Prisma.AdicionalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdicionalPayload>
          }
          aggregate: {
            args: Prisma.AdicionalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdicional>
          }
          groupBy: {
            args: Prisma.AdicionalGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdicionalGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdicionalCountArgs<ExtArgs>
            result: $Utils.Optional<AdicionalCountAggregateOutputType> | number
          }
        }
      }
      Item_adicional: {
        payload: Prisma.$Item_adicionalPayload<ExtArgs>
        fields: Prisma.Item_adicionalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Item_adicionalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Item_adicionalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Item_adicionalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Item_adicionalPayload>
          }
          findFirst: {
            args: Prisma.Item_adicionalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Item_adicionalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Item_adicionalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Item_adicionalPayload>
          }
          findMany: {
            args: Prisma.Item_adicionalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Item_adicionalPayload>[]
          }
          create: {
            args: Prisma.Item_adicionalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Item_adicionalPayload>
          }
          createMany: {
            args: Prisma.Item_adicionalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Item_adicionalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Item_adicionalPayload>[]
          }
          delete: {
            args: Prisma.Item_adicionalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Item_adicionalPayload>
          }
          update: {
            args: Prisma.Item_adicionalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Item_adicionalPayload>
          }
          deleteMany: {
            args: Prisma.Item_adicionalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Item_adicionalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Item_adicionalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Item_adicionalPayload>[]
          }
          upsert: {
            args: Prisma.Item_adicionalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Item_adicionalPayload>
          }
          aggregate: {
            args: Prisma.Item_adicionalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem_adicional>
          }
          groupBy: {
            args: Prisma.Item_adicionalGroupByArgs<ExtArgs>
            result: $Utils.Optional<Item_adicionalGroupByOutputType>[]
          }
          count: {
            args: Prisma.Item_adicionalCountArgs<ExtArgs>
            result: $Utils.Optional<Item_adicionalCountAggregateOutputType> | number
          }
        }
      }
      Mesa: {
        payload: Prisma.$MesaPayload<ExtArgs>
        fields: Prisma.MesaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MesaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MesaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>
          }
          findFirst: {
            args: Prisma.MesaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MesaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>
          }
          findMany: {
            args: Prisma.MesaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>[]
          }
          create: {
            args: Prisma.MesaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>
          }
          createMany: {
            args: Prisma.MesaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MesaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>[]
          }
          delete: {
            args: Prisma.MesaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>
          }
          update: {
            args: Prisma.MesaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>
          }
          deleteMany: {
            args: Prisma.MesaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MesaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MesaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>[]
          }
          upsert: {
            args: Prisma.MesaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>
          }
          aggregate: {
            args: Prisma.MesaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMesa>
          }
          groupBy: {
            args: Prisma.MesaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MesaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MesaCountArgs<ExtArgs>
            result: $Utils.Optional<MesaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    funcionario?: FuncionarioOmit
    cliente?: ClienteOmit
    favorito?: FavoritoOmit
    category?: CategoryOmit
    product?: ProductOmit
    pedido?: PedidoOmit
    comanda?: ComandaOmit
    avaliacao?: AvaliacaoOmit
    item?: ItemOmit
    ingrediente?: IngredienteOmit
    product_ingrediente?: Product_ingredienteOmit
    adicional?: AdicionalOmit
    item_adicional?: Item_adicionalOmit
    mesa?: MesaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    avaliacao: number
    favoritos: number
    comandas: number
    pedidos: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avaliacao?: boolean | ClienteCountOutputTypeCountAvaliacaoArgs
    favoritos?: boolean | ClienteCountOutputTypeCountFavoritosArgs
    comandas?: boolean | ClienteCountOutputTypeCountComandasArgs
    pedidos?: boolean | ClienteCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountAvaliacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountFavoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritoWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountComandasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComandaWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    items: number
    favoritos: number
    product_ingrediente: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ProductCountOutputTypeCountItemsArgs
    favoritos?: boolean | ProductCountOutputTypeCountFavoritosArgs
    product_ingrediente?: boolean | ProductCountOutputTypeCountProduct_ingredienteArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountFavoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritoWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProduct_ingredienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Product_ingredienteWhereInput
  }


  /**
   * Count Type PedidoCountOutputType
   */

  export type PedidoCountOutputType = {
    items: number
  }

  export type PedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | PedidoCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: PedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }


  /**
   * Count Type ComandaCountOutputType
   */

  export type ComandaCountOutputType = {
    avaliacao: number
    pedido: number
  }

  export type ComandaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avaliacao?: boolean | ComandaCountOutputTypeCountAvaliacaoArgs
    pedido?: boolean | ComandaCountOutputTypeCountPedidoArgs
  }

  // Custom InputTypes
  /**
   * ComandaCountOutputType without action
   */
  export type ComandaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComandaCountOutputType
     */
    select?: ComandaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ComandaCountOutputType without action
   */
  export type ComandaCountOutputTypeCountAvaliacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
  }

  /**
   * ComandaCountOutputType without action
   */
  export type ComandaCountOutputTypeCountPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    Item_adicional: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Item_adicional?: boolean | ItemCountOutputTypeCountItem_adicionalArgs
  }

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountItem_adicionalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Item_adicionalWhereInput
  }


  /**
   * Count Type IngredienteCountOutputType
   */

  export type IngredienteCountOutputType = {
    Product_ingrediente: number
  }

  export type IngredienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product_ingrediente?: boolean | IngredienteCountOutputTypeCountProduct_ingredienteArgs
  }

  // Custom InputTypes
  /**
   * IngredienteCountOutputType without action
   */
  export type IngredienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredienteCountOutputType
     */
    select?: IngredienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IngredienteCountOutputType without action
   */
  export type IngredienteCountOutputTypeCountProduct_ingredienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Product_ingredienteWhereInput
  }


  /**
   * Count Type AdicionalCountOutputType
   */

  export type AdicionalCountOutputType = {
    Item_adicional: number
  }

  export type AdicionalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Item_adicional?: boolean | AdicionalCountOutputTypeCountItem_adicionalArgs
  }

  // Custom InputTypes
  /**
   * AdicionalCountOutputType without action
   */
  export type AdicionalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdicionalCountOutputType
     */
    select?: AdicionalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdicionalCountOutputType without action
   */
  export type AdicionalCountOutputTypeCountItem_adicionalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Item_adicionalWhereInput
  }


  /**
   * Count Type MesaCountOutputType
   */

  export type MesaCountOutputType = {
    Comanda: number
  }

  export type MesaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comanda?: boolean | MesaCountOutputTypeCountComandaArgs
  }

  // Custom InputTypes
  /**
   * MesaCountOutputType without action
   */
  export type MesaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MesaCountOutputType
     */
    select?: MesaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MesaCountOutputType without action
   */
  export type MesaCountOutputTypeCountComandaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComandaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Funcionario
   */

  export type AggregateFuncionario = {
    _count: FuncionarioCountAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  export type FuncionarioMinAggregateOutputType = {
    id: string | null
    name: string | null
    funcao: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FuncionarioMaxAggregateOutputType = {
    id: string | null
    name: string | null
    funcao: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FuncionarioCountAggregateOutputType = {
    id: number
    name: number
    funcao: number
    email: number
    password: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type FuncionarioMinAggregateInputType = {
    id?: true
    name?: true
    funcao?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type FuncionarioMaxAggregateInputType = {
    id?: true
    name?: true
    funcao?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type FuncionarioCountAggregateInputType = {
    id?: true
    name?: true
    funcao?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type FuncionarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionario to aggregate.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Funcionarios
    **/
    _count?: true | FuncionarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuncionarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuncionarioMaxAggregateInputType
  }

  export type GetFuncionarioAggregateType<T extends FuncionarioAggregateArgs> = {
        [P in keyof T & keyof AggregateFuncionario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuncionario[P]>
      : GetScalarType<T[P], AggregateFuncionario[P]>
  }




  export type FuncionarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuncionarioWhereInput
    orderBy?: FuncionarioOrderByWithAggregationInput | FuncionarioOrderByWithAggregationInput[]
    by: FuncionarioScalarFieldEnum[] | FuncionarioScalarFieldEnum
    having?: FuncionarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuncionarioCountAggregateInputType | true
    _min?: FuncionarioMinAggregateInputType
    _max?: FuncionarioMaxAggregateInputType
  }

  export type FuncionarioGroupByOutputType = {
    id: string
    name: string
    funcao: string
    email: string
    password: string
    created_at: Date | null
    updated_at: Date | null
    _count: FuncionarioCountAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  type GetFuncionarioGroupByPayload<T extends FuncionarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuncionarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuncionarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
            : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
        }
      >
    >


  export type FuncionarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    funcao?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["funcionario"]>

  export type FuncionarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    funcao?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["funcionario"]>

  export type FuncionarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    funcao?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["funcionario"]>

  export type FuncionarioSelectScalar = {
    id?: boolean
    name?: boolean
    funcao?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type FuncionarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "funcao" | "email" | "password" | "created_at" | "updated_at", ExtArgs["result"]["funcionario"]>

  export type $FuncionarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Funcionario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      funcao: string
      email: string
      password: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["funcionario"]>
    composites: {}
  }

  type FuncionarioGetPayload<S extends boolean | null | undefined | FuncionarioDefaultArgs> = $Result.GetResult<Prisma.$FuncionarioPayload, S>

  type FuncionarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FuncionarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FuncionarioCountAggregateInputType | true
    }

  export interface FuncionarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Funcionario'], meta: { name: 'Funcionario' } }
    /**
     * Find zero or one Funcionario that matches the filter.
     * @param {FuncionarioFindUniqueArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FuncionarioFindUniqueArgs>(args: SelectSubset<T, FuncionarioFindUniqueArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Funcionario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FuncionarioFindUniqueOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FuncionarioFindUniqueOrThrowArgs>(args: SelectSubset<T, FuncionarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindFirstArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FuncionarioFindFirstArgs>(args?: SelectSubset<T, FuncionarioFindFirstArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindFirstOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FuncionarioFindFirstOrThrowArgs>(args?: SelectSubset<T, FuncionarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Funcionarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funcionarios
     * const funcionarios = await prisma.funcionario.findMany()
     * 
     * // Get first 10 Funcionarios
     * const funcionarios = await prisma.funcionario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const funcionarioWithIdOnly = await prisma.funcionario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FuncionarioFindManyArgs>(args?: SelectSubset<T, FuncionarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Funcionario.
     * @param {FuncionarioCreateArgs} args - Arguments to create a Funcionario.
     * @example
     * // Create one Funcionario
     * const Funcionario = await prisma.funcionario.create({
     *   data: {
     *     // ... data to create a Funcionario
     *   }
     * })
     * 
     */
    create<T extends FuncionarioCreateArgs>(args: SelectSubset<T, FuncionarioCreateArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Funcionarios.
     * @param {FuncionarioCreateManyArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionario = await prisma.funcionario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FuncionarioCreateManyArgs>(args?: SelectSubset<T, FuncionarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Funcionarios and returns the data saved in the database.
     * @param {FuncionarioCreateManyAndReturnArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionario = await prisma.funcionario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Funcionarios and only return the `id`
     * const funcionarioWithIdOnly = await prisma.funcionario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FuncionarioCreateManyAndReturnArgs>(args?: SelectSubset<T, FuncionarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Funcionario.
     * @param {FuncionarioDeleteArgs} args - Arguments to delete one Funcionario.
     * @example
     * // Delete one Funcionario
     * const Funcionario = await prisma.funcionario.delete({
     *   where: {
     *     // ... filter to delete one Funcionario
     *   }
     * })
     * 
     */
    delete<T extends FuncionarioDeleteArgs>(args: SelectSubset<T, FuncionarioDeleteArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Funcionario.
     * @param {FuncionarioUpdateArgs} args - Arguments to update one Funcionario.
     * @example
     * // Update one Funcionario
     * const funcionario = await prisma.funcionario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FuncionarioUpdateArgs>(args: SelectSubset<T, FuncionarioUpdateArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Funcionarios.
     * @param {FuncionarioDeleteManyArgs} args - Arguments to filter Funcionarios to delete.
     * @example
     * // Delete a few Funcionarios
     * const { count } = await prisma.funcionario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FuncionarioDeleteManyArgs>(args?: SelectSubset<T, FuncionarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funcionarios
     * const funcionario = await prisma.funcionario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FuncionarioUpdateManyArgs>(args: SelectSubset<T, FuncionarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios and returns the data updated in the database.
     * @param {FuncionarioUpdateManyAndReturnArgs} args - Arguments to update many Funcionarios.
     * @example
     * // Update many Funcionarios
     * const funcionario = await prisma.funcionario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Funcionarios and only return the `id`
     * const funcionarioWithIdOnly = await prisma.funcionario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FuncionarioUpdateManyAndReturnArgs>(args: SelectSubset<T, FuncionarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Funcionario.
     * @param {FuncionarioUpsertArgs} args - Arguments to update or create a Funcionario.
     * @example
     * // Update or create a Funcionario
     * const funcionario = await prisma.funcionario.upsert({
     *   create: {
     *     // ... data to create a Funcionario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Funcionario we want to update
     *   }
     * })
     */
    upsert<T extends FuncionarioUpsertArgs>(args: SelectSubset<T, FuncionarioUpsertArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioCountArgs} args - Arguments to filter Funcionarios to count.
     * @example
     * // Count the number of Funcionarios
     * const count = await prisma.funcionario.count({
     *   where: {
     *     // ... the filter for the Funcionarios we want to count
     *   }
     * })
    **/
    count<T extends FuncionarioCountArgs>(
      args?: Subset<T, FuncionarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuncionarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FuncionarioAggregateArgs>(args: Subset<T, FuncionarioAggregateArgs>): Prisma.PrismaPromise<GetFuncionarioAggregateType<T>>

    /**
     * Group by Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FuncionarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FuncionarioGroupByArgs['orderBy'] }
        : { orderBy?: FuncionarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FuncionarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuncionarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Funcionario model
   */
  readonly fields: FuncionarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Funcionario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FuncionarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Funcionario model
   */
  interface FuncionarioFieldRefs {
    readonly id: FieldRef<"Funcionario", 'String'>
    readonly name: FieldRef<"Funcionario", 'String'>
    readonly funcao: FieldRef<"Funcionario", 'String'>
    readonly email: FieldRef<"Funcionario", 'String'>
    readonly password: FieldRef<"Funcionario", 'String'>
    readonly created_at: FieldRef<"Funcionario", 'DateTime'>
    readonly updated_at: FieldRef<"Funcionario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Funcionario findUnique
   */
  export type FuncionarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario findUniqueOrThrow
   */
  export type FuncionarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario findFirst
   */
  export type FuncionarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario findFirstOrThrow
   */
  export type FuncionarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario findMany
   */
  export type FuncionarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Filter, which Funcionarios to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario create
   */
  export type FuncionarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * The data needed to create a Funcionario.
     */
    data: XOR<FuncionarioCreateInput, FuncionarioUncheckedCreateInput>
  }

  /**
   * Funcionario createMany
   */
  export type FuncionarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Funcionarios.
     */
    data: FuncionarioCreateManyInput | FuncionarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Funcionario createManyAndReturn
   */
  export type FuncionarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * The data used to create many Funcionarios.
     */
    data: FuncionarioCreateManyInput | FuncionarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Funcionario update
   */
  export type FuncionarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * The data needed to update a Funcionario.
     */
    data: XOR<FuncionarioUpdateInput, FuncionarioUncheckedUpdateInput>
    /**
     * Choose, which Funcionario to update.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario updateMany
   */
  export type FuncionarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Funcionarios.
     */
    data: XOR<FuncionarioUpdateManyMutationInput, FuncionarioUncheckedUpdateManyInput>
    /**
     * Filter which Funcionarios to update
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to update.
     */
    limit?: number
  }

  /**
   * Funcionario updateManyAndReturn
   */
  export type FuncionarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * The data used to update Funcionarios.
     */
    data: XOR<FuncionarioUpdateManyMutationInput, FuncionarioUncheckedUpdateManyInput>
    /**
     * Filter which Funcionarios to update
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to update.
     */
    limit?: number
  }

  /**
   * Funcionario upsert
   */
  export type FuncionarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * The filter to search for the Funcionario to update in case it exists.
     */
    where: FuncionarioWhereUniqueInput
    /**
     * In case the Funcionario found by the `where` argument doesn't exist, create a new Funcionario with this data.
     */
    create: XOR<FuncionarioCreateInput, FuncionarioUncheckedCreateInput>
    /**
     * In case the Funcionario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FuncionarioUpdateInput, FuncionarioUncheckedUpdateInput>
  }

  /**
   * Funcionario delete
   */
  export type FuncionarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Filter which Funcionario to delete.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario deleteMany
   */
  export type FuncionarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionarios to delete
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to delete.
     */
    limit?: number
  }

  /**
   * Funcionario without action
   */
  export type FuncionarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    points: number | null
  }

  export type ClienteSumAggregateOutputType = {
    points: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    cpf: string | null
    data_nasc: Date | null
    image_url: string | null
    points: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    cpf: string | null
    data_nasc: Date | null
    image_url: string | null
    points: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    cpf: number
    data_nasc: number
    image_url: number
    points: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    points?: true
  }

  export type ClienteSumAggregateInputType = {
    points?: true
  }

  export type ClienteMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    cpf?: true
    data_nasc?: true
    image_url?: true
    points?: true
    created_at?: true
    updated_at?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    cpf?: true
    data_nasc?: true
    image_url?: true
    points?: true
    created_at?: true
    updated_at?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    cpf?: true
    data_nasc?: true
    image_url?: true
    points?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    cpf: string
    data_nasc: Date | null
    image_url: string | null
    points: number
    created_at: Date | null
    updated_at: Date | null
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    cpf?: boolean
    data_nasc?: boolean
    image_url?: boolean
    points?: boolean
    created_at?: boolean
    updated_at?: boolean
    avaliacao?: boolean | Cliente$avaliacaoArgs<ExtArgs>
    favoritos?: boolean | Cliente$favoritosArgs<ExtArgs>
    comandas?: boolean | Cliente$comandasArgs<ExtArgs>
    pedidos?: boolean | Cliente$pedidosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    cpf?: boolean
    data_nasc?: boolean
    image_url?: boolean
    points?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    cpf?: boolean
    data_nasc?: boolean
    image_url?: boolean
    points?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    cpf?: boolean
    data_nasc?: boolean
    image_url?: boolean
    points?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "cpf" | "data_nasc" | "image_url" | "points" | "created_at" | "updated_at", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avaliacao?: boolean | Cliente$avaliacaoArgs<ExtArgs>
    favoritos?: boolean | Cliente$favoritosArgs<ExtArgs>
    comandas?: boolean | Cliente$comandasArgs<ExtArgs>
    pedidos?: boolean | Cliente$pedidosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      avaliacao: Prisma.$AvaliacaoPayload<ExtArgs>[]
      favoritos: Prisma.$FavoritoPayload<ExtArgs>[]
      comandas: Prisma.$ComandaPayload<ExtArgs>[]
      pedidos: Prisma.$PedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      cpf: string
      data_nasc: Date | null
      image_url: string | null
      points: number
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    avaliacao<T extends Cliente$avaliacaoArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$avaliacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoritos<T extends Cliente$favoritosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$favoritosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comandas<T extends Cliente$comandasArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$comandasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComandaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pedidos<T extends Cliente$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'String'>
    readonly name: FieldRef<"Cliente", 'String'>
    readonly email: FieldRef<"Cliente", 'String'>
    readonly password: FieldRef<"Cliente", 'String'>
    readonly cpf: FieldRef<"Cliente", 'String'>
    readonly data_nasc: FieldRef<"Cliente", 'DateTime'>
    readonly image_url: FieldRef<"Cliente", 'String'>
    readonly points: FieldRef<"Cliente", 'Float'>
    readonly created_at: FieldRef<"Cliente", 'DateTime'>
    readonly updated_at: FieldRef<"Cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.avaliacao
   */
  export type Cliente$avaliacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    cursor?: AvaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Cliente.favoritos
   */
  export type Cliente$favoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    where?: FavoritoWhereInput
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    cursor?: FavoritoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Cliente.comandas
   */
  export type Cliente$comandasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comanda
     */
    select?: ComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comanda
     */
    omit?: ComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandaInclude<ExtArgs> | null
    where?: ComandaWhereInput
    orderBy?: ComandaOrderByWithRelationInput | ComandaOrderByWithRelationInput[]
    cursor?: ComandaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComandaScalarFieldEnum | ComandaScalarFieldEnum[]
  }

  /**
   * Cliente.pedidos
   */
  export type Cliente$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Favorito
   */

  export type AggregateFavorito = {
    _count: FavoritoCountAggregateOutputType | null
    _min: FavoritoMinAggregateOutputType | null
    _max: FavoritoMaxAggregateOutputType | null
  }

  export type FavoritoMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    product_id: string | null
    cliente_id: string | null
  }

  export type FavoritoMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    product_id: string | null
    cliente_id: string | null
  }

  export type FavoritoCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    product_id: number
    cliente_id: number
    _all: number
  }


  export type FavoritoMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    product_id?: true
    cliente_id?: true
  }

  export type FavoritoMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    product_id?: true
    cliente_id?: true
  }

  export type FavoritoCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    product_id?: true
    cliente_id?: true
    _all?: true
  }

  export type FavoritoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorito to aggregate.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favoritos
    **/
    _count?: true | FavoritoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoritoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoritoMaxAggregateInputType
  }

  export type GetFavoritoAggregateType<T extends FavoritoAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorito]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorito[P]>
      : GetScalarType<T[P], AggregateFavorito[P]>
  }




  export type FavoritoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritoWhereInput
    orderBy?: FavoritoOrderByWithAggregationInput | FavoritoOrderByWithAggregationInput[]
    by: FavoritoScalarFieldEnum[] | FavoritoScalarFieldEnum
    having?: FavoritoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoritoCountAggregateInputType | true
    _min?: FavoritoMinAggregateInputType
    _max?: FavoritoMaxAggregateInputType
  }

  export type FavoritoGroupByOutputType = {
    id: string
    created_at: Date | null
    updated_at: Date | null
    product_id: string
    cliente_id: string
    _count: FavoritoCountAggregateOutputType | null
    _min: FavoritoMinAggregateOutputType | null
    _max: FavoritoMaxAggregateOutputType | null
  }

  type GetFavoritoGroupByPayload<T extends FavoritoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoritoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoritoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoritoGroupByOutputType[P]>
            : GetScalarType<T[P], FavoritoGroupByOutputType[P]>
        }
      >
    >


  export type FavoritoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    product_id?: boolean
    cliente_id?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorito"]>

  export type FavoritoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    product_id?: boolean
    cliente_id?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorito"]>

  export type FavoritoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    product_id?: boolean
    cliente_id?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorito"]>

  export type FavoritoSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    product_id?: boolean
    cliente_id?: boolean
  }

  export type FavoritoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "updated_at" | "product_id" | "cliente_id", ExtArgs["result"]["favorito"]>
  export type FavoritoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type FavoritoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type FavoritoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }

  export type $FavoritoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorito"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      cliente: Prisma.$ClientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date | null
      updated_at: Date | null
      product_id: string
      cliente_id: string
    }, ExtArgs["result"]["favorito"]>
    composites: {}
  }

  type FavoritoGetPayload<S extends boolean | null | undefined | FavoritoDefaultArgs> = $Result.GetResult<Prisma.$FavoritoPayload, S>

  type FavoritoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoritoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoritoCountAggregateInputType | true
    }

  export interface FavoritoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorito'], meta: { name: 'Favorito' } }
    /**
     * Find zero or one Favorito that matches the filter.
     * @param {FavoritoFindUniqueArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoritoFindUniqueArgs>(args: SelectSubset<T, FavoritoFindUniqueArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorito that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoritoFindUniqueOrThrowArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoritoFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoritoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorito that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoFindFirstArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoritoFindFirstArgs>(args?: SelectSubset<T, FavoritoFindFirstArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorito that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoFindFirstOrThrowArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoritoFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoritoFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favoritos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favoritos
     * const favoritos = await prisma.favorito.findMany()
     * 
     * // Get first 10 Favoritos
     * const favoritos = await prisma.favorito.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoritoWithIdOnly = await prisma.favorito.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoritoFindManyArgs>(args?: SelectSubset<T, FavoritoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorito.
     * @param {FavoritoCreateArgs} args - Arguments to create a Favorito.
     * @example
     * // Create one Favorito
     * const Favorito = await prisma.favorito.create({
     *   data: {
     *     // ... data to create a Favorito
     *   }
     * })
     * 
     */
    create<T extends FavoritoCreateArgs>(args: SelectSubset<T, FavoritoCreateArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favoritos.
     * @param {FavoritoCreateManyArgs} args - Arguments to create many Favoritos.
     * @example
     * // Create many Favoritos
     * const favorito = await prisma.favorito.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoritoCreateManyArgs>(args?: SelectSubset<T, FavoritoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favoritos and returns the data saved in the database.
     * @param {FavoritoCreateManyAndReturnArgs} args - Arguments to create many Favoritos.
     * @example
     * // Create many Favoritos
     * const favorito = await prisma.favorito.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favoritos and only return the `id`
     * const favoritoWithIdOnly = await prisma.favorito.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoritoCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoritoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favorito.
     * @param {FavoritoDeleteArgs} args - Arguments to delete one Favorito.
     * @example
     * // Delete one Favorito
     * const Favorito = await prisma.favorito.delete({
     *   where: {
     *     // ... filter to delete one Favorito
     *   }
     * })
     * 
     */
    delete<T extends FavoritoDeleteArgs>(args: SelectSubset<T, FavoritoDeleteArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorito.
     * @param {FavoritoUpdateArgs} args - Arguments to update one Favorito.
     * @example
     * // Update one Favorito
     * const favorito = await prisma.favorito.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoritoUpdateArgs>(args: SelectSubset<T, FavoritoUpdateArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favoritos.
     * @param {FavoritoDeleteManyArgs} args - Arguments to filter Favoritos to delete.
     * @example
     * // Delete a few Favoritos
     * const { count } = await prisma.favorito.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoritoDeleteManyArgs>(args?: SelectSubset<T, FavoritoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favoritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favoritos
     * const favorito = await prisma.favorito.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoritoUpdateManyArgs>(args: SelectSubset<T, FavoritoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favoritos and returns the data updated in the database.
     * @param {FavoritoUpdateManyAndReturnArgs} args - Arguments to update many Favoritos.
     * @example
     * // Update many Favoritos
     * const favorito = await prisma.favorito.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favoritos and only return the `id`
     * const favoritoWithIdOnly = await prisma.favorito.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FavoritoUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoritoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favorito.
     * @param {FavoritoUpsertArgs} args - Arguments to update or create a Favorito.
     * @example
     * // Update or create a Favorito
     * const favorito = await prisma.favorito.upsert({
     *   create: {
     *     // ... data to create a Favorito
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorito we want to update
     *   }
     * })
     */
    upsert<T extends FavoritoUpsertArgs>(args: SelectSubset<T, FavoritoUpsertArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favoritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoCountArgs} args - Arguments to filter Favoritos to count.
     * @example
     * // Count the number of Favoritos
     * const count = await prisma.favorito.count({
     *   where: {
     *     // ... the filter for the Favoritos we want to count
     *   }
     * })
    **/
    count<T extends FavoritoCountArgs>(
      args?: Subset<T, FavoritoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoritoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavoritoAggregateArgs>(args: Subset<T, FavoritoAggregateArgs>): Prisma.PrismaPromise<GetFavoritoAggregateType<T>>

    /**
     * Group by Favorito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FavoritoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoritoGroupByArgs['orderBy'] }
        : { orderBy?: FavoritoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavoritoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoritoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorito model
   */
  readonly fields: FavoritoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorito.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoritoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Favorito model
   */
  interface FavoritoFieldRefs {
    readonly id: FieldRef<"Favorito", 'String'>
    readonly created_at: FieldRef<"Favorito", 'DateTime'>
    readonly updated_at: FieldRef<"Favorito", 'DateTime'>
    readonly product_id: FieldRef<"Favorito", 'String'>
    readonly cliente_id: FieldRef<"Favorito", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Favorito findUnique
   */
  export type FavoritoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito findUniqueOrThrow
   */
  export type FavoritoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito findFirst
   */
  export type FavoritoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favoritos.
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favoritos.
     */
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Favorito findFirstOrThrow
   */
  export type FavoritoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favoritos.
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favoritos.
     */
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Favorito findMany
   */
  export type FavoritoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favoritos to fetch.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favoritos.
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Favorito create
   */
  export type FavoritoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorito.
     */
    data: XOR<FavoritoCreateInput, FavoritoUncheckedCreateInput>
  }

  /**
   * Favorito createMany
   */
  export type FavoritoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favoritos.
     */
    data: FavoritoCreateManyInput | FavoritoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favorito createManyAndReturn
   */
  export type FavoritoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * The data used to create many Favoritos.
     */
    data: FavoritoCreateManyInput | FavoritoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorito update
   */
  export type FavoritoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorito.
     */
    data: XOR<FavoritoUpdateInput, FavoritoUncheckedUpdateInput>
    /**
     * Choose, which Favorito to update.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito updateMany
   */
  export type FavoritoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favoritos.
     */
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyInput>
    /**
     * Filter which Favoritos to update
     */
    where?: FavoritoWhereInput
    /**
     * Limit how many Favoritos to update.
     */
    limit?: number
  }

  /**
   * Favorito updateManyAndReturn
   */
  export type FavoritoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * The data used to update Favoritos.
     */
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyInput>
    /**
     * Filter which Favoritos to update
     */
    where?: FavoritoWhereInput
    /**
     * Limit how many Favoritos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorito upsert
   */
  export type FavoritoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorito to update in case it exists.
     */
    where: FavoritoWhereUniqueInput
    /**
     * In case the Favorito found by the `where` argument doesn't exist, create a new Favorito with this data.
     */
    create: XOR<FavoritoCreateInput, FavoritoUncheckedCreateInput>
    /**
     * In case the Favorito was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoritoUpdateInput, FavoritoUncheckedUpdateInput>
  }

  /**
   * Favorito delete
   */
  export type FavoritoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter which Favorito to delete.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito deleteMany
   */
  export type FavoritoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favoritos to delete
     */
    where?: FavoritoWhereInput
    /**
     * Limit how many Favoritos to delete.
     */
    limit?: number
  }

  /**
   * Favorito without action
   */
  export type FavoritoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    image_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    image_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    image_url: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    image_url?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    image_url?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    image_url?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    image_url: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image_url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image_url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    image_url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image_url" | "created_at" | "updated_at", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      image_url: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly image_url: FieldRef<"Category", 'String'>
    readonly created_at: FieldRef<"Category", 'DateTime'>
    readonly updated_at: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: number | null
    points: number | null
  }

  export type ProductSumAggregateOutputType = {
    price: number | null
    points: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    points: number | null
    description: string | null
    promocao: boolean | null
    image_url: string | null
    created_at: Date | null
    updated_at: Date | null
    category_id: string | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    points: number | null
    description: string | null
    promocao: boolean | null
    image_url: string | null
    created_at: Date | null
    updated_at: Date | null
    category_id: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    price: number
    points: number
    description: number
    promocao: number
    image_url: number
    created_at: number
    updated_at: number
    category_id: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
    points?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
    points?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    points?: true
    description?: true
    promocao?: true
    image_url?: true
    created_at?: true
    updated_at?: true
    category_id?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    points?: true
    description?: true
    promocao?: true
    image_url?: true
    created_at?: true
    updated_at?: true
    category_id?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    points?: true
    description?: true
    promocao?: true
    image_url?: true
    created_at?: true
    updated_at?: true
    category_id?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    price: number
    points: number
    description: string
    promocao: boolean
    image_url: string | null
    created_at: Date | null
    updated_at: Date | null
    category_id: string
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    points?: boolean
    description?: boolean
    promocao?: boolean
    image_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    category_id?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    items?: boolean | Product$itemsArgs<ExtArgs>
    favoritos?: boolean | Product$favoritosArgs<ExtArgs>
    product_ingrediente?: boolean | Product$product_ingredienteArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    points?: boolean
    description?: boolean
    promocao?: boolean
    image_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    category_id?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    points?: boolean
    description?: boolean
    promocao?: boolean
    image_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    category_id?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    points?: boolean
    description?: boolean
    promocao?: boolean
    image_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    category_id?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "points" | "description" | "promocao" | "image_url" | "created_at" | "updated_at" | "category_id", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    items?: boolean | Product$itemsArgs<ExtArgs>
    favoritos?: boolean | Product$favoritosArgs<ExtArgs>
    product_ingrediente?: boolean | Product$product_ingredienteArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      items: Prisma.$ItemPayload<ExtArgs>[]
      favoritos: Prisma.$FavoritoPayload<ExtArgs>[]
      product_ingrediente: Prisma.$Product_ingredientePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price: number
      points: number
      description: string
      promocao: boolean
      image_url: string | null
      created_at: Date | null
      updated_at: Date | null
      category_id: string
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Product$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoritos<T extends Product$favoritosArgs<ExtArgs> = {}>(args?: Subset<T, Product$favoritosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    product_ingrediente<T extends Product$product_ingredienteArgs<ExtArgs> = {}>(args?: Subset<T, Product$product_ingredienteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Product_ingredientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly points: FieldRef<"Product", 'Float'>
    readonly description: FieldRef<"Product", 'String'>
    readonly promocao: FieldRef<"Product", 'Boolean'>
    readonly image_url: FieldRef<"Product", 'String'>
    readonly created_at: FieldRef<"Product", 'DateTime'>
    readonly updated_at: FieldRef<"Product", 'DateTime'>
    readonly category_id: FieldRef<"Product", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.items
   */
  export type Product$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Product.favoritos
   */
  export type Product$favoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    where?: FavoritoWhereInput
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    cursor?: FavoritoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Product.product_ingrediente
   */
  export type Product$product_ingredienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product_ingrediente
     */
    select?: Product_ingredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product_ingrediente
     */
    omit?: Product_ingredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Product_ingredienteInclude<ExtArgs> | null
    where?: Product_ingredienteWhereInput
    orderBy?: Product_ingredienteOrderByWithRelationInput | Product_ingredienteOrderByWithRelationInput[]
    cursor?: Product_ingredienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Product_ingredienteScalarFieldEnum | Product_ingredienteScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    price: number | null
    points: number | null
  }

  export type PedidoSumAggregateOutputType = {
    price: number | null
    points: number | null
  }

  export type PedidoMinAggregateOutputType = {
    id: string | null
    status: string | null
    price: number | null
    points: number | null
    created_at: Date | null
    updated_at: Date | null
    cliente_id: string | null
    comanda_id: string | null
  }

  export type PedidoMaxAggregateOutputType = {
    id: string | null
    status: string | null
    price: number | null
    points: number | null
    created_at: Date | null
    updated_at: Date | null
    cliente_id: string | null
    comanda_id: string | null
  }

  export type PedidoCountAggregateOutputType = {
    id: number
    status: number
    price: number
    points: number
    created_at: number
    updated_at: number
    cliente_id: number
    comanda_id: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    price?: true
    points?: true
  }

  export type PedidoSumAggregateInputType = {
    price?: true
    points?: true
  }

  export type PedidoMinAggregateInputType = {
    id?: true
    status?: true
    price?: true
    points?: true
    created_at?: true
    updated_at?: true
    cliente_id?: true
    comanda_id?: true
  }

  export type PedidoMaxAggregateInputType = {
    id?: true
    status?: true
    price?: true
    points?: true
    created_at?: true
    updated_at?: true
    cliente_id?: true
    comanda_id?: true
  }

  export type PedidoCountAggregateInputType = {
    id?: true
    status?: true
    price?: true
    points?: true
    created_at?: true
    updated_at?: true
    cliente_id?: true
    comanda_id?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedido to aggregate.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type PedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithAggregationInput | PedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: PedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    id: string
    status: string
    price: number
    points: number
    created_at: Date | null
    updated_at: Date | null
    cliente_id: string
    comanda_id: string
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends PedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type PedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    price?: boolean
    points?: boolean
    created_at?: boolean
    updated_at?: boolean
    cliente_id?: boolean
    comanda_id?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    comanda?: boolean | ComandaDefaultArgs<ExtArgs>
    items?: boolean | Pedido$itemsArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    price?: boolean
    points?: boolean
    created_at?: boolean
    updated_at?: boolean
    cliente_id?: boolean
    comanda_id?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    comanda?: boolean | ComandaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    price?: boolean
    points?: boolean
    created_at?: boolean
    updated_at?: boolean
    cliente_id?: boolean
    comanda_id?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    comanda?: boolean | ComandaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectScalar = {
    id?: boolean
    status?: boolean
    price?: boolean
    points?: boolean
    created_at?: boolean
    updated_at?: boolean
    cliente_id?: boolean
    comanda_id?: boolean
  }

  export type PedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "price" | "points" | "created_at" | "updated_at" | "cliente_id" | "comanda_id", ExtArgs["result"]["pedido"]>
  export type PedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    comanda?: boolean | ComandaDefaultArgs<ExtArgs>
    items?: boolean | Pedido$itemsArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    comanda?: boolean | ComandaDefaultArgs<ExtArgs>
  }
  export type PedidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    comanda?: boolean | ComandaDefaultArgs<ExtArgs>
  }

  export type $PedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pedido"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      comanda: Prisma.$ComandaPayload<ExtArgs>
      items: Prisma.$ItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: string
      price: number
      points: number
      created_at: Date | null
      updated_at: Date | null
      cliente_id: string
      comanda_id: string
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type PedidoGetPayload<S extends boolean | null | undefined | PedidoDefaultArgs> = $Result.GetResult<Prisma.$PedidoPayload, S>

  type PedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface PedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pedido'], meta: { name: 'Pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {PedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoFindUniqueArgs>(args: SelectSubset<T, PedidoFindUniqueArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoFindFirstArgs>(args?: SelectSubset<T, PedidoFindFirstArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoWithIdOnly = await prisma.pedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PedidoFindManyArgs>(args?: SelectSubset<T, PedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {PedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends PedidoCreateArgs>(args: SelectSubset<T, PedidoCreateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {PedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoCreateManyArgs>(args?: SelectSubset<T, PedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pedidos and returns the data saved in the database.
     * @param {PedidoCreateManyAndReturnArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, PedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pedido.
     * @param {PedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends PedidoDeleteArgs>(args: SelectSubset<T, PedidoDeleteArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {PedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoUpdateArgs>(args: SelectSubset<T, PedidoUpdateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {PedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoDeleteManyArgs>(args?: SelectSubset<T, PedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoUpdateManyArgs>(args: SelectSubset<T, PedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos and returns the data updated in the database.
     * @param {PedidoUpdateManyAndReturnArgs} args - Arguments to update many Pedidos.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, PedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pedido.
     * @param {PedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends PedidoUpsertArgs>(args: SelectSubset<T, PedidoUpsertArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends PedidoCountArgs>(
      args?: Subset<T, PedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoGroupByArgs['orderBy'] }
        : { orderBy?: PedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pedido model
   */
  readonly fields: PedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comanda<T extends ComandaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ComandaDefaultArgs<ExtArgs>>): Prisma__ComandaClient<$Result.GetResult<Prisma.$ComandaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Pedido$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pedido model
   */
  interface PedidoFieldRefs {
    readonly id: FieldRef<"Pedido", 'String'>
    readonly status: FieldRef<"Pedido", 'String'>
    readonly price: FieldRef<"Pedido", 'Float'>
    readonly points: FieldRef<"Pedido", 'Float'>
    readonly created_at: FieldRef<"Pedido", 'DateTime'>
    readonly updated_at: FieldRef<"Pedido", 'DateTime'>
    readonly cliente_id: FieldRef<"Pedido", 'String'>
    readonly comanda_id: FieldRef<"Pedido", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pedido findUnique
   */
  export type PedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findUniqueOrThrow
   */
  export type PedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findFirst
   */
  export type PedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findFirstOrThrow
   */
  export type PedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findMany
   */
  export type PedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedidos to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido create
   */
  export type PedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pedido.
     */
    data: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
  }

  /**
   * Pedido createMany
   */
  export type PedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pedido createManyAndReturn
   */
  export type PedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pedido update
   */
  export type PedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pedido.
     */
    data: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
    /**
     * Choose, which Pedido to update.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido updateMany
   */
  export type PedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
  }

  /**
   * Pedido updateManyAndReturn
   */
  export type PedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pedido upsert
   */
  export type PedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pedido to update in case it exists.
     */
    where: PedidoWhereUniqueInput
    /**
     * In case the Pedido found by the `where` argument doesn't exist, create a new Pedido with this data.
     */
    create: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
    /**
     * In case the Pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
  }

  /**
   * Pedido delete
   */
  export type PedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter which Pedido to delete.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido deleteMany
   */
  export type PedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedidos to delete
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to delete.
     */
    limit?: number
  }

  /**
   * Pedido.items
   */
  export type Pedido$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Pedido without action
   */
  export type PedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
  }


  /**
   * Model Comanda
   */

  export type AggregateComanda = {
    _count: ComandaCountAggregateOutputType | null
    _avg: ComandaAvgAggregateOutputType | null
    _sum: ComandaSumAggregateOutputType | null
    _min: ComandaMinAggregateOutputType | null
    _max: ComandaMaxAggregateOutputType | null
  }

  export type ComandaAvgAggregateOutputType = {
    price: number | null
    points: number | null
  }

  export type ComandaSumAggregateOutputType = {
    price: number | null
    points: number | null
  }

  export type ComandaMinAggregateOutputType = {
    id: string | null
    status: string | null
    price: number | null
    points: number | null
    created_at: Date | null
    updated_at: Date | null
    cliente_id: string | null
    mesa_id: string | null
  }

  export type ComandaMaxAggregateOutputType = {
    id: string | null
    status: string | null
    price: number | null
    points: number | null
    created_at: Date | null
    updated_at: Date | null
    cliente_id: string | null
    mesa_id: string | null
  }

  export type ComandaCountAggregateOutputType = {
    id: number
    status: number
    price: number
    points: number
    created_at: number
    updated_at: number
    cliente_id: number
    mesa_id: number
    _all: number
  }


  export type ComandaAvgAggregateInputType = {
    price?: true
    points?: true
  }

  export type ComandaSumAggregateInputType = {
    price?: true
    points?: true
  }

  export type ComandaMinAggregateInputType = {
    id?: true
    status?: true
    price?: true
    points?: true
    created_at?: true
    updated_at?: true
    cliente_id?: true
    mesa_id?: true
  }

  export type ComandaMaxAggregateInputType = {
    id?: true
    status?: true
    price?: true
    points?: true
    created_at?: true
    updated_at?: true
    cliente_id?: true
    mesa_id?: true
  }

  export type ComandaCountAggregateInputType = {
    id?: true
    status?: true
    price?: true
    points?: true
    created_at?: true
    updated_at?: true
    cliente_id?: true
    mesa_id?: true
    _all?: true
  }

  export type ComandaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comanda to aggregate.
     */
    where?: ComandaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comandas to fetch.
     */
    orderBy?: ComandaOrderByWithRelationInput | ComandaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComandaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comandas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comandas
    **/
    _count?: true | ComandaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComandaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComandaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComandaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComandaMaxAggregateInputType
  }

  export type GetComandaAggregateType<T extends ComandaAggregateArgs> = {
        [P in keyof T & keyof AggregateComanda]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComanda[P]>
      : GetScalarType<T[P], AggregateComanda[P]>
  }




  export type ComandaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComandaWhereInput
    orderBy?: ComandaOrderByWithAggregationInput | ComandaOrderByWithAggregationInput[]
    by: ComandaScalarFieldEnum[] | ComandaScalarFieldEnum
    having?: ComandaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComandaCountAggregateInputType | true
    _avg?: ComandaAvgAggregateInputType
    _sum?: ComandaSumAggregateInputType
    _min?: ComandaMinAggregateInputType
    _max?: ComandaMaxAggregateInputType
  }

  export type ComandaGroupByOutputType = {
    id: string
    status: string
    price: number
    points: number
    created_at: Date | null
    updated_at: Date | null
    cliente_id: string
    mesa_id: string | null
    _count: ComandaCountAggregateOutputType | null
    _avg: ComandaAvgAggregateOutputType | null
    _sum: ComandaSumAggregateOutputType | null
    _min: ComandaMinAggregateOutputType | null
    _max: ComandaMaxAggregateOutputType | null
  }

  type GetComandaGroupByPayload<T extends ComandaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComandaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComandaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComandaGroupByOutputType[P]>
            : GetScalarType<T[P], ComandaGroupByOutputType[P]>
        }
      >
    >


  export type ComandaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    price?: boolean
    points?: boolean
    created_at?: boolean
    updated_at?: boolean
    cliente_id?: boolean
    mesa_id?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    mesa?: boolean | Comanda$mesaArgs<ExtArgs>
    avaliacao?: boolean | Comanda$avaliacaoArgs<ExtArgs>
    pedido?: boolean | Comanda$pedidoArgs<ExtArgs>
    _count?: boolean | ComandaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comanda"]>

  export type ComandaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    price?: boolean
    points?: boolean
    created_at?: boolean
    updated_at?: boolean
    cliente_id?: boolean
    mesa_id?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    mesa?: boolean | Comanda$mesaArgs<ExtArgs>
  }, ExtArgs["result"]["comanda"]>

  export type ComandaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    price?: boolean
    points?: boolean
    created_at?: boolean
    updated_at?: boolean
    cliente_id?: boolean
    mesa_id?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    mesa?: boolean | Comanda$mesaArgs<ExtArgs>
  }, ExtArgs["result"]["comanda"]>

  export type ComandaSelectScalar = {
    id?: boolean
    status?: boolean
    price?: boolean
    points?: boolean
    created_at?: boolean
    updated_at?: boolean
    cliente_id?: boolean
    mesa_id?: boolean
  }

  export type ComandaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "price" | "points" | "created_at" | "updated_at" | "cliente_id" | "mesa_id", ExtArgs["result"]["comanda"]>
  export type ComandaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    mesa?: boolean | Comanda$mesaArgs<ExtArgs>
    avaliacao?: boolean | Comanda$avaliacaoArgs<ExtArgs>
    pedido?: boolean | Comanda$pedidoArgs<ExtArgs>
    _count?: boolean | ComandaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ComandaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    mesa?: boolean | Comanda$mesaArgs<ExtArgs>
  }
  export type ComandaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    mesa?: boolean | Comanda$mesaArgs<ExtArgs>
  }

  export type $ComandaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comanda"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      mesa: Prisma.$MesaPayload<ExtArgs> | null
      avaliacao: Prisma.$AvaliacaoPayload<ExtArgs>[]
      pedido: Prisma.$PedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: string
      price: number
      points: number
      created_at: Date | null
      updated_at: Date | null
      cliente_id: string
      mesa_id: string | null
    }, ExtArgs["result"]["comanda"]>
    composites: {}
  }

  type ComandaGetPayload<S extends boolean | null | undefined | ComandaDefaultArgs> = $Result.GetResult<Prisma.$ComandaPayload, S>

  type ComandaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComandaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComandaCountAggregateInputType | true
    }

  export interface ComandaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comanda'], meta: { name: 'Comanda' } }
    /**
     * Find zero or one Comanda that matches the filter.
     * @param {ComandaFindUniqueArgs} args - Arguments to find a Comanda
     * @example
     * // Get one Comanda
     * const comanda = await prisma.comanda.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComandaFindUniqueArgs>(args: SelectSubset<T, ComandaFindUniqueArgs<ExtArgs>>): Prisma__ComandaClient<$Result.GetResult<Prisma.$ComandaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comanda that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComandaFindUniqueOrThrowArgs} args - Arguments to find a Comanda
     * @example
     * // Get one Comanda
     * const comanda = await prisma.comanda.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComandaFindUniqueOrThrowArgs>(args: SelectSubset<T, ComandaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComandaClient<$Result.GetResult<Prisma.$ComandaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comanda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComandaFindFirstArgs} args - Arguments to find a Comanda
     * @example
     * // Get one Comanda
     * const comanda = await prisma.comanda.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComandaFindFirstArgs>(args?: SelectSubset<T, ComandaFindFirstArgs<ExtArgs>>): Prisma__ComandaClient<$Result.GetResult<Prisma.$ComandaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comanda that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComandaFindFirstOrThrowArgs} args - Arguments to find a Comanda
     * @example
     * // Get one Comanda
     * const comanda = await prisma.comanda.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComandaFindFirstOrThrowArgs>(args?: SelectSubset<T, ComandaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComandaClient<$Result.GetResult<Prisma.$ComandaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comandas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComandaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comandas
     * const comandas = await prisma.comanda.findMany()
     * 
     * // Get first 10 Comandas
     * const comandas = await prisma.comanda.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comandaWithIdOnly = await prisma.comanda.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComandaFindManyArgs>(args?: SelectSubset<T, ComandaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComandaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comanda.
     * @param {ComandaCreateArgs} args - Arguments to create a Comanda.
     * @example
     * // Create one Comanda
     * const Comanda = await prisma.comanda.create({
     *   data: {
     *     // ... data to create a Comanda
     *   }
     * })
     * 
     */
    create<T extends ComandaCreateArgs>(args: SelectSubset<T, ComandaCreateArgs<ExtArgs>>): Prisma__ComandaClient<$Result.GetResult<Prisma.$ComandaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comandas.
     * @param {ComandaCreateManyArgs} args - Arguments to create many Comandas.
     * @example
     * // Create many Comandas
     * const comanda = await prisma.comanda.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComandaCreateManyArgs>(args?: SelectSubset<T, ComandaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comandas and returns the data saved in the database.
     * @param {ComandaCreateManyAndReturnArgs} args - Arguments to create many Comandas.
     * @example
     * // Create many Comandas
     * const comanda = await prisma.comanda.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comandas and only return the `id`
     * const comandaWithIdOnly = await prisma.comanda.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComandaCreateManyAndReturnArgs>(args?: SelectSubset<T, ComandaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComandaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comanda.
     * @param {ComandaDeleteArgs} args - Arguments to delete one Comanda.
     * @example
     * // Delete one Comanda
     * const Comanda = await prisma.comanda.delete({
     *   where: {
     *     // ... filter to delete one Comanda
     *   }
     * })
     * 
     */
    delete<T extends ComandaDeleteArgs>(args: SelectSubset<T, ComandaDeleteArgs<ExtArgs>>): Prisma__ComandaClient<$Result.GetResult<Prisma.$ComandaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comanda.
     * @param {ComandaUpdateArgs} args - Arguments to update one Comanda.
     * @example
     * // Update one Comanda
     * const comanda = await prisma.comanda.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComandaUpdateArgs>(args: SelectSubset<T, ComandaUpdateArgs<ExtArgs>>): Prisma__ComandaClient<$Result.GetResult<Prisma.$ComandaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comandas.
     * @param {ComandaDeleteManyArgs} args - Arguments to filter Comandas to delete.
     * @example
     * // Delete a few Comandas
     * const { count } = await prisma.comanda.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComandaDeleteManyArgs>(args?: SelectSubset<T, ComandaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comandas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComandaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comandas
     * const comanda = await prisma.comanda.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComandaUpdateManyArgs>(args: SelectSubset<T, ComandaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comandas and returns the data updated in the database.
     * @param {ComandaUpdateManyAndReturnArgs} args - Arguments to update many Comandas.
     * @example
     * // Update many Comandas
     * const comanda = await prisma.comanda.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comandas and only return the `id`
     * const comandaWithIdOnly = await prisma.comanda.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ComandaUpdateManyAndReturnArgs>(args: SelectSubset<T, ComandaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComandaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comanda.
     * @param {ComandaUpsertArgs} args - Arguments to update or create a Comanda.
     * @example
     * // Update or create a Comanda
     * const comanda = await prisma.comanda.upsert({
     *   create: {
     *     // ... data to create a Comanda
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comanda we want to update
     *   }
     * })
     */
    upsert<T extends ComandaUpsertArgs>(args: SelectSubset<T, ComandaUpsertArgs<ExtArgs>>): Prisma__ComandaClient<$Result.GetResult<Prisma.$ComandaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comandas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComandaCountArgs} args - Arguments to filter Comandas to count.
     * @example
     * // Count the number of Comandas
     * const count = await prisma.comanda.count({
     *   where: {
     *     // ... the filter for the Comandas we want to count
     *   }
     * })
    **/
    count<T extends ComandaCountArgs>(
      args?: Subset<T, ComandaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComandaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comanda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComandaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComandaAggregateArgs>(args: Subset<T, ComandaAggregateArgs>): Prisma.PrismaPromise<GetComandaAggregateType<T>>

    /**
     * Group by Comanda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComandaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComandaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComandaGroupByArgs['orderBy'] }
        : { orderBy?: ComandaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComandaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComandaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comanda model
   */
  readonly fields: ComandaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comanda.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComandaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mesa<T extends Comanda$mesaArgs<ExtArgs> = {}>(args?: Subset<T, Comanda$mesaArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    avaliacao<T extends Comanda$avaliacaoArgs<ExtArgs> = {}>(args?: Subset<T, Comanda$avaliacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pedido<T extends Comanda$pedidoArgs<ExtArgs> = {}>(args?: Subset<T, Comanda$pedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comanda model
   */
  interface ComandaFieldRefs {
    readonly id: FieldRef<"Comanda", 'String'>
    readonly status: FieldRef<"Comanda", 'String'>
    readonly price: FieldRef<"Comanda", 'Float'>
    readonly points: FieldRef<"Comanda", 'Float'>
    readonly created_at: FieldRef<"Comanda", 'DateTime'>
    readonly updated_at: FieldRef<"Comanda", 'DateTime'>
    readonly cliente_id: FieldRef<"Comanda", 'String'>
    readonly mesa_id: FieldRef<"Comanda", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comanda findUnique
   */
  export type ComandaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comanda
     */
    select?: ComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comanda
     */
    omit?: ComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandaInclude<ExtArgs> | null
    /**
     * Filter, which Comanda to fetch.
     */
    where: ComandaWhereUniqueInput
  }

  /**
   * Comanda findUniqueOrThrow
   */
  export type ComandaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comanda
     */
    select?: ComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comanda
     */
    omit?: ComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandaInclude<ExtArgs> | null
    /**
     * Filter, which Comanda to fetch.
     */
    where: ComandaWhereUniqueInput
  }

  /**
   * Comanda findFirst
   */
  export type ComandaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comanda
     */
    select?: ComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comanda
     */
    omit?: ComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandaInclude<ExtArgs> | null
    /**
     * Filter, which Comanda to fetch.
     */
    where?: ComandaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comandas to fetch.
     */
    orderBy?: ComandaOrderByWithRelationInput | ComandaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comandas.
     */
    cursor?: ComandaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comandas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comandas.
     */
    distinct?: ComandaScalarFieldEnum | ComandaScalarFieldEnum[]
  }

  /**
   * Comanda findFirstOrThrow
   */
  export type ComandaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comanda
     */
    select?: ComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comanda
     */
    omit?: ComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandaInclude<ExtArgs> | null
    /**
     * Filter, which Comanda to fetch.
     */
    where?: ComandaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comandas to fetch.
     */
    orderBy?: ComandaOrderByWithRelationInput | ComandaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comandas.
     */
    cursor?: ComandaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comandas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comandas.
     */
    distinct?: ComandaScalarFieldEnum | ComandaScalarFieldEnum[]
  }

  /**
   * Comanda findMany
   */
  export type ComandaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comanda
     */
    select?: ComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comanda
     */
    omit?: ComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandaInclude<ExtArgs> | null
    /**
     * Filter, which Comandas to fetch.
     */
    where?: ComandaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comandas to fetch.
     */
    orderBy?: ComandaOrderByWithRelationInput | ComandaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comandas.
     */
    cursor?: ComandaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comandas.
     */
    skip?: number
    distinct?: ComandaScalarFieldEnum | ComandaScalarFieldEnum[]
  }

  /**
   * Comanda create
   */
  export type ComandaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comanda
     */
    select?: ComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comanda
     */
    omit?: ComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandaInclude<ExtArgs> | null
    /**
     * The data needed to create a Comanda.
     */
    data: XOR<ComandaCreateInput, ComandaUncheckedCreateInput>
  }

  /**
   * Comanda createMany
   */
  export type ComandaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comandas.
     */
    data: ComandaCreateManyInput | ComandaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comanda createManyAndReturn
   */
  export type ComandaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comanda
     */
    select?: ComandaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comanda
     */
    omit?: ComandaOmit<ExtArgs> | null
    /**
     * The data used to create many Comandas.
     */
    data: ComandaCreateManyInput | ComandaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comanda update
   */
  export type ComandaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comanda
     */
    select?: ComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comanda
     */
    omit?: ComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandaInclude<ExtArgs> | null
    /**
     * The data needed to update a Comanda.
     */
    data: XOR<ComandaUpdateInput, ComandaUncheckedUpdateInput>
    /**
     * Choose, which Comanda to update.
     */
    where: ComandaWhereUniqueInput
  }

  /**
   * Comanda updateMany
   */
  export type ComandaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comandas.
     */
    data: XOR<ComandaUpdateManyMutationInput, ComandaUncheckedUpdateManyInput>
    /**
     * Filter which Comandas to update
     */
    where?: ComandaWhereInput
    /**
     * Limit how many Comandas to update.
     */
    limit?: number
  }

  /**
   * Comanda updateManyAndReturn
   */
  export type ComandaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comanda
     */
    select?: ComandaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comanda
     */
    omit?: ComandaOmit<ExtArgs> | null
    /**
     * The data used to update Comandas.
     */
    data: XOR<ComandaUpdateManyMutationInput, ComandaUncheckedUpdateManyInput>
    /**
     * Filter which Comandas to update
     */
    where?: ComandaWhereInput
    /**
     * Limit how many Comandas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comanda upsert
   */
  export type ComandaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comanda
     */
    select?: ComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comanda
     */
    omit?: ComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandaInclude<ExtArgs> | null
    /**
     * The filter to search for the Comanda to update in case it exists.
     */
    where: ComandaWhereUniqueInput
    /**
     * In case the Comanda found by the `where` argument doesn't exist, create a new Comanda with this data.
     */
    create: XOR<ComandaCreateInput, ComandaUncheckedCreateInput>
    /**
     * In case the Comanda was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComandaUpdateInput, ComandaUncheckedUpdateInput>
  }

  /**
   * Comanda delete
   */
  export type ComandaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comanda
     */
    select?: ComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comanda
     */
    omit?: ComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandaInclude<ExtArgs> | null
    /**
     * Filter which Comanda to delete.
     */
    where: ComandaWhereUniqueInput
  }

  /**
   * Comanda deleteMany
   */
  export type ComandaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comandas to delete
     */
    where?: ComandaWhereInput
    /**
     * Limit how many Comandas to delete.
     */
    limit?: number
  }

  /**
   * Comanda.mesa
   */
  export type Comanda$mesaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    where?: MesaWhereInput
  }

  /**
   * Comanda.avaliacao
   */
  export type Comanda$avaliacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    cursor?: AvaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Comanda.pedido
   */
  export type Comanda$pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Comanda without action
   */
  export type ComandaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comanda
     */
    select?: ComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comanda
     */
    omit?: ComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandaInclude<ExtArgs> | null
  }


  /**
   * Model Avaliacao
   */

  export type AggregateAvaliacao = {
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  export type AvaliacaoAvgAggregateOutputType = {
    nota: number | null
  }

  export type AvaliacaoSumAggregateOutputType = {
    nota: number | null
  }

  export type AvaliacaoMinAggregateOutputType = {
    id: string | null
    nota: number | null
    descricao: string | null
    created_at: Date | null
    cliente_id: string | null
    comanda_id: string | null
  }

  export type AvaliacaoMaxAggregateOutputType = {
    id: string | null
    nota: number | null
    descricao: string | null
    created_at: Date | null
    cliente_id: string | null
    comanda_id: string | null
  }

  export type AvaliacaoCountAggregateOutputType = {
    id: number
    nota: number
    descricao: number
    created_at: number
    cliente_id: number
    comanda_id: number
    _all: number
  }


  export type AvaliacaoAvgAggregateInputType = {
    nota?: true
  }

  export type AvaliacaoSumAggregateInputType = {
    nota?: true
  }

  export type AvaliacaoMinAggregateInputType = {
    id?: true
    nota?: true
    descricao?: true
    created_at?: true
    cliente_id?: true
    comanda_id?: true
  }

  export type AvaliacaoMaxAggregateInputType = {
    id?: true
    nota?: true
    descricao?: true
    created_at?: true
    cliente_id?: true
    comanda_id?: true
  }

  export type AvaliacaoCountAggregateInputType = {
    id?: true
    nota?: true
    descricao?: true
    created_at?: true
    cliente_id?: true
    comanda_id?: true
    _all?: true
  }

  export type AvaliacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacao to aggregate.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avaliacaos
    **/
    _count?: true | AvaliacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvaliacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvaliacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvaliacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type GetAvaliacaoAggregateType<T extends AvaliacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateAvaliacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvaliacao[P]>
      : GetScalarType<T[P], AggregateAvaliacao[P]>
  }




  export type AvaliacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithAggregationInput | AvaliacaoOrderByWithAggregationInput[]
    by: AvaliacaoScalarFieldEnum[] | AvaliacaoScalarFieldEnum
    having?: AvaliacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvaliacaoCountAggregateInputType | true
    _avg?: AvaliacaoAvgAggregateInputType
    _sum?: AvaliacaoSumAggregateInputType
    _min?: AvaliacaoMinAggregateInputType
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type AvaliacaoGroupByOutputType = {
    id: string
    nota: number
    descricao: string
    created_at: Date | null
    cliente_id: string
    comanda_id: string
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  type GetAvaliacaoGroupByPayload<T extends AvaliacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvaliacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvaliacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
            : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
        }
      >
    >


  export type AvaliacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nota?: boolean
    descricao?: boolean
    created_at?: boolean
    cliente_id?: boolean
    comanda_id?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    comanda?: boolean | ComandaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>

  export type AvaliacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nota?: boolean
    descricao?: boolean
    created_at?: boolean
    cliente_id?: boolean
    comanda_id?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    comanda?: boolean | ComandaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>

  export type AvaliacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nota?: boolean
    descricao?: boolean
    created_at?: boolean
    cliente_id?: boolean
    comanda_id?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    comanda?: boolean | ComandaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>

  export type AvaliacaoSelectScalar = {
    id?: boolean
    nota?: boolean
    descricao?: boolean
    created_at?: boolean
    cliente_id?: boolean
    comanda_id?: boolean
  }

  export type AvaliacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nota" | "descricao" | "created_at" | "cliente_id" | "comanda_id", ExtArgs["result"]["avaliacao"]>
  export type AvaliacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    comanda?: boolean | ComandaDefaultArgs<ExtArgs>
  }
  export type AvaliacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    comanda?: boolean | ComandaDefaultArgs<ExtArgs>
  }
  export type AvaliacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    comanda?: boolean | ComandaDefaultArgs<ExtArgs>
  }

  export type $AvaliacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Avaliacao"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      comanda: Prisma.$ComandaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nota: number
      descricao: string
      created_at: Date | null
      cliente_id: string
      comanda_id: string
    }, ExtArgs["result"]["avaliacao"]>
    composites: {}
  }

  type AvaliacaoGetPayload<S extends boolean | null | undefined | AvaliacaoDefaultArgs> = $Result.GetResult<Prisma.$AvaliacaoPayload, S>

  type AvaliacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvaliacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvaliacaoCountAggregateInputType | true
    }

  export interface AvaliacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avaliacao'], meta: { name: 'Avaliacao' } }
    /**
     * Find zero or one Avaliacao that matches the filter.
     * @param {AvaliacaoFindUniqueArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvaliacaoFindUniqueArgs>(args: SelectSubset<T, AvaliacaoFindUniqueArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avaliacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvaliacaoFindUniqueOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvaliacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, AvaliacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvaliacaoFindFirstArgs>(args?: SelectSubset<T, AvaliacaoFindFirstArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvaliacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, AvaliacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avaliacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany()
     * 
     * // Get first 10 Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avaliacaoWithIdOnly = await prisma.avaliacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvaliacaoFindManyArgs>(args?: SelectSubset<T, AvaliacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avaliacao.
     * @param {AvaliacaoCreateArgs} args - Arguments to create a Avaliacao.
     * @example
     * // Create one Avaliacao
     * const Avaliacao = await prisma.avaliacao.create({
     *   data: {
     *     // ... data to create a Avaliacao
     *   }
     * })
     * 
     */
    create<T extends AvaliacaoCreateArgs>(args: SelectSubset<T, AvaliacaoCreateArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avaliacaos.
     * @param {AvaliacaoCreateManyArgs} args - Arguments to create many Avaliacaos.
     * @example
     * // Create many Avaliacaos
     * const avaliacao = await prisma.avaliacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvaliacaoCreateManyArgs>(args?: SelectSubset<T, AvaliacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Avaliacaos and returns the data saved in the database.
     * @param {AvaliacaoCreateManyAndReturnArgs} args - Arguments to create many Avaliacaos.
     * @example
     * // Create many Avaliacaos
     * const avaliacao = await prisma.avaliacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Avaliacaos and only return the `id`
     * const avaliacaoWithIdOnly = await prisma.avaliacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvaliacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, AvaliacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Avaliacao.
     * @param {AvaliacaoDeleteArgs} args - Arguments to delete one Avaliacao.
     * @example
     * // Delete one Avaliacao
     * const Avaliacao = await prisma.avaliacao.delete({
     *   where: {
     *     // ... filter to delete one Avaliacao
     *   }
     * })
     * 
     */
    delete<T extends AvaliacaoDeleteArgs>(args: SelectSubset<T, AvaliacaoDeleteArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avaliacao.
     * @param {AvaliacaoUpdateArgs} args - Arguments to update one Avaliacao.
     * @example
     * // Update one Avaliacao
     * const avaliacao = await prisma.avaliacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvaliacaoUpdateArgs>(args: SelectSubset<T, AvaliacaoUpdateArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avaliacaos.
     * @param {AvaliacaoDeleteManyArgs} args - Arguments to filter Avaliacaos to delete.
     * @example
     * // Delete a few Avaliacaos
     * const { count } = await prisma.avaliacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvaliacaoDeleteManyArgs>(args?: SelectSubset<T, AvaliacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avaliacaos
     * const avaliacao = await prisma.avaliacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvaliacaoUpdateManyArgs>(args: SelectSubset<T, AvaliacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacaos and returns the data updated in the database.
     * @param {AvaliacaoUpdateManyAndReturnArgs} args - Arguments to update many Avaliacaos.
     * @example
     * // Update many Avaliacaos
     * const avaliacao = await prisma.avaliacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Avaliacaos and only return the `id`
     * const avaliacaoWithIdOnly = await prisma.avaliacao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AvaliacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, AvaliacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Avaliacao.
     * @param {AvaliacaoUpsertArgs} args - Arguments to update or create a Avaliacao.
     * @example
     * // Update or create a Avaliacao
     * const avaliacao = await prisma.avaliacao.upsert({
     *   create: {
     *     // ... data to create a Avaliacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avaliacao we want to update
     *   }
     * })
     */
    upsert<T extends AvaliacaoUpsertArgs>(args: SelectSubset<T, AvaliacaoUpsertArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoCountArgs} args - Arguments to filter Avaliacaos to count.
     * @example
     * // Count the number of Avaliacaos
     * const count = await prisma.avaliacao.count({
     *   where: {
     *     // ... the filter for the Avaliacaos we want to count
     *   }
     * })
    **/
    count<T extends AvaliacaoCountArgs>(
      args?: Subset<T, AvaliacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvaliacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvaliacaoAggregateArgs>(args: Subset<T, AvaliacaoAggregateArgs>): Prisma.PrismaPromise<GetAvaliacaoAggregateType<T>>

    /**
     * Group by Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvaliacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvaliacaoGroupByArgs['orderBy'] }
        : { orderBy?: AvaliacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvaliacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvaliacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avaliacao model
   */
  readonly fields: AvaliacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avaliacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvaliacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comanda<T extends ComandaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ComandaDefaultArgs<ExtArgs>>): Prisma__ComandaClient<$Result.GetResult<Prisma.$ComandaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Avaliacao model
   */
  interface AvaliacaoFieldRefs {
    readonly id: FieldRef<"Avaliacao", 'String'>
    readonly nota: FieldRef<"Avaliacao", 'Int'>
    readonly descricao: FieldRef<"Avaliacao", 'String'>
    readonly created_at: FieldRef<"Avaliacao", 'DateTime'>
    readonly cliente_id: FieldRef<"Avaliacao", 'String'>
    readonly comanda_id: FieldRef<"Avaliacao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Avaliacao findUnique
   */
  export type AvaliacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao findUniqueOrThrow
   */
  export type AvaliacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao findFirst
   */
  export type AvaliacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao findFirstOrThrow
   */
  export type AvaliacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao findMany
   */
  export type AvaliacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacaos to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao create
   */
  export type AvaliacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Avaliacao.
     */
    data: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
  }

  /**
   * Avaliacao createMany
   */
  export type AvaliacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avaliacaos.
     */
    data: AvaliacaoCreateManyInput | AvaliacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Avaliacao createManyAndReturn
   */
  export type AvaliacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Avaliacaos.
     */
    data: AvaliacaoCreateManyInput | AvaliacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avaliacao update
   */
  export type AvaliacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Avaliacao.
     */
    data: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
    /**
     * Choose, which Avaliacao to update.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao updateMany
   */
  export type AvaliacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avaliacaos.
     */
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyInput>
    /**
     * Filter which Avaliacaos to update
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to update.
     */
    limit?: number
  }

  /**
   * Avaliacao updateManyAndReturn
   */
  export type AvaliacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * The data used to update Avaliacaos.
     */
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyInput>
    /**
     * Filter which Avaliacaos to update
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avaliacao upsert
   */
  export type AvaliacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Avaliacao to update in case it exists.
     */
    where: AvaliacaoWhereUniqueInput
    /**
     * In case the Avaliacao found by the `where` argument doesn't exist, create a new Avaliacao with this data.
     */
    create: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
    /**
     * In case the Avaliacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
  }

  /**
   * Avaliacao delete
   */
  export type AvaliacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter which Avaliacao to delete.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao deleteMany
   */
  export type AvaliacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacaos to delete
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to delete.
     */
    limit?: number
  }

  /**
   * Avaliacao without action
   */
  export type AvaliacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
  }


  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    qtd: number | null
    price: number | null
    points: number | null
  }

  export type ItemSumAggregateOutputType = {
    qtd: number | null
    price: number | null
    points: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: string | null
    qtd: number | null
    price: number | null
    points: number | null
    observacoes: string | null
    created_at: Date | null
    updated_at: Date | null
    pedido_id: string | null
    product_id: string | null
  }

  export type ItemMaxAggregateOutputType = {
    id: string | null
    qtd: number | null
    price: number | null
    points: number | null
    observacoes: string | null
    created_at: Date | null
    updated_at: Date | null
    pedido_id: string | null
    product_id: string | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    qtd: number
    price: number
    points: number
    removidos: number
    adicionais: number
    observacoes: number
    created_at: number
    updated_at: number
    pedido_id: number
    product_id: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    qtd?: true
    price?: true
    points?: true
  }

  export type ItemSumAggregateInputType = {
    qtd?: true
    price?: true
    points?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    qtd?: true
    price?: true
    points?: true
    observacoes?: true
    created_at?: true
    updated_at?: true
    pedido_id?: true
    product_id?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    qtd?: true
    price?: true
    points?: true
    observacoes?: true
    created_at?: true
    updated_at?: true
    pedido_id?: true
    product_id?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    qtd?: true
    price?: true
    points?: true
    removidos?: true
    adicionais?: true
    observacoes?: true
    created_at?: true
    updated_at?: true
    pedido_id?: true
    product_id?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: string
    qtd: number
    price: number
    points: number
    removidos: JsonValue | null
    adicionais: JsonValue | null
    observacoes: string | null
    created_at: Date | null
    updated_at: Date | null
    pedido_id: string
    product_id: string
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qtd?: boolean
    price?: boolean
    points?: boolean
    removidos?: boolean
    adicionais?: boolean
    observacoes?: boolean
    created_at?: boolean
    updated_at?: boolean
    pedido_id?: boolean
    product_id?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    Item_adicional?: boolean | Item$Item_adicionalArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qtd?: boolean
    price?: boolean
    points?: boolean
    removidos?: boolean
    adicionais?: boolean
    observacoes?: boolean
    created_at?: boolean
    updated_at?: boolean
    pedido_id?: boolean
    product_id?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qtd?: boolean
    price?: boolean
    points?: boolean
    removidos?: boolean
    adicionais?: boolean
    observacoes?: boolean
    created_at?: boolean
    updated_at?: boolean
    pedido_id?: boolean
    product_id?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    qtd?: boolean
    price?: boolean
    points?: boolean
    removidos?: boolean
    adicionais?: boolean
    observacoes?: boolean
    created_at?: boolean
    updated_at?: boolean
    pedido_id?: boolean
    product_id?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "qtd" | "price" | "points" | "removidos" | "adicionais" | "observacoes" | "created_at" | "updated_at" | "pedido_id" | "product_id", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    Item_adicional?: boolean | Item$Item_adicionalArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      pedido: Prisma.$PedidoPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
      Item_adicional: Prisma.$Item_adicionalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      qtd: number
      price: number
      points: number
      removidos: Prisma.JsonValue | null
      adicionais: Prisma.JsonValue | null
      observacoes: string | null
      created_at: Date | null
      updated_at: Date | null
      pedido_id: string
      product_id: string
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Item_adicional<T extends Item$Item_adicionalArgs<ExtArgs> = {}>(args?: Subset<T, Item$Item_adicionalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Item_adicionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'String'>
    readonly qtd: FieldRef<"Item", 'Int'>
    readonly price: FieldRef<"Item", 'Float'>
    readonly points: FieldRef<"Item", 'Float'>
    readonly removidos: FieldRef<"Item", 'Json'>
    readonly adicionais: FieldRef<"Item", 'Json'>
    readonly observacoes: FieldRef<"Item", 'String'>
    readonly created_at: FieldRef<"Item", 'DateTime'>
    readonly updated_at: FieldRef<"Item", 'DateTime'>
    readonly pedido_id: FieldRef<"Item", 'String'>
    readonly product_id: FieldRef<"Item", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item updateManyAndReturn
   */
  export type ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Item.Item_adicional
   */
  export type Item$Item_adicionalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_adicional
     */
    select?: Item_adicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item_adicional
     */
    omit?: Item_adicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_adicionalInclude<ExtArgs> | null
    where?: Item_adicionalWhereInput
    orderBy?: Item_adicionalOrderByWithRelationInput | Item_adicionalOrderByWithRelationInput[]
    cursor?: Item_adicionalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Item_adicionalScalarFieldEnum | Item_adicionalScalarFieldEnum[]
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Model Ingrediente
   */

  export type AggregateIngrediente = {
    _count: IngredienteCountAggregateOutputType | null
    _avg: IngredienteAvgAggregateOutputType | null
    _sum: IngredienteSumAggregateOutputType | null
    _min: IngredienteMinAggregateOutputType | null
    _max: IngredienteMaxAggregateOutputType | null
  }

  export type IngredienteAvgAggregateOutputType = {
    price: number | null
  }

  export type IngredienteSumAggregateOutputType = {
    price: number | null
  }

  export type IngredienteMinAggregateOutputType = {
    id: string | null
    nome: string | null
    price: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type IngredienteMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    price: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type IngredienteCountAggregateOutputType = {
    id: number
    nome: number
    price: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type IngredienteAvgAggregateInputType = {
    price?: true
  }

  export type IngredienteSumAggregateInputType = {
    price?: true
  }

  export type IngredienteMinAggregateInputType = {
    id?: true
    nome?: true
    price?: true
    created_at?: true
    updated_at?: true
  }

  export type IngredienteMaxAggregateInputType = {
    id?: true
    nome?: true
    price?: true
    created_at?: true
    updated_at?: true
  }

  export type IngredienteCountAggregateInputType = {
    id?: true
    nome?: true
    price?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type IngredienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingrediente to aggregate.
     */
    where?: IngredienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredientes to fetch.
     */
    orderBy?: IngredienteOrderByWithRelationInput | IngredienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ingredientes
    **/
    _count?: true | IngredienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredienteMaxAggregateInputType
  }

  export type GetIngredienteAggregateType<T extends IngredienteAggregateArgs> = {
        [P in keyof T & keyof AggregateIngrediente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngrediente[P]>
      : GetScalarType<T[P], AggregateIngrediente[P]>
  }




  export type IngredienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredienteWhereInput
    orderBy?: IngredienteOrderByWithAggregationInput | IngredienteOrderByWithAggregationInput[]
    by: IngredienteScalarFieldEnum[] | IngredienteScalarFieldEnum
    having?: IngredienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredienteCountAggregateInputType | true
    _avg?: IngredienteAvgAggregateInputType
    _sum?: IngredienteSumAggregateInputType
    _min?: IngredienteMinAggregateInputType
    _max?: IngredienteMaxAggregateInputType
  }

  export type IngredienteGroupByOutputType = {
    id: string
    nome: string
    price: number
    created_at: Date | null
    updated_at: Date | null
    _count: IngredienteCountAggregateOutputType | null
    _avg: IngredienteAvgAggregateOutputType | null
    _sum: IngredienteSumAggregateOutputType | null
    _min: IngredienteMinAggregateOutputType | null
    _max: IngredienteMaxAggregateOutputType | null
  }

  type GetIngredienteGroupByPayload<T extends IngredienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredienteGroupByOutputType[P]>
            : GetScalarType<T[P], IngredienteGroupByOutputType[P]>
        }
      >
    >


  export type IngredienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    price?: boolean
    created_at?: boolean
    updated_at?: boolean
    Product_ingrediente?: boolean | Ingrediente$Product_ingredienteArgs<ExtArgs>
    _count?: boolean | IngredienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingrediente"]>

  export type IngredienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    price?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["ingrediente"]>

  export type IngredienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    price?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["ingrediente"]>

  export type IngredienteSelectScalar = {
    id?: boolean
    nome?: boolean
    price?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type IngredienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "price" | "created_at" | "updated_at", ExtArgs["result"]["ingrediente"]>
  export type IngredienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product_ingrediente?: boolean | Ingrediente$Product_ingredienteArgs<ExtArgs>
    _count?: boolean | IngredienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IngredienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type IngredienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $IngredientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ingrediente"
    objects: {
      Product_ingrediente: Prisma.$Product_ingredientePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      price: number
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["ingrediente"]>
    composites: {}
  }

  type IngredienteGetPayload<S extends boolean | null | undefined | IngredienteDefaultArgs> = $Result.GetResult<Prisma.$IngredientePayload, S>

  type IngredienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngredienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngredienteCountAggregateInputType | true
    }

  export interface IngredienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ingrediente'], meta: { name: 'Ingrediente' } }
    /**
     * Find zero or one Ingrediente that matches the filter.
     * @param {IngredienteFindUniqueArgs} args - Arguments to find a Ingrediente
     * @example
     * // Get one Ingrediente
     * const ingrediente = await prisma.ingrediente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngredienteFindUniqueArgs>(args: SelectSubset<T, IngredienteFindUniqueArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingrediente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngredienteFindUniqueOrThrowArgs} args - Arguments to find a Ingrediente
     * @example
     * // Get one Ingrediente
     * const ingrediente = await prisma.ingrediente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngredienteFindUniqueOrThrowArgs>(args: SelectSubset<T, IngredienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingrediente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredienteFindFirstArgs} args - Arguments to find a Ingrediente
     * @example
     * // Get one Ingrediente
     * const ingrediente = await prisma.ingrediente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngredienteFindFirstArgs>(args?: SelectSubset<T, IngredienteFindFirstArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingrediente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredienteFindFirstOrThrowArgs} args - Arguments to find a Ingrediente
     * @example
     * // Get one Ingrediente
     * const ingrediente = await prisma.ingrediente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngredienteFindFirstOrThrowArgs>(args?: SelectSubset<T, IngredienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingredientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredientes
     * const ingredientes = await prisma.ingrediente.findMany()
     * 
     * // Get first 10 Ingredientes
     * const ingredientes = await prisma.ingrediente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredienteWithIdOnly = await prisma.ingrediente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngredienteFindManyArgs>(args?: SelectSubset<T, IngredienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingrediente.
     * @param {IngredienteCreateArgs} args - Arguments to create a Ingrediente.
     * @example
     * // Create one Ingrediente
     * const Ingrediente = await prisma.ingrediente.create({
     *   data: {
     *     // ... data to create a Ingrediente
     *   }
     * })
     * 
     */
    create<T extends IngredienteCreateArgs>(args: SelectSubset<T, IngredienteCreateArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingredientes.
     * @param {IngredienteCreateManyArgs} args - Arguments to create many Ingredientes.
     * @example
     * // Create many Ingredientes
     * const ingrediente = await prisma.ingrediente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngredienteCreateManyArgs>(args?: SelectSubset<T, IngredienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingredientes and returns the data saved in the database.
     * @param {IngredienteCreateManyAndReturnArgs} args - Arguments to create many Ingredientes.
     * @example
     * // Create many Ingredientes
     * const ingrediente = await prisma.ingrediente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingredientes and only return the `id`
     * const ingredienteWithIdOnly = await prisma.ingrediente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngredienteCreateManyAndReturnArgs>(args?: SelectSubset<T, IngredienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingrediente.
     * @param {IngredienteDeleteArgs} args - Arguments to delete one Ingrediente.
     * @example
     * // Delete one Ingrediente
     * const Ingrediente = await prisma.ingrediente.delete({
     *   where: {
     *     // ... filter to delete one Ingrediente
     *   }
     * })
     * 
     */
    delete<T extends IngredienteDeleteArgs>(args: SelectSubset<T, IngredienteDeleteArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingrediente.
     * @param {IngredienteUpdateArgs} args - Arguments to update one Ingrediente.
     * @example
     * // Update one Ingrediente
     * const ingrediente = await prisma.ingrediente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngredienteUpdateArgs>(args: SelectSubset<T, IngredienteUpdateArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingredientes.
     * @param {IngredienteDeleteManyArgs} args - Arguments to filter Ingredientes to delete.
     * @example
     * // Delete a few Ingredientes
     * const { count } = await prisma.ingrediente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngredienteDeleteManyArgs>(args?: SelectSubset<T, IngredienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredientes
     * const ingrediente = await prisma.ingrediente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngredienteUpdateManyArgs>(args: SelectSubset<T, IngredienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredientes and returns the data updated in the database.
     * @param {IngredienteUpdateManyAndReturnArgs} args - Arguments to update many Ingredientes.
     * @example
     * // Update many Ingredientes
     * const ingrediente = await prisma.ingrediente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingredientes and only return the `id`
     * const ingredienteWithIdOnly = await prisma.ingrediente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IngredienteUpdateManyAndReturnArgs>(args: SelectSubset<T, IngredienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingrediente.
     * @param {IngredienteUpsertArgs} args - Arguments to update or create a Ingrediente.
     * @example
     * // Update or create a Ingrediente
     * const ingrediente = await prisma.ingrediente.upsert({
     *   create: {
     *     // ... data to create a Ingrediente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingrediente we want to update
     *   }
     * })
     */
    upsert<T extends IngredienteUpsertArgs>(args: SelectSubset<T, IngredienteUpsertArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingredientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredienteCountArgs} args - Arguments to filter Ingredientes to count.
     * @example
     * // Count the number of Ingredientes
     * const count = await prisma.ingrediente.count({
     *   where: {
     *     // ... the filter for the Ingredientes we want to count
     *   }
     * })
    **/
    count<T extends IngredienteCountArgs>(
      args?: Subset<T, IngredienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingrediente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IngredienteAggregateArgs>(args: Subset<T, IngredienteAggregateArgs>): Prisma.PrismaPromise<GetIngredienteAggregateType<T>>

    /**
     * Group by Ingrediente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IngredienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredienteGroupByArgs['orderBy'] }
        : { orderBy?: IngredienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IngredienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ingrediente model
   */
  readonly fields: IngredienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingrediente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product_ingrediente<T extends Ingrediente$Product_ingredienteArgs<ExtArgs> = {}>(args?: Subset<T, Ingrediente$Product_ingredienteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Product_ingredientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ingrediente model
   */
  interface IngredienteFieldRefs {
    readonly id: FieldRef<"Ingrediente", 'String'>
    readonly nome: FieldRef<"Ingrediente", 'String'>
    readonly price: FieldRef<"Ingrediente", 'Float'>
    readonly created_at: FieldRef<"Ingrediente", 'DateTime'>
    readonly updated_at: FieldRef<"Ingrediente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ingrediente findUnique
   */
  export type IngredienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * Filter, which Ingrediente to fetch.
     */
    where: IngredienteWhereUniqueInput
  }

  /**
   * Ingrediente findUniqueOrThrow
   */
  export type IngredienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * Filter, which Ingrediente to fetch.
     */
    where: IngredienteWhereUniqueInput
  }

  /**
   * Ingrediente findFirst
   */
  export type IngredienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * Filter, which Ingrediente to fetch.
     */
    where?: IngredienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredientes to fetch.
     */
    orderBy?: IngredienteOrderByWithRelationInput | IngredienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredientes.
     */
    cursor?: IngredienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredientes.
     */
    distinct?: IngredienteScalarFieldEnum | IngredienteScalarFieldEnum[]
  }

  /**
   * Ingrediente findFirstOrThrow
   */
  export type IngredienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * Filter, which Ingrediente to fetch.
     */
    where?: IngredienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredientes to fetch.
     */
    orderBy?: IngredienteOrderByWithRelationInput | IngredienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredientes.
     */
    cursor?: IngredienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredientes.
     */
    distinct?: IngredienteScalarFieldEnum | IngredienteScalarFieldEnum[]
  }

  /**
   * Ingrediente findMany
   */
  export type IngredienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * Filter, which Ingredientes to fetch.
     */
    where?: IngredienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredientes to fetch.
     */
    orderBy?: IngredienteOrderByWithRelationInput | IngredienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ingredientes.
     */
    cursor?: IngredienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredientes.
     */
    skip?: number
    distinct?: IngredienteScalarFieldEnum | IngredienteScalarFieldEnum[]
  }

  /**
   * Ingrediente create
   */
  export type IngredienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Ingrediente.
     */
    data: XOR<IngredienteCreateInput, IngredienteUncheckedCreateInput>
  }

  /**
   * Ingrediente createMany
   */
  export type IngredienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ingredientes.
     */
    data: IngredienteCreateManyInput | IngredienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingrediente createManyAndReturn
   */
  export type IngredienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * The data used to create many Ingredientes.
     */
    data: IngredienteCreateManyInput | IngredienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingrediente update
   */
  export type IngredienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Ingrediente.
     */
    data: XOR<IngredienteUpdateInput, IngredienteUncheckedUpdateInput>
    /**
     * Choose, which Ingrediente to update.
     */
    where: IngredienteWhereUniqueInput
  }

  /**
   * Ingrediente updateMany
   */
  export type IngredienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ingredientes.
     */
    data: XOR<IngredienteUpdateManyMutationInput, IngredienteUncheckedUpdateManyInput>
    /**
     * Filter which Ingredientes to update
     */
    where?: IngredienteWhereInput
    /**
     * Limit how many Ingredientes to update.
     */
    limit?: number
  }

  /**
   * Ingrediente updateManyAndReturn
   */
  export type IngredienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * The data used to update Ingredientes.
     */
    data: XOR<IngredienteUpdateManyMutationInput, IngredienteUncheckedUpdateManyInput>
    /**
     * Filter which Ingredientes to update
     */
    where?: IngredienteWhereInput
    /**
     * Limit how many Ingredientes to update.
     */
    limit?: number
  }

  /**
   * Ingrediente upsert
   */
  export type IngredienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Ingrediente to update in case it exists.
     */
    where: IngredienteWhereUniqueInput
    /**
     * In case the Ingrediente found by the `where` argument doesn't exist, create a new Ingrediente with this data.
     */
    create: XOR<IngredienteCreateInput, IngredienteUncheckedCreateInput>
    /**
     * In case the Ingrediente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredienteUpdateInput, IngredienteUncheckedUpdateInput>
  }

  /**
   * Ingrediente delete
   */
  export type IngredienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * Filter which Ingrediente to delete.
     */
    where: IngredienteWhereUniqueInput
  }

  /**
   * Ingrediente deleteMany
   */
  export type IngredienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredientes to delete
     */
    where?: IngredienteWhereInput
    /**
     * Limit how many Ingredientes to delete.
     */
    limit?: number
  }

  /**
   * Ingrediente.Product_ingrediente
   */
  export type Ingrediente$Product_ingredienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product_ingrediente
     */
    select?: Product_ingredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product_ingrediente
     */
    omit?: Product_ingredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Product_ingredienteInclude<ExtArgs> | null
    where?: Product_ingredienteWhereInput
    orderBy?: Product_ingredienteOrderByWithRelationInput | Product_ingredienteOrderByWithRelationInput[]
    cursor?: Product_ingredienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Product_ingredienteScalarFieldEnum | Product_ingredienteScalarFieldEnum[]
  }

  /**
   * Ingrediente without action
   */
  export type IngredienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
  }


  /**
   * Model Product_ingrediente
   */

  export type AggregateProduct_ingrediente = {
    _count: Product_ingredienteCountAggregateOutputType | null
    _min: Product_ingredienteMinAggregateOutputType | null
    _max: Product_ingredienteMaxAggregateOutputType | null
  }

  export type Product_ingredienteMinAggregateOutputType = {
    id: string | null
    qtd: boolean | null
    created_at: Date | null
    updated_at: Date | null
    product_id: string | null
    ingrediente_id: string | null
  }

  export type Product_ingredienteMaxAggregateOutputType = {
    id: string | null
    qtd: boolean | null
    created_at: Date | null
    updated_at: Date | null
    product_id: string | null
    ingrediente_id: string | null
  }

  export type Product_ingredienteCountAggregateOutputType = {
    id: number
    qtd: number
    created_at: number
    updated_at: number
    product_id: number
    ingrediente_id: number
    _all: number
  }


  export type Product_ingredienteMinAggregateInputType = {
    id?: true
    qtd?: true
    created_at?: true
    updated_at?: true
    product_id?: true
    ingrediente_id?: true
  }

  export type Product_ingredienteMaxAggregateInputType = {
    id?: true
    qtd?: true
    created_at?: true
    updated_at?: true
    product_id?: true
    ingrediente_id?: true
  }

  export type Product_ingredienteCountAggregateInputType = {
    id?: true
    qtd?: true
    created_at?: true
    updated_at?: true
    product_id?: true
    ingrediente_id?: true
    _all?: true
  }

  export type Product_ingredienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product_ingrediente to aggregate.
     */
    where?: Product_ingredienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Product_ingredientes to fetch.
     */
    orderBy?: Product_ingredienteOrderByWithRelationInput | Product_ingredienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Product_ingredienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Product_ingredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Product_ingredientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Product_ingredientes
    **/
    _count?: true | Product_ingredienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Product_ingredienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Product_ingredienteMaxAggregateInputType
  }

  export type GetProduct_ingredienteAggregateType<T extends Product_ingredienteAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct_ingrediente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct_ingrediente[P]>
      : GetScalarType<T[P], AggregateProduct_ingrediente[P]>
  }




  export type Product_ingredienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Product_ingredienteWhereInput
    orderBy?: Product_ingredienteOrderByWithAggregationInput | Product_ingredienteOrderByWithAggregationInput[]
    by: Product_ingredienteScalarFieldEnum[] | Product_ingredienteScalarFieldEnum
    having?: Product_ingredienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Product_ingredienteCountAggregateInputType | true
    _min?: Product_ingredienteMinAggregateInputType
    _max?: Product_ingredienteMaxAggregateInputType
  }

  export type Product_ingredienteGroupByOutputType = {
    id: string
    qtd: boolean
    created_at: Date | null
    updated_at: Date | null
    product_id: string
    ingrediente_id: string
    _count: Product_ingredienteCountAggregateOutputType | null
    _min: Product_ingredienteMinAggregateOutputType | null
    _max: Product_ingredienteMaxAggregateOutputType | null
  }

  type GetProduct_ingredienteGroupByPayload<T extends Product_ingredienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Product_ingredienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Product_ingredienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Product_ingredienteGroupByOutputType[P]>
            : GetScalarType<T[P], Product_ingredienteGroupByOutputType[P]>
        }
      >
    >


  export type Product_ingredienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qtd?: boolean
    created_at?: boolean
    updated_at?: boolean
    product_id?: boolean
    ingrediente_id?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_ingrediente"]>

  export type Product_ingredienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qtd?: boolean
    created_at?: boolean
    updated_at?: boolean
    product_id?: boolean
    ingrediente_id?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_ingrediente"]>

  export type Product_ingredienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qtd?: boolean
    created_at?: boolean
    updated_at?: boolean
    product_id?: boolean
    ingrediente_id?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_ingrediente"]>

  export type Product_ingredienteSelectScalar = {
    id?: boolean
    qtd?: boolean
    created_at?: boolean
    updated_at?: boolean
    product_id?: boolean
    ingrediente_id?: boolean
  }

  export type Product_ingredienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "qtd" | "created_at" | "updated_at" | "product_id" | "ingrediente_id", ExtArgs["result"]["product_ingrediente"]>
  export type Product_ingredienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }
  export type Product_ingredienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }
  export type Product_ingredienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }

  export type $Product_ingredientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product_ingrediente"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      ingrediente: Prisma.$IngredientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      qtd: boolean
      created_at: Date | null
      updated_at: Date | null
      product_id: string
      ingrediente_id: string
    }, ExtArgs["result"]["product_ingrediente"]>
    composites: {}
  }

  type Product_ingredienteGetPayload<S extends boolean | null | undefined | Product_ingredienteDefaultArgs> = $Result.GetResult<Prisma.$Product_ingredientePayload, S>

  type Product_ingredienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Product_ingredienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Product_ingredienteCountAggregateInputType | true
    }

  export interface Product_ingredienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product_ingrediente'], meta: { name: 'Product_ingrediente' } }
    /**
     * Find zero or one Product_ingrediente that matches the filter.
     * @param {Product_ingredienteFindUniqueArgs} args - Arguments to find a Product_ingrediente
     * @example
     * // Get one Product_ingrediente
     * const product_ingrediente = await prisma.product_ingrediente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Product_ingredienteFindUniqueArgs>(args: SelectSubset<T, Product_ingredienteFindUniqueArgs<ExtArgs>>): Prisma__Product_ingredienteClient<$Result.GetResult<Prisma.$Product_ingredientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product_ingrediente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Product_ingredienteFindUniqueOrThrowArgs} args - Arguments to find a Product_ingrediente
     * @example
     * // Get one Product_ingrediente
     * const product_ingrediente = await prisma.product_ingrediente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Product_ingredienteFindUniqueOrThrowArgs>(args: SelectSubset<T, Product_ingredienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Product_ingredienteClient<$Result.GetResult<Prisma.$Product_ingredientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_ingrediente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_ingredienteFindFirstArgs} args - Arguments to find a Product_ingrediente
     * @example
     * // Get one Product_ingrediente
     * const product_ingrediente = await prisma.product_ingrediente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Product_ingredienteFindFirstArgs>(args?: SelectSubset<T, Product_ingredienteFindFirstArgs<ExtArgs>>): Prisma__Product_ingredienteClient<$Result.GetResult<Prisma.$Product_ingredientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_ingrediente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_ingredienteFindFirstOrThrowArgs} args - Arguments to find a Product_ingrediente
     * @example
     * // Get one Product_ingrediente
     * const product_ingrediente = await prisma.product_ingrediente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Product_ingredienteFindFirstOrThrowArgs>(args?: SelectSubset<T, Product_ingredienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__Product_ingredienteClient<$Result.GetResult<Prisma.$Product_ingredientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Product_ingredientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_ingredienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Product_ingredientes
     * const product_ingredientes = await prisma.product_ingrediente.findMany()
     * 
     * // Get first 10 Product_ingredientes
     * const product_ingredientes = await prisma.product_ingrediente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const product_ingredienteWithIdOnly = await prisma.product_ingrediente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Product_ingredienteFindManyArgs>(args?: SelectSubset<T, Product_ingredienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Product_ingredientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product_ingrediente.
     * @param {Product_ingredienteCreateArgs} args - Arguments to create a Product_ingrediente.
     * @example
     * // Create one Product_ingrediente
     * const Product_ingrediente = await prisma.product_ingrediente.create({
     *   data: {
     *     // ... data to create a Product_ingrediente
     *   }
     * })
     * 
     */
    create<T extends Product_ingredienteCreateArgs>(args: SelectSubset<T, Product_ingredienteCreateArgs<ExtArgs>>): Prisma__Product_ingredienteClient<$Result.GetResult<Prisma.$Product_ingredientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Product_ingredientes.
     * @param {Product_ingredienteCreateManyArgs} args - Arguments to create many Product_ingredientes.
     * @example
     * // Create many Product_ingredientes
     * const product_ingrediente = await prisma.product_ingrediente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Product_ingredienteCreateManyArgs>(args?: SelectSubset<T, Product_ingredienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Product_ingredientes and returns the data saved in the database.
     * @param {Product_ingredienteCreateManyAndReturnArgs} args - Arguments to create many Product_ingredientes.
     * @example
     * // Create many Product_ingredientes
     * const product_ingrediente = await prisma.product_ingrediente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Product_ingredientes and only return the `id`
     * const product_ingredienteWithIdOnly = await prisma.product_ingrediente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Product_ingredienteCreateManyAndReturnArgs>(args?: SelectSubset<T, Product_ingredienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Product_ingredientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product_ingrediente.
     * @param {Product_ingredienteDeleteArgs} args - Arguments to delete one Product_ingrediente.
     * @example
     * // Delete one Product_ingrediente
     * const Product_ingrediente = await prisma.product_ingrediente.delete({
     *   where: {
     *     // ... filter to delete one Product_ingrediente
     *   }
     * })
     * 
     */
    delete<T extends Product_ingredienteDeleteArgs>(args: SelectSubset<T, Product_ingredienteDeleteArgs<ExtArgs>>): Prisma__Product_ingredienteClient<$Result.GetResult<Prisma.$Product_ingredientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product_ingrediente.
     * @param {Product_ingredienteUpdateArgs} args - Arguments to update one Product_ingrediente.
     * @example
     * // Update one Product_ingrediente
     * const product_ingrediente = await prisma.product_ingrediente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Product_ingredienteUpdateArgs>(args: SelectSubset<T, Product_ingredienteUpdateArgs<ExtArgs>>): Prisma__Product_ingredienteClient<$Result.GetResult<Prisma.$Product_ingredientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Product_ingredientes.
     * @param {Product_ingredienteDeleteManyArgs} args - Arguments to filter Product_ingredientes to delete.
     * @example
     * // Delete a few Product_ingredientes
     * const { count } = await prisma.product_ingrediente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Product_ingredienteDeleteManyArgs>(args?: SelectSubset<T, Product_ingredienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_ingredientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_ingredienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Product_ingredientes
     * const product_ingrediente = await prisma.product_ingrediente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Product_ingredienteUpdateManyArgs>(args: SelectSubset<T, Product_ingredienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_ingredientes and returns the data updated in the database.
     * @param {Product_ingredienteUpdateManyAndReturnArgs} args - Arguments to update many Product_ingredientes.
     * @example
     * // Update many Product_ingredientes
     * const product_ingrediente = await prisma.product_ingrediente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Product_ingredientes and only return the `id`
     * const product_ingredienteWithIdOnly = await prisma.product_ingrediente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Product_ingredienteUpdateManyAndReturnArgs>(args: SelectSubset<T, Product_ingredienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Product_ingredientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product_ingrediente.
     * @param {Product_ingredienteUpsertArgs} args - Arguments to update or create a Product_ingrediente.
     * @example
     * // Update or create a Product_ingrediente
     * const product_ingrediente = await prisma.product_ingrediente.upsert({
     *   create: {
     *     // ... data to create a Product_ingrediente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product_ingrediente we want to update
     *   }
     * })
     */
    upsert<T extends Product_ingredienteUpsertArgs>(args: SelectSubset<T, Product_ingredienteUpsertArgs<ExtArgs>>): Prisma__Product_ingredienteClient<$Result.GetResult<Prisma.$Product_ingredientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Product_ingredientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_ingredienteCountArgs} args - Arguments to filter Product_ingredientes to count.
     * @example
     * // Count the number of Product_ingredientes
     * const count = await prisma.product_ingrediente.count({
     *   where: {
     *     // ... the filter for the Product_ingredientes we want to count
     *   }
     * })
    **/
    count<T extends Product_ingredienteCountArgs>(
      args?: Subset<T, Product_ingredienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Product_ingredienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product_ingrediente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_ingredienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Product_ingredienteAggregateArgs>(args: Subset<T, Product_ingredienteAggregateArgs>): Prisma.PrismaPromise<GetProduct_ingredienteAggregateType<T>>

    /**
     * Group by Product_ingrediente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_ingredienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Product_ingredienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Product_ingredienteGroupByArgs['orderBy'] }
        : { orderBy?: Product_ingredienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Product_ingredienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_ingredienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product_ingrediente model
   */
  readonly fields: Product_ingredienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product_ingrediente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Product_ingredienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingrediente<T extends IngredienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngredienteDefaultArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product_ingrediente model
   */
  interface Product_ingredienteFieldRefs {
    readonly id: FieldRef<"Product_ingrediente", 'String'>
    readonly qtd: FieldRef<"Product_ingrediente", 'Boolean'>
    readonly created_at: FieldRef<"Product_ingrediente", 'DateTime'>
    readonly updated_at: FieldRef<"Product_ingrediente", 'DateTime'>
    readonly product_id: FieldRef<"Product_ingrediente", 'String'>
    readonly ingrediente_id: FieldRef<"Product_ingrediente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Product_ingrediente findUnique
   */
  export type Product_ingredienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product_ingrediente
     */
    select?: Product_ingredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product_ingrediente
     */
    omit?: Product_ingredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Product_ingredienteInclude<ExtArgs> | null
    /**
     * Filter, which Product_ingrediente to fetch.
     */
    where: Product_ingredienteWhereUniqueInput
  }

  /**
   * Product_ingrediente findUniqueOrThrow
   */
  export type Product_ingredienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product_ingrediente
     */
    select?: Product_ingredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product_ingrediente
     */
    omit?: Product_ingredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Product_ingredienteInclude<ExtArgs> | null
    /**
     * Filter, which Product_ingrediente to fetch.
     */
    where: Product_ingredienteWhereUniqueInput
  }

  /**
   * Product_ingrediente findFirst
   */
  export type Product_ingredienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product_ingrediente
     */
    select?: Product_ingredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product_ingrediente
     */
    omit?: Product_ingredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Product_ingredienteInclude<ExtArgs> | null
    /**
     * Filter, which Product_ingrediente to fetch.
     */
    where?: Product_ingredienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Product_ingredientes to fetch.
     */
    orderBy?: Product_ingredienteOrderByWithRelationInput | Product_ingredienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Product_ingredientes.
     */
    cursor?: Product_ingredienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Product_ingredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Product_ingredientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Product_ingredientes.
     */
    distinct?: Product_ingredienteScalarFieldEnum | Product_ingredienteScalarFieldEnum[]
  }

  /**
   * Product_ingrediente findFirstOrThrow
   */
  export type Product_ingredienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product_ingrediente
     */
    select?: Product_ingredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product_ingrediente
     */
    omit?: Product_ingredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Product_ingredienteInclude<ExtArgs> | null
    /**
     * Filter, which Product_ingrediente to fetch.
     */
    where?: Product_ingredienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Product_ingredientes to fetch.
     */
    orderBy?: Product_ingredienteOrderByWithRelationInput | Product_ingredienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Product_ingredientes.
     */
    cursor?: Product_ingredienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Product_ingredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Product_ingredientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Product_ingredientes.
     */
    distinct?: Product_ingredienteScalarFieldEnum | Product_ingredienteScalarFieldEnum[]
  }

  /**
   * Product_ingrediente findMany
   */
  export type Product_ingredienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product_ingrediente
     */
    select?: Product_ingredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product_ingrediente
     */
    omit?: Product_ingredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Product_ingredienteInclude<ExtArgs> | null
    /**
     * Filter, which Product_ingredientes to fetch.
     */
    where?: Product_ingredienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Product_ingredientes to fetch.
     */
    orderBy?: Product_ingredienteOrderByWithRelationInput | Product_ingredienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Product_ingredientes.
     */
    cursor?: Product_ingredienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Product_ingredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Product_ingredientes.
     */
    skip?: number
    distinct?: Product_ingredienteScalarFieldEnum | Product_ingredienteScalarFieldEnum[]
  }

  /**
   * Product_ingrediente create
   */
  export type Product_ingredienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product_ingrediente
     */
    select?: Product_ingredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product_ingrediente
     */
    omit?: Product_ingredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Product_ingredienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Product_ingrediente.
     */
    data: XOR<Product_ingredienteCreateInput, Product_ingredienteUncheckedCreateInput>
  }

  /**
   * Product_ingrediente createMany
   */
  export type Product_ingredienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Product_ingredientes.
     */
    data: Product_ingredienteCreateManyInput | Product_ingredienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product_ingrediente createManyAndReturn
   */
  export type Product_ingredienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product_ingrediente
     */
    select?: Product_ingredienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product_ingrediente
     */
    omit?: Product_ingredienteOmit<ExtArgs> | null
    /**
     * The data used to create many Product_ingredientes.
     */
    data: Product_ingredienteCreateManyInput | Product_ingredienteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Product_ingredienteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product_ingrediente update
   */
  export type Product_ingredienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product_ingrediente
     */
    select?: Product_ingredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product_ingrediente
     */
    omit?: Product_ingredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Product_ingredienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Product_ingrediente.
     */
    data: XOR<Product_ingredienteUpdateInput, Product_ingredienteUncheckedUpdateInput>
    /**
     * Choose, which Product_ingrediente to update.
     */
    where: Product_ingredienteWhereUniqueInput
  }

  /**
   * Product_ingrediente updateMany
   */
  export type Product_ingredienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Product_ingredientes.
     */
    data: XOR<Product_ingredienteUpdateManyMutationInput, Product_ingredienteUncheckedUpdateManyInput>
    /**
     * Filter which Product_ingredientes to update
     */
    where?: Product_ingredienteWhereInput
    /**
     * Limit how many Product_ingredientes to update.
     */
    limit?: number
  }

  /**
   * Product_ingrediente updateManyAndReturn
   */
  export type Product_ingredienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product_ingrediente
     */
    select?: Product_ingredienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product_ingrediente
     */
    omit?: Product_ingredienteOmit<ExtArgs> | null
    /**
     * The data used to update Product_ingredientes.
     */
    data: XOR<Product_ingredienteUpdateManyMutationInput, Product_ingredienteUncheckedUpdateManyInput>
    /**
     * Filter which Product_ingredientes to update
     */
    where?: Product_ingredienteWhereInput
    /**
     * Limit how many Product_ingredientes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Product_ingredienteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product_ingrediente upsert
   */
  export type Product_ingredienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product_ingrediente
     */
    select?: Product_ingredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product_ingrediente
     */
    omit?: Product_ingredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Product_ingredienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Product_ingrediente to update in case it exists.
     */
    where: Product_ingredienteWhereUniqueInput
    /**
     * In case the Product_ingrediente found by the `where` argument doesn't exist, create a new Product_ingrediente with this data.
     */
    create: XOR<Product_ingredienteCreateInput, Product_ingredienteUncheckedCreateInput>
    /**
     * In case the Product_ingrediente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Product_ingredienteUpdateInput, Product_ingredienteUncheckedUpdateInput>
  }

  /**
   * Product_ingrediente delete
   */
  export type Product_ingredienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product_ingrediente
     */
    select?: Product_ingredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product_ingrediente
     */
    omit?: Product_ingredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Product_ingredienteInclude<ExtArgs> | null
    /**
     * Filter which Product_ingrediente to delete.
     */
    where: Product_ingredienteWhereUniqueInput
  }

  /**
   * Product_ingrediente deleteMany
   */
  export type Product_ingredienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product_ingredientes to delete
     */
    where?: Product_ingredienteWhereInput
    /**
     * Limit how many Product_ingredientes to delete.
     */
    limit?: number
  }

  /**
   * Product_ingrediente without action
   */
  export type Product_ingredienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product_ingrediente
     */
    select?: Product_ingredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product_ingrediente
     */
    omit?: Product_ingredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Product_ingredienteInclude<ExtArgs> | null
  }


  /**
   * Model Adicional
   */

  export type AggregateAdicional = {
    _count: AdicionalCountAggregateOutputType | null
    _avg: AdicionalAvgAggregateOutputType | null
    _sum: AdicionalSumAggregateOutputType | null
    _min: AdicionalMinAggregateOutputType | null
    _max: AdicionalMaxAggregateOutputType | null
  }

  export type AdicionalAvgAggregateOutputType = {
    price: number | null
    points: number | null
  }

  export type AdicionalSumAggregateOutputType = {
    price: number | null
    points: number | null
  }

  export type AdicionalMinAggregateOutputType = {
    id: string | null
    nome: string | null
    price: number | null
    points: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AdicionalMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    price: number | null
    points: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AdicionalCountAggregateOutputType = {
    id: number
    nome: number
    price: number
    points: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AdicionalAvgAggregateInputType = {
    price?: true
    points?: true
  }

  export type AdicionalSumAggregateInputType = {
    price?: true
    points?: true
  }

  export type AdicionalMinAggregateInputType = {
    id?: true
    nome?: true
    price?: true
    points?: true
    created_at?: true
    updated_at?: true
  }

  export type AdicionalMaxAggregateInputType = {
    id?: true
    nome?: true
    price?: true
    points?: true
    created_at?: true
    updated_at?: true
  }

  export type AdicionalCountAggregateInputType = {
    id?: true
    nome?: true
    price?: true
    points?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AdicionalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adicional to aggregate.
     */
    where?: AdicionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adicionals to fetch.
     */
    orderBy?: AdicionalOrderByWithRelationInput | AdicionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdicionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adicionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adicionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Adicionals
    **/
    _count?: true | AdicionalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdicionalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdicionalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdicionalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdicionalMaxAggregateInputType
  }

  export type GetAdicionalAggregateType<T extends AdicionalAggregateArgs> = {
        [P in keyof T & keyof AggregateAdicional]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdicional[P]>
      : GetScalarType<T[P], AggregateAdicional[P]>
  }




  export type AdicionalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdicionalWhereInput
    orderBy?: AdicionalOrderByWithAggregationInput | AdicionalOrderByWithAggregationInput[]
    by: AdicionalScalarFieldEnum[] | AdicionalScalarFieldEnum
    having?: AdicionalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdicionalCountAggregateInputType | true
    _avg?: AdicionalAvgAggregateInputType
    _sum?: AdicionalSumAggregateInputType
    _min?: AdicionalMinAggregateInputType
    _max?: AdicionalMaxAggregateInputType
  }

  export type AdicionalGroupByOutputType = {
    id: string
    nome: string
    price: number
    points: number
    created_at: Date | null
    updated_at: Date | null
    _count: AdicionalCountAggregateOutputType | null
    _avg: AdicionalAvgAggregateOutputType | null
    _sum: AdicionalSumAggregateOutputType | null
    _min: AdicionalMinAggregateOutputType | null
    _max: AdicionalMaxAggregateOutputType | null
  }

  type GetAdicionalGroupByPayload<T extends AdicionalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdicionalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdicionalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdicionalGroupByOutputType[P]>
            : GetScalarType<T[P], AdicionalGroupByOutputType[P]>
        }
      >
    >


  export type AdicionalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    price?: boolean
    points?: boolean
    created_at?: boolean
    updated_at?: boolean
    Item_adicional?: boolean | Adicional$Item_adicionalArgs<ExtArgs>
    _count?: boolean | AdicionalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adicional"]>

  export type AdicionalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    price?: boolean
    points?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["adicional"]>

  export type AdicionalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    price?: boolean
    points?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["adicional"]>

  export type AdicionalSelectScalar = {
    id?: boolean
    nome?: boolean
    price?: boolean
    points?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AdicionalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "price" | "points" | "created_at" | "updated_at", ExtArgs["result"]["adicional"]>
  export type AdicionalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Item_adicional?: boolean | Adicional$Item_adicionalArgs<ExtArgs>
    _count?: boolean | AdicionalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdicionalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AdicionalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdicionalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Adicional"
    objects: {
      Item_adicional: Prisma.$Item_adicionalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      price: number
      points: number
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["adicional"]>
    composites: {}
  }

  type AdicionalGetPayload<S extends boolean | null | undefined | AdicionalDefaultArgs> = $Result.GetResult<Prisma.$AdicionalPayload, S>

  type AdicionalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdicionalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdicionalCountAggregateInputType | true
    }

  export interface AdicionalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Adicional'], meta: { name: 'Adicional' } }
    /**
     * Find zero or one Adicional that matches the filter.
     * @param {AdicionalFindUniqueArgs} args - Arguments to find a Adicional
     * @example
     * // Get one Adicional
     * const adicional = await prisma.adicional.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdicionalFindUniqueArgs>(args: SelectSubset<T, AdicionalFindUniqueArgs<ExtArgs>>): Prisma__AdicionalClient<$Result.GetResult<Prisma.$AdicionalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Adicional that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdicionalFindUniqueOrThrowArgs} args - Arguments to find a Adicional
     * @example
     * // Get one Adicional
     * const adicional = await prisma.adicional.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdicionalFindUniqueOrThrowArgs>(args: SelectSubset<T, AdicionalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdicionalClient<$Result.GetResult<Prisma.$AdicionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adicional that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdicionalFindFirstArgs} args - Arguments to find a Adicional
     * @example
     * // Get one Adicional
     * const adicional = await prisma.adicional.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdicionalFindFirstArgs>(args?: SelectSubset<T, AdicionalFindFirstArgs<ExtArgs>>): Prisma__AdicionalClient<$Result.GetResult<Prisma.$AdicionalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adicional that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdicionalFindFirstOrThrowArgs} args - Arguments to find a Adicional
     * @example
     * // Get one Adicional
     * const adicional = await prisma.adicional.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdicionalFindFirstOrThrowArgs>(args?: SelectSubset<T, AdicionalFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdicionalClient<$Result.GetResult<Prisma.$AdicionalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Adicionals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdicionalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Adicionals
     * const adicionals = await prisma.adicional.findMany()
     * 
     * // Get first 10 Adicionals
     * const adicionals = await prisma.adicional.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adicionalWithIdOnly = await prisma.adicional.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdicionalFindManyArgs>(args?: SelectSubset<T, AdicionalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdicionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Adicional.
     * @param {AdicionalCreateArgs} args - Arguments to create a Adicional.
     * @example
     * // Create one Adicional
     * const Adicional = await prisma.adicional.create({
     *   data: {
     *     // ... data to create a Adicional
     *   }
     * })
     * 
     */
    create<T extends AdicionalCreateArgs>(args: SelectSubset<T, AdicionalCreateArgs<ExtArgs>>): Prisma__AdicionalClient<$Result.GetResult<Prisma.$AdicionalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Adicionals.
     * @param {AdicionalCreateManyArgs} args - Arguments to create many Adicionals.
     * @example
     * // Create many Adicionals
     * const adicional = await prisma.adicional.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdicionalCreateManyArgs>(args?: SelectSubset<T, AdicionalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Adicionals and returns the data saved in the database.
     * @param {AdicionalCreateManyAndReturnArgs} args - Arguments to create many Adicionals.
     * @example
     * // Create many Adicionals
     * const adicional = await prisma.adicional.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Adicionals and only return the `id`
     * const adicionalWithIdOnly = await prisma.adicional.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdicionalCreateManyAndReturnArgs>(args?: SelectSubset<T, AdicionalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdicionalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Adicional.
     * @param {AdicionalDeleteArgs} args - Arguments to delete one Adicional.
     * @example
     * // Delete one Adicional
     * const Adicional = await prisma.adicional.delete({
     *   where: {
     *     // ... filter to delete one Adicional
     *   }
     * })
     * 
     */
    delete<T extends AdicionalDeleteArgs>(args: SelectSubset<T, AdicionalDeleteArgs<ExtArgs>>): Prisma__AdicionalClient<$Result.GetResult<Prisma.$AdicionalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Adicional.
     * @param {AdicionalUpdateArgs} args - Arguments to update one Adicional.
     * @example
     * // Update one Adicional
     * const adicional = await prisma.adicional.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdicionalUpdateArgs>(args: SelectSubset<T, AdicionalUpdateArgs<ExtArgs>>): Prisma__AdicionalClient<$Result.GetResult<Prisma.$AdicionalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Adicionals.
     * @param {AdicionalDeleteManyArgs} args - Arguments to filter Adicionals to delete.
     * @example
     * // Delete a few Adicionals
     * const { count } = await prisma.adicional.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdicionalDeleteManyArgs>(args?: SelectSubset<T, AdicionalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adicionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdicionalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Adicionals
     * const adicional = await prisma.adicional.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdicionalUpdateManyArgs>(args: SelectSubset<T, AdicionalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adicionals and returns the data updated in the database.
     * @param {AdicionalUpdateManyAndReturnArgs} args - Arguments to update many Adicionals.
     * @example
     * // Update many Adicionals
     * const adicional = await prisma.adicional.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Adicionals and only return the `id`
     * const adicionalWithIdOnly = await prisma.adicional.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdicionalUpdateManyAndReturnArgs>(args: SelectSubset<T, AdicionalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdicionalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Adicional.
     * @param {AdicionalUpsertArgs} args - Arguments to update or create a Adicional.
     * @example
     * // Update or create a Adicional
     * const adicional = await prisma.adicional.upsert({
     *   create: {
     *     // ... data to create a Adicional
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Adicional we want to update
     *   }
     * })
     */
    upsert<T extends AdicionalUpsertArgs>(args: SelectSubset<T, AdicionalUpsertArgs<ExtArgs>>): Prisma__AdicionalClient<$Result.GetResult<Prisma.$AdicionalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Adicionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdicionalCountArgs} args - Arguments to filter Adicionals to count.
     * @example
     * // Count the number of Adicionals
     * const count = await prisma.adicional.count({
     *   where: {
     *     // ... the filter for the Adicionals we want to count
     *   }
     * })
    **/
    count<T extends AdicionalCountArgs>(
      args?: Subset<T, AdicionalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdicionalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Adicional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdicionalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdicionalAggregateArgs>(args: Subset<T, AdicionalAggregateArgs>): Prisma.PrismaPromise<GetAdicionalAggregateType<T>>

    /**
     * Group by Adicional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdicionalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdicionalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdicionalGroupByArgs['orderBy'] }
        : { orderBy?: AdicionalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdicionalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdicionalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Adicional model
   */
  readonly fields: AdicionalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Adicional.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdicionalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Item_adicional<T extends Adicional$Item_adicionalArgs<ExtArgs> = {}>(args?: Subset<T, Adicional$Item_adicionalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Item_adicionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Adicional model
   */
  interface AdicionalFieldRefs {
    readonly id: FieldRef<"Adicional", 'String'>
    readonly nome: FieldRef<"Adicional", 'String'>
    readonly price: FieldRef<"Adicional", 'Float'>
    readonly points: FieldRef<"Adicional", 'Float'>
    readonly created_at: FieldRef<"Adicional", 'DateTime'>
    readonly updated_at: FieldRef<"Adicional", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Adicional findUnique
   */
  export type AdicionalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adicional
     */
    select?: AdicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adicional
     */
    omit?: AdicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdicionalInclude<ExtArgs> | null
    /**
     * Filter, which Adicional to fetch.
     */
    where: AdicionalWhereUniqueInput
  }

  /**
   * Adicional findUniqueOrThrow
   */
  export type AdicionalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adicional
     */
    select?: AdicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adicional
     */
    omit?: AdicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdicionalInclude<ExtArgs> | null
    /**
     * Filter, which Adicional to fetch.
     */
    where: AdicionalWhereUniqueInput
  }

  /**
   * Adicional findFirst
   */
  export type AdicionalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adicional
     */
    select?: AdicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adicional
     */
    omit?: AdicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdicionalInclude<ExtArgs> | null
    /**
     * Filter, which Adicional to fetch.
     */
    where?: AdicionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adicionals to fetch.
     */
    orderBy?: AdicionalOrderByWithRelationInput | AdicionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adicionals.
     */
    cursor?: AdicionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adicionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adicionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adicionals.
     */
    distinct?: AdicionalScalarFieldEnum | AdicionalScalarFieldEnum[]
  }

  /**
   * Adicional findFirstOrThrow
   */
  export type AdicionalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adicional
     */
    select?: AdicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adicional
     */
    omit?: AdicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdicionalInclude<ExtArgs> | null
    /**
     * Filter, which Adicional to fetch.
     */
    where?: AdicionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adicionals to fetch.
     */
    orderBy?: AdicionalOrderByWithRelationInput | AdicionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adicionals.
     */
    cursor?: AdicionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adicionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adicionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adicionals.
     */
    distinct?: AdicionalScalarFieldEnum | AdicionalScalarFieldEnum[]
  }

  /**
   * Adicional findMany
   */
  export type AdicionalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adicional
     */
    select?: AdicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adicional
     */
    omit?: AdicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdicionalInclude<ExtArgs> | null
    /**
     * Filter, which Adicionals to fetch.
     */
    where?: AdicionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adicionals to fetch.
     */
    orderBy?: AdicionalOrderByWithRelationInput | AdicionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Adicionals.
     */
    cursor?: AdicionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adicionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adicionals.
     */
    skip?: number
    distinct?: AdicionalScalarFieldEnum | AdicionalScalarFieldEnum[]
  }

  /**
   * Adicional create
   */
  export type AdicionalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adicional
     */
    select?: AdicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adicional
     */
    omit?: AdicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdicionalInclude<ExtArgs> | null
    /**
     * The data needed to create a Adicional.
     */
    data: XOR<AdicionalCreateInput, AdicionalUncheckedCreateInput>
  }

  /**
   * Adicional createMany
   */
  export type AdicionalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Adicionals.
     */
    data: AdicionalCreateManyInput | AdicionalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Adicional createManyAndReturn
   */
  export type AdicionalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adicional
     */
    select?: AdicionalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Adicional
     */
    omit?: AdicionalOmit<ExtArgs> | null
    /**
     * The data used to create many Adicionals.
     */
    data: AdicionalCreateManyInput | AdicionalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Adicional update
   */
  export type AdicionalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adicional
     */
    select?: AdicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adicional
     */
    omit?: AdicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdicionalInclude<ExtArgs> | null
    /**
     * The data needed to update a Adicional.
     */
    data: XOR<AdicionalUpdateInput, AdicionalUncheckedUpdateInput>
    /**
     * Choose, which Adicional to update.
     */
    where: AdicionalWhereUniqueInput
  }

  /**
   * Adicional updateMany
   */
  export type AdicionalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Adicionals.
     */
    data: XOR<AdicionalUpdateManyMutationInput, AdicionalUncheckedUpdateManyInput>
    /**
     * Filter which Adicionals to update
     */
    where?: AdicionalWhereInput
    /**
     * Limit how many Adicionals to update.
     */
    limit?: number
  }

  /**
   * Adicional updateManyAndReturn
   */
  export type AdicionalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adicional
     */
    select?: AdicionalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Adicional
     */
    omit?: AdicionalOmit<ExtArgs> | null
    /**
     * The data used to update Adicionals.
     */
    data: XOR<AdicionalUpdateManyMutationInput, AdicionalUncheckedUpdateManyInput>
    /**
     * Filter which Adicionals to update
     */
    where?: AdicionalWhereInput
    /**
     * Limit how many Adicionals to update.
     */
    limit?: number
  }

  /**
   * Adicional upsert
   */
  export type AdicionalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adicional
     */
    select?: AdicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adicional
     */
    omit?: AdicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdicionalInclude<ExtArgs> | null
    /**
     * The filter to search for the Adicional to update in case it exists.
     */
    where: AdicionalWhereUniqueInput
    /**
     * In case the Adicional found by the `where` argument doesn't exist, create a new Adicional with this data.
     */
    create: XOR<AdicionalCreateInput, AdicionalUncheckedCreateInput>
    /**
     * In case the Adicional was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdicionalUpdateInput, AdicionalUncheckedUpdateInput>
  }

  /**
   * Adicional delete
   */
  export type AdicionalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adicional
     */
    select?: AdicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adicional
     */
    omit?: AdicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdicionalInclude<ExtArgs> | null
    /**
     * Filter which Adicional to delete.
     */
    where: AdicionalWhereUniqueInput
  }

  /**
   * Adicional deleteMany
   */
  export type AdicionalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adicionals to delete
     */
    where?: AdicionalWhereInput
    /**
     * Limit how many Adicionals to delete.
     */
    limit?: number
  }

  /**
   * Adicional.Item_adicional
   */
  export type Adicional$Item_adicionalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_adicional
     */
    select?: Item_adicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item_adicional
     */
    omit?: Item_adicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_adicionalInclude<ExtArgs> | null
    where?: Item_adicionalWhereInput
    orderBy?: Item_adicionalOrderByWithRelationInput | Item_adicionalOrderByWithRelationInput[]
    cursor?: Item_adicionalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Item_adicionalScalarFieldEnum | Item_adicionalScalarFieldEnum[]
  }

  /**
   * Adicional without action
   */
  export type AdicionalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adicional
     */
    select?: AdicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adicional
     */
    omit?: AdicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdicionalInclude<ExtArgs> | null
  }


  /**
   * Model Item_adicional
   */

  export type AggregateItem_adicional = {
    _count: Item_adicionalCountAggregateOutputType | null
    _avg: Item_adicionalAvgAggregateOutputType | null
    _sum: Item_adicionalSumAggregateOutputType | null
    _min: Item_adicionalMinAggregateOutputType | null
    _max: Item_adicionalMaxAggregateOutputType | null
  }

  export type Item_adicionalAvgAggregateOutputType = {
    qtd: number | null
  }

  export type Item_adicionalSumAggregateOutputType = {
    qtd: number | null
  }

  export type Item_adicionalMinAggregateOutputType = {
    id: string | null
    qtd: number | null
    item_id: string | null
    adicional_id: string | null
  }

  export type Item_adicionalMaxAggregateOutputType = {
    id: string | null
    qtd: number | null
    item_id: string | null
    adicional_id: string | null
  }

  export type Item_adicionalCountAggregateOutputType = {
    id: number
    qtd: number
    item_id: number
    adicional_id: number
    _all: number
  }


  export type Item_adicionalAvgAggregateInputType = {
    qtd?: true
  }

  export type Item_adicionalSumAggregateInputType = {
    qtd?: true
  }

  export type Item_adicionalMinAggregateInputType = {
    id?: true
    qtd?: true
    item_id?: true
    adicional_id?: true
  }

  export type Item_adicionalMaxAggregateInputType = {
    id?: true
    qtd?: true
    item_id?: true
    adicional_id?: true
  }

  export type Item_adicionalCountAggregateInputType = {
    id?: true
    qtd?: true
    item_id?: true
    adicional_id?: true
    _all?: true
  }

  export type Item_adicionalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item_adicional to aggregate.
     */
    where?: Item_adicionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Item_adicionals to fetch.
     */
    orderBy?: Item_adicionalOrderByWithRelationInput | Item_adicionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Item_adicionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Item_adicionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Item_adicionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Item_adicionals
    **/
    _count?: true | Item_adicionalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Item_adicionalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Item_adicionalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Item_adicionalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Item_adicionalMaxAggregateInputType
  }

  export type GetItem_adicionalAggregateType<T extends Item_adicionalAggregateArgs> = {
        [P in keyof T & keyof AggregateItem_adicional]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem_adicional[P]>
      : GetScalarType<T[P], AggregateItem_adicional[P]>
  }




  export type Item_adicionalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Item_adicionalWhereInput
    orderBy?: Item_adicionalOrderByWithAggregationInput | Item_adicionalOrderByWithAggregationInput[]
    by: Item_adicionalScalarFieldEnum[] | Item_adicionalScalarFieldEnum
    having?: Item_adicionalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Item_adicionalCountAggregateInputType | true
    _avg?: Item_adicionalAvgAggregateInputType
    _sum?: Item_adicionalSumAggregateInputType
    _min?: Item_adicionalMinAggregateInputType
    _max?: Item_adicionalMaxAggregateInputType
  }

  export type Item_adicionalGroupByOutputType = {
    id: string
    qtd: number
    item_id: string
    adicional_id: string
    _count: Item_adicionalCountAggregateOutputType | null
    _avg: Item_adicionalAvgAggregateOutputType | null
    _sum: Item_adicionalSumAggregateOutputType | null
    _min: Item_adicionalMinAggregateOutputType | null
    _max: Item_adicionalMaxAggregateOutputType | null
  }

  type GetItem_adicionalGroupByPayload<T extends Item_adicionalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Item_adicionalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Item_adicionalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Item_adicionalGroupByOutputType[P]>
            : GetScalarType<T[P], Item_adicionalGroupByOutputType[P]>
        }
      >
    >


  export type Item_adicionalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qtd?: boolean
    item_id?: boolean
    adicional_id?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    adicional?: boolean | AdicionalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item_adicional"]>

  export type Item_adicionalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qtd?: boolean
    item_id?: boolean
    adicional_id?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    adicional?: boolean | AdicionalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item_adicional"]>

  export type Item_adicionalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qtd?: boolean
    item_id?: boolean
    adicional_id?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    adicional?: boolean | AdicionalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item_adicional"]>

  export type Item_adicionalSelectScalar = {
    id?: boolean
    qtd?: boolean
    item_id?: boolean
    adicional_id?: boolean
  }

  export type Item_adicionalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "qtd" | "item_id" | "adicional_id", ExtArgs["result"]["item_adicional"]>
  export type Item_adicionalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    adicional?: boolean | AdicionalDefaultArgs<ExtArgs>
  }
  export type Item_adicionalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    adicional?: boolean | AdicionalDefaultArgs<ExtArgs>
  }
  export type Item_adicionalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    adicional?: boolean | AdicionalDefaultArgs<ExtArgs>
  }

  export type $Item_adicionalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item_adicional"
    objects: {
      item: Prisma.$ItemPayload<ExtArgs>
      adicional: Prisma.$AdicionalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      qtd: number
      item_id: string
      adicional_id: string
    }, ExtArgs["result"]["item_adicional"]>
    composites: {}
  }

  type Item_adicionalGetPayload<S extends boolean | null | undefined | Item_adicionalDefaultArgs> = $Result.GetResult<Prisma.$Item_adicionalPayload, S>

  type Item_adicionalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Item_adicionalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Item_adicionalCountAggregateInputType | true
    }

  export interface Item_adicionalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item_adicional'], meta: { name: 'Item_adicional' } }
    /**
     * Find zero or one Item_adicional that matches the filter.
     * @param {Item_adicionalFindUniqueArgs} args - Arguments to find a Item_adicional
     * @example
     * // Get one Item_adicional
     * const item_adicional = await prisma.item_adicional.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Item_adicionalFindUniqueArgs>(args: SelectSubset<T, Item_adicionalFindUniqueArgs<ExtArgs>>): Prisma__Item_adicionalClient<$Result.GetResult<Prisma.$Item_adicionalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item_adicional that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Item_adicionalFindUniqueOrThrowArgs} args - Arguments to find a Item_adicional
     * @example
     * // Get one Item_adicional
     * const item_adicional = await prisma.item_adicional.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Item_adicionalFindUniqueOrThrowArgs>(args: SelectSubset<T, Item_adicionalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Item_adicionalClient<$Result.GetResult<Prisma.$Item_adicionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item_adicional that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Item_adicionalFindFirstArgs} args - Arguments to find a Item_adicional
     * @example
     * // Get one Item_adicional
     * const item_adicional = await prisma.item_adicional.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Item_adicionalFindFirstArgs>(args?: SelectSubset<T, Item_adicionalFindFirstArgs<ExtArgs>>): Prisma__Item_adicionalClient<$Result.GetResult<Prisma.$Item_adicionalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item_adicional that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Item_adicionalFindFirstOrThrowArgs} args - Arguments to find a Item_adicional
     * @example
     * // Get one Item_adicional
     * const item_adicional = await prisma.item_adicional.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Item_adicionalFindFirstOrThrowArgs>(args?: SelectSubset<T, Item_adicionalFindFirstOrThrowArgs<ExtArgs>>): Prisma__Item_adicionalClient<$Result.GetResult<Prisma.$Item_adicionalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Item_adicionals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Item_adicionalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Item_adicionals
     * const item_adicionals = await prisma.item_adicional.findMany()
     * 
     * // Get first 10 Item_adicionals
     * const item_adicionals = await prisma.item_adicional.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const item_adicionalWithIdOnly = await prisma.item_adicional.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Item_adicionalFindManyArgs>(args?: SelectSubset<T, Item_adicionalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Item_adicionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item_adicional.
     * @param {Item_adicionalCreateArgs} args - Arguments to create a Item_adicional.
     * @example
     * // Create one Item_adicional
     * const Item_adicional = await prisma.item_adicional.create({
     *   data: {
     *     // ... data to create a Item_adicional
     *   }
     * })
     * 
     */
    create<T extends Item_adicionalCreateArgs>(args: SelectSubset<T, Item_adicionalCreateArgs<ExtArgs>>): Prisma__Item_adicionalClient<$Result.GetResult<Prisma.$Item_adicionalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Item_adicionals.
     * @param {Item_adicionalCreateManyArgs} args - Arguments to create many Item_adicionals.
     * @example
     * // Create many Item_adicionals
     * const item_adicional = await prisma.item_adicional.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Item_adicionalCreateManyArgs>(args?: SelectSubset<T, Item_adicionalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Item_adicionals and returns the data saved in the database.
     * @param {Item_adicionalCreateManyAndReturnArgs} args - Arguments to create many Item_adicionals.
     * @example
     * // Create many Item_adicionals
     * const item_adicional = await prisma.item_adicional.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Item_adicionals and only return the `id`
     * const item_adicionalWithIdOnly = await prisma.item_adicional.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Item_adicionalCreateManyAndReturnArgs>(args?: SelectSubset<T, Item_adicionalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Item_adicionalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item_adicional.
     * @param {Item_adicionalDeleteArgs} args - Arguments to delete one Item_adicional.
     * @example
     * // Delete one Item_adicional
     * const Item_adicional = await prisma.item_adicional.delete({
     *   where: {
     *     // ... filter to delete one Item_adicional
     *   }
     * })
     * 
     */
    delete<T extends Item_adicionalDeleteArgs>(args: SelectSubset<T, Item_adicionalDeleteArgs<ExtArgs>>): Prisma__Item_adicionalClient<$Result.GetResult<Prisma.$Item_adicionalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item_adicional.
     * @param {Item_adicionalUpdateArgs} args - Arguments to update one Item_adicional.
     * @example
     * // Update one Item_adicional
     * const item_adicional = await prisma.item_adicional.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Item_adicionalUpdateArgs>(args: SelectSubset<T, Item_adicionalUpdateArgs<ExtArgs>>): Prisma__Item_adicionalClient<$Result.GetResult<Prisma.$Item_adicionalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Item_adicionals.
     * @param {Item_adicionalDeleteManyArgs} args - Arguments to filter Item_adicionals to delete.
     * @example
     * // Delete a few Item_adicionals
     * const { count } = await prisma.item_adicional.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Item_adicionalDeleteManyArgs>(args?: SelectSubset<T, Item_adicionalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Item_adicionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Item_adicionalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Item_adicionals
     * const item_adicional = await prisma.item_adicional.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Item_adicionalUpdateManyArgs>(args: SelectSubset<T, Item_adicionalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Item_adicionals and returns the data updated in the database.
     * @param {Item_adicionalUpdateManyAndReturnArgs} args - Arguments to update many Item_adicionals.
     * @example
     * // Update many Item_adicionals
     * const item_adicional = await prisma.item_adicional.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Item_adicionals and only return the `id`
     * const item_adicionalWithIdOnly = await prisma.item_adicional.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Item_adicionalUpdateManyAndReturnArgs>(args: SelectSubset<T, Item_adicionalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Item_adicionalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item_adicional.
     * @param {Item_adicionalUpsertArgs} args - Arguments to update or create a Item_adicional.
     * @example
     * // Update or create a Item_adicional
     * const item_adicional = await prisma.item_adicional.upsert({
     *   create: {
     *     // ... data to create a Item_adicional
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item_adicional we want to update
     *   }
     * })
     */
    upsert<T extends Item_adicionalUpsertArgs>(args: SelectSubset<T, Item_adicionalUpsertArgs<ExtArgs>>): Prisma__Item_adicionalClient<$Result.GetResult<Prisma.$Item_adicionalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Item_adicionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Item_adicionalCountArgs} args - Arguments to filter Item_adicionals to count.
     * @example
     * // Count the number of Item_adicionals
     * const count = await prisma.item_adicional.count({
     *   where: {
     *     // ... the filter for the Item_adicionals we want to count
     *   }
     * })
    **/
    count<T extends Item_adicionalCountArgs>(
      args?: Subset<T, Item_adicionalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Item_adicionalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item_adicional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Item_adicionalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Item_adicionalAggregateArgs>(args: Subset<T, Item_adicionalAggregateArgs>): Prisma.PrismaPromise<GetItem_adicionalAggregateType<T>>

    /**
     * Group by Item_adicional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Item_adicionalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Item_adicionalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Item_adicionalGroupByArgs['orderBy'] }
        : { orderBy?: Item_adicionalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Item_adicionalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItem_adicionalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item_adicional model
   */
  readonly fields: Item_adicionalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item_adicional.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Item_adicionalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    adicional<T extends AdicionalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdicionalDefaultArgs<ExtArgs>>): Prisma__AdicionalClient<$Result.GetResult<Prisma.$AdicionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Item_adicional model
   */
  interface Item_adicionalFieldRefs {
    readonly id: FieldRef<"Item_adicional", 'String'>
    readonly qtd: FieldRef<"Item_adicional", 'Int'>
    readonly item_id: FieldRef<"Item_adicional", 'String'>
    readonly adicional_id: FieldRef<"Item_adicional", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Item_adicional findUnique
   */
  export type Item_adicionalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_adicional
     */
    select?: Item_adicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item_adicional
     */
    omit?: Item_adicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_adicionalInclude<ExtArgs> | null
    /**
     * Filter, which Item_adicional to fetch.
     */
    where: Item_adicionalWhereUniqueInput
  }

  /**
   * Item_adicional findUniqueOrThrow
   */
  export type Item_adicionalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_adicional
     */
    select?: Item_adicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item_adicional
     */
    omit?: Item_adicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_adicionalInclude<ExtArgs> | null
    /**
     * Filter, which Item_adicional to fetch.
     */
    where: Item_adicionalWhereUniqueInput
  }

  /**
   * Item_adicional findFirst
   */
  export type Item_adicionalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_adicional
     */
    select?: Item_adicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item_adicional
     */
    omit?: Item_adicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_adicionalInclude<ExtArgs> | null
    /**
     * Filter, which Item_adicional to fetch.
     */
    where?: Item_adicionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Item_adicionals to fetch.
     */
    orderBy?: Item_adicionalOrderByWithRelationInput | Item_adicionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Item_adicionals.
     */
    cursor?: Item_adicionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Item_adicionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Item_adicionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Item_adicionals.
     */
    distinct?: Item_adicionalScalarFieldEnum | Item_adicionalScalarFieldEnum[]
  }

  /**
   * Item_adicional findFirstOrThrow
   */
  export type Item_adicionalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_adicional
     */
    select?: Item_adicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item_adicional
     */
    omit?: Item_adicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_adicionalInclude<ExtArgs> | null
    /**
     * Filter, which Item_adicional to fetch.
     */
    where?: Item_adicionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Item_adicionals to fetch.
     */
    orderBy?: Item_adicionalOrderByWithRelationInput | Item_adicionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Item_adicionals.
     */
    cursor?: Item_adicionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Item_adicionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Item_adicionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Item_adicionals.
     */
    distinct?: Item_adicionalScalarFieldEnum | Item_adicionalScalarFieldEnum[]
  }

  /**
   * Item_adicional findMany
   */
  export type Item_adicionalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_adicional
     */
    select?: Item_adicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item_adicional
     */
    omit?: Item_adicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_adicionalInclude<ExtArgs> | null
    /**
     * Filter, which Item_adicionals to fetch.
     */
    where?: Item_adicionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Item_adicionals to fetch.
     */
    orderBy?: Item_adicionalOrderByWithRelationInput | Item_adicionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Item_adicionals.
     */
    cursor?: Item_adicionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Item_adicionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Item_adicionals.
     */
    skip?: number
    distinct?: Item_adicionalScalarFieldEnum | Item_adicionalScalarFieldEnum[]
  }

  /**
   * Item_adicional create
   */
  export type Item_adicionalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_adicional
     */
    select?: Item_adicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item_adicional
     */
    omit?: Item_adicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_adicionalInclude<ExtArgs> | null
    /**
     * The data needed to create a Item_adicional.
     */
    data: XOR<Item_adicionalCreateInput, Item_adicionalUncheckedCreateInput>
  }

  /**
   * Item_adicional createMany
   */
  export type Item_adicionalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Item_adicionals.
     */
    data: Item_adicionalCreateManyInput | Item_adicionalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item_adicional createManyAndReturn
   */
  export type Item_adicionalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_adicional
     */
    select?: Item_adicionalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item_adicional
     */
    omit?: Item_adicionalOmit<ExtArgs> | null
    /**
     * The data used to create many Item_adicionals.
     */
    data: Item_adicionalCreateManyInput | Item_adicionalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_adicionalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Item_adicional update
   */
  export type Item_adicionalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_adicional
     */
    select?: Item_adicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item_adicional
     */
    omit?: Item_adicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_adicionalInclude<ExtArgs> | null
    /**
     * The data needed to update a Item_adicional.
     */
    data: XOR<Item_adicionalUpdateInput, Item_adicionalUncheckedUpdateInput>
    /**
     * Choose, which Item_adicional to update.
     */
    where: Item_adicionalWhereUniqueInput
  }

  /**
   * Item_adicional updateMany
   */
  export type Item_adicionalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Item_adicionals.
     */
    data: XOR<Item_adicionalUpdateManyMutationInput, Item_adicionalUncheckedUpdateManyInput>
    /**
     * Filter which Item_adicionals to update
     */
    where?: Item_adicionalWhereInput
    /**
     * Limit how many Item_adicionals to update.
     */
    limit?: number
  }

  /**
   * Item_adicional updateManyAndReturn
   */
  export type Item_adicionalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_adicional
     */
    select?: Item_adicionalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item_adicional
     */
    omit?: Item_adicionalOmit<ExtArgs> | null
    /**
     * The data used to update Item_adicionals.
     */
    data: XOR<Item_adicionalUpdateManyMutationInput, Item_adicionalUncheckedUpdateManyInput>
    /**
     * Filter which Item_adicionals to update
     */
    where?: Item_adicionalWhereInput
    /**
     * Limit how many Item_adicionals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_adicionalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Item_adicional upsert
   */
  export type Item_adicionalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_adicional
     */
    select?: Item_adicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item_adicional
     */
    omit?: Item_adicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_adicionalInclude<ExtArgs> | null
    /**
     * The filter to search for the Item_adicional to update in case it exists.
     */
    where: Item_adicionalWhereUniqueInput
    /**
     * In case the Item_adicional found by the `where` argument doesn't exist, create a new Item_adicional with this data.
     */
    create: XOR<Item_adicionalCreateInput, Item_adicionalUncheckedCreateInput>
    /**
     * In case the Item_adicional was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Item_adicionalUpdateInput, Item_adicionalUncheckedUpdateInput>
  }

  /**
   * Item_adicional delete
   */
  export type Item_adicionalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_adicional
     */
    select?: Item_adicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item_adicional
     */
    omit?: Item_adicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_adicionalInclude<ExtArgs> | null
    /**
     * Filter which Item_adicional to delete.
     */
    where: Item_adicionalWhereUniqueInput
  }

  /**
   * Item_adicional deleteMany
   */
  export type Item_adicionalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item_adicionals to delete
     */
    where?: Item_adicionalWhereInput
    /**
     * Limit how many Item_adicionals to delete.
     */
    limit?: number
  }

  /**
   * Item_adicional without action
   */
  export type Item_adicionalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_adicional
     */
    select?: Item_adicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item_adicional
     */
    omit?: Item_adicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_adicionalInclude<ExtArgs> | null
  }


  /**
   * Model Mesa
   */

  export type AggregateMesa = {
    _count: MesaCountAggregateOutputType | null
    _avg: MesaAvgAggregateOutputType | null
    _sum: MesaSumAggregateOutputType | null
    _min: MesaMinAggregateOutputType | null
    _max: MesaMaxAggregateOutputType | null
  }

  export type MesaAvgAggregateOutputType = {
    numero_mesa: number | null
  }

  export type MesaSumAggregateOutputType = {
    numero_mesa: number | null
  }

  export type MesaMinAggregateOutputType = {
    id: string | null
    numero_mesa: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MesaMaxAggregateOutputType = {
    id: string | null
    numero_mesa: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MesaCountAggregateOutputType = {
    id: number
    numero_mesa: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type MesaAvgAggregateInputType = {
    numero_mesa?: true
  }

  export type MesaSumAggregateInputType = {
    numero_mesa?: true
  }

  export type MesaMinAggregateInputType = {
    id?: true
    numero_mesa?: true
    created_at?: true
    updated_at?: true
  }

  export type MesaMaxAggregateInputType = {
    id?: true
    numero_mesa?: true
    created_at?: true
    updated_at?: true
  }

  export type MesaCountAggregateInputType = {
    id?: true
    numero_mesa?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type MesaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mesa to aggregate.
     */
    where?: MesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mesas to fetch.
     */
    orderBy?: MesaOrderByWithRelationInput | MesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mesas
    **/
    _count?: true | MesaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MesaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MesaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MesaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MesaMaxAggregateInputType
  }

  export type GetMesaAggregateType<T extends MesaAggregateArgs> = {
        [P in keyof T & keyof AggregateMesa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMesa[P]>
      : GetScalarType<T[P], AggregateMesa[P]>
  }




  export type MesaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MesaWhereInput
    orderBy?: MesaOrderByWithAggregationInput | MesaOrderByWithAggregationInput[]
    by: MesaScalarFieldEnum[] | MesaScalarFieldEnum
    having?: MesaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MesaCountAggregateInputType | true
    _avg?: MesaAvgAggregateInputType
    _sum?: MesaSumAggregateInputType
    _min?: MesaMinAggregateInputType
    _max?: MesaMaxAggregateInputType
  }

  export type MesaGroupByOutputType = {
    id: string
    numero_mesa: number
    created_at: Date | null
    updated_at: Date | null
    _count: MesaCountAggregateOutputType | null
    _avg: MesaAvgAggregateOutputType | null
    _sum: MesaSumAggregateOutputType | null
    _min: MesaMinAggregateOutputType | null
    _max: MesaMaxAggregateOutputType | null
  }

  type GetMesaGroupByPayload<T extends MesaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MesaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MesaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MesaGroupByOutputType[P]>
            : GetScalarType<T[P], MesaGroupByOutputType[P]>
        }
      >
    >


  export type MesaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero_mesa?: boolean
    created_at?: boolean
    updated_at?: boolean
    Comanda?: boolean | Mesa$ComandaArgs<ExtArgs>
    _count?: boolean | MesaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mesa"]>

  export type MesaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero_mesa?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["mesa"]>

  export type MesaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero_mesa?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["mesa"]>

  export type MesaSelectScalar = {
    id?: boolean
    numero_mesa?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type MesaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numero_mesa" | "created_at" | "updated_at", ExtArgs["result"]["mesa"]>
  export type MesaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comanda?: boolean | Mesa$ComandaArgs<ExtArgs>
    _count?: boolean | MesaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MesaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MesaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MesaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mesa"
    objects: {
      Comanda: Prisma.$ComandaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      numero_mesa: number
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["mesa"]>
    composites: {}
  }

  type MesaGetPayload<S extends boolean | null | undefined | MesaDefaultArgs> = $Result.GetResult<Prisma.$MesaPayload, S>

  type MesaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MesaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MesaCountAggregateInputType | true
    }

  export interface MesaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mesa'], meta: { name: 'Mesa' } }
    /**
     * Find zero or one Mesa that matches the filter.
     * @param {MesaFindUniqueArgs} args - Arguments to find a Mesa
     * @example
     * // Get one Mesa
     * const mesa = await prisma.mesa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MesaFindUniqueArgs>(args: SelectSubset<T, MesaFindUniqueArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mesa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MesaFindUniqueOrThrowArgs} args - Arguments to find a Mesa
     * @example
     * // Get one Mesa
     * const mesa = await prisma.mesa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MesaFindUniqueOrThrowArgs>(args: SelectSubset<T, MesaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mesa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesaFindFirstArgs} args - Arguments to find a Mesa
     * @example
     * // Get one Mesa
     * const mesa = await prisma.mesa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MesaFindFirstArgs>(args?: SelectSubset<T, MesaFindFirstArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mesa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesaFindFirstOrThrowArgs} args - Arguments to find a Mesa
     * @example
     * // Get one Mesa
     * const mesa = await prisma.mesa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MesaFindFirstOrThrowArgs>(args?: SelectSubset<T, MesaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mesas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mesas
     * const mesas = await prisma.mesa.findMany()
     * 
     * // Get first 10 Mesas
     * const mesas = await prisma.mesa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mesaWithIdOnly = await prisma.mesa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MesaFindManyArgs>(args?: SelectSubset<T, MesaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mesa.
     * @param {MesaCreateArgs} args - Arguments to create a Mesa.
     * @example
     * // Create one Mesa
     * const Mesa = await prisma.mesa.create({
     *   data: {
     *     // ... data to create a Mesa
     *   }
     * })
     * 
     */
    create<T extends MesaCreateArgs>(args: SelectSubset<T, MesaCreateArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mesas.
     * @param {MesaCreateManyArgs} args - Arguments to create many Mesas.
     * @example
     * // Create many Mesas
     * const mesa = await prisma.mesa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MesaCreateManyArgs>(args?: SelectSubset<T, MesaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mesas and returns the data saved in the database.
     * @param {MesaCreateManyAndReturnArgs} args - Arguments to create many Mesas.
     * @example
     * // Create many Mesas
     * const mesa = await prisma.mesa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mesas and only return the `id`
     * const mesaWithIdOnly = await prisma.mesa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MesaCreateManyAndReturnArgs>(args?: SelectSubset<T, MesaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mesa.
     * @param {MesaDeleteArgs} args - Arguments to delete one Mesa.
     * @example
     * // Delete one Mesa
     * const Mesa = await prisma.mesa.delete({
     *   where: {
     *     // ... filter to delete one Mesa
     *   }
     * })
     * 
     */
    delete<T extends MesaDeleteArgs>(args: SelectSubset<T, MesaDeleteArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mesa.
     * @param {MesaUpdateArgs} args - Arguments to update one Mesa.
     * @example
     * // Update one Mesa
     * const mesa = await prisma.mesa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MesaUpdateArgs>(args: SelectSubset<T, MesaUpdateArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mesas.
     * @param {MesaDeleteManyArgs} args - Arguments to filter Mesas to delete.
     * @example
     * // Delete a few Mesas
     * const { count } = await prisma.mesa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MesaDeleteManyArgs>(args?: SelectSubset<T, MesaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mesas
     * const mesa = await prisma.mesa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MesaUpdateManyArgs>(args: SelectSubset<T, MesaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mesas and returns the data updated in the database.
     * @param {MesaUpdateManyAndReturnArgs} args - Arguments to update many Mesas.
     * @example
     * // Update many Mesas
     * const mesa = await prisma.mesa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mesas and only return the `id`
     * const mesaWithIdOnly = await prisma.mesa.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MesaUpdateManyAndReturnArgs>(args: SelectSubset<T, MesaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mesa.
     * @param {MesaUpsertArgs} args - Arguments to update or create a Mesa.
     * @example
     * // Update or create a Mesa
     * const mesa = await prisma.mesa.upsert({
     *   create: {
     *     // ... data to create a Mesa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mesa we want to update
     *   }
     * })
     */
    upsert<T extends MesaUpsertArgs>(args: SelectSubset<T, MesaUpsertArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesaCountArgs} args - Arguments to filter Mesas to count.
     * @example
     * // Count the number of Mesas
     * const count = await prisma.mesa.count({
     *   where: {
     *     // ... the filter for the Mesas we want to count
     *   }
     * })
    **/
    count<T extends MesaCountArgs>(
      args?: Subset<T, MesaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MesaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mesa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MesaAggregateArgs>(args: Subset<T, MesaAggregateArgs>): Prisma.PrismaPromise<GetMesaAggregateType<T>>

    /**
     * Group by Mesa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MesaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MesaGroupByArgs['orderBy'] }
        : { orderBy?: MesaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MesaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMesaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mesa model
   */
  readonly fields: MesaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mesa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MesaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Comanda<T extends Mesa$ComandaArgs<ExtArgs> = {}>(args?: Subset<T, Mesa$ComandaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComandaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mesa model
   */
  interface MesaFieldRefs {
    readonly id: FieldRef<"Mesa", 'String'>
    readonly numero_mesa: FieldRef<"Mesa", 'Int'>
    readonly created_at: FieldRef<"Mesa", 'DateTime'>
    readonly updated_at: FieldRef<"Mesa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mesa findUnique
   */
  export type MesaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * Filter, which Mesa to fetch.
     */
    where: MesaWhereUniqueInput
  }

  /**
   * Mesa findUniqueOrThrow
   */
  export type MesaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * Filter, which Mesa to fetch.
     */
    where: MesaWhereUniqueInput
  }

  /**
   * Mesa findFirst
   */
  export type MesaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * Filter, which Mesa to fetch.
     */
    where?: MesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mesas to fetch.
     */
    orderBy?: MesaOrderByWithRelationInput | MesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mesas.
     */
    cursor?: MesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mesas.
     */
    distinct?: MesaScalarFieldEnum | MesaScalarFieldEnum[]
  }

  /**
   * Mesa findFirstOrThrow
   */
  export type MesaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * Filter, which Mesa to fetch.
     */
    where?: MesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mesas to fetch.
     */
    orderBy?: MesaOrderByWithRelationInput | MesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mesas.
     */
    cursor?: MesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mesas.
     */
    distinct?: MesaScalarFieldEnum | MesaScalarFieldEnum[]
  }

  /**
   * Mesa findMany
   */
  export type MesaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * Filter, which Mesas to fetch.
     */
    where?: MesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mesas to fetch.
     */
    orderBy?: MesaOrderByWithRelationInput | MesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mesas.
     */
    cursor?: MesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mesas.
     */
    skip?: number
    distinct?: MesaScalarFieldEnum | MesaScalarFieldEnum[]
  }

  /**
   * Mesa create
   */
  export type MesaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * The data needed to create a Mesa.
     */
    data: XOR<MesaCreateInput, MesaUncheckedCreateInput>
  }

  /**
   * Mesa createMany
   */
  export type MesaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mesas.
     */
    data: MesaCreateManyInput | MesaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mesa createManyAndReturn
   */
  export type MesaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * The data used to create many Mesas.
     */
    data: MesaCreateManyInput | MesaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mesa update
   */
  export type MesaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * The data needed to update a Mesa.
     */
    data: XOR<MesaUpdateInput, MesaUncheckedUpdateInput>
    /**
     * Choose, which Mesa to update.
     */
    where: MesaWhereUniqueInput
  }

  /**
   * Mesa updateMany
   */
  export type MesaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mesas.
     */
    data: XOR<MesaUpdateManyMutationInput, MesaUncheckedUpdateManyInput>
    /**
     * Filter which Mesas to update
     */
    where?: MesaWhereInput
    /**
     * Limit how many Mesas to update.
     */
    limit?: number
  }

  /**
   * Mesa updateManyAndReturn
   */
  export type MesaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * The data used to update Mesas.
     */
    data: XOR<MesaUpdateManyMutationInput, MesaUncheckedUpdateManyInput>
    /**
     * Filter which Mesas to update
     */
    where?: MesaWhereInput
    /**
     * Limit how many Mesas to update.
     */
    limit?: number
  }

  /**
   * Mesa upsert
   */
  export type MesaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * The filter to search for the Mesa to update in case it exists.
     */
    where: MesaWhereUniqueInput
    /**
     * In case the Mesa found by the `where` argument doesn't exist, create a new Mesa with this data.
     */
    create: XOR<MesaCreateInput, MesaUncheckedCreateInput>
    /**
     * In case the Mesa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MesaUpdateInput, MesaUncheckedUpdateInput>
  }

  /**
   * Mesa delete
   */
  export type MesaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * Filter which Mesa to delete.
     */
    where: MesaWhereUniqueInput
  }

  /**
   * Mesa deleteMany
   */
  export type MesaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mesas to delete
     */
    where?: MesaWhereInput
    /**
     * Limit how many Mesas to delete.
     */
    limit?: number
  }

  /**
   * Mesa.Comanda
   */
  export type Mesa$ComandaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comanda
     */
    select?: ComandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comanda
     */
    omit?: ComandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandaInclude<ExtArgs> | null
    where?: ComandaWhereInput
    orderBy?: ComandaOrderByWithRelationInput | ComandaOrderByWithRelationInput[]
    cursor?: ComandaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComandaScalarFieldEnum | ComandaScalarFieldEnum[]
  }

  /**
   * Mesa without action
   */
  export type MesaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FuncionarioScalarFieldEnum: {
    id: 'id',
    name: 'name',
    funcao: 'funcao',
    email: 'email',
    password: 'password',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type FuncionarioScalarFieldEnum = (typeof FuncionarioScalarFieldEnum)[keyof typeof FuncionarioScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    cpf: 'cpf',
    data_nasc: 'data_nasc',
    image_url: 'image_url',
    points: 'points',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const FavoritoScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    product_id: 'product_id',
    cliente_id: 'cliente_id'
  };

  export type FavoritoScalarFieldEnum = (typeof FavoritoScalarFieldEnum)[keyof typeof FavoritoScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image_url: 'image_url',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    points: 'points',
    description: 'description',
    promocao: 'promocao',
    image_url: 'image_url',
    created_at: 'created_at',
    updated_at: 'updated_at',
    category_id: 'category_id'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    id: 'id',
    status: 'status',
    price: 'price',
    points: 'points',
    created_at: 'created_at',
    updated_at: 'updated_at',
    cliente_id: 'cliente_id',
    comanda_id: 'comanda_id'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const ComandaScalarFieldEnum: {
    id: 'id',
    status: 'status',
    price: 'price',
    points: 'points',
    created_at: 'created_at',
    updated_at: 'updated_at',
    cliente_id: 'cliente_id',
    mesa_id: 'mesa_id'
  };

  export type ComandaScalarFieldEnum = (typeof ComandaScalarFieldEnum)[keyof typeof ComandaScalarFieldEnum]


  export const AvaliacaoScalarFieldEnum: {
    id: 'id',
    nota: 'nota',
    descricao: 'descricao',
    created_at: 'created_at',
    cliente_id: 'cliente_id',
    comanda_id: 'comanda_id'
  };

  export type AvaliacaoScalarFieldEnum = (typeof AvaliacaoScalarFieldEnum)[keyof typeof AvaliacaoScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    qtd: 'qtd',
    price: 'price',
    points: 'points',
    removidos: 'removidos',
    adicionais: 'adicionais',
    observacoes: 'observacoes',
    created_at: 'created_at',
    updated_at: 'updated_at',
    pedido_id: 'pedido_id',
    product_id: 'product_id'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const IngredienteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    price: 'price',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type IngredienteScalarFieldEnum = (typeof IngredienteScalarFieldEnum)[keyof typeof IngredienteScalarFieldEnum]


  export const Product_ingredienteScalarFieldEnum: {
    id: 'id',
    qtd: 'qtd',
    created_at: 'created_at',
    updated_at: 'updated_at',
    product_id: 'product_id',
    ingrediente_id: 'ingrediente_id'
  };

  export type Product_ingredienteScalarFieldEnum = (typeof Product_ingredienteScalarFieldEnum)[keyof typeof Product_ingredienteScalarFieldEnum]


  export const AdicionalScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    price: 'price',
    points: 'points',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AdicionalScalarFieldEnum = (typeof AdicionalScalarFieldEnum)[keyof typeof AdicionalScalarFieldEnum]


  export const Item_adicionalScalarFieldEnum: {
    id: 'id',
    qtd: 'qtd',
    item_id: 'item_id',
    adicional_id: 'adicional_id'
  };

  export type Item_adicionalScalarFieldEnum = (typeof Item_adicionalScalarFieldEnum)[keyof typeof Item_adicionalScalarFieldEnum]


  export const MesaScalarFieldEnum: {
    id: 'id',
    numero_mesa: 'numero_mesa',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type MesaScalarFieldEnum = (typeof MesaScalarFieldEnum)[keyof typeof MesaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type FuncionarioWhereInput = {
    AND?: FuncionarioWhereInput | FuncionarioWhereInput[]
    OR?: FuncionarioWhereInput[]
    NOT?: FuncionarioWhereInput | FuncionarioWhereInput[]
    id?: StringFilter<"Funcionario"> | string
    name?: StringFilter<"Funcionario"> | string
    funcao?: StringFilter<"Funcionario"> | string
    email?: StringFilter<"Funcionario"> | string
    password?: StringFilter<"Funcionario"> | string
    created_at?: DateTimeNullableFilter<"Funcionario"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Funcionario"> | Date | string | null
  }

  export type FuncionarioOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    funcao?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type FuncionarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FuncionarioWhereInput | FuncionarioWhereInput[]
    OR?: FuncionarioWhereInput[]
    NOT?: FuncionarioWhereInput | FuncionarioWhereInput[]
    name?: StringFilter<"Funcionario"> | string
    funcao?: StringFilter<"Funcionario"> | string
    email?: StringFilter<"Funcionario"> | string
    password?: StringFilter<"Funcionario"> | string
    created_at?: DateTimeNullableFilter<"Funcionario"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Funcionario"> | Date | string | null
  }, "id">

  export type FuncionarioOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    funcao?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: FuncionarioCountOrderByAggregateInput
    _max?: FuncionarioMaxOrderByAggregateInput
    _min?: FuncionarioMinOrderByAggregateInput
  }

  export type FuncionarioScalarWhereWithAggregatesInput = {
    AND?: FuncionarioScalarWhereWithAggregatesInput | FuncionarioScalarWhereWithAggregatesInput[]
    OR?: FuncionarioScalarWhereWithAggregatesInput[]
    NOT?: FuncionarioScalarWhereWithAggregatesInput | FuncionarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Funcionario"> | string
    name?: StringWithAggregatesFilter<"Funcionario"> | string
    funcao?: StringWithAggregatesFilter<"Funcionario"> | string
    email?: StringWithAggregatesFilter<"Funcionario"> | string
    password?: StringWithAggregatesFilter<"Funcionario"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"Funcionario"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Funcionario"> | Date | string | null
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: StringFilter<"Cliente"> | string
    name?: StringFilter<"Cliente"> | string
    email?: StringFilter<"Cliente"> | string
    password?: StringFilter<"Cliente"> | string
    cpf?: StringFilter<"Cliente"> | string
    data_nasc?: DateTimeNullableFilter<"Cliente"> | Date | string | null
    image_url?: StringNullableFilter<"Cliente"> | string | null
    points?: FloatFilter<"Cliente"> | number
    created_at?: DateTimeNullableFilter<"Cliente"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Cliente"> | Date | string | null
    avaliacao?: AvaliacaoListRelationFilter
    favoritos?: FavoritoListRelationFilter
    comandas?: ComandaListRelationFilter
    pedidos?: PedidoListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cpf?: SortOrder
    data_nasc?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    points?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    avaliacao?: AvaliacaoOrderByRelationAggregateInput
    favoritos?: FavoritoOrderByRelationAggregateInput
    comandas?: ComandaOrderByRelationAggregateInput
    pedidos?: PedidoOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    name?: StringFilter<"Cliente"> | string
    email?: StringFilter<"Cliente"> | string
    password?: StringFilter<"Cliente"> | string
    cpf?: StringFilter<"Cliente"> | string
    data_nasc?: DateTimeNullableFilter<"Cliente"> | Date | string | null
    image_url?: StringNullableFilter<"Cliente"> | string | null
    points?: FloatFilter<"Cliente"> | number
    created_at?: DateTimeNullableFilter<"Cliente"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Cliente"> | Date | string | null
    avaliacao?: AvaliacaoListRelationFilter
    favoritos?: FavoritoListRelationFilter
    comandas?: ComandaListRelationFilter
    pedidos?: PedidoListRelationFilter
  }, "id">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cpf?: SortOrder
    data_nasc?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    points?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cliente"> | string
    name?: StringWithAggregatesFilter<"Cliente"> | string
    email?: StringWithAggregatesFilter<"Cliente"> | string
    password?: StringWithAggregatesFilter<"Cliente"> | string
    cpf?: StringWithAggregatesFilter<"Cliente"> | string
    data_nasc?: DateTimeNullableWithAggregatesFilter<"Cliente"> | Date | string | null
    image_url?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    points?: FloatWithAggregatesFilter<"Cliente"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"Cliente"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Cliente"> | Date | string | null
  }

  export type FavoritoWhereInput = {
    AND?: FavoritoWhereInput | FavoritoWhereInput[]
    OR?: FavoritoWhereInput[]
    NOT?: FavoritoWhereInput | FavoritoWhereInput[]
    id?: StringFilter<"Favorito"> | string
    created_at?: DateTimeNullableFilter<"Favorito"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Favorito"> | Date | string | null
    product_id?: StringFilter<"Favorito"> | string
    cliente_id?: StringFilter<"Favorito"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }

  export type FavoritoOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    product_id?: SortOrder
    cliente_id?: SortOrder
    product?: ProductOrderByWithRelationInput
    cliente?: ClienteOrderByWithRelationInput
  }

  export type FavoritoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FavoritoWhereInput | FavoritoWhereInput[]
    OR?: FavoritoWhereInput[]
    NOT?: FavoritoWhereInput | FavoritoWhereInput[]
    created_at?: DateTimeNullableFilter<"Favorito"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Favorito"> | Date | string | null
    product_id?: StringFilter<"Favorito"> | string
    cliente_id?: StringFilter<"Favorito"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }, "id">

  export type FavoritoOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    product_id?: SortOrder
    cliente_id?: SortOrder
    _count?: FavoritoCountOrderByAggregateInput
    _max?: FavoritoMaxOrderByAggregateInput
    _min?: FavoritoMinOrderByAggregateInput
  }

  export type FavoritoScalarWhereWithAggregatesInput = {
    AND?: FavoritoScalarWhereWithAggregatesInput | FavoritoScalarWhereWithAggregatesInput[]
    OR?: FavoritoScalarWhereWithAggregatesInput[]
    NOT?: FavoritoScalarWhereWithAggregatesInput | FavoritoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Favorito"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"Favorito"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Favorito"> | Date | string | null
    product_id?: StringWithAggregatesFilter<"Favorito"> | string
    cliente_id?: StringWithAggregatesFilter<"Favorito"> | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    image_url?: StringNullableFilter<"Category"> | string | null
    created_at?: DateTimeNullableFilter<"Category"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Category"> | Date | string | null
    products?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image_url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    image_url?: StringNullableFilter<"Category"> | string | null
    created_at?: DateTimeNullableFilter<"Category"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Category"> | Date | string | null
    products?: ProductListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image_url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    image_url?: StringNullableWithAggregatesFilter<"Category"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Category"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Category"> | Date | string | null
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    points?: FloatFilter<"Product"> | number
    description?: StringFilter<"Product"> | string
    promocao?: BoolFilter<"Product"> | boolean
    image_url?: StringNullableFilter<"Product"> | string | null
    created_at?: DateTimeNullableFilter<"Product"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Product"> | Date | string | null
    category_id?: StringFilter<"Product"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    items?: ItemListRelationFilter
    favoritos?: FavoritoListRelationFilter
    product_ingrediente?: Product_ingredienteListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    points?: SortOrder
    description?: SortOrder
    promocao?: SortOrder
    image_url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    category_id?: SortOrder
    category?: CategoryOrderByWithRelationInput
    items?: ItemOrderByRelationAggregateInput
    favoritos?: FavoritoOrderByRelationAggregateInput
    product_ingrediente?: Product_ingredienteOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    points?: FloatFilter<"Product"> | number
    description?: StringFilter<"Product"> | string
    promocao?: BoolFilter<"Product"> | boolean
    image_url?: StringNullableFilter<"Product"> | string | null
    created_at?: DateTimeNullableFilter<"Product"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Product"> | Date | string | null
    category_id?: StringFilter<"Product"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    items?: ItemListRelationFilter
    favoritos?: FavoritoListRelationFilter
    product_ingrediente?: Product_ingredienteListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    points?: SortOrder
    description?: SortOrder
    promocao?: SortOrder
    image_url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    category_id?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    price?: FloatWithAggregatesFilter<"Product"> | number
    points?: FloatWithAggregatesFilter<"Product"> | number
    description?: StringWithAggregatesFilter<"Product"> | string
    promocao?: BoolWithAggregatesFilter<"Product"> | boolean
    image_url?: StringNullableWithAggregatesFilter<"Product"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
    category_id?: StringWithAggregatesFilter<"Product"> | string
  }

  export type PedidoWhereInput = {
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    id?: StringFilter<"Pedido"> | string
    status?: StringFilter<"Pedido"> | string
    price?: FloatFilter<"Pedido"> | number
    points?: FloatFilter<"Pedido"> | number
    created_at?: DateTimeNullableFilter<"Pedido"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Pedido"> | Date | string | null
    cliente_id?: StringFilter<"Pedido"> | string
    comanda_id?: StringFilter<"Pedido"> | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    comanda?: XOR<ComandaScalarRelationFilter, ComandaWhereInput>
    items?: ItemListRelationFilter
  }

  export type PedidoOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    price?: SortOrder
    points?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    cliente_id?: SortOrder
    comanda_id?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    comanda?: ComandaOrderByWithRelationInput
    items?: ItemOrderByRelationAggregateInput
  }

  export type PedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    status?: StringFilter<"Pedido"> | string
    price?: FloatFilter<"Pedido"> | number
    points?: FloatFilter<"Pedido"> | number
    created_at?: DateTimeNullableFilter<"Pedido"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Pedido"> | Date | string | null
    cliente_id?: StringFilter<"Pedido"> | string
    comanda_id?: StringFilter<"Pedido"> | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    comanda?: XOR<ComandaScalarRelationFilter, ComandaWhereInput>
    items?: ItemListRelationFilter
  }, "id">

  export type PedidoOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    price?: SortOrder
    points?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    cliente_id?: SortOrder
    comanda_id?: SortOrder
    _count?: PedidoCountOrderByAggregateInput
    _avg?: PedidoAvgOrderByAggregateInput
    _max?: PedidoMaxOrderByAggregateInput
    _min?: PedidoMinOrderByAggregateInput
    _sum?: PedidoSumOrderByAggregateInput
  }

  export type PedidoScalarWhereWithAggregatesInput = {
    AND?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    OR?: PedidoScalarWhereWithAggregatesInput[]
    NOT?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pedido"> | string
    status?: StringWithAggregatesFilter<"Pedido"> | string
    price?: FloatWithAggregatesFilter<"Pedido"> | number
    points?: FloatWithAggregatesFilter<"Pedido"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"Pedido"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Pedido"> | Date | string | null
    cliente_id?: StringWithAggregatesFilter<"Pedido"> | string
    comanda_id?: StringWithAggregatesFilter<"Pedido"> | string
  }

  export type ComandaWhereInput = {
    AND?: ComandaWhereInput | ComandaWhereInput[]
    OR?: ComandaWhereInput[]
    NOT?: ComandaWhereInput | ComandaWhereInput[]
    id?: StringFilter<"Comanda"> | string
    status?: StringFilter<"Comanda"> | string
    price?: FloatFilter<"Comanda"> | number
    points?: FloatFilter<"Comanda"> | number
    created_at?: DateTimeNullableFilter<"Comanda"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Comanda"> | Date | string | null
    cliente_id?: StringFilter<"Comanda"> | string
    mesa_id?: StringNullableFilter<"Comanda"> | string | null
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    mesa?: XOR<MesaNullableScalarRelationFilter, MesaWhereInput> | null
    avaliacao?: AvaliacaoListRelationFilter
    pedido?: PedidoListRelationFilter
  }

  export type ComandaOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    price?: SortOrder
    points?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    cliente_id?: SortOrder
    mesa_id?: SortOrderInput | SortOrder
    cliente?: ClienteOrderByWithRelationInput
    mesa?: MesaOrderByWithRelationInput
    avaliacao?: AvaliacaoOrderByRelationAggregateInput
    pedido?: PedidoOrderByRelationAggregateInput
  }

  export type ComandaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ComandaWhereInput | ComandaWhereInput[]
    OR?: ComandaWhereInput[]
    NOT?: ComandaWhereInput | ComandaWhereInput[]
    status?: StringFilter<"Comanda"> | string
    price?: FloatFilter<"Comanda"> | number
    points?: FloatFilter<"Comanda"> | number
    created_at?: DateTimeNullableFilter<"Comanda"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Comanda"> | Date | string | null
    cliente_id?: StringFilter<"Comanda"> | string
    mesa_id?: StringNullableFilter<"Comanda"> | string | null
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    mesa?: XOR<MesaNullableScalarRelationFilter, MesaWhereInput> | null
    avaliacao?: AvaliacaoListRelationFilter
    pedido?: PedidoListRelationFilter
  }, "id">

  export type ComandaOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    price?: SortOrder
    points?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    cliente_id?: SortOrder
    mesa_id?: SortOrderInput | SortOrder
    _count?: ComandaCountOrderByAggregateInput
    _avg?: ComandaAvgOrderByAggregateInput
    _max?: ComandaMaxOrderByAggregateInput
    _min?: ComandaMinOrderByAggregateInput
    _sum?: ComandaSumOrderByAggregateInput
  }

  export type ComandaScalarWhereWithAggregatesInput = {
    AND?: ComandaScalarWhereWithAggregatesInput | ComandaScalarWhereWithAggregatesInput[]
    OR?: ComandaScalarWhereWithAggregatesInput[]
    NOT?: ComandaScalarWhereWithAggregatesInput | ComandaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comanda"> | string
    status?: StringWithAggregatesFilter<"Comanda"> | string
    price?: FloatWithAggregatesFilter<"Comanda"> | number
    points?: FloatWithAggregatesFilter<"Comanda"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"Comanda"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Comanda"> | Date | string | null
    cliente_id?: StringWithAggregatesFilter<"Comanda"> | string
    mesa_id?: StringNullableWithAggregatesFilter<"Comanda"> | string | null
  }

  export type AvaliacaoWhereInput = {
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    id?: StringFilter<"Avaliacao"> | string
    nota?: IntFilter<"Avaliacao"> | number
    descricao?: StringFilter<"Avaliacao"> | string
    created_at?: DateTimeNullableFilter<"Avaliacao"> | Date | string | null
    cliente_id?: StringFilter<"Avaliacao"> | string
    comanda_id?: StringFilter<"Avaliacao"> | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    comanda?: XOR<ComandaScalarRelationFilter, ComandaWhereInput>
  }

  export type AvaliacaoOrderByWithRelationInput = {
    id?: SortOrder
    nota?: SortOrder
    descricao?: SortOrder
    created_at?: SortOrderInput | SortOrder
    cliente_id?: SortOrder
    comanda_id?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    comanda?: ComandaOrderByWithRelationInput
  }

  export type AvaliacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    nota?: IntFilter<"Avaliacao"> | number
    descricao?: StringFilter<"Avaliacao"> | string
    created_at?: DateTimeNullableFilter<"Avaliacao"> | Date | string | null
    cliente_id?: StringFilter<"Avaliacao"> | string
    comanda_id?: StringFilter<"Avaliacao"> | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    comanda?: XOR<ComandaScalarRelationFilter, ComandaWhereInput>
  }, "id">

  export type AvaliacaoOrderByWithAggregationInput = {
    id?: SortOrder
    nota?: SortOrder
    descricao?: SortOrder
    created_at?: SortOrderInput | SortOrder
    cliente_id?: SortOrder
    comanda_id?: SortOrder
    _count?: AvaliacaoCountOrderByAggregateInput
    _avg?: AvaliacaoAvgOrderByAggregateInput
    _max?: AvaliacaoMaxOrderByAggregateInput
    _min?: AvaliacaoMinOrderByAggregateInput
    _sum?: AvaliacaoSumOrderByAggregateInput
  }

  export type AvaliacaoScalarWhereWithAggregatesInput = {
    AND?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    OR?: AvaliacaoScalarWhereWithAggregatesInput[]
    NOT?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Avaliacao"> | string
    nota?: IntWithAggregatesFilter<"Avaliacao"> | number
    descricao?: StringWithAggregatesFilter<"Avaliacao"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"Avaliacao"> | Date | string | null
    cliente_id?: StringWithAggregatesFilter<"Avaliacao"> | string
    comanda_id?: StringWithAggregatesFilter<"Avaliacao"> | string
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: StringFilter<"Item"> | string
    qtd?: IntFilter<"Item"> | number
    price?: FloatFilter<"Item"> | number
    points?: FloatFilter<"Item"> | number
    removidos?: JsonNullableFilter<"Item">
    adicionais?: JsonNullableFilter<"Item">
    observacoes?: StringNullableFilter<"Item"> | string | null
    created_at?: DateTimeNullableFilter<"Item"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Item"> | Date | string | null
    pedido_id?: StringFilter<"Item"> | string
    product_id?: StringFilter<"Item"> | string
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    Item_adicional?: Item_adicionalListRelationFilter
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    qtd?: SortOrder
    price?: SortOrder
    points?: SortOrder
    removidos?: SortOrderInput | SortOrder
    adicionais?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    pedido_id?: SortOrder
    product_id?: SortOrder
    pedido?: PedidoOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    Item_adicional?: Item_adicionalOrderByRelationAggregateInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    qtd?: IntFilter<"Item"> | number
    price?: FloatFilter<"Item"> | number
    points?: FloatFilter<"Item"> | number
    removidos?: JsonNullableFilter<"Item">
    adicionais?: JsonNullableFilter<"Item">
    observacoes?: StringNullableFilter<"Item"> | string | null
    created_at?: DateTimeNullableFilter<"Item"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Item"> | Date | string | null
    pedido_id?: StringFilter<"Item"> | string
    product_id?: StringFilter<"Item"> | string
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    Item_adicional?: Item_adicionalListRelationFilter
  }, "id">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    qtd?: SortOrder
    price?: SortOrder
    points?: SortOrder
    removidos?: SortOrderInput | SortOrder
    adicionais?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    pedido_id?: SortOrder
    product_id?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Item"> | string
    qtd?: IntWithAggregatesFilter<"Item"> | number
    price?: FloatWithAggregatesFilter<"Item"> | number
    points?: FloatWithAggregatesFilter<"Item"> | number
    removidos?: JsonNullableWithAggregatesFilter<"Item">
    adicionais?: JsonNullableWithAggregatesFilter<"Item">
    observacoes?: StringNullableWithAggregatesFilter<"Item"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Item"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Item"> | Date | string | null
    pedido_id?: StringWithAggregatesFilter<"Item"> | string
    product_id?: StringWithAggregatesFilter<"Item"> | string
  }

  export type IngredienteWhereInput = {
    AND?: IngredienteWhereInput | IngredienteWhereInput[]
    OR?: IngredienteWhereInput[]
    NOT?: IngredienteWhereInput | IngredienteWhereInput[]
    id?: StringFilter<"Ingrediente"> | string
    nome?: StringFilter<"Ingrediente"> | string
    price?: FloatFilter<"Ingrediente"> | number
    created_at?: DateTimeNullableFilter<"Ingrediente"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Ingrediente"> | Date | string | null
    Product_ingrediente?: Product_ingredienteListRelationFilter
  }

  export type IngredienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    price?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    Product_ingrediente?: Product_ingredienteOrderByRelationAggregateInput
  }

  export type IngredienteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IngredienteWhereInput | IngredienteWhereInput[]
    OR?: IngredienteWhereInput[]
    NOT?: IngredienteWhereInput | IngredienteWhereInput[]
    nome?: StringFilter<"Ingrediente"> | string
    price?: FloatFilter<"Ingrediente"> | number
    created_at?: DateTimeNullableFilter<"Ingrediente"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Ingrediente"> | Date | string | null
    Product_ingrediente?: Product_ingredienteListRelationFilter
  }, "id">

  export type IngredienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    price?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: IngredienteCountOrderByAggregateInput
    _avg?: IngredienteAvgOrderByAggregateInput
    _max?: IngredienteMaxOrderByAggregateInput
    _min?: IngredienteMinOrderByAggregateInput
    _sum?: IngredienteSumOrderByAggregateInput
  }

  export type IngredienteScalarWhereWithAggregatesInput = {
    AND?: IngredienteScalarWhereWithAggregatesInput | IngredienteScalarWhereWithAggregatesInput[]
    OR?: IngredienteScalarWhereWithAggregatesInput[]
    NOT?: IngredienteScalarWhereWithAggregatesInput | IngredienteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ingrediente"> | string
    nome?: StringWithAggregatesFilter<"Ingrediente"> | string
    price?: FloatWithAggregatesFilter<"Ingrediente"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"Ingrediente"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Ingrediente"> | Date | string | null
  }

  export type Product_ingredienteWhereInput = {
    AND?: Product_ingredienteWhereInput | Product_ingredienteWhereInput[]
    OR?: Product_ingredienteWhereInput[]
    NOT?: Product_ingredienteWhereInput | Product_ingredienteWhereInput[]
    id?: StringFilter<"Product_ingrediente"> | string
    qtd?: BoolFilter<"Product_ingrediente"> | boolean
    created_at?: DateTimeNullableFilter<"Product_ingrediente"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Product_ingrediente"> | Date | string | null
    product_id?: StringFilter<"Product_ingrediente"> | string
    ingrediente_id?: StringFilter<"Product_ingrediente"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    ingrediente?: XOR<IngredienteScalarRelationFilter, IngredienteWhereInput>
  }

  export type Product_ingredienteOrderByWithRelationInput = {
    id?: SortOrder
    qtd?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    product_id?: SortOrder
    ingrediente_id?: SortOrder
    product?: ProductOrderByWithRelationInput
    ingrediente?: IngredienteOrderByWithRelationInput
  }

  export type Product_ingredienteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Product_ingredienteWhereInput | Product_ingredienteWhereInput[]
    OR?: Product_ingredienteWhereInput[]
    NOT?: Product_ingredienteWhereInput | Product_ingredienteWhereInput[]
    qtd?: BoolFilter<"Product_ingrediente"> | boolean
    created_at?: DateTimeNullableFilter<"Product_ingrediente"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Product_ingrediente"> | Date | string | null
    product_id?: StringFilter<"Product_ingrediente"> | string
    ingrediente_id?: StringFilter<"Product_ingrediente"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    ingrediente?: XOR<IngredienteScalarRelationFilter, IngredienteWhereInput>
  }, "id">

  export type Product_ingredienteOrderByWithAggregationInput = {
    id?: SortOrder
    qtd?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    product_id?: SortOrder
    ingrediente_id?: SortOrder
    _count?: Product_ingredienteCountOrderByAggregateInput
    _max?: Product_ingredienteMaxOrderByAggregateInput
    _min?: Product_ingredienteMinOrderByAggregateInput
  }

  export type Product_ingredienteScalarWhereWithAggregatesInput = {
    AND?: Product_ingredienteScalarWhereWithAggregatesInput | Product_ingredienteScalarWhereWithAggregatesInput[]
    OR?: Product_ingredienteScalarWhereWithAggregatesInput[]
    NOT?: Product_ingredienteScalarWhereWithAggregatesInput | Product_ingredienteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product_ingrediente"> | string
    qtd?: BoolWithAggregatesFilter<"Product_ingrediente"> | boolean
    created_at?: DateTimeNullableWithAggregatesFilter<"Product_ingrediente"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Product_ingrediente"> | Date | string | null
    product_id?: StringWithAggregatesFilter<"Product_ingrediente"> | string
    ingrediente_id?: StringWithAggregatesFilter<"Product_ingrediente"> | string
  }

  export type AdicionalWhereInput = {
    AND?: AdicionalWhereInput | AdicionalWhereInput[]
    OR?: AdicionalWhereInput[]
    NOT?: AdicionalWhereInput | AdicionalWhereInput[]
    id?: StringFilter<"Adicional"> | string
    nome?: StringFilter<"Adicional"> | string
    price?: FloatFilter<"Adicional"> | number
    points?: FloatFilter<"Adicional"> | number
    created_at?: DateTimeNullableFilter<"Adicional"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Adicional"> | Date | string | null
    Item_adicional?: Item_adicionalListRelationFilter
  }

  export type AdicionalOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    price?: SortOrder
    points?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    Item_adicional?: Item_adicionalOrderByRelationAggregateInput
  }

  export type AdicionalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdicionalWhereInput | AdicionalWhereInput[]
    OR?: AdicionalWhereInput[]
    NOT?: AdicionalWhereInput | AdicionalWhereInput[]
    nome?: StringFilter<"Adicional"> | string
    price?: FloatFilter<"Adicional"> | number
    points?: FloatFilter<"Adicional"> | number
    created_at?: DateTimeNullableFilter<"Adicional"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Adicional"> | Date | string | null
    Item_adicional?: Item_adicionalListRelationFilter
  }, "id">

  export type AdicionalOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    price?: SortOrder
    points?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: AdicionalCountOrderByAggregateInput
    _avg?: AdicionalAvgOrderByAggregateInput
    _max?: AdicionalMaxOrderByAggregateInput
    _min?: AdicionalMinOrderByAggregateInput
    _sum?: AdicionalSumOrderByAggregateInput
  }

  export type AdicionalScalarWhereWithAggregatesInput = {
    AND?: AdicionalScalarWhereWithAggregatesInput | AdicionalScalarWhereWithAggregatesInput[]
    OR?: AdicionalScalarWhereWithAggregatesInput[]
    NOT?: AdicionalScalarWhereWithAggregatesInput | AdicionalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Adicional"> | string
    nome?: StringWithAggregatesFilter<"Adicional"> | string
    price?: FloatWithAggregatesFilter<"Adicional"> | number
    points?: FloatWithAggregatesFilter<"Adicional"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"Adicional"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Adicional"> | Date | string | null
  }

  export type Item_adicionalWhereInput = {
    AND?: Item_adicionalWhereInput | Item_adicionalWhereInput[]
    OR?: Item_adicionalWhereInput[]
    NOT?: Item_adicionalWhereInput | Item_adicionalWhereInput[]
    id?: StringFilter<"Item_adicional"> | string
    qtd?: IntFilter<"Item_adicional"> | number
    item_id?: StringFilter<"Item_adicional"> | string
    adicional_id?: StringFilter<"Item_adicional"> | string
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    adicional?: XOR<AdicionalScalarRelationFilter, AdicionalWhereInput>
  }

  export type Item_adicionalOrderByWithRelationInput = {
    id?: SortOrder
    qtd?: SortOrder
    item_id?: SortOrder
    adicional_id?: SortOrder
    item?: ItemOrderByWithRelationInput
    adicional?: AdicionalOrderByWithRelationInput
  }

  export type Item_adicionalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Item_adicionalWhereInput | Item_adicionalWhereInput[]
    OR?: Item_adicionalWhereInput[]
    NOT?: Item_adicionalWhereInput | Item_adicionalWhereInput[]
    qtd?: IntFilter<"Item_adicional"> | number
    item_id?: StringFilter<"Item_adicional"> | string
    adicional_id?: StringFilter<"Item_adicional"> | string
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    adicional?: XOR<AdicionalScalarRelationFilter, AdicionalWhereInput>
  }, "id">

  export type Item_adicionalOrderByWithAggregationInput = {
    id?: SortOrder
    qtd?: SortOrder
    item_id?: SortOrder
    adicional_id?: SortOrder
    _count?: Item_adicionalCountOrderByAggregateInput
    _avg?: Item_adicionalAvgOrderByAggregateInput
    _max?: Item_adicionalMaxOrderByAggregateInput
    _min?: Item_adicionalMinOrderByAggregateInput
    _sum?: Item_adicionalSumOrderByAggregateInput
  }

  export type Item_adicionalScalarWhereWithAggregatesInput = {
    AND?: Item_adicionalScalarWhereWithAggregatesInput | Item_adicionalScalarWhereWithAggregatesInput[]
    OR?: Item_adicionalScalarWhereWithAggregatesInput[]
    NOT?: Item_adicionalScalarWhereWithAggregatesInput | Item_adicionalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Item_adicional"> | string
    qtd?: IntWithAggregatesFilter<"Item_adicional"> | number
    item_id?: StringWithAggregatesFilter<"Item_adicional"> | string
    adicional_id?: StringWithAggregatesFilter<"Item_adicional"> | string
  }

  export type MesaWhereInput = {
    AND?: MesaWhereInput | MesaWhereInput[]
    OR?: MesaWhereInput[]
    NOT?: MesaWhereInput | MesaWhereInput[]
    id?: StringFilter<"Mesa"> | string
    numero_mesa?: IntFilter<"Mesa"> | number
    created_at?: DateTimeNullableFilter<"Mesa"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Mesa"> | Date | string | null
    Comanda?: ComandaListRelationFilter
  }

  export type MesaOrderByWithRelationInput = {
    id?: SortOrder
    numero_mesa?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    Comanda?: ComandaOrderByRelationAggregateInput
  }

  export type MesaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    numero_mesa?: number
    AND?: MesaWhereInput | MesaWhereInput[]
    OR?: MesaWhereInput[]
    NOT?: MesaWhereInput | MesaWhereInput[]
    created_at?: DateTimeNullableFilter<"Mesa"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Mesa"> | Date | string | null
    Comanda?: ComandaListRelationFilter
  }, "id" | "numero_mesa">

  export type MesaOrderByWithAggregationInput = {
    id?: SortOrder
    numero_mesa?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: MesaCountOrderByAggregateInput
    _avg?: MesaAvgOrderByAggregateInput
    _max?: MesaMaxOrderByAggregateInput
    _min?: MesaMinOrderByAggregateInput
    _sum?: MesaSumOrderByAggregateInput
  }

  export type MesaScalarWhereWithAggregatesInput = {
    AND?: MesaScalarWhereWithAggregatesInput | MesaScalarWhereWithAggregatesInput[]
    OR?: MesaScalarWhereWithAggregatesInput[]
    NOT?: MesaScalarWhereWithAggregatesInput | MesaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Mesa"> | string
    numero_mesa?: IntWithAggregatesFilter<"Mesa"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"Mesa"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Mesa"> | Date | string | null
  }

  export type FuncionarioCreateInput = {
    id?: string
    name: string
    funcao: string
    email: string
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type FuncionarioUncheckedCreateInput = {
    id?: string
    name: string
    funcao: string
    email: string
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type FuncionarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    funcao?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FuncionarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    funcao?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FuncionarioCreateManyInput = {
    id?: string
    name: string
    funcao: string
    email: string
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type FuncionarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    funcao?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FuncionarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    funcao?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClienteCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    cpf: string
    data_nasc?: Date | string | null
    image_url?: string | null
    points?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    avaliacao?: AvaliacaoCreateNestedManyWithoutClienteInput
    favoritos?: FavoritoCreateNestedManyWithoutClienteInput
    comandas?: ComandaCreateNestedManyWithoutClienteInput
    pedidos?: PedidoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    cpf: string
    data_nasc?: Date | string | null
    image_url?: string | null
    points?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    avaliacao?: AvaliacaoUncheckedCreateNestedManyWithoutClienteInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutClienteInput
    comandas?: ComandaUncheckedCreateNestedManyWithoutClienteInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_nasc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avaliacao?: AvaliacaoUpdateManyWithoutClienteNestedInput
    favoritos?: FavoritoUpdateManyWithoutClienteNestedInput
    comandas?: ComandaUpdateManyWithoutClienteNestedInput
    pedidos?: PedidoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_nasc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avaliacao?: AvaliacaoUncheckedUpdateManyWithoutClienteNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutClienteNestedInput
    comandas?: ComandaUncheckedUpdateManyWithoutClienteNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    cpf: string
    data_nasc?: Date | string | null
    image_url?: string | null
    points?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ClienteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_nasc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_nasc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FavoritoCreateInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    product: ProductCreateNestedOneWithoutFavoritosInput
    cliente: ClienteCreateNestedOneWithoutFavoritosInput
  }

  export type FavoritoUncheckedCreateInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    product_id: string
    cliente_id: string
  }

  export type FavoritoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product?: ProductUpdateOneRequiredWithoutFavoritosNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutFavoritosNestedInput
  }

  export type FavoritoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_id?: StringFieldUpdateOperationsInput | string
    cliente_id?: StringFieldUpdateOperationsInput | string
  }

  export type FavoritoCreateManyInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    product_id: string
    cliente_id: string
  }

  export type FavoritoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FavoritoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_id?: StringFieldUpdateOperationsInput | string
    cliente_id?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    image_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    image_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    image_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    price: number
    points: number
    description: string
    promocao: boolean
    image_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    category: CategoryCreateNestedOneWithoutProductsInput
    items?: ItemCreateNestedManyWithoutProductInput
    favoritos?: FavoritoCreateNestedManyWithoutProductInput
    product_ingrediente?: Product_ingredienteCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    price: number
    points: number
    description: string
    promocao: boolean
    image_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    category_id: string
    items?: ItemUncheckedCreateNestedManyWithoutProductInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutProductInput
    product_ingrediente?: Product_ingredienteUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    promocao?: BoolFieldUpdateOperationsInput | boolean
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    items?: ItemUpdateManyWithoutProductNestedInput
    favoritos?: FavoritoUpdateManyWithoutProductNestedInput
    product_ingrediente?: Product_ingredienteUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    promocao?: BoolFieldUpdateOperationsInput | boolean
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_id?: StringFieldUpdateOperationsInput | string
    items?: ItemUncheckedUpdateManyWithoutProductNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutProductNestedInput
    product_ingrediente?: Product_ingredienteUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    name: string
    price: number
    points: number
    description: string
    promocao: boolean
    image_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    category_id: string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    promocao?: BoolFieldUpdateOperationsInput | boolean
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    promocao?: BoolFieldUpdateOperationsInput | boolean
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_id?: StringFieldUpdateOperationsInput | string
  }

  export type PedidoCreateInput = {
    id?: string
    status: string
    price: number
    points: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cliente: ClienteCreateNestedOneWithoutPedidosInput
    comanda: ComandaCreateNestedOneWithoutPedidoInput
    items?: ItemCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateInput = {
    id?: string
    status: string
    price: number
    points: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cliente_id: string
    comanda_id: string
    items?: ItemUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente?: ClienteUpdateOneRequiredWithoutPedidosNestedInput
    comanda?: ComandaUpdateOneRequiredWithoutPedidoNestedInput
    items?: ItemUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente_id?: StringFieldUpdateOperationsInput | string
    comanda_id?: StringFieldUpdateOperationsInput | string
    items?: ItemUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoCreateManyInput = {
    id?: string
    status: string
    price: number
    points: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cliente_id: string
    comanda_id: string
  }

  export type PedidoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PedidoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente_id?: StringFieldUpdateOperationsInput | string
    comanda_id?: StringFieldUpdateOperationsInput | string
  }

  export type ComandaCreateInput = {
    id?: string
    status: string
    price: number
    points: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cliente: ClienteCreateNestedOneWithoutComandasInput
    mesa?: MesaCreateNestedOneWithoutComandaInput
    avaliacao?: AvaliacaoCreateNestedManyWithoutComandaInput
    pedido?: PedidoCreateNestedManyWithoutComandaInput
  }

  export type ComandaUncheckedCreateInput = {
    id?: string
    status: string
    price: number
    points: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cliente_id: string
    mesa_id?: string | null
    avaliacao?: AvaliacaoUncheckedCreateNestedManyWithoutComandaInput
    pedido?: PedidoUncheckedCreateNestedManyWithoutComandaInput
  }

  export type ComandaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente?: ClienteUpdateOneRequiredWithoutComandasNestedInput
    mesa?: MesaUpdateOneWithoutComandaNestedInput
    avaliacao?: AvaliacaoUpdateManyWithoutComandaNestedInput
    pedido?: PedidoUpdateManyWithoutComandaNestedInput
  }

  export type ComandaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente_id?: StringFieldUpdateOperationsInput | string
    mesa_id?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: AvaliacaoUncheckedUpdateManyWithoutComandaNestedInput
    pedido?: PedidoUncheckedUpdateManyWithoutComandaNestedInput
  }

  export type ComandaCreateManyInput = {
    id?: string
    status: string
    price: number
    points: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cliente_id: string
    mesa_id?: string | null
  }

  export type ComandaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ComandaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente_id?: StringFieldUpdateOperationsInput | string
    mesa_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AvaliacaoCreateInput = {
    id?: string
    nota: number
    descricao: string
    created_at?: Date | string | null
    cliente: ClienteCreateNestedOneWithoutAvaliacaoInput
    comanda: ComandaCreateNestedOneWithoutAvaliacaoInput
  }

  export type AvaliacaoUncheckedCreateInput = {
    id?: string
    nota: number
    descricao: string
    created_at?: Date | string | null
    cliente_id: string
    comanda_id: string
  }

  export type AvaliacaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente?: ClienteUpdateOneRequiredWithoutAvaliacaoNestedInput
    comanda?: ComandaUpdateOneRequiredWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente_id?: StringFieldUpdateOperationsInput | string
    comanda_id?: StringFieldUpdateOperationsInput | string
  }

  export type AvaliacaoCreateManyInput = {
    id?: string
    nota: number
    descricao: string
    created_at?: Date | string | null
    cliente_id: string
    comanda_id: string
  }

  export type AvaliacaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AvaliacaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente_id?: StringFieldUpdateOperationsInput | string
    comanda_id?: StringFieldUpdateOperationsInput | string
  }

  export type ItemCreateInput = {
    id?: string
    qtd: number
    price: number
    points?: number
    removidos?: NullableJsonNullValueInput | InputJsonValue
    adicionais?: NullableJsonNullValueInput | InputJsonValue
    observacoes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    pedido: PedidoCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutItemsInput
    Item_adicional?: Item_adicionalCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    id?: string
    qtd: number
    price: number
    points?: number
    removidos?: NullableJsonNullValueInput | InputJsonValue
    adicionais?: NullableJsonNullValueInput | InputJsonValue
    observacoes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    pedido_id: string
    product_id: string
    Item_adicional?: Item_adicionalUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    removidos?: NullableJsonNullValueInput | InputJsonValue
    adicionais?: NullableJsonNullValueInput | InputJsonValue
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pedido?: PedidoUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutItemsNestedInput
    Item_adicional?: Item_adicionalUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    removidos?: NullableJsonNullValueInput | InputJsonValue
    adicionais?: NullableJsonNullValueInput | InputJsonValue
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pedido_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    Item_adicional?: Item_adicionalUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    id?: string
    qtd: number
    price: number
    points?: number
    removidos?: NullableJsonNullValueInput | InputJsonValue
    adicionais?: NullableJsonNullValueInput | InputJsonValue
    observacoes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    pedido_id: string
    product_id: string
  }

  export type ItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    removidos?: NullableJsonNullValueInput | InputJsonValue
    adicionais?: NullableJsonNullValueInput | InputJsonValue
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    removidos?: NullableJsonNullValueInput | InputJsonValue
    adicionais?: NullableJsonNullValueInput | InputJsonValue
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pedido_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
  }

  export type IngredienteCreateInput = {
    id?: string
    nome: string
    price: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Product_ingrediente?: Product_ingredienteCreateNestedManyWithoutIngredienteInput
  }

  export type IngredienteUncheckedCreateInput = {
    id?: string
    nome: string
    price: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Product_ingrediente?: Product_ingredienteUncheckedCreateNestedManyWithoutIngredienteInput
  }

  export type IngredienteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Product_ingrediente?: Product_ingredienteUpdateManyWithoutIngredienteNestedInput
  }

  export type IngredienteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Product_ingrediente?: Product_ingredienteUncheckedUpdateManyWithoutIngredienteNestedInput
  }

  export type IngredienteCreateManyInput = {
    id?: string
    nome: string
    price: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type IngredienteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IngredienteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Product_ingredienteCreateInput = {
    id?: string
    qtd?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    product: ProductCreateNestedOneWithoutProduct_ingredienteInput
    ingrediente: IngredienteCreateNestedOneWithoutProduct_ingredienteInput
  }

  export type Product_ingredienteUncheckedCreateInput = {
    id?: string
    qtd?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    product_id: string
    ingrediente_id: string
  }

  export type Product_ingredienteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product?: ProductUpdateOneRequiredWithoutProduct_ingredienteNestedInput
    ingrediente?: IngredienteUpdateOneRequiredWithoutProduct_ingredienteNestedInput
  }

  export type Product_ingredienteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_id?: StringFieldUpdateOperationsInput | string
    ingrediente_id?: StringFieldUpdateOperationsInput | string
  }

  export type Product_ingredienteCreateManyInput = {
    id?: string
    qtd?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    product_id: string
    ingrediente_id: string
  }

  export type Product_ingredienteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Product_ingredienteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_id?: StringFieldUpdateOperationsInput | string
    ingrediente_id?: StringFieldUpdateOperationsInput | string
  }

  export type AdicionalCreateInput = {
    id?: string
    nome: string
    price: number
    points?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Item_adicional?: Item_adicionalCreateNestedManyWithoutAdicionalInput
  }

  export type AdicionalUncheckedCreateInput = {
    id?: string
    nome: string
    price: number
    points?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Item_adicional?: Item_adicionalUncheckedCreateNestedManyWithoutAdicionalInput
  }

  export type AdicionalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Item_adicional?: Item_adicionalUpdateManyWithoutAdicionalNestedInput
  }

  export type AdicionalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Item_adicional?: Item_adicionalUncheckedUpdateManyWithoutAdicionalNestedInput
  }

  export type AdicionalCreateManyInput = {
    id?: string
    nome: string
    price: number
    points?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type AdicionalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdicionalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Item_adicionalCreateInput = {
    id?: string
    qtd?: number
    item: ItemCreateNestedOneWithoutItem_adicionalInput
    adicional: AdicionalCreateNestedOneWithoutItem_adicionalInput
  }

  export type Item_adicionalUncheckedCreateInput = {
    id?: string
    qtd?: number
    item_id: string
    adicional_id: string
  }

  export type Item_adicionalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd?: IntFieldUpdateOperationsInput | number
    item?: ItemUpdateOneRequiredWithoutItem_adicionalNestedInput
    adicional?: AdicionalUpdateOneRequiredWithoutItem_adicionalNestedInput
  }

  export type Item_adicionalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd?: IntFieldUpdateOperationsInput | number
    item_id?: StringFieldUpdateOperationsInput | string
    adicional_id?: StringFieldUpdateOperationsInput | string
  }

  export type Item_adicionalCreateManyInput = {
    id?: string
    qtd?: number
    item_id: string
    adicional_id: string
  }

  export type Item_adicionalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd?: IntFieldUpdateOperationsInput | number
  }

  export type Item_adicionalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd?: IntFieldUpdateOperationsInput | number
    item_id?: StringFieldUpdateOperationsInput | string
    adicional_id?: StringFieldUpdateOperationsInput | string
  }

  export type MesaCreateInput = {
    id?: string
    numero_mesa: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Comanda?: ComandaCreateNestedManyWithoutMesaInput
  }

  export type MesaUncheckedCreateInput = {
    id?: string
    numero_mesa: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Comanda?: ComandaUncheckedCreateNestedManyWithoutMesaInput
  }

  export type MesaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero_mesa?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Comanda?: ComandaUpdateManyWithoutMesaNestedInput
  }

  export type MesaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero_mesa?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Comanda?: ComandaUncheckedUpdateManyWithoutMesaNestedInput
  }

  export type MesaCreateManyInput = {
    id?: string
    numero_mesa: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type MesaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero_mesa?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MesaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero_mesa?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FuncionarioCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    funcao?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FuncionarioMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    funcao?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FuncionarioMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    funcao?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AvaliacaoListRelationFilter = {
    every?: AvaliacaoWhereInput
    some?: AvaliacaoWhereInput
    none?: AvaliacaoWhereInput
  }

  export type FavoritoListRelationFilter = {
    every?: FavoritoWhereInput
    some?: FavoritoWhereInput
    none?: FavoritoWhereInput
  }

  export type ComandaListRelationFilter = {
    every?: ComandaWhereInput
    some?: ComandaWhereInput
    none?: ComandaWhereInput
  }

  export type PedidoListRelationFilter = {
    every?: PedidoWhereInput
    some?: PedidoWhereInput
    none?: PedidoWhereInput
  }

  export type AvaliacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoritoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComandaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cpf?: SortOrder
    data_nasc?: SortOrder
    image_url?: SortOrder
    points?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    points?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cpf?: SortOrder
    data_nasc?: SortOrder
    image_url?: SortOrder
    points?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cpf?: SortOrder
    data_nasc?: SortOrder
    image_url?: SortOrder
    points?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    points?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type FavoritoCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    product_id?: SortOrder
    cliente_id?: SortOrder
  }

  export type FavoritoMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    product_id?: SortOrder
    cliente_id?: SortOrder
  }

  export type FavoritoMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    product_id?: SortOrder
    cliente_id?: SortOrder
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ItemListRelationFilter = {
    every?: ItemWhereInput
    some?: ItemWhereInput
    none?: ItemWhereInput
  }

  export type Product_ingredienteListRelationFilter = {
    every?: Product_ingredienteWhereInput
    some?: Product_ingredienteWhereInput
    none?: Product_ingredienteWhereInput
  }

  export type ItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Product_ingredienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    points?: SortOrder
    description?: SortOrder
    promocao?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    category_id?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
    points?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    points?: SortOrder
    description?: SortOrder
    promocao?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    category_id?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    points?: SortOrder
    description?: SortOrder
    promocao?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    category_id?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
    points?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ComandaScalarRelationFilter = {
    is?: ComandaWhereInput
    isNot?: ComandaWhereInput
  }

  export type PedidoCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    price?: SortOrder
    points?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    cliente_id?: SortOrder
    comanda_id?: SortOrder
  }

  export type PedidoAvgOrderByAggregateInput = {
    price?: SortOrder
    points?: SortOrder
  }

  export type PedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    price?: SortOrder
    points?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    cliente_id?: SortOrder
    comanda_id?: SortOrder
  }

  export type PedidoMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    price?: SortOrder
    points?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    cliente_id?: SortOrder
    comanda_id?: SortOrder
  }

  export type PedidoSumOrderByAggregateInput = {
    price?: SortOrder
    points?: SortOrder
  }

  export type MesaNullableScalarRelationFilter = {
    is?: MesaWhereInput | null
    isNot?: MesaWhereInput | null
  }

  export type ComandaCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    price?: SortOrder
    points?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    cliente_id?: SortOrder
    mesa_id?: SortOrder
  }

  export type ComandaAvgOrderByAggregateInput = {
    price?: SortOrder
    points?: SortOrder
  }

  export type ComandaMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    price?: SortOrder
    points?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    cliente_id?: SortOrder
    mesa_id?: SortOrder
  }

  export type ComandaMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    price?: SortOrder
    points?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    cliente_id?: SortOrder
    mesa_id?: SortOrder
  }

  export type ComandaSumOrderByAggregateInput = {
    price?: SortOrder
    points?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AvaliacaoCountOrderByAggregateInput = {
    id?: SortOrder
    nota?: SortOrder
    descricao?: SortOrder
    created_at?: SortOrder
    cliente_id?: SortOrder
    comanda_id?: SortOrder
  }

  export type AvaliacaoAvgOrderByAggregateInput = {
    nota?: SortOrder
  }

  export type AvaliacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    nota?: SortOrder
    descricao?: SortOrder
    created_at?: SortOrder
    cliente_id?: SortOrder
    comanda_id?: SortOrder
  }

  export type AvaliacaoMinOrderByAggregateInput = {
    id?: SortOrder
    nota?: SortOrder
    descricao?: SortOrder
    created_at?: SortOrder
    cliente_id?: SortOrder
    comanda_id?: SortOrder
  }

  export type AvaliacaoSumOrderByAggregateInput = {
    nota?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PedidoScalarRelationFilter = {
    is?: PedidoWhereInput
    isNot?: PedidoWhereInput
  }

  export type Item_adicionalListRelationFilter = {
    every?: Item_adicionalWhereInput
    some?: Item_adicionalWhereInput
    none?: Item_adicionalWhereInput
  }

  export type Item_adicionalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    qtd?: SortOrder
    price?: SortOrder
    points?: SortOrder
    removidos?: SortOrder
    adicionais?: SortOrder
    observacoes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    pedido_id?: SortOrder
    product_id?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    qtd?: SortOrder
    price?: SortOrder
    points?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    qtd?: SortOrder
    price?: SortOrder
    points?: SortOrder
    observacoes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    pedido_id?: SortOrder
    product_id?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    qtd?: SortOrder
    price?: SortOrder
    points?: SortOrder
    observacoes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    pedido_id?: SortOrder
    product_id?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    qtd?: SortOrder
    price?: SortOrder
    points?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IngredienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type IngredienteAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type IngredienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type IngredienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type IngredienteSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type IngredienteScalarRelationFilter = {
    is?: IngredienteWhereInput
    isNot?: IngredienteWhereInput
  }

  export type Product_ingredienteCountOrderByAggregateInput = {
    id?: SortOrder
    qtd?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    product_id?: SortOrder
    ingrediente_id?: SortOrder
  }

  export type Product_ingredienteMaxOrderByAggregateInput = {
    id?: SortOrder
    qtd?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    product_id?: SortOrder
    ingrediente_id?: SortOrder
  }

  export type Product_ingredienteMinOrderByAggregateInput = {
    id?: SortOrder
    qtd?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    product_id?: SortOrder
    ingrediente_id?: SortOrder
  }

  export type AdicionalCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    price?: SortOrder
    points?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AdicionalAvgOrderByAggregateInput = {
    price?: SortOrder
    points?: SortOrder
  }

  export type AdicionalMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    price?: SortOrder
    points?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AdicionalMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    price?: SortOrder
    points?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AdicionalSumOrderByAggregateInput = {
    price?: SortOrder
    points?: SortOrder
  }

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type AdicionalScalarRelationFilter = {
    is?: AdicionalWhereInput
    isNot?: AdicionalWhereInput
  }

  export type Item_adicionalCountOrderByAggregateInput = {
    id?: SortOrder
    qtd?: SortOrder
    item_id?: SortOrder
    adicional_id?: SortOrder
  }

  export type Item_adicionalAvgOrderByAggregateInput = {
    qtd?: SortOrder
  }

  export type Item_adicionalMaxOrderByAggregateInput = {
    id?: SortOrder
    qtd?: SortOrder
    item_id?: SortOrder
    adicional_id?: SortOrder
  }

  export type Item_adicionalMinOrderByAggregateInput = {
    id?: SortOrder
    qtd?: SortOrder
    item_id?: SortOrder
    adicional_id?: SortOrder
  }

  export type Item_adicionalSumOrderByAggregateInput = {
    qtd?: SortOrder
  }

  export type MesaCountOrderByAggregateInput = {
    id?: SortOrder
    numero_mesa?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MesaAvgOrderByAggregateInput = {
    numero_mesa?: SortOrder
  }

  export type MesaMaxOrderByAggregateInput = {
    id?: SortOrder
    numero_mesa?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MesaMinOrderByAggregateInput = {
    id?: SortOrder
    numero_mesa?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MesaSumOrderByAggregateInput = {
    numero_mesa?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AvaliacaoCreateNestedManyWithoutClienteInput = {
    create?: XOR<AvaliacaoCreateWithoutClienteInput, AvaliacaoUncheckedCreateWithoutClienteInput> | AvaliacaoCreateWithoutClienteInput[] | AvaliacaoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutClienteInput | AvaliacaoCreateOrConnectWithoutClienteInput[]
    createMany?: AvaliacaoCreateManyClienteInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type FavoritoCreateNestedManyWithoutClienteInput = {
    create?: XOR<FavoritoCreateWithoutClienteInput, FavoritoUncheckedCreateWithoutClienteInput> | FavoritoCreateWithoutClienteInput[] | FavoritoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutClienteInput | FavoritoCreateOrConnectWithoutClienteInput[]
    createMany?: FavoritoCreateManyClienteInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type ComandaCreateNestedManyWithoutClienteInput = {
    create?: XOR<ComandaCreateWithoutClienteInput, ComandaUncheckedCreateWithoutClienteInput> | ComandaCreateWithoutClienteInput[] | ComandaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ComandaCreateOrConnectWithoutClienteInput | ComandaCreateOrConnectWithoutClienteInput[]
    createMany?: ComandaCreateManyClienteInputEnvelope
    connect?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
  }

  export type PedidoCreateNestedManyWithoutClienteInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type AvaliacaoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<AvaliacaoCreateWithoutClienteInput, AvaliacaoUncheckedCreateWithoutClienteInput> | AvaliacaoCreateWithoutClienteInput[] | AvaliacaoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutClienteInput | AvaliacaoCreateOrConnectWithoutClienteInput[]
    createMany?: AvaliacaoCreateManyClienteInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type FavoritoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<FavoritoCreateWithoutClienteInput, FavoritoUncheckedCreateWithoutClienteInput> | FavoritoCreateWithoutClienteInput[] | FavoritoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutClienteInput | FavoritoCreateOrConnectWithoutClienteInput[]
    createMany?: FavoritoCreateManyClienteInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type ComandaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<ComandaCreateWithoutClienteInput, ComandaUncheckedCreateWithoutClienteInput> | ComandaCreateWithoutClienteInput[] | ComandaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ComandaCreateOrConnectWithoutClienteInput | ComandaCreateOrConnectWithoutClienteInput[]
    createMany?: ComandaCreateManyClienteInputEnvelope
    connect?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AvaliacaoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutClienteInput, AvaliacaoUncheckedCreateWithoutClienteInput> | AvaliacaoCreateWithoutClienteInput[] | AvaliacaoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutClienteInput | AvaliacaoCreateOrConnectWithoutClienteInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutClienteInput | AvaliacaoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: AvaliacaoCreateManyClienteInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutClienteInput | AvaliacaoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutClienteInput | AvaliacaoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type FavoritoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<FavoritoCreateWithoutClienteInput, FavoritoUncheckedCreateWithoutClienteInput> | FavoritoCreateWithoutClienteInput[] | FavoritoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutClienteInput | FavoritoCreateOrConnectWithoutClienteInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutClienteInput | FavoritoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: FavoritoCreateManyClienteInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutClienteInput | FavoritoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutClienteInput | FavoritoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type ComandaUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ComandaCreateWithoutClienteInput, ComandaUncheckedCreateWithoutClienteInput> | ComandaCreateWithoutClienteInput[] | ComandaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ComandaCreateOrConnectWithoutClienteInput | ComandaCreateOrConnectWithoutClienteInput[]
    upsert?: ComandaUpsertWithWhereUniqueWithoutClienteInput | ComandaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ComandaCreateManyClienteInputEnvelope
    set?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
    disconnect?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
    delete?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
    connect?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
    update?: ComandaUpdateWithWhereUniqueWithoutClienteInput | ComandaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ComandaUpdateManyWithWhereWithoutClienteInput | ComandaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ComandaScalarWhereInput | ComandaScalarWhereInput[]
  }

  export type PedidoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutClienteInput | PedidoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutClienteInput | PedidoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutClienteInput | PedidoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type AvaliacaoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutClienteInput, AvaliacaoUncheckedCreateWithoutClienteInput> | AvaliacaoCreateWithoutClienteInput[] | AvaliacaoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutClienteInput | AvaliacaoCreateOrConnectWithoutClienteInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutClienteInput | AvaliacaoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: AvaliacaoCreateManyClienteInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutClienteInput | AvaliacaoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutClienteInput | AvaliacaoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type FavoritoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<FavoritoCreateWithoutClienteInput, FavoritoUncheckedCreateWithoutClienteInput> | FavoritoCreateWithoutClienteInput[] | FavoritoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutClienteInput | FavoritoCreateOrConnectWithoutClienteInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutClienteInput | FavoritoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: FavoritoCreateManyClienteInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutClienteInput | FavoritoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutClienteInput | FavoritoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type ComandaUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ComandaCreateWithoutClienteInput, ComandaUncheckedCreateWithoutClienteInput> | ComandaCreateWithoutClienteInput[] | ComandaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ComandaCreateOrConnectWithoutClienteInput | ComandaCreateOrConnectWithoutClienteInput[]
    upsert?: ComandaUpsertWithWhereUniqueWithoutClienteInput | ComandaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ComandaCreateManyClienteInputEnvelope
    set?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
    disconnect?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
    delete?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
    connect?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
    update?: ComandaUpdateWithWhereUniqueWithoutClienteInput | ComandaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ComandaUpdateManyWithWhereWithoutClienteInput | ComandaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ComandaScalarWhereInput | ComandaScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutClienteInput | PedidoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutClienteInput | PedidoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutClienteInput | PedidoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutFavoritosInput = {
    create?: XOR<ProductCreateWithoutFavoritosInput, ProductUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: ProductCreateOrConnectWithoutFavoritosInput
    connect?: ProductWhereUniqueInput
  }

  export type ClienteCreateNestedOneWithoutFavoritosInput = {
    create?: XOR<ClienteCreateWithoutFavoritosInput, ClienteUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutFavoritosInput
    connect?: ClienteWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutFavoritosNestedInput = {
    create?: XOR<ProductCreateWithoutFavoritosInput, ProductUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: ProductCreateOrConnectWithoutFavoritosInput
    upsert?: ProductUpsertWithoutFavoritosInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutFavoritosInput, ProductUpdateWithoutFavoritosInput>, ProductUncheckedUpdateWithoutFavoritosInput>
  }

  export type ClienteUpdateOneRequiredWithoutFavoritosNestedInput = {
    create?: XOR<ClienteCreateWithoutFavoritosInput, ClienteUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutFavoritosInput
    upsert?: ClienteUpsertWithoutFavoritosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutFavoritosInput, ClienteUpdateWithoutFavoritosInput>, ClienteUncheckedUpdateWithoutFavoritosInput>
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type ItemCreateNestedManyWithoutProductInput = {
    create?: XOR<ItemCreateWithoutProductInput, ItemUncheckedCreateWithoutProductInput> | ItemCreateWithoutProductInput[] | ItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutProductInput | ItemCreateOrConnectWithoutProductInput[]
    createMany?: ItemCreateManyProductInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type FavoritoCreateNestedManyWithoutProductInput = {
    create?: XOR<FavoritoCreateWithoutProductInput, FavoritoUncheckedCreateWithoutProductInput> | FavoritoCreateWithoutProductInput[] | FavoritoUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutProductInput | FavoritoCreateOrConnectWithoutProductInput[]
    createMany?: FavoritoCreateManyProductInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type Product_ingredienteCreateNestedManyWithoutProductInput = {
    create?: XOR<Product_ingredienteCreateWithoutProductInput, Product_ingredienteUncheckedCreateWithoutProductInput> | Product_ingredienteCreateWithoutProductInput[] | Product_ingredienteUncheckedCreateWithoutProductInput[]
    connectOrCreate?: Product_ingredienteCreateOrConnectWithoutProductInput | Product_ingredienteCreateOrConnectWithoutProductInput[]
    createMany?: Product_ingredienteCreateManyProductInputEnvelope
    connect?: Product_ingredienteWhereUniqueInput | Product_ingredienteWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ItemCreateWithoutProductInput, ItemUncheckedCreateWithoutProductInput> | ItemCreateWithoutProductInput[] | ItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutProductInput | ItemCreateOrConnectWithoutProductInput[]
    createMany?: ItemCreateManyProductInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type FavoritoUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<FavoritoCreateWithoutProductInput, FavoritoUncheckedCreateWithoutProductInput> | FavoritoCreateWithoutProductInput[] | FavoritoUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutProductInput | FavoritoCreateOrConnectWithoutProductInput[]
    createMany?: FavoritoCreateManyProductInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type Product_ingredienteUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Product_ingredienteCreateWithoutProductInput, Product_ingredienteUncheckedCreateWithoutProductInput> | Product_ingredienteCreateWithoutProductInput[] | Product_ingredienteUncheckedCreateWithoutProductInput[]
    connectOrCreate?: Product_ingredienteCreateOrConnectWithoutProductInput | Product_ingredienteCreateOrConnectWithoutProductInput[]
    createMany?: Product_ingredienteCreateManyProductInputEnvelope
    connect?: Product_ingredienteWhereUniqueInput | Product_ingredienteWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type ItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<ItemCreateWithoutProductInput, ItemUncheckedCreateWithoutProductInput> | ItemCreateWithoutProductInput[] | ItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutProductInput | ItemCreateOrConnectWithoutProductInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutProductInput | ItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ItemCreateManyProductInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutProductInput | ItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutProductInput | ItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type FavoritoUpdateManyWithoutProductNestedInput = {
    create?: XOR<FavoritoCreateWithoutProductInput, FavoritoUncheckedCreateWithoutProductInput> | FavoritoCreateWithoutProductInput[] | FavoritoUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutProductInput | FavoritoCreateOrConnectWithoutProductInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutProductInput | FavoritoUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: FavoritoCreateManyProductInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutProductInput | FavoritoUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutProductInput | FavoritoUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type Product_ingredienteUpdateManyWithoutProductNestedInput = {
    create?: XOR<Product_ingredienteCreateWithoutProductInput, Product_ingredienteUncheckedCreateWithoutProductInput> | Product_ingredienteCreateWithoutProductInput[] | Product_ingredienteUncheckedCreateWithoutProductInput[]
    connectOrCreate?: Product_ingredienteCreateOrConnectWithoutProductInput | Product_ingredienteCreateOrConnectWithoutProductInput[]
    upsert?: Product_ingredienteUpsertWithWhereUniqueWithoutProductInput | Product_ingredienteUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: Product_ingredienteCreateManyProductInputEnvelope
    set?: Product_ingredienteWhereUniqueInput | Product_ingredienteWhereUniqueInput[]
    disconnect?: Product_ingredienteWhereUniqueInput | Product_ingredienteWhereUniqueInput[]
    delete?: Product_ingredienteWhereUniqueInput | Product_ingredienteWhereUniqueInput[]
    connect?: Product_ingredienteWhereUniqueInput | Product_ingredienteWhereUniqueInput[]
    update?: Product_ingredienteUpdateWithWhereUniqueWithoutProductInput | Product_ingredienteUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: Product_ingredienteUpdateManyWithWhereWithoutProductInput | Product_ingredienteUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: Product_ingredienteScalarWhereInput | Product_ingredienteScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ItemCreateWithoutProductInput, ItemUncheckedCreateWithoutProductInput> | ItemCreateWithoutProductInput[] | ItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutProductInput | ItemCreateOrConnectWithoutProductInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutProductInput | ItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ItemCreateManyProductInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutProductInput | ItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutProductInput | ItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type FavoritoUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<FavoritoCreateWithoutProductInput, FavoritoUncheckedCreateWithoutProductInput> | FavoritoCreateWithoutProductInput[] | FavoritoUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutProductInput | FavoritoCreateOrConnectWithoutProductInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutProductInput | FavoritoUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: FavoritoCreateManyProductInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutProductInput | FavoritoUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutProductInput | FavoritoUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type Product_ingredienteUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Product_ingredienteCreateWithoutProductInput, Product_ingredienteUncheckedCreateWithoutProductInput> | Product_ingredienteCreateWithoutProductInput[] | Product_ingredienteUncheckedCreateWithoutProductInput[]
    connectOrCreate?: Product_ingredienteCreateOrConnectWithoutProductInput | Product_ingredienteCreateOrConnectWithoutProductInput[]
    upsert?: Product_ingredienteUpsertWithWhereUniqueWithoutProductInput | Product_ingredienteUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: Product_ingredienteCreateManyProductInputEnvelope
    set?: Product_ingredienteWhereUniqueInput | Product_ingredienteWhereUniqueInput[]
    disconnect?: Product_ingredienteWhereUniqueInput | Product_ingredienteWhereUniqueInput[]
    delete?: Product_ingredienteWhereUniqueInput | Product_ingredienteWhereUniqueInput[]
    connect?: Product_ingredienteWhereUniqueInput | Product_ingredienteWhereUniqueInput[]
    update?: Product_ingredienteUpdateWithWhereUniqueWithoutProductInput | Product_ingredienteUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: Product_ingredienteUpdateManyWithWhereWithoutProductInput | Product_ingredienteUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: Product_ingredienteScalarWhereInput | Product_ingredienteScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutPedidosInput = {
    create?: XOR<ClienteCreateWithoutPedidosInput, ClienteUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPedidosInput
    connect?: ClienteWhereUniqueInput
  }

  export type ComandaCreateNestedOneWithoutPedidoInput = {
    create?: XOR<ComandaCreateWithoutPedidoInput, ComandaUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: ComandaCreateOrConnectWithoutPedidoInput
    connect?: ComandaWhereUniqueInput
  }

  export type ItemCreateNestedManyWithoutPedidoInput = {
    create?: XOR<ItemCreateWithoutPedidoInput, ItemUncheckedCreateWithoutPedidoInput> | ItemCreateWithoutPedidoInput[] | ItemUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutPedidoInput | ItemCreateOrConnectWithoutPedidoInput[]
    createMany?: ItemCreateManyPedidoInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<ItemCreateWithoutPedidoInput, ItemUncheckedCreateWithoutPedidoInput> | ItemCreateWithoutPedidoInput[] | ItemUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutPedidoInput | ItemCreateOrConnectWithoutPedidoInput[]
    createMany?: ItemCreateManyPedidoInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type ClienteUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<ClienteCreateWithoutPedidosInput, ClienteUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPedidosInput
    upsert?: ClienteUpsertWithoutPedidosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutPedidosInput, ClienteUpdateWithoutPedidosInput>, ClienteUncheckedUpdateWithoutPedidosInput>
  }

  export type ComandaUpdateOneRequiredWithoutPedidoNestedInput = {
    create?: XOR<ComandaCreateWithoutPedidoInput, ComandaUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: ComandaCreateOrConnectWithoutPedidoInput
    upsert?: ComandaUpsertWithoutPedidoInput
    connect?: ComandaWhereUniqueInput
    update?: XOR<XOR<ComandaUpdateToOneWithWhereWithoutPedidoInput, ComandaUpdateWithoutPedidoInput>, ComandaUncheckedUpdateWithoutPedidoInput>
  }

  export type ItemUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<ItemCreateWithoutPedidoInput, ItemUncheckedCreateWithoutPedidoInput> | ItemCreateWithoutPedidoInput[] | ItemUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutPedidoInput | ItemCreateOrConnectWithoutPedidoInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutPedidoInput | ItemUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: ItemCreateManyPedidoInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutPedidoInput | ItemUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutPedidoInput | ItemUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<ItemCreateWithoutPedidoInput, ItemUncheckedCreateWithoutPedidoInput> | ItemCreateWithoutPedidoInput[] | ItemUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutPedidoInput | ItemCreateOrConnectWithoutPedidoInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutPedidoInput | ItemUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: ItemCreateManyPedidoInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutPedidoInput | ItemUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutPedidoInput | ItemUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutComandasInput = {
    create?: XOR<ClienteCreateWithoutComandasInput, ClienteUncheckedCreateWithoutComandasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutComandasInput
    connect?: ClienteWhereUniqueInput
  }

  export type MesaCreateNestedOneWithoutComandaInput = {
    create?: XOR<MesaCreateWithoutComandaInput, MesaUncheckedCreateWithoutComandaInput>
    connectOrCreate?: MesaCreateOrConnectWithoutComandaInput
    connect?: MesaWhereUniqueInput
  }

  export type AvaliacaoCreateNestedManyWithoutComandaInput = {
    create?: XOR<AvaliacaoCreateWithoutComandaInput, AvaliacaoUncheckedCreateWithoutComandaInput> | AvaliacaoCreateWithoutComandaInput[] | AvaliacaoUncheckedCreateWithoutComandaInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutComandaInput | AvaliacaoCreateOrConnectWithoutComandaInput[]
    createMany?: AvaliacaoCreateManyComandaInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type PedidoCreateNestedManyWithoutComandaInput = {
    create?: XOR<PedidoCreateWithoutComandaInput, PedidoUncheckedCreateWithoutComandaInput> | PedidoCreateWithoutComandaInput[] | PedidoUncheckedCreateWithoutComandaInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutComandaInput | PedidoCreateOrConnectWithoutComandaInput[]
    createMany?: PedidoCreateManyComandaInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type AvaliacaoUncheckedCreateNestedManyWithoutComandaInput = {
    create?: XOR<AvaliacaoCreateWithoutComandaInput, AvaliacaoUncheckedCreateWithoutComandaInput> | AvaliacaoCreateWithoutComandaInput[] | AvaliacaoUncheckedCreateWithoutComandaInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutComandaInput | AvaliacaoCreateOrConnectWithoutComandaInput[]
    createMany?: AvaliacaoCreateManyComandaInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutComandaInput = {
    create?: XOR<PedidoCreateWithoutComandaInput, PedidoUncheckedCreateWithoutComandaInput> | PedidoCreateWithoutComandaInput[] | PedidoUncheckedCreateWithoutComandaInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutComandaInput | PedidoCreateOrConnectWithoutComandaInput[]
    createMany?: PedidoCreateManyComandaInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type ClienteUpdateOneRequiredWithoutComandasNestedInput = {
    create?: XOR<ClienteCreateWithoutComandasInput, ClienteUncheckedCreateWithoutComandasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutComandasInput
    upsert?: ClienteUpsertWithoutComandasInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutComandasInput, ClienteUpdateWithoutComandasInput>, ClienteUncheckedUpdateWithoutComandasInput>
  }

  export type MesaUpdateOneWithoutComandaNestedInput = {
    create?: XOR<MesaCreateWithoutComandaInput, MesaUncheckedCreateWithoutComandaInput>
    connectOrCreate?: MesaCreateOrConnectWithoutComandaInput
    upsert?: MesaUpsertWithoutComandaInput
    disconnect?: MesaWhereInput | boolean
    delete?: MesaWhereInput | boolean
    connect?: MesaWhereUniqueInput
    update?: XOR<XOR<MesaUpdateToOneWithWhereWithoutComandaInput, MesaUpdateWithoutComandaInput>, MesaUncheckedUpdateWithoutComandaInput>
  }

  export type AvaliacaoUpdateManyWithoutComandaNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutComandaInput, AvaliacaoUncheckedCreateWithoutComandaInput> | AvaliacaoCreateWithoutComandaInput[] | AvaliacaoUncheckedCreateWithoutComandaInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutComandaInput | AvaliacaoCreateOrConnectWithoutComandaInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutComandaInput | AvaliacaoUpsertWithWhereUniqueWithoutComandaInput[]
    createMany?: AvaliacaoCreateManyComandaInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutComandaInput | AvaliacaoUpdateWithWhereUniqueWithoutComandaInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutComandaInput | AvaliacaoUpdateManyWithWhereWithoutComandaInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type PedidoUpdateManyWithoutComandaNestedInput = {
    create?: XOR<PedidoCreateWithoutComandaInput, PedidoUncheckedCreateWithoutComandaInput> | PedidoCreateWithoutComandaInput[] | PedidoUncheckedCreateWithoutComandaInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutComandaInput | PedidoCreateOrConnectWithoutComandaInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutComandaInput | PedidoUpsertWithWhereUniqueWithoutComandaInput[]
    createMany?: PedidoCreateManyComandaInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutComandaInput | PedidoUpdateWithWhereUniqueWithoutComandaInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutComandaInput | PedidoUpdateManyWithWhereWithoutComandaInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type AvaliacaoUncheckedUpdateManyWithoutComandaNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutComandaInput, AvaliacaoUncheckedCreateWithoutComandaInput> | AvaliacaoCreateWithoutComandaInput[] | AvaliacaoUncheckedCreateWithoutComandaInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutComandaInput | AvaliacaoCreateOrConnectWithoutComandaInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutComandaInput | AvaliacaoUpsertWithWhereUniqueWithoutComandaInput[]
    createMany?: AvaliacaoCreateManyComandaInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutComandaInput | AvaliacaoUpdateWithWhereUniqueWithoutComandaInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutComandaInput | AvaliacaoUpdateManyWithWhereWithoutComandaInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutComandaNestedInput = {
    create?: XOR<PedidoCreateWithoutComandaInput, PedidoUncheckedCreateWithoutComandaInput> | PedidoCreateWithoutComandaInput[] | PedidoUncheckedCreateWithoutComandaInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutComandaInput | PedidoCreateOrConnectWithoutComandaInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutComandaInput | PedidoUpsertWithWhereUniqueWithoutComandaInput[]
    createMany?: PedidoCreateManyComandaInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutComandaInput | PedidoUpdateWithWhereUniqueWithoutComandaInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutComandaInput | PedidoUpdateManyWithWhereWithoutComandaInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutAvaliacaoInput = {
    create?: XOR<ClienteCreateWithoutAvaliacaoInput, ClienteUncheckedCreateWithoutAvaliacaoInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutAvaliacaoInput
    connect?: ClienteWhereUniqueInput
  }

  export type ComandaCreateNestedOneWithoutAvaliacaoInput = {
    create?: XOR<ComandaCreateWithoutAvaliacaoInput, ComandaUncheckedCreateWithoutAvaliacaoInput>
    connectOrCreate?: ComandaCreateOrConnectWithoutAvaliacaoInput
    connect?: ComandaWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClienteUpdateOneRequiredWithoutAvaliacaoNestedInput = {
    create?: XOR<ClienteCreateWithoutAvaliacaoInput, ClienteUncheckedCreateWithoutAvaliacaoInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutAvaliacaoInput
    upsert?: ClienteUpsertWithoutAvaliacaoInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutAvaliacaoInput, ClienteUpdateWithoutAvaliacaoInput>, ClienteUncheckedUpdateWithoutAvaliacaoInput>
  }

  export type ComandaUpdateOneRequiredWithoutAvaliacaoNestedInput = {
    create?: XOR<ComandaCreateWithoutAvaliacaoInput, ComandaUncheckedCreateWithoutAvaliacaoInput>
    connectOrCreate?: ComandaCreateOrConnectWithoutAvaliacaoInput
    upsert?: ComandaUpsertWithoutAvaliacaoInput
    connect?: ComandaWhereUniqueInput
    update?: XOR<XOR<ComandaUpdateToOneWithWhereWithoutAvaliacaoInput, ComandaUpdateWithoutAvaliacaoInput>, ComandaUncheckedUpdateWithoutAvaliacaoInput>
  }

  export type PedidoCreateNestedOneWithoutItemsInput = {
    create?: XOR<PedidoCreateWithoutItemsInput, PedidoUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutItemsInput
    connect?: PedidoWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutItemsInput = {
    create?: XOR<ProductCreateWithoutItemsInput, ProductUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type Item_adicionalCreateNestedManyWithoutItemInput = {
    create?: XOR<Item_adicionalCreateWithoutItemInput, Item_adicionalUncheckedCreateWithoutItemInput> | Item_adicionalCreateWithoutItemInput[] | Item_adicionalUncheckedCreateWithoutItemInput[]
    connectOrCreate?: Item_adicionalCreateOrConnectWithoutItemInput | Item_adicionalCreateOrConnectWithoutItemInput[]
    createMany?: Item_adicionalCreateManyItemInputEnvelope
    connect?: Item_adicionalWhereUniqueInput | Item_adicionalWhereUniqueInput[]
  }

  export type Item_adicionalUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<Item_adicionalCreateWithoutItemInput, Item_adicionalUncheckedCreateWithoutItemInput> | Item_adicionalCreateWithoutItemInput[] | Item_adicionalUncheckedCreateWithoutItemInput[]
    connectOrCreate?: Item_adicionalCreateOrConnectWithoutItemInput | Item_adicionalCreateOrConnectWithoutItemInput[]
    createMany?: Item_adicionalCreateManyItemInputEnvelope
    connect?: Item_adicionalWhereUniqueInput | Item_adicionalWhereUniqueInput[]
  }

  export type PedidoUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<PedidoCreateWithoutItemsInput, PedidoUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutItemsInput
    upsert?: PedidoUpsertWithoutItemsInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutItemsInput, PedidoUpdateWithoutItemsInput>, PedidoUncheckedUpdateWithoutItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<ProductCreateWithoutItemsInput, ProductUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutItemsInput
    upsert?: ProductUpsertWithoutItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutItemsInput, ProductUpdateWithoutItemsInput>, ProductUncheckedUpdateWithoutItemsInput>
  }

  export type Item_adicionalUpdateManyWithoutItemNestedInput = {
    create?: XOR<Item_adicionalCreateWithoutItemInput, Item_adicionalUncheckedCreateWithoutItemInput> | Item_adicionalCreateWithoutItemInput[] | Item_adicionalUncheckedCreateWithoutItemInput[]
    connectOrCreate?: Item_adicionalCreateOrConnectWithoutItemInput | Item_adicionalCreateOrConnectWithoutItemInput[]
    upsert?: Item_adicionalUpsertWithWhereUniqueWithoutItemInput | Item_adicionalUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: Item_adicionalCreateManyItemInputEnvelope
    set?: Item_adicionalWhereUniqueInput | Item_adicionalWhereUniqueInput[]
    disconnect?: Item_adicionalWhereUniqueInput | Item_adicionalWhereUniqueInput[]
    delete?: Item_adicionalWhereUniqueInput | Item_adicionalWhereUniqueInput[]
    connect?: Item_adicionalWhereUniqueInput | Item_adicionalWhereUniqueInput[]
    update?: Item_adicionalUpdateWithWhereUniqueWithoutItemInput | Item_adicionalUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: Item_adicionalUpdateManyWithWhereWithoutItemInput | Item_adicionalUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: Item_adicionalScalarWhereInput | Item_adicionalScalarWhereInput[]
  }

  export type Item_adicionalUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<Item_adicionalCreateWithoutItemInput, Item_adicionalUncheckedCreateWithoutItemInput> | Item_adicionalCreateWithoutItemInput[] | Item_adicionalUncheckedCreateWithoutItemInput[]
    connectOrCreate?: Item_adicionalCreateOrConnectWithoutItemInput | Item_adicionalCreateOrConnectWithoutItemInput[]
    upsert?: Item_adicionalUpsertWithWhereUniqueWithoutItemInput | Item_adicionalUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: Item_adicionalCreateManyItemInputEnvelope
    set?: Item_adicionalWhereUniqueInput | Item_adicionalWhereUniqueInput[]
    disconnect?: Item_adicionalWhereUniqueInput | Item_adicionalWhereUniqueInput[]
    delete?: Item_adicionalWhereUniqueInput | Item_adicionalWhereUniqueInput[]
    connect?: Item_adicionalWhereUniqueInput | Item_adicionalWhereUniqueInput[]
    update?: Item_adicionalUpdateWithWhereUniqueWithoutItemInput | Item_adicionalUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: Item_adicionalUpdateManyWithWhereWithoutItemInput | Item_adicionalUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: Item_adicionalScalarWhereInput | Item_adicionalScalarWhereInput[]
  }

  export type Product_ingredienteCreateNestedManyWithoutIngredienteInput = {
    create?: XOR<Product_ingredienteCreateWithoutIngredienteInput, Product_ingredienteUncheckedCreateWithoutIngredienteInput> | Product_ingredienteCreateWithoutIngredienteInput[] | Product_ingredienteUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: Product_ingredienteCreateOrConnectWithoutIngredienteInput | Product_ingredienteCreateOrConnectWithoutIngredienteInput[]
    createMany?: Product_ingredienteCreateManyIngredienteInputEnvelope
    connect?: Product_ingredienteWhereUniqueInput | Product_ingredienteWhereUniqueInput[]
  }

  export type Product_ingredienteUncheckedCreateNestedManyWithoutIngredienteInput = {
    create?: XOR<Product_ingredienteCreateWithoutIngredienteInput, Product_ingredienteUncheckedCreateWithoutIngredienteInput> | Product_ingredienteCreateWithoutIngredienteInput[] | Product_ingredienteUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: Product_ingredienteCreateOrConnectWithoutIngredienteInput | Product_ingredienteCreateOrConnectWithoutIngredienteInput[]
    createMany?: Product_ingredienteCreateManyIngredienteInputEnvelope
    connect?: Product_ingredienteWhereUniqueInput | Product_ingredienteWhereUniqueInput[]
  }

  export type Product_ingredienteUpdateManyWithoutIngredienteNestedInput = {
    create?: XOR<Product_ingredienteCreateWithoutIngredienteInput, Product_ingredienteUncheckedCreateWithoutIngredienteInput> | Product_ingredienteCreateWithoutIngredienteInput[] | Product_ingredienteUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: Product_ingredienteCreateOrConnectWithoutIngredienteInput | Product_ingredienteCreateOrConnectWithoutIngredienteInput[]
    upsert?: Product_ingredienteUpsertWithWhereUniqueWithoutIngredienteInput | Product_ingredienteUpsertWithWhereUniqueWithoutIngredienteInput[]
    createMany?: Product_ingredienteCreateManyIngredienteInputEnvelope
    set?: Product_ingredienteWhereUniqueInput | Product_ingredienteWhereUniqueInput[]
    disconnect?: Product_ingredienteWhereUniqueInput | Product_ingredienteWhereUniqueInput[]
    delete?: Product_ingredienteWhereUniqueInput | Product_ingredienteWhereUniqueInput[]
    connect?: Product_ingredienteWhereUniqueInput | Product_ingredienteWhereUniqueInput[]
    update?: Product_ingredienteUpdateWithWhereUniqueWithoutIngredienteInput | Product_ingredienteUpdateWithWhereUniqueWithoutIngredienteInput[]
    updateMany?: Product_ingredienteUpdateManyWithWhereWithoutIngredienteInput | Product_ingredienteUpdateManyWithWhereWithoutIngredienteInput[]
    deleteMany?: Product_ingredienteScalarWhereInput | Product_ingredienteScalarWhereInput[]
  }

  export type Product_ingredienteUncheckedUpdateManyWithoutIngredienteNestedInput = {
    create?: XOR<Product_ingredienteCreateWithoutIngredienteInput, Product_ingredienteUncheckedCreateWithoutIngredienteInput> | Product_ingredienteCreateWithoutIngredienteInput[] | Product_ingredienteUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: Product_ingredienteCreateOrConnectWithoutIngredienteInput | Product_ingredienteCreateOrConnectWithoutIngredienteInput[]
    upsert?: Product_ingredienteUpsertWithWhereUniqueWithoutIngredienteInput | Product_ingredienteUpsertWithWhereUniqueWithoutIngredienteInput[]
    createMany?: Product_ingredienteCreateManyIngredienteInputEnvelope
    set?: Product_ingredienteWhereUniqueInput | Product_ingredienteWhereUniqueInput[]
    disconnect?: Product_ingredienteWhereUniqueInput | Product_ingredienteWhereUniqueInput[]
    delete?: Product_ingredienteWhereUniqueInput | Product_ingredienteWhereUniqueInput[]
    connect?: Product_ingredienteWhereUniqueInput | Product_ingredienteWhereUniqueInput[]
    update?: Product_ingredienteUpdateWithWhereUniqueWithoutIngredienteInput | Product_ingredienteUpdateWithWhereUniqueWithoutIngredienteInput[]
    updateMany?: Product_ingredienteUpdateManyWithWhereWithoutIngredienteInput | Product_ingredienteUpdateManyWithWhereWithoutIngredienteInput[]
    deleteMany?: Product_ingredienteScalarWhereInput | Product_ingredienteScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutProduct_ingredienteInput = {
    create?: XOR<ProductCreateWithoutProduct_ingredienteInput, ProductUncheckedCreateWithoutProduct_ingredienteInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProduct_ingredienteInput
    connect?: ProductWhereUniqueInput
  }

  export type IngredienteCreateNestedOneWithoutProduct_ingredienteInput = {
    create?: XOR<IngredienteCreateWithoutProduct_ingredienteInput, IngredienteUncheckedCreateWithoutProduct_ingredienteInput>
    connectOrCreate?: IngredienteCreateOrConnectWithoutProduct_ingredienteInput
    connect?: IngredienteWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutProduct_ingredienteNestedInput = {
    create?: XOR<ProductCreateWithoutProduct_ingredienteInput, ProductUncheckedCreateWithoutProduct_ingredienteInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProduct_ingredienteInput
    upsert?: ProductUpsertWithoutProduct_ingredienteInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProduct_ingredienteInput, ProductUpdateWithoutProduct_ingredienteInput>, ProductUncheckedUpdateWithoutProduct_ingredienteInput>
  }

  export type IngredienteUpdateOneRequiredWithoutProduct_ingredienteNestedInput = {
    create?: XOR<IngredienteCreateWithoutProduct_ingredienteInput, IngredienteUncheckedCreateWithoutProduct_ingredienteInput>
    connectOrCreate?: IngredienteCreateOrConnectWithoutProduct_ingredienteInput
    upsert?: IngredienteUpsertWithoutProduct_ingredienteInput
    connect?: IngredienteWhereUniqueInput
    update?: XOR<XOR<IngredienteUpdateToOneWithWhereWithoutProduct_ingredienteInput, IngredienteUpdateWithoutProduct_ingredienteInput>, IngredienteUncheckedUpdateWithoutProduct_ingredienteInput>
  }

  export type Item_adicionalCreateNestedManyWithoutAdicionalInput = {
    create?: XOR<Item_adicionalCreateWithoutAdicionalInput, Item_adicionalUncheckedCreateWithoutAdicionalInput> | Item_adicionalCreateWithoutAdicionalInput[] | Item_adicionalUncheckedCreateWithoutAdicionalInput[]
    connectOrCreate?: Item_adicionalCreateOrConnectWithoutAdicionalInput | Item_adicionalCreateOrConnectWithoutAdicionalInput[]
    createMany?: Item_adicionalCreateManyAdicionalInputEnvelope
    connect?: Item_adicionalWhereUniqueInput | Item_adicionalWhereUniqueInput[]
  }

  export type Item_adicionalUncheckedCreateNestedManyWithoutAdicionalInput = {
    create?: XOR<Item_adicionalCreateWithoutAdicionalInput, Item_adicionalUncheckedCreateWithoutAdicionalInput> | Item_adicionalCreateWithoutAdicionalInput[] | Item_adicionalUncheckedCreateWithoutAdicionalInput[]
    connectOrCreate?: Item_adicionalCreateOrConnectWithoutAdicionalInput | Item_adicionalCreateOrConnectWithoutAdicionalInput[]
    createMany?: Item_adicionalCreateManyAdicionalInputEnvelope
    connect?: Item_adicionalWhereUniqueInput | Item_adicionalWhereUniqueInput[]
  }

  export type Item_adicionalUpdateManyWithoutAdicionalNestedInput = {
    create?: XOR<Item_adicionalCreateWithoutAdicionalInput, Item_adicionalUncheckedCreateWithoutAdicionalInput> | Item_adicionalCreateWithoutAdicionalInput[] | Item_adicionalUncheckedCreateWithoutAdicionalInput[]
    connectOrCreate?: Item_adicionalCreateOrConnectWithoutAdicionalInput | Item_adicionalCreateOrConnectWithoutAdicionalInput[]
    upsert?: Item_adicionalUpsertWithWhereUniqueWithoutAdicionalInput | Item_adicionalUpsertWithWhereUniqueWithoutAdicionalInput[]
    createMany?: Item_adicionalCreateManyAdicionalInputEnvelope
    set?: Item_adicionalWhereUniqueInput | Item_adicionalWhereUniqueInput[]
    disconnect?: Item_adicionalWhereUniqueInput | Item_adicionalWhereUniqueInput[]
    delete?: Item_adicionalWhereUniqueInput | Item_adicionalWhereUniqueInput[]
    connect?: Item_adicionalWhereUniqueInput | Item_adicionalWhereUniqueInput[]
    update?: Item_adicionalUpdateWithWhereUniqueWithoutAdicionalInput | Item_adicionalUpdateWithWhereUniqueWithoutAdicionalInput[]
    updateMany?: Item_adicionalUpdateManyWithWhereWithoutAdicionalInput | Item_adicionalUpdateManyWithWhereWithoutAdicionalInput[]
    deleteMany?: Item_adicionalScalarWhereInput | Item_adicionalScalarWhereInput[]
  }

  export type Item_adicionalUncheckedUpdateManyWithoutAdicionalNestedInput = {
    create?: XOR<Item_adicionalCreateWithoutAdicionalInput, Item_adicionalUncheckedCreateWithoutAdicionalInput> | Item_adicionalCreateWithoutAdicionalInput[] | Item_adicionalUncheckedCreateWithoutAdicionalInput[]
    connectOrCreate?: Item_adicionalCreateOrConnectWithoutAdicionalInput | Item_adicionalCreateOrConnectWithoutAdicionalInput[]
    upsert?: Item_adicionalUpsertWithWhereUniqueWithoutAdicionalInput | Item_adicionalUpsertWithWhereUniqueWithoutAdicionalInput[]
    createMany?: Item_adicionalCreateManyAdicionalInputEnvelope
    set?: Item_adicionalWhereUniqueInput | Item_adicionalWhereUniqueInput[]
    disconnect?: Item_adicionalWhereUniqueInput | Item_adicionalWhereUniqueInput[]
    delete?: Item_adicionalWhereUniqueInput | Item_adicionalWhereUniqueInput[]
    connect?: Item_adicionalWhereUniqueInput | Item_adicionalWhereUniqueInput[]
    update?: Item_adicionalUpdateWithWhereUniqueWithoutAdicionalInput | Item_adicionalUpdateWithWhereUniqueWithoutAdicionalInput[]
    updateMany?: Item_adicionalUpdateManyWithWhereWithoutAdicionalInput | Item_adicionalUpdateManyWithWhereWithoutAdicionalInput[]
    deleteMany?: Item_adicionalScalarWhereInput | Item_adicionalScalarWhereInput[]
  }

  export type ItemCreateNestedOneWithoutItem_adicionalInput = {
    create?: XOR<ItemCreateWithoutItem_adicionalInput, ItemUncheckedCreateWithoutItem_adicionalInput>
    connectOrCreate?: ItemCreateOrConnectWithoutItem_adicionalInput
    connect?: ItemWhereUniqueInput
  }

  export type AdicionalCreateNestedOneWithoutItem_adicionalInput = {
    create?: XOR<AdicionalCreateWithoutItem_adicionalInput, AdicionalUncheckedCreateWithoutItem_adicionalInput>
    connectOrCreate?: AdicionalCreateOrConnectWithoutItem_adicionalInput
    connect?: AdicionalWhereUniqueInput
  }

  export type ItemUpdateOneRequiredWithoutItem_adicionalNestedInput = {
    create?: XOR<ItemCreateWithoutItem_adicionalInput, ItemUncheckedCreateWithoutItem_adicionalInput>
    connectOrCreate?: ItemCreateOrConnectWithoutItem_adicionalInput
    upsert?: ItemUpsertWithoutItem_adicionalInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutItem_adicionalInput, ItemUpdateWithoutItem_adicionalInput>, ItemUncheckedUpdateWithoutItem_adicionalInput>
  }

  export type AdicionalUpdateOneRequiredWithoutItem_adicionalNestedInput = {
    create?: XOR<AdicionalCreateWithoutItem_adicionalInput, AdicionalUncheckedCreateWithoutItem_adicionalInput>
    connectOrCreate?: AdicionalCreateOrConnectWithoutItem_adicionalInput
    upsert?: AdicionalUpsertWithoutItem_adicionalInput
    connect?: AdicionalWhereUniqueInput
    update?: XOR<XOR<AdicionalUpdateToOneWithWhereWithoutItem_adicionalInput, AdicionalUpdateWithoutItem_adicionalInput>, AdicionalUncheckedUpdateWithoutItem_adicionalInput>
  }

  export type ComandaCreateNestedManyWithoutMesaInput = {
    create?: XOR<ComandaCreateWithoutMesaInput, ComandaUncheckedCreateWithoutMesaInput> | ComandaCreateWithoutMesaInput[] | ComandaUncheckedCreateWithoutMesaInput[]
    connectOrCreate?: ComandaCreateOrConnectWithoutMesaInput | ComandaCreateOrConnectWithoutMesaInput[]
    createMany?: ComandaCreateManyMesaInputEnvelope
    connect?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
  }

  export type ComandaUncheckedCreateNestedManyWithoutMesaInput = {
    create?: XOR<ComandaCreateWithoutMesaInput, ComandaUncheckedCreateWithoutMesaInput> | ComandaCreateWithoutMesaInput[] | ComandaUncheckedCreateWithoutMesaInput[]
    connectOrCreate?: ComandaCreateOrConnectWithoutMesaInput | ComandaCreateOrConnectWithoutMesaInput[]
    createMany?: ComandaCreateManyMesaInputEnvelope
    connect?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
  }

  export type ComandaUpdateManyWithoutMesaNestedInput = {
    create?: XOR<ComandaCreateWithoutMesaInput, ComandaUncheckedCreateWithoutMesaInput> | ComandaCreateWithoutMesaInput[] | ComandaUncheckedCreateWithoutMesaInput[]
    connectOrCreate?: ComandaCreateOrConnectWithoutMesaInput | ComandaCreateOrConnectWithoutMesaInput[]
    upsert?: ComandaUpsertWithWhereUniqueWithoutMesaInput | ComandaUpsertWithWhereUniqueWithoutMesaInput[]
    createMany?: ComandaCreateManyMesaInputEnvelope
    set?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
    disconnect?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
    delete?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
    connect?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
    update?: ComandaUpdateWithWhereUniqueWithoutMesaInput | ComandaUpdateWithWhereUniqueWithoutMesaInput[]
    updateMany?: ComandaUpdateManyWithWhereWithoutMesaInput | ComandaUpdateManyWithWhereWithoutMesaInput[]
    deleteMany?: ComandaScalarWhereInput | ComandaScalarWhereInput[]
  }

  export type ComandaUncheckedUpdateManyWithoutMesaNestedInput = {
    create?: XOR<ComandaCreateWithoutMesaInput, ComandaUncheckedCreateWithoutMesaInput> | ComandaCreateWithoutMesaInput[] | ComandaUncheckedCreateWithoutMesaInput[]
    connectOrCreate?: ComandaCreateOrConnectWithoutMesaInput | ComandaCreateOrConnectWithoutMesaInput[]
    upsert?: ComandaUpsertWithWhereUniqueWithoutMesaInput | ComandaUpsertWithWhereUniqueWithoutMesaInput[]
    createMany?: ComandaCreateManyMesaInputEnvelope
    set?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
    disconnect?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
    delete?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
    connect?: ComandaWhereUniqueInput | ComandaWhereUniqueInput[]
    update?: ComandaUpdateWithWhereUniqueWithoutMesaInput | ComandaUpdateWithWhereUniqueWithoutMesaInput[]
    updateMany?: ComandaUpdateManyWithWhereWithoutMesaInput | ComandaUpdateManyWithWhereWithoutMesaInput[]
    deleteMany?: ComandaScalarWhereInput | ComandaScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AvaliacaoCreateWithoutClienteInput = {
    id?: string
    nota: number
    descricao: string
    created_at?: Date | string | null
    comanda: ComandaCreateNestedOneWithoutAvaliacaoInput
  }

  export type AvaliacaoUncheckedCreateWithoutClienteInput = {
    id?: string
    nota: number
    descricao: string
    created_at?: Date | string | null
    comanda_id: string
  }

  export type AvaliacaoCreateOrConnectWithoutClienteInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutClienteInput, AvaliacaoUncheckedCreateWithoutClienteInput>
  }

  export type AvaliacaoCreateManyClienteInputEnvelope = {
    data: AvaliacaoCreateManyClienteInput | AvaliacaoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type FavoritoCreateWithoutClienteInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    product: ProductCreateNestedOneWithoutFavoritosInput
  }

  export type FavoritoUncheckedCreateWithoutClienteInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    product_id: string
  }

  export type FavoritoCreateOrConnectWithoutClienteInput = {
    where: FavoritoWhereUniqueInput
    create: XOR<FavoritoCreateWithoutClienteInput, FavoritoUncheckedCreateWithoutClienteInput>
  }

  export type FavoritoCreateManyClienteInputEnvelope = {
    data: FavoritoCreateManyClienteInput | FavoritoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type ComandaCreateWithoutClienteInput = {
    id?: string
    status: string
    price: number
    points: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    mesa?: MesaCreateNestedOneWithoutComandaInput
    avaliacao?: AvaliacaoCreateNestedManyWithoutComandaInput
    pedido?: PedidoCreateNestedManyWithoutComandaInput
  }

  export type ComandaUncheckedCreateWithoutClienteInput = {
    id?: string
    status: string
    price: number
    points: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    mesa_id?: string | null
    avaliacao?: AvaliacaoUncheckedCreateNestedManyWithoutComandaInput
    pedido?: PedidoUncheckedCreateNestedManyWithoutComandaInput
  }

  export type ComandaCreateOrConnectWithoutClienteInput = {
    where: ComandaWhereUniqueInput
    create: XOR<ComandaCreateWithoutClienteInput, ComandaUncheckedCreateWithoutClienteInput>
  }

  export type ComandaCreateManyClienteInputEnvelope = {
    data: ComandaCreateManyClienteInput | ComandaCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type PedidoCreateWithoutClienteInput = {
    id?: string
    status: string
    price: number
    points: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    comanda: ComandaCreateNestedOneWithoutPedidoInput
    items?: ItemCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutClienteInput = {
    id?: string
    status: string
    price: number
    points: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    comanda_id: string
    items?: ItemUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput>
  }

  export type PedidoCreateManyClienteInputEnvelope = {
    data: PedidoCreateManyClienteInput | PedidoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type AvaliacaoUpsertWithWhereUniqueWithoutClienteInput = {
    where: AvaliacaoWhereUniqueInput
    update: XOR<AvaliacaoUpdateWithoutClienteInput, AvaliacaoUncheckedUpdateWithoutClienteInput>
    create: XOR<AvaliacaoCreateWithoutClienteInput, AvaliacaoUncheckedCreateWithoutClienteInput>
  }

  export type AvaliacaoUpdateWithWhereUniqueWithoutClienteInput = {
    where: AvaliacaoWhereUniqueInput
    data: XOR<AvaliacaoUpdateWithoutClienteInput, AvaliacaoUncheckedUpdateWithoutClienteInput>
  }

  export type AvaliacaoUpdateManyWithWhereWithoutClienteInput = {
    where: AvaliacaoScalarWhereInput
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyWithoutClienteInput>
  }

  export type AvaliacaoScalarWhereInput = {
    AND?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
    OR?: AvaliacaoScalarWhereInput[]
    NOT?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
    id?: StringFilter<"Avaliacao"> | string
    nota?: IntFilter<"Avaliacao"> | number
    descricao?: StringFilter<"Avaliacao"> | string
    created_at?: DateTimeNullableFilter<"Avaliacao"> | Date | string | null
    cliente_id?: StringFilter<"Avaliacao"> | string
    comanda_id?: StringFilter<"Avaliacao"> | string
  }

  export type FavoritoUpsertWithWhereUniqueWithoutClienteInput = {
    where: FavoritoWhereUniqueInput
    update: XOR<FavoritoUpdateWithoutClienteInput, FavoritoUncheckedUpdateWithoutClienteInput>
    create: XOR<FavoritoCreateWithoutClienteInput, FavoritoUncheckedCreateWithoutClienteInput>
  }

  export type FavoritoUpdateWithWhereUniqueWithoutClienteInput = {
    where: FavoritoWhereUniqueInput
    data: XOR<FavoritoUpdateWithoutClienteInput, FavoritoUncheckedUpdateWithoutClienteInput>
  }

  export type FavoritoUpdateManyWithWhereWithoutClienteInput = {
    where: FavoritoScalarWhereInput
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyWithoutClienteInput>
  }

  export type FavoritoScalarWhereInput = {
    AND?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
    OR?: FavoritoScalarWhereInput[]
    NOT?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
    id?: StringFilter<"Favorito"> | string
    created_at?: DateTimeNullableFilter<"Favorito"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Favorito"> | Date | string | null
    product_id?: StringFilter<"Favorito"> | string
    cliente_id?: StringFilter<"Favorito"> | string
  }

  export type ComandaUpsertWithWhereUniqueWithoutClienteInput = {
    where: ComandaWhereUniqueInput
    update: XOR<ComandaUpdateWithoutClienteInput, ComandaUncheckedUpdateWithoutClienteInput>
    create: XOR<ComandaCreateWithoutClienteInput, ComandaUncheckedCreateWithoutClienteInput>
  }

  export type ComandaUpdateWithWhereUniqueWithoutClienteInput = {
    where: ComandaWhereUniqueInput
    data: XOR<ComandaUpdateWithoutClienteInput, ComandaUncheckedUpdateWithoutClienteInput>
  }

  export type ComandaUpdateManyWithWhereWithoutClienteInput = {
    where: ComandaScalarWhereInput
    data: XOR<ComandaUpdateManyMutationInput, ComandaUncheckedUpdateManyWithoutClienteInput>
  }

  export type ComandaScalarWhereInput = {
    AND?: ComandaScalarWhereInput | ComandaScalarWhereInput[]
    OR?: ComandaScalarWhereInput[]
    NOT?: ComandaScalarWhereInput | ComandaScalarWhereInput[]
    id?: StringFilter<"Comanda"> | string
    status?: StringFilter<"Comanda"> | string
    price?: FloatFilter<"Comanda"> | number
    points?: FloatFilter<"Comanda"> | number
    created_at?: DateTimeNullableFilter<"Comanda"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Comanda"> | Date | string | null
    cliente_id?: StringFilter<"Comanda"> | string
    mesa_id?: StringNullableFilter<"Comanda"> | string | null
  }

  export type PedidoUpsertWithWhereUniqueWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutClienteInput, PedidoUncheckedUpdateWithoutClienteInput>
    create: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutClienteInput, PedidoUncheckedUpdateWithoutClienteInput>
  }

  export type PedidoUpdateManyWithWhereWithoutClienteInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutClienteInput>
  }

  export type PedidoScalarWhereInput = {
    AND?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    OR?: PedidoScalarWhereInput[]
    NOT?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    id?: StringFilter<"Pedido"> | string
    status?: StringFilter<"Pedido"> | string
    price?: FloatFilter<"Pedido"> | number
    points?: FloatFilter<"Pedido"> | number
    created_at?: DateTimeNullableFilter<"Pedido"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Pedido"> | Date | string | null
    cliente_id?: StringFilter<"Pedido"> | string
    comanda_id?: StringFilter<"Pedido"> | string
  }

  export type ProductCreateWithoutFavoritosInput = {
    id?: string
    name: string
    price: number
    points: number
    description: string
    promocao: boolean
    image_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    category: CategoryCreateNestedOneWithoutProductsInput
    items?: ItemCreateNestedManyWithoutProductInput
    product_ingrediente?: Product_ingredienteCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutFavoritosInput = {
    id?: string
    name: string
    price: number
    points: number
    description: string
    promocao: boolean
    image_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    category_id: string
    items?: ItemUncheckedCreateNestedManyWithoutProductInput
    product_ingrediente?: Product_ingredienteUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutFavoritosInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutFavoritosInput, ProductUncheckedCreateWithoutFavoritosInput>
  }

  export type ClienteCreateWithoutFavoritosInput = {
    id?: string
    name: string
    email: string
    password: string
    cpf: string
    data_nasc?: Date | string | null
    image_url?: string | null
    points?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    avaliacao?: AvaliacaoCreateNestedManyWithoutClienteInput
    comandas?: ComandaCreateNestedManyWithoutClienteInput
    pedidos?: PedidoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutFavoritosInput = {
    id?: string
    name: string
    email: string
    password: string
    cpf: string
    data_nasc?: Date | string | null
    image_url?: string | null
    points?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    avaliacao?: AvaliacaoUncheckedCreateNestedManyWithoutClienteInput
    comandas?: ComandaUncheckedCreateNestedManyWithoutClienteInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutFavoritosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutFavoritosInput, ClienteUncheckedCreateWithoutFavoritosInput>
  }

  export type ProductUpsertWithoutFavoritosInput = {
    update: XOR<ProductUpdateWithoutFavoritosInput, ProductUncheckedUpdateWithoutFavoritosInput>
    create: XOR<ProductCreateWithoutFavoritosInput, ProductUncheckedCreateWithoutFavoritosInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutFavoritosInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutFavoritosInput, ProductUncheckedUpdateWithoutFavoritosInput>
  }

  export type ProductUpdateWithoutFavoritosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    promocao?: BoolFieldUpdateOperationsInput | boolean
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    items?: ItemUpdateManyWithoutProductNestedInput
    product_ingrediente?: Product_ingredienteUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutFavoritosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    promocao?: BoolFieldUpdateOperationsInput | boolean
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_id?: StringFieldUpdateOperationsInput | string
    items?: ItemUncheckedUpdateManyWithoutProductNestedInput
    product_ingrediente?: Product_ingredienteUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ClienteUpsertWithoutFavoritosInput = {
    update: XOR<ClienteUpdateWithoutFavoritosInput, ClienteUncheckedUpdateWithoutFavoritosInput>
    create: XOR<ClienteCreateWithoutFavoritosInput, ClienteUncheckedCreateWithoutFavoritosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutFavoritosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutFavoritosInput, ClienteUncheckedUpdateWithoutFavoritosInput>
  }

  export type ClienteUpdateWithoutFavoritosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_nasc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avaliacao?: AvaliacaoUpdateManyWithoutClienteNestedInput
    comandas?: ComandaUpdateManyWithoutClienteNestedInput
    pedidos?: PedidoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutFavoritosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_nasc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avaliacao?: AvaliacaoUncheckedUpdateManyWithoutClienteNestedInput
    comandas?: ComandaUncheckedUpdateManyWithoutClienteNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ProductCreateWithoutCategoryInput = {
    id?: string
    name: string
    price: number
    points: number
    description: string
    promocao: boolean
    image_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    items?: ItemCreateNestedManyWithoutProductInput
    favoritos?: FavoritoCreateNestedManyWithoutProductInput
    product_ingrediente?: Product_ingredienteCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    price: number
    points: number
    description: string
    promocao: boolean
    image_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    items?: ItemUncheckedCreateNestedManyWithoutProductInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutProductInput
    product_ingrediente?: Product_ingredienteUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    points?: FloatFilter<"Product"> | number
    description?: StringFilter<"Product"> | string
    promocao?: BoolFilter<"Product"> | boolean
    image_url?: StringNullableFilter<"Product"> | string | null
    created_at?: DateTimeNullableFilter<"Product"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Product"> | Date | string | null
    category_id?: StringFilter<"Product"> | string
  }

  export type CategoryCreateWithoutProductsInput = {
    id?: string
    name: string
    image_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    image_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type ItemCreateWithoutProductInput = {
    id?: string
    qtd: number
    price: number
    points?: number
    removidos?: NullableJsonNullValueInput | InputJsonValue
    adicionais?: NullableJsonNullValueInput | InputJsonValue
    observacoes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    pedido: PedidoCreateNestedOneWithoutItemsInput
    Item_adicional?: Item_adicionalCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutProductInput = {
    id?: string
    qtd: number
    price: number
    points?: number
    removidos?: NullableJsonNullValueInput | InputJsonValue
    adicionais?: NullableJsonNullValueInput | InputJsonValue
    observacoes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    pedido_id: string
    Item_adicional?: Item_adicionalUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutProductInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutProductInput, ItemUncheckedCreateWithoutProductInput>
  }

  export type ItemCreateManyProductInputEnvelope = {
    data: ItemCreateManyProductInput | ItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type FavoritoCreateWithoutProductInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cliente: ClienteCreateNestedOneWithoutFavoritosInput
  }

  export type FavoritoUncheckedCreateWithoutProductInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cliente_id: string
  }

  export type FavoritoCreateOrConnectWithoutProductInput = {
    where: FavoritoWhereUniqueInput
    create: XOR<FavoritoCreateWithoutProductInput, FavoritoUncheckedCreateWithoutProductInput>
  }

  export type FavoritoCreateManyProductInputEnvelope = {
    data: FavoritoCreateManyProductInput | FavoritoCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type Product_ingredienteCreateWithoutProductInput = {
    id?: string
    qtd?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ingrediente: IngredienteCreateNestedOneWithoutProduct_ingredienteInput
  }

  export type Product_ingredienteUncheckedCreateWithoutProductInput = {
    id?: string
    qtd?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ingrediente_id: string
  }

  export type Product_ingredienteCreateOrConnectWithoutProductInput = {
    where: Product_ingredienteWhereUniqueInput
    create: XOR<Product_ingredienteCreateWithoutProductInput, Product_ingredienteUncheckedCreateWithoutProductInput>
  }

  export type Product_ingredienteCreateManyProductInputEnvelope = {
    data: Product_ingredienteCreateManyProductInput | Product_ingredienteCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ItemUpsertWithWhereUniqueWithoutProductInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutProductInput, ItemUncheckedUpdateWithoutProductInput>
    create: XOR<ItemCreateWithoutProductInput, ItemUncheckedCreateWithoutProductInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutProductInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutProductInput, ItemUncheckedUpdateWithoutProductInput>
  }

  export type ItemUpdateManyWithWhereWithoutProductInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutProductInput>
  }

  export type ItemScalarWhereInput = {
    AND?: ItemScalarWhereInput | ItemScalarWhereInput[]
    OR?: ItemScalarWhereInput[]
    NOT?: ItemScalarWhereInput | ItemScalarWhereInput[]
    id?: StringFilter<"Item"> | string
    qtd?: IntFilter<"Item"> | number
    price?: FloatFilter<"Item"> | number
    points?: FloatFilter<"Item"> | number
    removidos?: JsonNullableFilter<"Item">
    adicionais?: JsonNullableFilter<"Item">
    observacoes?: StringNullableFilter<"Item"> | string | null
    created_at?: DateTimeNullableFilter<"Item"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Item"> | Date | string | null
    pedido_id?: StringFilter<"Item"> | string
    product_id?: StringFilter<"Item"> | string
  }

  export type FavoritoUpsertWithWhereUniqueWithoutProductInput = {
    where: FavoritoWhereUniqueInput
    update: XOR<FavoritoUpdateWithoutProductInput, FavoritoUncheckedUpdateWithoutProductInput>
    create: XOR<FavoritoCreateWithoutProductInput, FavoritoUncheckedCreateWithoutProductInput>
  }

  export type FavoritoUpdateWithWhereUniqueWithoutProductInput = {
    where: FavoritoWhereUniqueInput
    data: XOR<FavoritoUpdateWithoutProductInput, FavoritoUncheckedUpdateWithoutProductInput>
  }

  export type FavoritoUpdateManyWithWhereWithoutProductInput = {
    where: FavoritoScalarWhereInput
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyWithoutProductInput>
  }

  export type Product_ingredienteUpsertWithWhereUniqueWithoutProductInput = {
    where: Product_ingredienteWhereUniqueInput
    update: XOR<Product_ingredienteUpdateWithoutProductInput, Product_ingredienteUncheckedUpdateWithoutProductInput>
    create: XOR<Product_ingredienteCreateWithoutProductInput, Product_ingredienteUncheckedCreateWithoutProductInput>
  }

  export type Product_ingredienteUpdateWithWhereUniqueWithoutProductInput = {
    where: Product_ingredienteWhereUniqueInput
    data: XOR<Product_ingredienteUpdateWithoutProductInput, Product_ingredienteUncheckedUpdateWithoutProductInput>
  }

  export type Product_ingredienteUpdateManyWithWhereWithoutProductInput = {
    where: Product_ingredienteScalarWhereInput
    data: XOR<Product_ingredienteUpdateManyMutationInput, Product_ingredienteUncheckedUpdateManyWithoutProductInput>
  }

  export type Product_ingredienteScalarWhereInput = {
    AND?: Product_ingredienteScalarWhereInput | Product_ingredienteScalarWhereInput[]
    OR?: Product_ingredienteScalarWhereInput[]
    NOT?: Product_ingredienteScalarWhereInput | Product_ingredienteScalarWhereInput[]
    id?: StringFilter<"Product_ingrediente"> | string
    qtd?: BoolFilter<"Product_ingrediente"> | boolean
    created_at?: DateTimeNullableFilter<"Product_ingrediente"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Product_ingrediente"> | Date | string | null
    product_id?: StringFilter<"Product_ingrediente"> | string
    ingrediente_id?: StringFilter<"Product_ingrediente"> | string
  }

  export type ClienteCreateWithoutPedidosInput = {
    id?: string
    name: string
    email: string
    password: string
    cpf: string
    data_nasc?: Date | string | null
    image_url?: string | null
    points?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    avaliacao?: AvaliacaoCreateNestedManyWithoutClienteInput
    favoritos?: FavoritoCreateNestedManyWithoutClienteInput
    comandas?: ComandaCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutPedidosInput = {
    id?: string
    name: string
    email: string
    password: string
    cpf: string
    data_nasc?: Date | string | null
    image_url?: string | null
    points?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    avaliacao?: AvaliacaoUncheckedCreateNestedManyWithoutClienteInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutClienteInput
    comandas?: ComandaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutPedidosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutPedidosInput, ClienteUncheckedCreateWithoutPedidosInput>
  }

  export type ComandaCreateWithoutPedidoInput = {
    id?: string
    status: string
    price: number
    points: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cliente: ClienteCreateNestedOneWithoutComandasInput
    mesa?: MesaCreateNestedOneWithoutComandaInput
    avaliacao?: AvaliacaoCreateNestedManyWithoutComandaInput
  }

  export type ComandaUncheckedCreateWithoutPedidoInput = {
    id?: string
    status: string
    price: number
    points: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cliente_id: string
    mesa_id?: string | null
    avaliacao?: AvaliacaoUncheckedCreateNestedManyWithoutComandaInput
  }

  export type ComandaCreateOrConnectWithoutPedidoInput = {
    where: ComandaWhereUniqueInput
    create: XOR<ComandaCreateWithoutPedidoInput, ComandaUncheckedCreateWithoutPedidoInput>
  }

  export type ItemCreateWithoutPedidoInput = {
    id?: string
    qtd: number
    price: number
    points?: number
    removidos?: NullableJsonNullValueInput | InputJsonValue
    adicionais?: NullableJsonNullValueInput | InputJsonValue
    observacoes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    product: ProductCreateNestedOneWithoutItemsInput
    Item_adicional?: Item_adicionalCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutPedidoInput = {
    id?: string
    qtd: number
    price: number
    points?: number
    removidos?: NullableJsonNullValueInput | InputJsonValue
    adicionais?: NullableJsonNullValueInput | InputJsonValue
    observacoes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    product_id: string
    Item_adicional?: Item_adicionalUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutPedidoInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutPedidoInput, ItemUncheckedCreateWithoutPedidoInput>
  }

  export type ItemCreateManyPedidoInputEnvelope = {
    data: ItemCreateManyPedidoInput | ItemCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithoutPedidosInput = {
    update: XOR<ClienteUpdateWithoutPedidosInput, ClienteUncheckedUpdateWithoutPedidosInput>
    create: XOR<ClienteCreateWithoutPedidosInput, ClienteUncheckedCreateWithoutPedidosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutPedidosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutPedidosInput, ClienteUncheckedUpdateWithoutPedidosInput>
  }

  export type ClienteUpdateWithoutPedidosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_nasc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avaliacao?: AvaliacaoUpdateManyWithoutClienteNestedInput
    favoritos?: FavoritoUpdateManyWithoutClienteNestedInput
    comandas?: ComandaUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutPedidosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_nasc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avaliacao?: AvaliacaoUncheckedUpdateManyWithoutClienteNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutClienteNestedInput
    comandas?: ComandaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ComandaUpsertWithoutPedidoInput = {
    update: XOR<ComandaUpdateWithoutPedidoInput, ComandaUncheckedUpdateWithoutPedidoInput>
    create: XOR<ComandaCreateWithoutPedidoInput, ComandaUncheckedCreateWithoutPedidoInput>
    where?: ComandaWhereInput
  }

  export type ComandaUpdateToOneWithWhereWithoutPedidoInput = {
    where?: ComandaWhereInput
    data: XOR<ComandaUpdateWithoutPedidoInput, ComandaUncheckedUpdateWithoutPedidoInput>
  }

  export type ComandaUpdateWithoutPedidoInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente?: ClienteUpdateOneRequiredWithoutComandasNestedInput
    mesa?: MesaUpdateOneWithoutComandaNestedInput
    avaliacao?: AvaliacaoUpdateManyWithoutComandaNestedInput
  }

  export type ComandaUncheckedUpdateWithoutPedidoInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente_id?: StringFieldUpdateOperationsInput | string
    mesa_id?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: AvaliacaoUncheckedUpdateManyWithoutComandaNestedInput
  }

  export type ItemUpsertWithWhereUniqueWithoutPedidoInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutPedidoInput, ItemUncheckedUpdateWithoutPedidoInput>
    create: XOR<ItemCreateWithoutPedidoInput, ItemUncheckedCreateWithoutPedidoInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutPedidoInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutPedidoInput, ItemUncheckedUpdateWithoutPedidoInput>
  }

  export type ItemUpdateManyWithWhereWithoutPedidoInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutPedidoInput>
  }

  export type ClienteCreateWithoutComandasInput = {
    id?: string
    name: string
    email: string
    password: string
    cpf: string
    data_nasc?: Date | string | null
    image_url?: string | null
    points?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    avaliacao?: AvaliacaoCreateNestedManyWithoutClienteInput
    favoritos?: FavoritoCreateNestedManyWithoutClienteInput
    pedidos?: PedidoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutComandasInput = {
    id?: string
    name: string
    email: string
    password: string
    cpf: string
    data_nasc?: Date | string | null
    image_url?: string | null
    points?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    avaliacao?: AvaliacaoUncheckedCreateNestedManyWithoutClienteInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutClienteInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutComandasInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutComandasInput, ClienteUncheckedCreateWithoutComandasInput>
  }

  export type MesaCreateWithoutComandaInput = {
    id?: string
    numero_mesa: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type MesaUncheckedCreateWithoutComandaInput = {
    id?: string
    numero_mesa: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type MesaCreateOrConnectWithoutComandaInput = {
    where: MesaWhereUniqueInput
    create: XOR<MesaCreateWithoutComandaInput, MesaUncheckedCreateWithoutComandaInput>
  }

  export type AvaliacaoCreateWithoutComandaInput = {
    id?: string
    nota: number
    descricao: string
    created_at?: Date | string | null
    cliente: ClienteCreateNestedOneWithoutAvaliacaoInput
  }

  export type AvaliacaoUncheckedCreateWithoutComandaInput = {
    id?: string
    nota: number
    descricao: string
    created_at?: Date | string | null
    cliente_id: string
  }

  export type AvaliacaoCreateOrConnectWithoutComandaInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutComandaInput, AvaliacaoUncheckedCreateWithoutComandaInput>
  }

  export type AvaliacaoCreateManyComandaInputEnvelope = {
    data: AvaliacaoCreateManyComandaInput | AvaliacaoCreateManyComandaInput[]
    skipDuplicates?: boolean
  }

  export type PedidoCreateWithoutComandaInput = {
    id?: string
    status: string
    price: number
    points: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cliente: ClienteCreateNestedOneWithoutPedidosInput
    items?: ItemCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutComandaInput = {
    id?: string
    status: string
    price: number
    points: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cliente_id: string
    items?: ItemUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutComandaInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutComandaInput, PedidoUncheckedCreateWithoutComandaInput>
  }

  export type PedidoCreateManyComandaInputEnvelope = {
    data: PedidoCreateManyComandaInput | PedidoCreateManyComandaInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithoutComandasInput = {
    update: XOR<ClienteUpdateWithoutComandasInput, ClienteUncheckedUpdateWithoutComandasInput>
    create: XOR<ClienteCreateWithoutComandasInput, ClienteUncheckedCreateWithoutComandasInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutComandasInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutComandasInput, ClienteUncheckedUpdateWithoutComandasInput>
  }

  export type ClienteUpdateWithoutComandasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_nasc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avaliacao?: AvaliacaoUpdateManyWithoutClienteNestedInput
    favoritos?: FavoritoUpdateManyWithoutClienteNestedInput
    pedidos?: PedidoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutComandasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_nasc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avaliacao?: AvaliacaoUncheckedUpdateManyWithoutClienteNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutClienteNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type MesaUpsertWithoutComandaInput = {
    update: XOR<MesaUpdateWithoutComandaInput, MesaUncheckedUpdateWithoutComandaInput>
    create: XOR<MesaCreateWithoutComandaInput, MesaUncheckedCreateWithoutComandaInput>
    where?: MesaWhereInput
  }

  export type MesaUpdateToOneWithWhereWithoutComandaInput = {
    where?: MesaWhereInput
    data: XOR<MesaUpdateWithoutComandaInput, MesaUncheckedUpdateWithoutComandaInput>
  }

  export type MesaUpdateWithoutComandaInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero_mesa?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MesaUncheckedUpdateWithoutComandaInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero_mesa?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AvaliacaoUpsertWithWhereUniqueWithoutComandaInput = {
    where: AvaliacaoWhereUniqueInput
    update: XOR<AvaliacaoUpdateWithoutComandaInput, AvaliacaoUncheckedUpdateWithoutComandaInput>
    create: XOR<AvaliacaoCreateWithoutComandaInput, AvaliacaoUncheckedCreateWithoutComandaInput>
  }

  export type AvaliacaoUpdateWithWhereUniqueWithoutComandaInput = {
    where: AvaliacaoWhereUniqueInput
    data: XOR<AvaliacaoUpdateWithoutComandaInput, AvaliacaoUncheckedUpdateWithoutComandaInput>
  }

  export type AvaliacaoUpdateManyWithWhereWithoutComandaInput = {
    where: AvaliacaoScalarWhereInput
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyWithoutComandaInput>
  }

  export type PedidoUpsertWithWhereUniqueWithoutComandaInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutComandaInput, PedidoUncheckedUpdateWithoutComandaInput>
    create: XOR<PedidoCreateWithoutComandaInput, PedidoUncheckedCreateWithoutComandaInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutComandaInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutComandaInput, PedidoUncheckedUpdateWithoutComandaInput>
  }

  export type PedidoUpdateManyWithWhereWithoutComandaInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutComandaInput>
  }

  export type ClienteCreateWithoutAvaliacaoInput = {
    id?: string
    name: string
    email: string
    password: string
    cpf: string
    data_nasc?: Date | string | null
    image_url?: string | null
    points?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    favoritos?: FavoritoCreateNestedManyWithoutClienteInput
    comandas?: ComandaCreateNestedManyWithoutClienteInput
    pedidos?: PedidoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutAvaliacaoInput = {
    id?: string
    name: string
    email: string
    password: string
    cpf: string
    data_nasc?: Date | string | null
    image_url?: string | null
    points?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutClienteInput
    comandas?: ComandaUncheckedCreateNestedManyWithoutClienteInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutAvaliacaoInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutAvaliacaoInput, ClienteUncheckedCreateWithoutAvaliacaoInput>
  }

  export type ComandaCreateWithoutAvaliacaoInput = {
    id?: string
    status: string
    price: number
    points: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cliente: ClienteCreateNestedOneWithoutComandasInput
    mesa?: MesaCreateNestedOneWithoutComandaInput
    pedido?: PedidoCreateNestedManyWithoutComandaInput
  }

  export type ComandaUncheckedCreateWithoutAvaliacaoInput = {
    id?: string
    status: string
    price: number
    points: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cliente_id: string
    mesa_id?: string | null
    pedido?: PedidoUncheckedCreateNestedManyWithoutComandaInput
  }

  export type ComandaCreateOrConnectWithoutAvaliacaoInput = {
    where: ComandaWhereUniqueInput
    create: XOR<ComandaCreateWithoutAvaliacaoInput, ComandaUncheckedCreateWithoutAvaliacaoInput>
  }

  export type ClienteUpsertWithoutAvaliacaoInput = {
    update: XOR<ClienteUpdateWithoutAvaliacaoInput, ClienteUncheckedUpdateWithoutAvaliacaoInput>
    create: XOR<ClienteCreateWithoutAvaliacaoInput, ClienteUncheckedCreateWithoutAvaliacaoInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutAvaliacaoInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutAvaliacaoInput, ClienteUncheckedUpdateWithoutAvaliacaoInput>
  }

  export type ClienteUpdateWithoutAvaliacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_nasc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    favoritos?: FavoritoUpdateManyWithoutClienteNestedInput
    comandas?: ComandaUpdateManyWithoutClienteNestedInput
    pedidos?: PedidoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutAvaliacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_nasc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    favoritos?: FavoritoUncheckedUpdateManyWithoutClienteNestedInput
    comandas?: ComandaUncheckedUpdateManyWithoutClienteNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ComandaUpsertWithoutAvaliacaoInput = {
    update: XOR<ComandaUpdateWithoutAvaliacaoInput, ComandaUncheckedUpdateWithoutAvaliacaoInput>
    create: XOR<ComandaCreateWithoutAvaliacaoInput, ComandaUncheckedCreateWithoutAvaliacaoInput>
    where?: ComandaWhereInput
  }

  export type ComandaUpdateToOneWithWhereWithoutAvaliacaoInput = {
    where?: ComandaWhereInput
    data: XOR<ComandaUpdateWithoutAvaliacaoInput, ComandaUncheckedUpdateWithoutAvaliacaoInput>
  }

  export type ComandaUpdateWithoutAvaliacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente?: ClienteUpdateOneRequiredWithoutComandasNestedInput
    mesa?: MesaUpdateOneWithoutComandaNestedInput
    pedido?: PedidoUpdateManyWithoutComandaNestedInput
  }

  export type ComandaUncheckedUpdateWithoutAvaliacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente_id?: StringFieldUpdateOperationsInput | string
    mesa_id?: NullableStringFieldUpdateOperationsInput | string | null
    pedido?: PedidoUncheckedUpdateManyWithoutComandaNestedInput
  }

  export type PedidoCreateWithoutItemsInput = {
    id?: string
    status: string
    price: number
    points: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cliente: ClienteCreateNestedOneWithoutPedidosInput
    comanda: ComandaCreateNestedOneWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutItemsInput = {
    id?: string
    status: string
    price: number
    points: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cliente_id: string
    comanda_id: string
  }

  export type PedidoCreateOrConnectWithoutItemsInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutItemsInput, PedidoUncheckedCreateWithoutItemsInput>
  }

  export type ProductCreateWithoutItemsInput = {
    id?: string
    name: string
    price: number
    points: number
    description: string
    promocao: boolean
    image_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    category: CategoryCreateNestedOneWithoutProductsInput
    favoritos?: FavoritoCreateNestedManyWithoutProductInput
    product_ingrediente?: Product_ingredienteCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutItemsInput = {
    id?: string
    name: string
    price: number
    points: number
    description: string
    promocao: boolean
    image_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    category_id: string
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutProductInput
    product_ingrediente?: Product_ingredienteUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutItemsInput, ProductUncheckedCreateWithoutItemsInput>
  }

  export type Item_adicionalCreateWithoutItemInput = {
    id?: string
    qtd?: number
    adicional: AdicionalCreateNestedOneWithoutItem_adicionalInput
  }

  export type Item_adicionalUncheckedCreateWithoutItemInput = {
    id?: string
    qtd?: number
    adicional_id: string
  }

  export type Item_adicionalCreateOrConnectWithoutItemInput = {
    where: Item_adicionalWhereUniqueInput
    create: XOR<Item_adicionalCreateWithoutItemInput, Item_adicionalUncheckedCreateWithoutItemInput>
  }

  export type Item_adicionalCreateManyItemInputEnvelope = {
    data: Item_adicionalCreateManyItemInput | Item_adicionalCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type PedidoUpsertWithoutItemsInput = {
    update: XOR<PedidoUpdateWithoutItemsInput, PedidoUncheckedUpdateWithoutItemsInput>
    create: XOR<PedidoCreateWithoutItemsInput, PedidoUncheckedCreateWithoutItemsInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutItemsInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutItemsInput, PedidoUncheckedUpdateWithoutItemsInput>
  }

  export type PedidoUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente?: ClienteUpdateOneRequiredWithoutPedidosNestedInput
    comanda?: ComandaUpdateOneRequiredWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente_id?: StringFieldUpdateOperationsInput | string
    comanda_id?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUpsertWithoutItemsInput = {
    update: XOR<ProductUpdateWithoutItemsInput, ProductUncheckedUpdateWithoutItemsInput>
    create: XOR<ProductCreateWithoutItemsInput, ProductUncheckedCreateWithoutItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutItemsInput, ProductUncheckedUpdateWithoutItemsInput>
  }

  export type ProductUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    promocao?: BoolFieldUpdateOperationsInput | boolean
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    favoritos?: FavoritoUpdateManyWithoutProductNestedInput
    product_ingrediente?: Product_ingredienteUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    promocao?: BoolFieldUpdateOperationsInput | boolean
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_id?: StringFieldUpdateOperationsInput | string
    favoritos?: FavoritoUncheckedUpdateManyWithoutProductNestedInput
    product_ingrediente?: Product_ingredienteUncheckedUpdateManyWithoutProductNestedInput
  }

  export type Item_adicionalUpsertWithWhereUniqueWithoutItemInput = {
    where: Item_adicionalWhereUniqueInput
    update: XOR<Item_adicionalUpdateWithoutItemInput, Item_adicionalUncheckedUpdateWithoutItemInput>
    create: XOR<Item_adicionalCreateWithoutItemInput, Item_adicionalUncheckedCreateWithoutItemInput>
  }

  export type Item_adicionalUpdateWithWhereUniqueWithoutItemInput = {
    where: Item_adicionalWhereUniqueInput
    data: XOR<Item_adicionalUpdateWithoutItemInput, Item_adicionalUncheckedUpdateWithoutItemInput>
  }

  export type Item_adicionalUpdateManyWithWhereWithoutItemInput = {
    where: Item_adicionalScalarWhereInput
    data: XOR<Item_adicionalUpdateManyMutationInput, Item_adicionalUncheckedUpdateManyWithoutItemInput>
  }

  export type Item_adicionalScalarWhereInput = {
    AND?: Item_adicionalScalarWhereInput | Item_adicionalScalarWhereInput[]
    OR?: Item_adicionalScalarWhereInput[]
    NOT?: Item_adicionalScalarWhereInput | Item_adicionalScalarWhereInput[]
    id?: StringFilter<"Item_adicional"> | string
    qtd?: IntFilter<"Item_adicional"> | number
    item_id?: StringFilter<"Item_adicional"> | string
    adicional_id?: StringFilter<"Item_adicional"> | string
  }

  export type Product_ingredienteCreateWithoutIngredienteInput = {
    id?: string
    qtd?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    product: ProductCreateNestedOneWithoutProduct_ingredienteInput
  }

  export type Product_ingredienteUncheckedCreateWithoutIngredienteInput = {
    id?: string
    qtd?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    product_id: string
  }

  export type Product_ingredienteCreateOrConnectWithoutIngredienteInput = {
    where: Product_ingredienteWhereUniqueInput
    create: XOR<Product_ingredienteCreateWithoutIngredienteInput, Product_ingredienteUncheckedCreateWithoutIngredienteInput>
  }

  export type Product_ingredienteCreateManyIngredienteInputEnvelope = {
    data: Product_ingredienteCreateManyIngredienteInput | Product_ingredienteCreateManyIngredienteInput[]
    skipDuplicates?: boolean
  }

  export type Product_ingredienteUpsertWithWhereUniqueWithoutIngredienteInput = {
    where: Product_ingredienteWhereUniqueInput
    update: XOR<Product_ingredienteUpdateWithoutIngredienteInput, Product_ingredienteUncheckedUpdateWithoutIngredienteInput>
    create: XOR<Product_ingredienteCreateWithoutIngredienteInput, Product_ingredienteUncheckedCreateWithoutIngredienteInput>
  }

  export type Product_ingredienteUpdateWithWhereUniqueWithoutIngredienteInput = {
    where: Product_ingredienteWhereUniqueInput
    data: XOR<Product_ingredienteUpdateWithoutIngredienteInput, Product_ingredienteUncheckedUpdateWithoutIngredienteInput>
  }

  export type Product_ingredienteUpdateManyWithWhereWithoutIngredienteInput = {
    where: Product_ingredienteScalarWhereInput
    data: XOR<Product_ingredienteUpdateManyMutationInput, Product_ingredienteUncheckedUpdateManyWithoutIngredienteInput>
  }

  export type ProductCreateWithoutProduct_ingredienteInput = {
    id?: string
    name: string
    price: number
    points: number
    description: string
    promocao: boolean
    image_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    category: CategoryCreateNestedOneWithoutProductsInput
    items?: ItemCreateNestedManyWithoutProductInput
    favoritos?: FavoritoCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProduct_ingredienteInput = {
    id?: string
    name: string
    price: number
    points: number
    description: string
    promocao: boolean
    image_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    category_id: string
    items?: ItemUncheckedCreateNestedManyWithoutProductInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProduct_ingredienteInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProduct_ingredienteInput, ProductUncheckedCreateWithoutProduct_ingredienteInput>
  }

  export type IngredienteCreateWithoutProduct_ingredienteInput = {
    id?: string
    nome: string
    price: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type IngredienteUncheckedCreateWithoutProduct_ingredienteInput = {
    id?: string
    nome: string
    price: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type IngredienteCreateOrConnectWithoutProduct_ingredienteInput = {
    where: IngredienteWhereUniqueInput
    create: XOR<IngredienteCreateWithoutProduct_ingredienteInput, IngredienteUncheckedCreateWithoutProduct_ingredienteInput>
  }

  export type ProductUpsertWithoutProduct_ingredienteInput = {
    update: XOR<ProductUpdateWithoutProduct_ingredienteInput, ProductUncheckedUpdateWithoutProduct_ingredienteInput>
    create: XOR<ProductCreateWithoutProduct_ingredienteInput, ProductUncheckedCreateWithoutProduct_ingredienteInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProduct_ingredienteInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProduct_ingredienteInput, ProductUncheckedUpdateWithoutProduct_ingredienteInput>
  }

  export type ProductUpdateWithoutProduct_ingredienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    promocao?: BoolFieldUpdateOperationsInput | boolean
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    items?: ItemUpdateManyWithoutProductNestedInput
    favoritos?: FavoritoUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProduct_ingredienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    promocao?: BoolFieldUpdateOperationsInput | boolean
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_id?: StringFieldUpdateOperationsInput | string
    items?: ItemUncheckedUpdateManyWithoutProductNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutProductNestedInput
  }

  export type IngredienteUpsertWithoutProduct_ingredienteInput = {
    update: XOR<IngredienteUpdateWithoutProduct_ingredienteInput, IngredienteUncheckedUpdateWithoutProduct_ingredienteInput>
    create: XOR<IngredienteCreateWithoutProduct_ingredienteInput, IngredienteUncheckedCreateWithoutProduct_ingredienteInput>
    where?: IngredienteWhereInput
  }

  export type IngredienteUpdateToOneWithWhereWithoutProduct_ingredienteInput = {
    where?: IngredienteWhereInput
    data: XOR<IngredienteUpdateWithoutProduct_ingredienteInput, IngredienteUncheckedUpdateWithoutProduct_ingredienteInput>
  }

  export type IngredienteUpdateWithoutProduct_ingredienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IngredienteUncheckedUpdateWithoutProduct_ingredienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Item_adicionalCreateWithoutAdicionalInput = {
    id?: string
    qtd?: number
    item: ItemCreateNestedOneWithoutItem_adicionalInput
  }

  export type Item_adicionalUncheckedCreateWithoutAdicionalInput = {
    id?: string
    qtd?: number
    item_id: string
  }

  export type Item_adicionalCreateOrConnectWithoutAdicionalInput = {
    where: Item_adicionalWhereUniqueInput
    create: XOR<Item_adicionalCreateWithoutAdicionalInput, Item_adicionalUncheckedCreateWithoutAdicionalInput>
  }

  export type Item_adicionalCreateManyAdicionalInputEnvelope = {
    data: Item_adicionalCreateManyAdicionalInput | Item_adicionalCreateManyAdicionalInput[]
    skipDuplicates?: boolean
  }

  export type Item_adicionalUpsertWithWhereUniqueWithoutAdicionalInput = {
    where: Item_adicionalWhereUniqueInput
    update: XOR<Item_adicionalUpdateWithoutAdicionalInput, Item_adicionalUncheckedUpdateWithoutAdicionalInput>
    create: XOR<Item_adicionalCreateWithoutAdicionalInput, Item_adicionalUncheckedCreateWithoutAdicionalInput>
  }

  export type Item_adicionalUpdateWithWhereUniqueWithoutAdicionalInput = {
    where: Item_adicionalWhereUniqueInput
    data: XOR<Item_adicionalUpdateWithoutAdicionalInput, Item_adicionalUncheckedUpdateWithoutAdicionalInput>
  }

  export type Item_adicionalUpdateManyWithWhereWithoutAdicionalInput = {
    where: Item_adicionalScalarWhereInput
    data: XOR<Item_adicionalUpdateManyMutationInput, Item_adicionalUncheckedUpdateManyWithoutAdicionalInput>
  }

  export type ItemCreateWithoutItem_adicionalInput = {
    id?: string
    qtd: number
    price: number
    points?: number
    removidos?: NullableJsonNullValueInput | InputJsonValue
    adicionais?: NullableJsonNullValueInput | InputJsonValue
    observacoes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    pedido: PedidoCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutItemsInput
  }

  export type ItemUncheckedCreateWithoutItem_adicionalInput = {
    id?: string
    qtd: number
    price: number
    points?: number
    removidos?: NullableJsonNullValueInput | InputJsonValue
    adicionais?: NullableJsonNullValueInput | InputJsonValue
    observacoes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    pedido_id: string
    product_id: string
  }

  export type ItemCreateOrConnectWithoutItem_adicionalInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutItem_adicionalInput, ItemUncheckedCreateWithoutItem_adicionalInput>
  }

  export type AdicionalCreateWithoutItem_adicionalInput = {
    id?: string
    nome: string
    price: number
    points?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type AdicionalUncheckedCreateWithoutItem_adicionalInput = {
    id?: string
    nome: string
    price: number
    points?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type AdicionalCreateOrConnectWithoutItem_adicionalInput = {
    where: AdicionalWhereUniqueInput
    create: XOR<AdicionalCreateWithoutItem_adicionalInput, AdicionalUncheckedCreateWithoutItem_adicionalInput>
  }

  export type ItemUpsertWithoutItem_adicionalInput = {
    update: XOR<ItemUpdateWithoutItem_adicionalInput, ItemUncheckedUpdateWithoutItem_adicionalInput>
    create: XOR<ItemCreateWithoutItem_adicionalInput, ItemUncheckedCreateWithoutItem_adicionalInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutItem_adicionalInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutItem_adicionalInput, ItemUncheckedUpdateWithoutItem_adicionalInput>
  }

  export type ItemUpdateWithoutItem_adicionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    removidos?: NullableJsonNullValueInput | InputJsonValue
    adicionais?: NullableJsonNullValueInput | InputJsonValue
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pedido?: PedidoUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ItemUncheckedUpdateWithoutItem_adicionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    removidos?: NullableJsonNullValueInput | InputJsonValue
    adicionais?: NullableJsonNullValueInput | InputJsonValue
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pedido_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
  }

  export type AdicionalUpsertWithoutItem_adicionalInput = {
    update: XOR<AdicionalUpdateWithoutItem_adicionalInput, AdicionalUncheckedUpdateWithoutItem_adicionalInput>
    create: XOR<AdicionalCreateWithoutItem_adicionalInput, AdicionalUncheckedCreateWithoutItem_adicionalInput>
    where?: AdicionalWhereInput
  }

  export type AdicionalUpdateToOneWithWhereWithoutItem_adicionalInput = {
    where?: AdicionalWhereInput
    data: XOR<AdicionalUpdateWithoutItem_adicionalInput, AdicionalUncheckedUpdateWithoutItem_adicionalInput>
  }

  export type AdicionalUpdateWithoutItem_adicionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdicionalUncheckedUpdateWithoutItem_adicionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ComandaCreateWithoutMesaInput = {
    id?: string
    status: string
    price: number
    points: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cliente: ClienteCreateNestedOneWithoutComandasInput
    avaliacao?: AvaliacaoCreateNestedManyWithoutComandaInput
    pedido?: PedidoCreateNestedManyWithoutComandaInput
  }

  export type ComandaUncheckedCreateWithoutMesaInput = {
    id?: string
    status: string
    price: number
    points: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cliente_id: string
    avaliacao?: AvaliacaoUncheckedCreateNestedManyWithoutComandaInput
    pedido?: PedidoUncheckedCreateNestedManyWithoutComandaInput
  }

  export type ComandaCreateOrConnectWithoutMesaInput = {
    where: ComandaWhereUniqueInput
    create: XOR<ComandaCreateWithoutMesaInput, ComandaUncheckedCreateWithoutMesaInput>
  }

  export type ComandaCreateManyMesaInputEnvelope = {
    data: ComandaCreateManyMesaInput | ComandaCreateManyMesaInput[]
    skipDuplicates?: boolean
  }

  export type ComandaUpsertWithWhereUniqueWithoutMesaInput = {
    where: ComandaWhereUniqueInput
    update: XOR<ComandaUpdateWithoutMesaInput, ComandaUncheckedUpdateWithoutMesaInput>
    create: XOR<ComandaCreateWithoutMesaInput, ComandaUncheckedCreateWithoutMesaInput>
  }

  export type ComandaUpdateWithWhereUniqueWithoutMesaInput = {
    where: ComandaWhereUniqueInput
    data: XOR<ComandaUpdateWithoutMesaInput, ComandaUncheckedUpdateWithoutMesaInput>
  }

  export type ComandaUpdateManyWithWhereWithoutMesaInput = {
    where: ComandaScalarWhereInput
    data: XOR<ComandaUpdateManyMutationInput, ComandaUncheckedUpdateManyWithoutMesaInput>
  }

  export type AvaliacaoCreateManyClienteInput = {
    id?: string
    nota: number
    descricao: string
    created_at?: Date | string | null
    comanda_id: string
  }

  export type FavoritoCreateManyClienteInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    product_id: string
  }

  export type ComandaCreateManyClienteInput = {
    id?: string
    status: string
    price: number
    points: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    mesa_id?: string | null
  }

  export type PedidoCreateManyClienteInput = {
    id?: string
    status: string
    price: number
    points: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    comanda_id: string
  }

  export type AvaliacaoUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comanda?: ComandaUpdateOneRequiredWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comanda_id?: StringFieldUpdateOperationsInput | string
  }

  export type AvaliacaoUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comanda_id?: StringFieldUpdateOperationsInput | string
  }

  export type FavoritoUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product?: ProductUpdateOneRequiredWithoutFavoritosNestedInput
  }

  export type FavoritoUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_id?: StringFieldUpdateOperationsInput | string
  }

  export type FavoritoUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_id?: StringFieldUpdateOperationsInput | string
  }

  export type ComandaUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mesa?: MesaUpdateOneWithoutComandaNestedInput
    avaliacao?: AvaliacaoUpdateManyWithoutComandaNestedInput
    pedido?: PedidoUpdateManyWithoutComandaNestedInput
  }

  export type ComandaUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mesa_id?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: AvaliacaoUncheckedUpdateManyWithoutComandaNestedInput
    pedido?: PedidoUncheckedUpdateManyWithoutComandaNestedInput
  }

  export type ComandaUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mesa_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PedidoUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comanda?: ComandaUpdateOneRequiredWithoutPedidoNestedInput
    items?: ItemUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comanda_id?: StringFieldUpdateOperationsInput | string
    items?: ItemUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comanda_id?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateManyCategoryInput = {
    id?: string
    name: string
    price: number
    points: number
    description: string
    promocao: boolean
    image_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ProductUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    promocao?: BoolFieldUpdateOperationsInput | boolean
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: ItemUpdateManyWithoutProductNestedInput
    favoritos?: FavoritoUpdateManyWithoutProductNestedInput
    product_ingrediente?: Product_ingredienteUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    promocao?: BoolFieldUpdateOperationsInput | boolean
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: ItemUncheckedUpdateManyWithoutProductNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutProductNestedInput
    product_ingrediente?: Product_ingredienteUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    promocao?: BoolFieldUpdateOperationsInput | boolean
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ItemCreateManyProductInput = {
    id?: string
    qtd: number
    price: number
    points?: number
    removidos?: NullableJsonNullValueInput | InputJsonValue
    adicionais?: NullableJsonNullValueInput | InputJsonValue
    observacoes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    pedido_id: string
  }

  export type FavoritoCreateManyProductInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cliente_id: string
  }

  export type Product_ingredienteCreateManyProductInput = {
    id?: string
    qtd?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ingrediente_id: string
  }

  export type ItemUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    removidos?: NullableJsonNullValueInput | InputJsonValue
    adicionais?: NullableJsonNullValueInput | InputJsonValue
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pedido?: PedidoUpdateOneRequiredWithoutItemsNestedInput
    Item_adicional?: Item_adicionalUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    removidos?: NullableJsonNullValueInput | InputJsonValue
    adicionais?: NullableJsonNullValueInput | InputJsonValue
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pedido_id?: StringFieldUpdateOperationsInput | string
    Item_adicional?: Item_adicionalUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    removidos?: NullableJsonNullValueInput | InputJsonValue
    adicionais?: NullableJsonNullValueInput | InputJsonValue
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pedido_id?: StringFieldUpdateOperationsInput | string
  }

  export type FavoritoUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente?: ClienteUpdateOneRequiredWithoutFavoritosNestedInput
  }

  export type FavoritoUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente_id?: StringFieldUpdateOperationsInput | string
  }

  export type FavoritoUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente_id?: StringFieldUpdateOperationsInput | string
  }

  export type Product_ingredienteUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ingrediente?: IngredienteUpdateOneRequiredWithoutProduct_ingredienteNestedInput
  }

  export type Product_ingredienteUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ingrediente_id?: StringFieldUpdateOperationsInput | string
  }

  export type Product_ingredienteUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ingrediente_id?: StringFieldUpdateOperationsInput | string
  }

  export type ItemCreateManyPedidoInput = {
    id?: string
    qtd: number
    price: number
    points?: number
    removidos?: NullableJsonNullValueInput | InputJsonValue
    adicionais?: NullableJsonNullValueInput | InputJsonValue
    observacoes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    product_id: string
  }

  export type ItemUpdateWithoutPedidoInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    removidos?: NullableJsonNullValueInput | InputJsonValue
    adicionais?: NullableJsonNullValueInput | InputJsonValue
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product?: ProductUpdateOneRequiredWithoutItemsNestedInput
    Item_adicional?: Item_adicionalUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutPedidoInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    removidos?: NullableJsonNullValueInput | InputJsonValue
    adicionais?: NullableJsonNullValueInput | InputJsonValue
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_id?: StringFieldUpdateOperationsInput | string
    Item_adicional?: Item_adicionalUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateManyWithoutPedidoInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    removidos?: NullableJsonNullValueInput | InputJsonValue
    adicionais?: NullableJsonNullValueInput | InputJsonValue
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_id?: StringFieldUpdateOperationsInput | string
  }

  export type AvaliacaoCreateManyComandaInput = {
    id?: string
    nota: number
    descricao: string
    created_at?: Date | string | null
    cliente_id: string
  }

  export type PedidoCreateManyComandaInput = {
    id?: string
    status: string
    price: number
    points: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cliente_id: string
  }

  export type AvaliacaoUpdateWithoutComandaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente?: ClienteUpdateOneRequiredWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoUncheckedUpdateWithoutComandaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente_id?: StringFieldUpdateOperationsInput | string
  }

  export type AvaliacaoUncheckedUpdateManyWithoutComandaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente_id?: StringFieldUpdateOperationsInput | string
  }

  export type PedidoUpdateWithoutComandaInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente?: ClienteUpdateOneRequiredWithoutPedidosNestedInput
    items?: ItemUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutComandaInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente_id?: StringFieldUpdateOperationsInput | string
    items?: ItemUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutComandaInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente_id?: StringFieldUpdateOperationsInput | string
  }

  export type Item_adicionalCreateManyItemInput = {
    id?: string
    qtd?: number
    adicional_id: string
  }

  export type Item_adicionalUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd?: IntFieldUpdateOperationsInput | number
    adicional?: AdicionalUpdateOneRequiredWithoutItem_adicionalNestedInput
  }

  export type Item_adicionalUncheckedUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd?: IntFieldUpdateOperationsInput | number
    adicional_id?: StringFieldUpdateOperationsInput | string
  }

  export type Item_adicionalUncheckedUpdateManyWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd?: IntFieldUpdateOperationsInput | number
    adicional_id?: StringFieldUpdateOperationsInput | string
  }

  export type Product_ingredienteCreateManyIngredienteInput = {
    id?: string
    qtd?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    product_id: string
  }

  export type Product_ingredienteUpdateWithoutIngredienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product?: ProductUpdateOneRequiredWithoutProduct_ingredienteNestedInput
  }

  export type Product_ingredienteUncheckedUpdateWithoutIngredienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_id?: StringFieldUpdateOperationsInput | string
  }

  export type Product_ingredienteUncheckedUpdateManyWithoutIngredienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_id?: StringFieldUpdateOperationsInput | string
  }

  export type Item_adicionalCreateManyAdicionalInput = {
    id?: string
    qtd?: number
    item_id: string
  }

  export type Item_adicionalUpdateWithoutAdicionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd?: IntFieldUpdateOperationsInput | number
    item?: ItemUpdateOneRequiredWithoutItem_adicionalNestedInput
  }

  export type Item_adicionalUncheckedUpdateWithoutAdicionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd?: IntFieldUpdateOperationsInput | number
    item_id?: StringFieldUpdateOperationsInput | string
  }

  export type Item_adicionalUncheckedUpdateManyWithoutAdicionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    qtd?: IntFieldUpdateOperationsInput | number
    item_id?: StringFieldUpdateOperationsInput | string
  }

  export type ComandaCreateManyMesaInput = {
    id?: string
    status: string
    price: number
    points: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cliente_id: string
  }

  export type ComandaUpdateWithoutMesaInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente?: ClienteUpdateOneRequiredWithoutComandasNestedInput
    avaliacao?: AvaliacaoUpdateManyWithoutComandaNestedInput
    pedido?: PedidoUpdateManyWithoutComandaNestedInput
  }

  export type ComandaUncheckedUpdateWithoutMesaInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente_id?: StringFieldUpdateOperationsInput | string
    avaliacao?: AvaliacaoUncheckedUpdateManyWithoutComandaNestedInput
    pedido?: PedidoUncheckedUpdateManyWithoutComandaNestedInput
  }

  export type ComandaUncheckedUpdateManyWithoutMesaInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente_id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}