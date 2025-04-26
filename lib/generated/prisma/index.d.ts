
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
 * Model db_nodes
 * 
 */
export type db_nodes = $Result.DefaultSelection<Prisma.$db_nodesPayload>
/**
 * Model db_edges
 * 
 */
export type db_edges = $Result.DefaultSelection<Prisma.$db_edgesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Db_nodes
 * const db_nodes = await prisma.db_nodes.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Db_nodes
   * const db_nodes = await prisma.db_nodes.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.db_nodes`: Exposes CRUD operations for the **db_nodes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Db_nodes
    * const db_nodes = await prisma.db_nodes.findMany()
    * ```
    */
  get db_nodes(): Prisma.db_nodesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.db_edges`: Exposes CRUD operations for the **db_edges** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Db_edges
    * const db_edges = await prisma.db_edges.findMany()
    * ```
    */
  get db_edges(): Prisma.db_edgesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    db_nodes: 'db_nodes',
    db_edges: 'db_edges'
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
      modelProps: "db_nodes" | "db_edges"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      db_nodes: {
        payload: Prisma.$db_nodesPayload<ExtArgs>
        fields: Prisma.db_nodesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.db_nodesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$db_nodesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.db_nodesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$db_nodesPayload>
          }
          findFirst: {
            args: Prisma.db_nodesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$db_nodesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.db_nodesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$db_nodesPayload>
          }
          findMany: {
            args: Prisma.db_nodesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$db_nodesPayload>[]
          }
          create: {
            args: Prisma.db_nodesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$db_nodesPayload>
          }
          createMany: {
            args: Prisma.db_nodesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.db_nodesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$db_nodesPayload>
          }
          update: {
            args: Prisma.db_nodesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$db_nodesPayload>
          }
          deleteMany: {
            args: Prisma.db_nodesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.db_nodesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.db_nodesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$db_nodesPayload>
          }
          aggregate: {
            args: Prisma.Db_nodesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDb_nodes>
          }
          groupBy: {
            args: Prisma.db_nodesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Db_nodesGroupByOutputType>[]
          }
          count: {
            args: Prisma.db_nodesCountArgs<ExtArgs>
            result: $Utils.Optional<Db_nodesCountAggregateOutputType> | number
          }
        }
      }
      db_edges: {
        payload: Prisma.$db_edgesPayload<ExtArgs>
        fields: Prisma.db_edgesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.db_edgesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$db_edgesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.db_edgesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$db_edgesPayload>
          }
          findFirst: {
            args: Prisma.db_edgesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$db_edgesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.db_edgesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$db_edgesPayload>
          }
          findMany: {
            args: Prisma.db_edgesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$db_edgesPayload>[]
          }
          create: {
            args: Prisma.db_edgesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$db_edgesPayload>
          }
          createMany: {
            args: Prisma.db_edgesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.db_edgesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$db_edgesPayload>
          }
          update: {
            args: Prisma.db_edgesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$db_edgesPayload>
          }
          deleteMany: {
            args: Prisma.db_edgesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.db_edgesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.db_edgesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$db_edgesPayload>
          }
          aggregate: {
            args: Prisma.Db_edgesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDb_edges>
          }
          groupBy: {
            args: Prisma.db_edgesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Db_edgesGroupByOutputType>[]
          }
          count: {
            args: Prisma.db_edgesCountArgs<ExtArgs>
            result: $Utils.Optional<Db_edgesCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    db_nodes?: db_nodesOmit
    db_edges?: db_edgesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type Db_nodesCountOutputType
   */

  export type Db_nodesCountOutputType = {
    children: number
  }

  export type Db_nodesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | Db_nodesCountOutputTypeCountChildrenArgs
  }

  // Custom InputTypes
  /**
   * Db_nodesCountOutputType without action
   */
  export type Db_nodesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Db_nodesCountOutputType
     */
    select?: Db_nodesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Db_nodesCountOutputType without action
   */
  export type Db_nodesCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: db_nodesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model db_nodes
   */

  export type AggregateDb_nodes = {
    _count: Db_nodesCountAggregateOutputType | null
    _avg: Db_nodesAvgAggregateOutputType | null
    _sum: Db_nodesSumAggregateOutputType | null
    _min: Db_nodesMinAggregateOutputType | null
    _max: Db_nodesMaxAggregateOutputType | null
  }

  export type Db_nodesAvgAggregateOutputType = {
    position_x: number | null
    position_y: number | null
  }

  export type Db_nodesSumAggregateOutputType = {
    position_x: number | null
    position_y: number | null
  }

  export type Db_nodesMinAggregateOutputType = {
    id: string | null
    materi: string | null
    position_x: number | null
    position_y: number | null
    parent_id: string | null
    type: string | null
    source_position: string | null
    target_position: string | null
  }

  export type Db_nodesMaxAggregateOutputType = {
    id: string | null
    materi: string | null
    position_x: number | null
    position_y: number | null
    parent_id: string | null
    type: string | null
    source_position: string | null
    target_position: string | null
  }

  export type Db_nodesCountAggregateOutputType = {
    id: number
    materi: number
    position_x: number
    position_y: number
    parent_id: number
    node_style: number
    type: number
    source_position: number
    target_position: number
    _all: number
  }


  export type Db_nodesAvgAggregateInputType = {
    position_x?: true
    position_y?: true
  }

  export type Db_nodesSumAggregateInputType = {
    position_x?: true
    position_y?: true
  }

  export type Db_nodesMinAggregateInputType = {
    id?: true
    materi?: true
    position_x?: true
    position_y?: true
    parent_id?: true
    type?: true
    source_position?: true
    target_position?: true
  }

  export type Db_nodesMaxAggregateInputType = {
    id?: true
    materi?: true
    position_x?: true
    position_y?: true
    parent_id?: true
    type?: true
    source_position?: true
    target_position?: true
  }

  export type Db_nodesCountAggregateInputType = {
    id?: true
    materi?: true
    position_x?: true
    position_y?: true
    parent_id?: true
    node_style?: true
    type?: true
    source_position?: true
    target_position?: true
    _all?: true
  }

  export type Db_nodesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which db_nodes to aggregate.
     */
    where?: db_nodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of db_nodes to fetch.
     */
    orderBy?: db_nodesOrderByWithRelationInput | db_nodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: db_nodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` db_nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` db_nodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned db_nodes
    **/
    _count?: true | Db_nodesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Db_nodesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Db_nodesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Db_nodesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Db_nodesMaxAggregateInputType
  }

  export type GetDb_nodesAggregateType<T extends Db_nodesAggregateArgs> = {
        [P in keyof T & keyof AggregateDb_nodes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDb_nodes[P]>
      : GetScalarType<T[P], AggregateDb_nodes[P]>
  }




  export type db_nodesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: db_nodesWhereInput
    orderBy?: db_nodesOrderByWithAggregationInput | db_nodesOrderByWithAggregationInput[]
    by: Db_nodesScalarFieldEnum[] | Db_nodesScalarFieldEnum
    having?: db_nodesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Db_nodesCountAggregateInputType | true
    _avg?: Db_nodesAvgAggregateInputType
    _sum?: Db_nodesSumAggregateInputType
    _min?: Db_nodesMinAggregateInputType
    _max?: Db_nodesMaxAggregateInputType
  }

  export type Db_nodesGroupByOutputType = {
    id: string
    materi: string
    position_x: number
    position_y: number
    parent_id: string | null
    node_style: JsonValue | null
    type: string | null
    source_position: string | null
    target_position: string | null
    _count: Db_nodesCountAggregateOutputType | null
    _avg: Db_nodesAvgAggregateOutputType | null
    _sum: Db_nodesSumAggregateOutputType | null
    _min: Db_nodesMinAggregateOutputType | null
    _max: Db_nodesMaxAggregateOutputType | null
  }

  type GetDb_nodesGroupByPayload<T extends db_nodesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Db_nodesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Db_nodesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Db_nodesGroupByOutputType[P]>
            : GetScalarType<T[P], Db_nodesGroupByOutputType[P]>
        }
      >
    >


  export type db_nodesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materi?: boolean
    position_x?: boolean
    position_y?: boolean
    parent_id?: boolean
    node_style?: boolean
    type?: boolean
    source_position?: boolean
    target_position?: boolean
    children?: boolean | db_nodes$childrenArgs<ExtArgs>
    parent?: boolean | db_nodes$parentArgs<ExtArgs>
    _count?: boolean | Db_nodesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["db_nodes"]>



  export type db_nodesSelectScalar = {
    id?: boolean
    materi?: boolean
    position_x?: boolean
    position_y?: boolean
    parent_id?: boolean
    node_style?: boolean
    type?: boolean
    source_position?: boolean
    target_position?: boolean
  }

  export type db_nodesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "materi" | "position_x" | "position_y" | "parent_id" | "node_style" | "type" | "source_position" | "target_position", ExtArgs["result"]["db_nodes"]>
  export type db_nodesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | db_nodes$childrenArgs<ExtArgs>
    parent?: boolean | db_nodes$parentArgs<ExtArgs>
    _count?: boolean | Db_nodesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $db_nodesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "db_nodes"
    objects: {
      children: Prisma.$db_nodesPayload<ExtArgs>[]
      parent: Prisma.$db_nodesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      materi: string
      position_x: number
      position_y: number
      parent_id: string | null
      node_style: Prisma.JsonValue | null
      type: string | null
      source_position: string | null
      target_position: string | null
    }, ExtArgs["result"]["db_nodes"]>
    composites: {}
  }

  type db_nodesGetPayload<S extends boolean | null | undefined | db_nodesDefaultArgs> = $Result.GetResult<Prisma.$db_nodesPayload, S>

  type db_nodesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<db_nodesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Db_nodesCountAggregateInputType | true
    }

  export interface db_nodesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['db_nodes'], meta: { name: 'db_nodes' } }
    /**
     * Find zero or one Db_nodes that matches the filter.
     * @param {db_nodesFindUniqueArgs} args - Arguments to find a Db_nodes
     * @example
     * // Get one Db_nodes
     * const db_nodes = await prisma.db_nodes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends db_nodesFindUniqueArgs>(args: SelectSubset<T, db_nodesFindUniqueArgs<ExtArgs>>): Prisma__db_nodesClient<$Result.GetResult<Prisma.$db_nodesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Db_nodes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {db_nodesFindUniqueOrThrowArgs} args - Arguments to find a Db_nodes
     * @example
     * // Get one Db_nodes
     * const db_nodes = await prisma.db_nodes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends db_nodesFindUniqueOrThrowArgs>(args: SelectSubset<T, db_nodesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__db_nodesClient<$Result.GetResult<Prisma.$db_nodesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Db_nodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {db_nodesFindFirstArgs} args - Arguments to find a Db_nodes
     * @example
     * // Get one Db_nodes
     * const db_nodes = await prisma.db_nodes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends db_nodesFindFirstArgs>(args?: SelectSubset<T, db_nodesFindFirstArgs<ExtArgs>>): Prisma__db_nodesClient<$Result.GetResult<Prisma.$db_nodesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Db_nodes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {db_nodesFindFirstOrThrowArgs} args - Arguments to find a Db_nodes
     * @example
     * // Get one Db_nodes
     * const db_nodes = await prisma.db_nodes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends db_nodesFindFirstOrThrowArgs>(args?: SelectSubset<T, db_nodesFindFirstOrThrowArgs<ExtArgs>>): Prisma__db_nodesClient<$Result.GetResult<Prisma.$db_nodesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Db_nodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {db_nodesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Db_nodes
     * const db_nodes = await prisma.db_nodes.findMany()
     * 
     * // Get first 10 Db_nodes
     * const db_nodes = await prisma.db_nodes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const db_nodesWithIdOnly = await prisma.db_nodes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends db_nodesFindManyArgs>(args?: SelectSubset<T, db_nodesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$db_nodesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Db_nodes.
     * @param {db_nodesCreateArgs} args - Arguments to create a Db_nodes.
     * @example
     * // Create one Db_nodes
     * const Db_nodes = await prisma.db_nodes.create({
     *   data: {
     *     // ... data to create a Db_nodes
     *   }
     * })
     * 
     */
    create<T extends db_nodesCreateArgs>(args: SelectSubset<T, db_nodesCreateArgs<ExtArgs>>): Prisma__db_nodesClient<$Result.GetResult<Prisma.$db_nodesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Db_nodes.
     * @param {db_nodesCreateManyArgs} args - Arguments to create many Db_nodes.
     * @example
     * // Create many Db_nodes
     * const db_nodes = await prisma.db_nodes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends db_nodesCreateManyArgs>(args?: SelectSubset<T, db_nodesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Db_nodes.
     * @param {db_nodesDeleteArgs} args - Arguments to delete one Db_nodes.
     * @example
     * // Delete one Db_nodes
     * const Db_nodes = await prisma.db_nodes.delete({
     *   where: {
     *     // ... filter to delete one Db_nodes
     *   }
     * })
     * 
     */
    delete<T extends db_nodesDeleteArgs>(args: SelectSubset<T, db_nodesDeleteArgs<ExtArgs>>): Prisma__db_nodesClient<$Result.GetResult<Prisma.$db_nodesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Db_nodes.
     * @param {db_nodesUpdateArgs} args - Arguments to update one Db_nodes.
     * @example
     * // Update one Db_nodes
     * const db_nodes = await prisma.db_nodes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends db_nodesUpdateArgs>(args: SelectSubset<T, db_nodesUpdateArgs<ExtArgs>>): Prisma__db_nodesClient<$Result.GetResult<Prisma.$db_nodesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Db_nodes.
     * @param {db_nodesDeleteManyArgs} args - Arguments to filter Db_nodes to delete.
     * @example
     * // Delete a few Db_nodes
     * const { count } = await prisma.db_nodes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends db_nodesDeleteManyArgs>(args?: SelectSubset<T, db_nodesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Db_nodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {db_nodesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Db_nodes
     * const db_nodes = await prisma.db_nodes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends db_nodesUpdateManyArgs>(args: SelectSubset<T, db_nodesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Db_nodes.
     * @param {db_nodesUpsertArgs} args - Arguments to update or create a Db_nodes.
     * @example
     * // Update or create a Db_nodes
     * const db_nodes = await prisma.db_nodes.upsert({
     *   create: {
     *     // ... data to create a Db_nodes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Db_nodes we want to update
     *   }
     * })
     */
    upsert<T extends db_nodesUpsertArgs>(args: SelectSubset<T, db_nodesUpsertArgs<ExtArgs>>): Prisma__db_nodesClient<$Result.GetResult<Prisma.$db_nodesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Db_nodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {db_nodesCountArgs} args - Arguments to filter Db_nodes to count.
     * @example
     * // Count the number of Db_nodes
     * const count = await prisma.db_nodes.count({
     *   where: {
     *     // ... the filter for the Db_nodes we want to count
     *   }
     * })
    **/
    count<T extends db_nodesCountArgs>(
      args?: Subset<T, db_nodesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Db_nodesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Db_nodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Db_nodesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Db_nodesAggregateArgs>(args: Subset<T, Db_nodesAggregateArgs>): Prisma.PrismaPromise<GetDb_nodesAggregateType<T>>

    /**
     * Group by Db_nodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {db_nodesGroupByArgs} args - Group by arguments.
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
      T extends db_nodesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: db_nodesGroupByArgs['orderBy'] }
        : { orderBy?: db_nodesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, db_nodesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDb_nodesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the db_nodes model
   */
  readonly fields: db_nodesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for db_nodes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__db_nodesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    children<T extends db_nodes$childrenArgs<ExtArgs> = {}>(args?: Subset<T, db_nodes$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$db_nodesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parent<T extends db_nodes$parentArgs<ExtArgs> = {}>(args?: Subset<T, db_nodes$parentArgs<ExtArgs>>): Prisma__db_nodesClient<$Result.GetResult<Prisma.$db_nodesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the db_nodes model
   */
  interface db_nodesFieldRefs {
    readonly id: FieldRef<"db_nodes", 'String'>
    readonly materi: FieldRef<"db_nodes", 'String'>
    readonly position_x: FieldRef<"db_nodes", 'Int'>
    readonly position_y: FieldRef<"db_nodes", 'Int'>
    readonly parent_id: FieldRef<"db_nodes", 'String'>
    readonly node_style: FieldRef<"db_nodes", 'Json'>
    readonly type: FieldRef<"db_nodes", 'String'>
    readonly source_position: FieldRef<"db_nodes", 'String'>
    readonly target_position: FieldRef<"db_nodes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * db_nodes findUnique
   */
  export type db_nodesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the db_nodes
     */
    select?: db_nodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the db_nodes
     */
    omit?: db_nodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: db_nodesInclude<ExtArgs> | null
    /**
     * Filter, which db_nodes to fetch.
     */
    where: db_nodesWhereUniqueInput
  }

  /**
   * db_nodes findUniqueOrThrow
   */
  export type db_nodesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the db_nodes
     */
    select?: db_nodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the db_nodes
     */
    omit?: db_nodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: db_nodesInclude<ExtArgs> | null
    /**
     * Filter, which db_nodes to fetch.
     */
    where: db_nodesWhereUniqueInput
  }

  /**
   * db_nodes findFirst
   */
  export type db_nodesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the db_nodes
     */
    select?: db_nodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the db_nodes
     */
    omit?: db_nodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: db_nodesInclude<ExtArgs> | null
    /**
     * Filter, which db_nodes to fetch.
     */
    where?: db_nodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of db_nodes to fetch.
     */
    orderBy?: db_nodesOrderByWithRelationInput | db_nodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for db_nodes.
     */
    cursor?: db_nodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` db_nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` db_nodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of db_nodes.
     */
    distinct?: Db_nodesScalarFieldEnum | Db_nodesScalarFieldEnum[]
  }

  /**
   * db_nodes findFirstOrThrow
   */
  export type db_nodesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the db_nodes
     */
    select?: db_nodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the db_nodes
     */
    omit?: db_nodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: db_nodesInclude<ExtArgs> | null
    /**
     * Filter, which db_nodes to fetch.
     */
    where?: db_nodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of db_nodes to fetch.
     */
    orderBy?: db_nodesOrderByWithRelationInput | db_nodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for db_nodes.
     */
    cursor?: db_nodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` db_nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` db_nodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of db_nodes.
     */
    distinct?: Db_nodesScalarFieldEnum | Db_nodesScalarFieldEnum[]
  }

  /**
   * db_nodes findMany
   */
  export type db_nodesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the db_nodes
     */
    select?: db_nodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the db_nodes
     */
    omit?: db_nodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: db_nodesInclude<ExtArgs> | null
    /**
     * Filter, which db_nodes to fetch.
     */
    where?: db_nodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of db_nodes to fetch.
     */
    orderBy?: db_nodesOrderByWithRelationInput | db_nodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing db_nodes.
     */
    cursor?: db_nodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` db_nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` db_nodes.
     */
    skip?: number
    distinct?: Db_nodesScalarFieldEnum | Db_nodesScalarFieldEnum[]
  }

  /**
   * db_nodes create
   */
  export type db_nodesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the db_nodes
     */
    select?: db_nodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the db_nodes
     */
    omit?: db_nodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: db_nodesInclude<ExtArgs> | null
    /**
     * The data needed to create a db_nodes.
     */
    data: XOR<db_nodesCreateInput, db_nodesUncheckedCreateInput>
  }

  /**
   * db_nodes createMany
   */
  export type db_nodesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many db_nodes.
     */
    data: db_nodesCreateManyInput | db_nodesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * db_nodes update
   */
  export type db_nodesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the db_nodes
     */
    select?: db_nodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the db_nodes
     */
    omit?: db_nodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: db_nodesInclude<ExtArgs> | null
    /**
     * The data needed to update a db_nodes.
     */
    data: XOR<db_nodesUpdateInput, db_nodesUncheckedUpdateInput>
    /**
     * Choose, which db_nodes to update.
     */
    where: db_nodesWhereUniqueInput
  }

  /**
   * db_nodes updateMany
   */
  export type db_nodesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update db_nodes.
     */
    data: XOR<db_nodesUpdateManyMutationInput, db_nodesUncheckedUpdateManyInput>
    /**
     * Filter which db_nodes to update
     */
    where?: db_nodesWhereInput
    /**
     * Limit how many db_nodes to update.
     */
    limit?: number
  }

  /**
   * db_nodes upsert
   */
  export type db_nodesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the db_nodes
     */
    select?: db_nodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the db_nodes
     */
    omit?: db_nodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: db_nodesInclude<ExtArgs> | null
    /**
     * The filter to search for the db_nodes to update in case it exists.
     */
    where: db_nodesWhereUniqueInput
    /**
     * In case the db_nodes found by the `where` argument doesn't exist, create a new db_nodes with this data.
     */
    create: XOR<db_nodesCreateInput, db_nodesUncheckedCreateInput>
    /**
     * In case the db_nodes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<db_nodesUpdateInput, db_nodesUncheckedUpdateInput>
  }

  /**
   * db_nodes delete
   */
  export type db_nodesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the db_nodes
     */
    select?: db_nodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the db_nodes
     */
    omit?: db_nodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: db_nodesInclude<ExtArgs> | null
    /**
     * Filter which db_nodes to delete.
     */
    where: db_nodesWhereUniqueInput
  }

  /**
   * db_nodes deleteMany
   */
  export type db_nodesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which db_nodes to delete
     */
    where?: db_nodesWhereInput
    /**
     * Limit how many db_nodes to delete.
     */
    limit?: number
  }

  /**
   * db_nodes.children
   */
  export type db_nodes$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the db_nodes
     */
    select?: db_nodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the db_nodes
     */
    omit?: db_nodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: db_nodesInclude<ExtArgs> | null
    where?: db_nodesWhereInput
    orderBy?: db_nodesOrderByWithRelationInput | db_nodesOrderByWithRelationInput[]
    cursor?: db_nodesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Db_nodesScalarFieldEnum | Db_nodesScalarFieldEnum[]
  }

  /**
   * db_nodes.parent
   */
  export type db_nodes$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the db_nodes
     */
    select?: db_nodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the db_nodes
     */
    omit?: db_nodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: db_nodesInclude<ExtArgs> | null
    where?: db_nodesWhereInput
  }

  /**
   * db_nodes without action
   */
  export type db_nodesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the db_nodes
     */
    select?: db_nodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the db_nodes
     */
    omit?: db_nodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: db_nodesInclude<ExtArgs> | null
  }


  /**
   * Model db_edges
   */

  export type AggregateDb_edges = {
    _count: Db_edgesCountAggregateOutputType | null
    _min: Db_edgesMinAggregateOutputType | null
    _max: Db_edgesMaxAggregateOutputType | null
  }

  export type Db_edgesMinAggregateOutputType = {
    id: string | null
    source_id: string | null
    target_id: string | null
    type: string | null
    animated: boolean | null
    source_handle: string | null
    target_handle: string | null
  }

  export type Db_edgesMaxAggregateOutputType = {
    id: string | null
    source_id: string | null
    target_id: string | null
    type: string | null
    animated: boolean | null
    source_handle: string | null
    target_handle: string | null
  }

  export type Db_edgesCountAggregateOutputType = {
    id: number
    source_id: number
    target_id: number
    type: number
    animated: number
    source_handle: number
    target_handle: number
    _all: number
  }


  export type Db_edgesMinAggregateInputType = {
    id?: true
    source_id?: true
    target_id?: true
    type?: true
    animated?: true
    source_handle?: true
    target_handle?: true
  }

  export type Db_edgesMaxAggregateInputType = {
    id?: true
    source_id?: true
    target_id?: true
    type?: true
    animated?: true
    source_handle?: true
    target_handle?: true
  }

  export type Db_edgesCountAggregateInputType = {
    id?: true
    source_id?: true
    target_id?: true
    type?: true
    animated?: true
    source_handle?: true
    target_handle?: true
    _all?: true
  }

  export type Db_edgesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which db_edges to aggregate.
     */
    where?: db_edgesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of db_edges to fetch.
     */
    orderBy?: db_edgesOrderByWithRelationInput | db_edgesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: db_edgesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` db_edges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` db_edges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned db_edges
    **/
    _count?: true | Db_edgesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Db_edgesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Db_edgesMaxAggregateInputType
  }

  export type GetDb_edgesAggregateType<T extends Db_edgesAggregateArgs> = {
        [P in keyof T & keyof AggregateDb_edges]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDb_edges[P]>
      : GetScalarType<T[P], AggregateDb_edges[P]>
  }




  export type db_edgesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: db_edgesWhereInput
    orderBy?: db_edgesOrderByWithAggregationInput | db_edgesOrderByWithAggregationInput[]
    by: Db_edgesScalarFieldEnum[] | Db_edgesScalarFieldEnum
    having?: db_edgesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Db_edgesCountAggregateInputType | true
    _min?: Db_edgesMinAggregateInputType
    _max?: Db_edgesMaxAggregateInputType
  }

  export type Db_edgesGroupByOutputType = {
    id: string
    source_id: string
    target_id: string
    type: string
    animated: boolean
    source_handle: string | null
    target_handle: string | null
    _count: Db_edgesCountAggregateOutputType | null
    _min: Db_edgesMinAggregateOutputType | null
    _max: Db_edgesMaxAggregateOutputType | null
  }

  type GetDb_edgesGroupByPayload<T extends db_edgesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Db_edgesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Db_edgesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Db_edgesGroupByOutputType[P]>
            : GetScalarType<T[P], Db_edgesGroupByOutputType[P]>
        }
      >
    >


  export type db_edgesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source_id?: boolean
    target_id?: boolean
    type?: boolean
    animated?: boolean
    source_handle?: boolean
    target_handle?: boolean
  }, ExtArgs["result"]["db_edges"]>



  export type db_edgesSelectScalar = {
    id?: boolean
    source_id?: boolean
    target_id?: boolean
    type?: boolean
    animated?: boolean
    source_handle?: boolean
    target_handle?: boolean
  }

  export type db_edgesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "source_id" | "target_id" | "type" | "animated" | "source_handle" | "target_handle", ExtArgs["result"]["db_edges"]>

  export type $db_edgesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "db_edges"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      source_id: string
      target_id: string
      type: string
      animated: boolean
      source_handle: string | null
      target_handle: string | null
    }, ExtArgs["result"]["db_edges"]>
    composites: {}
  }

  type db_edgesGetPayload<S extends boolean | null | undefined | db_edgesDefaultArgs> = $Result.GetResult<Prisma.$db_edgesPayload, S>

  type db_edgesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<db_edgesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Db_edgesCountAggregateInputType | true
    }

  export interface db_edgesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['db_edges'], meta: { name: 'db_edges' } }
    /**
     * Find zero or one Db_edges that matches the filter.
     * @param {db_edgesFindUniqueArgs} args - Arguments to find a Db_edges
     * @example
     * // Get one Db_edges
     * const db_edges = await prisma.db_edges.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends db_edgesFindUniqueArgs>(args: SelectSubset<T, db_edgesFindUniqueArgs<ExtArgs>>): Prisma__db_edgesClient<$Result.GetResult<Prisma.$db_edgesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Db_edges that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {db_edgesFindUniqueOrThrowArgs} args - Arguments to find a Db_edges
     * @example
     * // Get one Db_edges
     * const db_edges = await prisma.db_edges.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends db_edgesFindUniqueOrThrowArgs>(args: SelectSubset<T, db_edgesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__db_edgesClient<$Result.GetResult<Prisma.$db_edgesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Db_edges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {db_edgesFindFirstArgs} args - Arguments to find a Db_edges
     * @example
     * // Get one Db_edges
     * const db_edges = await prisma.db_edges.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends db_edgesFindFirstArgs>(args?: SelectSubset<T, db_edgesFindFirstArgs<ExtArgs>>): Prisma__db_edgesClient<$Result.GetResult<Prisma.$db_edgesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Db_edges that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {db_edgesFindFirstOrThrowArgs} args - Arguments to find a Db_edges
     * @example
     * // Get one Db_edges
     * const db_edges = await prisma.db_edges.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends db_edgesFindFirstOrThrowArgs>(args?: SelectSubset<T, db_edgesFindFirstOrThrowArgs<ExtArgs>>): Prisma__db_edgesClient<$Result.GetResult<Prisma.$db_edgesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Db_edges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {db_edgesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Db_edges
     * const db_edges = await prisma.db_edges.findMany()
     * 
     * // Get first 10 Db_edges
     * const db_edges = await prisma.db_edges.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const db_edgesWithIdOnly = await prisma.db_edges.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends db_edgesFindManyArgs>(args?: SelectSubset<T, db_edgesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$db_edgesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Db_edges.
     * @param {db_edgesCreateArgs} args - Arguments to create a Db_edges.
     * @example
     * // Create one Db_edges
     * const Db_edges = await prisma.db_edges.create({
     *   data: {
     *     // ... data to create a Db_edges
     *   }
     * })
     * 
     */
    create<T extends db_edgesCreateArgs>(args: SelectSubset<T, db_edgesCreateArgs<ExtArgs>>): Prisma__db_edgesClient<$Result.GetResult<Prisma.$db_edgesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Db_edges.
     * @param {db_edgesCreateManyArgs} args - Arguments to create many Db_edges.
     * @example
     * // Create many Db_edges
     * const db_edges = await prisma.db_edges.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends db_edgesCreateManyArgs>(args?: SelectSubset<T, db_edgesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Db_edges.
     * @param {db_edgesDeleteArgs} args - Arguments to delete one Db_edges.
     * @example
     * // Delete one Db_edges
     * const Db_edges = await prisma.db_edges.delete({
     *   where: {
     *     // ... filter to delete one Db_edges
     *   }
     * })
     * 
     */
    delete<T extends db_edgesDeleteArgs>(args: SelectSubset<T, db_edgesDeleteArgs<ExtArgs>>): Prisma__db_edgesClient<$Result.GetResult<Prisma.$db_edgesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Db_edges.
     * @param {db_edgesUpdateArgs} args - Arguments to update one Db_edges.
     * @example
     * // Update one Db_edges
     * const db_edges = await prisma.db_edges.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends db_edgesUpdateArgs>(args: SelectSubset<T, db_edgesUpdateArgs<ExtArgs>>): Prisma__db_edgesClient<$Result.GetResult<Prisma.$db_edgesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Db_edges.
     * @param {db_edgesDeleteManyArgs} args - Arguments to filter Db_edges to delete.
     * @example
     * // Delete a few Db_edges
     * const { count } = await prisma.db_edges.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends db_edgesDeleteManyArgs>(args?: SelectSubset<T, db_edgesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Db_edges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {db_edgesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Db_edges
     * const db_edges = await prisma.db_edges.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends db_edgesUpdateManyArgs>(args: SelectSubset<T, db_edgesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Db_edges.
     * @param {db_edgesUpsertArgs} args - Arguments to update or create a Db_edges.
     * @example
     * // Update or create a Db_edges
     * const db_edges = await prisma.db_edges.upsert({
     *   create: {
     *     // ... data to create a Db_edges
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Db_edges we want to update
     *   }
     * })
     */
    upsert<T extends db_edgesUpsertArgs>(args: SelectSubset<T, db_edgesUpsertArgs<ExtArgs>>): Prisma__db_edgesClient<$Result.GetResult<Prisma.$db_edgesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Db_edges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {db_edgesCountArgs} args - Arguments to filter Db_edges to count.
     * @example
     * // Count the number of Db_edges
     * const count = await prisma.db_edges.count({
     *   where: {
     *     // ... the filter for the Db_edges we want to count
     *   }
     * })
    **/
    count<T extends db_edgesCountArgs>(
      args?: Subset<T, db_edgesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Db_edgesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Db_edges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Db_edgesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Db_edgesAggregateArgs>(args: Subset<T, Db_edgesAggregateArgs>): Prisma.PrismaPromise<GetDb_edgesAggregateType<T>>

    /**
     * Group by Db_edges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {db_edgesGroupByArgs} args - Group by arguments.
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
      T extends db_edgesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: db_edgesGroupByArgs['orderBy'] }
        : { orderBy?: db_edgesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, db_edgesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDb_edgesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the db_edges model
   */
  readonly fields: db_edgesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for db_edges.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__db_edgesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the db_edges model
   */
  interface db_edgesFieldRefs {
    readonly id: FieldRef<"db_edges", 'String'>
    readonly source_id: FieldRef<"db_edges", 'String'>
    readonly target_id: FieldRef<"db_edges", 'String'>
    readonly type: FieldRef<"db_edges", 'String'>
    readonly animated: FieldRef<"db_edges", 'Boolean'>
    readonly source_handle: FieldRef<"db_edges", 'String'>
    readonly target_handle: FieldRef<"db_edges", 'String'>
  }
    

  // Custom InputTypes
  /**
   * db_edges findUnique
   */
  export type db_edgesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the db_edges
     */
    select?: db_edgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the db_edges
     */
    omit?: db_edgesOmit<ExtArgs> | null
    /**
     * Filter, which db_edges to fetch.
     */
    where: db_edgesWhereUniqueInput
  }

  /**
   * db_edges findUniqueOrThrow
   */
  export type db_edgesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the db_edges
     */
    select?: db_edgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the db_edges
     */
    omit?: db_edgesOmit<ExtArgs> | null
    /**
     * Filter, which db_edges to fetch.
     */
    where: db_edgesWhereUniqueInput
  }

  /**
   * db_edges findFirst
   */
  export type db_edgesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the db_edges
     */
    select?: db_edgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the db_edges
     */
    omit?: db_edgesOmit<ExtArgs> | null
    /**
     * Filter, which db_edges to fetch.
     */
    where?: db_edgesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of db_edges to fetch.
     */
    orderBy?: db_edgesOrderByWithRelationInput | db_edgesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for db_edges.
     */
    cursor?: db_edgesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` db_edges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` db_edges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of db_edges.
     */
    distinct?: Db_edgesScalarFieldEnum | Db_edgesScalarFieldEnum[]
  }

  /**
   * db_edges findFirstOrThrow
   */
  export type db_edgesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the db_edges
     */
    select?: db_edgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the db_edges
     */
    omit?: db_edgesOmit<ExtArgs> | null
    /**
     * Filter, which db_edges to fetch.
     */
    where?: db_edgesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of db_edges to fetch.
     */
    orderBy?: db_edgesOrderByWithRelationInput | db_edgesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for db_edges.
     */
    cursor?: db_edgesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` db_edges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` db_edges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of db_edges.
     */
    distinct?: Db_edgesScalarFieldEnum | Db_edgesScalarFieldEnum[]
  }

  /**
   * db_edges findMany
   */
  export type db_edgesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the db_edges
     */
    select?: db_edgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the db_edges
     */
    omit?: db_edgesOmit<ExtArgs> | null
    /**
     * Filter, which db_edges to fetch.
     */
    where?: db_edgesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of db_edges to fetch.
     */
    orderBy?: db_edgesOrderByWithRelationInput | db_edgesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing db_edges.
     */
    cursor?: db_edgesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` db_edges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` db_edges.
     */
    skip?: number
    distinct?: Db_edgesScalarFieldEnum | Db_edgesScalarFieldEnum[]
  }

  /**
   * db_edges create
   */
  export type db_edgesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the db_edges
     */
    select?: db_edgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the db_edges
     */
    omit?: db_edgesOmit<ExtArgs> | null
    /**
     * The data needed to create a db_edges.
     */
    data: XOR<db_edgesCreateInput, db_edgesUncheckedCreateInput>
  }

  /**
   * db_edges createMany
   */
  export type db_edgesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many db_edges.
     */
    data: db_edgesCreateManyInput | db_edgesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * db_edges update
   */
  export type db_edgesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the db_edges
     */
    select?: db_edgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the db_edges
     */
    omit?: db_edgesOmit<ExtArgs> | null
    /**
     * The data needed to update a db_edges.
     */
    data: XOR<db_edgesUpdateInput, db_edgesUncheckedUpdateInput>
    /**
     * Choose, which db_edges to update.
     */
    where: db_edgesWhereUniqueInput
  }

  /**
   * db_edges updateMany
   */
  export type db_edgesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update db_edges.
     */
    data: XOR<db_edgesUpdateManyMutationInput, db_edgesUncheckedUpdateManyInput>
    /**
     * Filter which db_edges to update
     */
    where?: db_edgesWhereInput
    /**
     * Limit how many db_edges to update.
     */
    limit?: number
  }

  /**
   * db_edges upsert
   */
  export type db_edgesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the db_edges
     */
    select?: db_edgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the db_edges
     */
    omit?: db_edgesOmit<ExtArgs> | null
    /**
     * The filter to search for the db_edges to update in case it exists.
     */
    where: db_edgesWhereUniqueInput
    /**
     * In case the db_edges found by the `where` argument doesn't exist, create a new db_edges with this data.
     */
    create: XOR<db_edgesCreateInput, db_edgesUncheckedCreateInput>
    /**
     * In case the db_edges was found with the provided `where` argument, update it with this data.
     */
    update: XOR<db_edgesUpdateInput, db_edgesUncheckedUpdateInput>
  }

  /**
   * db_edges delete
   */
  export type db_edgesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the db_edges
     */
    select?: db_edgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the db_edges
     */
    omit?: db_edgesOmit<ExtArgs> | null
    /**
     * Filter which db_edges to delete.
     */
    where: db_edgesWhereUniqueInput
  }

  /**
   * db_edges deleteMany
   */
  export type db_edgesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which db_edges to delete
     */
    where?: db_edgesWhereInput
    /**
     * Limit how many db_edges to delete.
     */
    limit?: number
  }

  /**
   * db_edges without action
   */
  export type db_edgesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the db_edges
     */
    select?: db_edgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the db_edges
     */
    omit?: db_edgesOmit<ExtArgs> | null
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


  export const Db_nodesScalarFieldEnum: {
    id: 'id',
    materi: 'materi',
    position_x: 'position_x',
    position_y: 'position_y',
    parent_id: 'parent_id',
    node_style: 'node_style',
    type: 'type',
    source_position: 'source_position',
    target_position: 'target_position'
  };

  export type Db_nodesScalarFieldEnum = (typeof Db_nodesScalarFieldEnum)[keyof typeof Db_nodesScalarFieldEnum]


  export const Db_edgesScalarFieldEnum: {
    id: 'id',
    source_id: 'source_id',
    target_id: 'target_id',
    type: 'type',
    animated: 'animated',
    source_handle: 'source_handle',
    target_handle: 'target_handle'
  };

  export type Db_edgesScalarFieldEnum = (typeof Db_edgesScalarFieldEnum)[keyof typeof Db_edgesScalarFieldEnum]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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


  export const db_nodesOrderByRelevanceFieldEnum: {
    id: 'id',
    materi: 'materi',
    parent_id: 'parent_id',
    type: 'type',
    source_position: 'source_position',
    target_position: 'target_position'
  };

  export type db_nodesOrderByRelevanceFieldEnum = (typeof db_nodesOrderByRelevanceFieldEnum)[keyof typeof db_nodesOrderByRelevanceFieldEnum]


  export const db_edgesOrderByRelevanceFieldEnum: {
    id: 'id',
    source_id: 'source_id',
    target_id: 'target_id',
    type: 'type',
    source_handle: 'source_handle',
    target_handle: 'target_handle'
  };

  export type db_edgesOrderByRelevanceFieldEnum = (typeof db_edgesOrderByRelevanceFieldEnum)[keyof typeof db_edgesOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type db_nodesWhereInput = {
    AND?: db_nodesWhereInput | db_nodesWhereInput[]
    OR?: db_nodesWhereInput[]
    NOT?: db_nodesWhereInput | db_nodesWhereInput[]
    id?: StringFilter<"db_nodes"> | string
    materi?: StringFilter<"db_nodes"> | string
    position_x?: IntFilter<"db_nodes"> | number
    position_y?: IntFilter<"db_nodes"> | number
    parent_id?: StringNullableFilter<"db_nodes"> | string | null
    node_style?: JsonNullableFilter<"db_nodes">
    type?: StringNullableFilter<"db_nodes"> | string | null
    source_position?: StringNullableFilter<"db_nodes"> | string | null
    target_position?: StringNullableFilter<"db_nodes"> | string | null
    children?: Db_nodesListRelationFilter
    parent?: XOR<Db_nodesNullableScalarRelationFilter, db_nodesWhereInput> | null
  }

  export type db_nodesOrderByWithRelationInput = {
    id?: SortOrder
    materi?: SortOrder
    position_x?: SortOrder
    position_y?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    node_style?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    source_position?: SortOrderInput | SortOrder
    target_position?: SortOrderInput | SortOrder
    children?: db_nodesOrderByRelationAggregateInput
    parent?: db_nodesOrderByWithRelationInput
    _relevance?: db_nodesOrderByRelevanceInput
  }

  export type db_nodesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: db_nodesWhereInput | db_nodesWhereInput[]
    OR?: db_nodesWhereInput[]
    NOT?: db_nodesWhereInput | db_nodesWhereInput[]
    materi?: StringFilter<"db_nodes"> | string
    position_x?: IntFilter<"db_nodes"> | number
    position_y?: IntFilter<"db_nodes"> | number
    parent_id?: StringNullableFilter<"db_nodes"> | string | null
    node_style?: JsonNullableFilter<"db_nodes">
    type?: StringNullableFilter<"db_nodes"> | string | null
    source_position?: StringNullableFilter<"db_nodes"> | string | null
    target_position?: StringNullableFilter<"db_nodes"> | string | null
    children?: Db_nodesListRelationFilter
    parent?: XOR<Db_nodesNullableScalarRelationFilter, db_nodesWhereInput> | null
  }, "id">

  export type db_nodesOrderByWithAggregationInput = {
    id?: SortOrder
    materi?: SortOrder
    position_x?: SortOrder
    position_y?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    node_style?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    source_position?: SortOrderInput | SortOrder
    target_position?: SortOrderInput | SortOrder
    _count?: db_nodesCountOrderByAggregateInput
    _avg?: db_nodesAvgOrderByAggregateInput
    _max?: db_nodesMaxOrderByAggregateInput
    _min?: db_nodesMinOrderByAggregateInput
    _sum?: db_nodesSumOrderByAggregateInput
  }

  export type db_nodesScalarWhereWithAggregatesInput = {
    AND?: db_nodesScalarWhereWithAggregatesInput | db_nodesScalarWhereWithAggregatesInput[]
    OR?: db_nodesScalarWhereWithAggregatesInput[]
    NOT?: db_nodesScalarWhereWithAggregatesInput | db_nodesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"db_nodes"> | string
    materi?: StringWithAggregatesFilter<"db_nodes"> | string
    position_x?: IntWithAggregatesFilter<"db_nodes"> | number
    position_y?: IntWithAggregatesFilter<"db_nodes"> | number
    parent_id?: StringNullableWithAggregatesFilter<"db_nodes"> | string | null
    node_style?: JsonNullableWithAggregatesFilter<"db_nodes">
    type?: StringNullableWithAggregatesFilter<"db_nodes"> | string | null
    source_position?: StringNullableWithAggregatesFilter<"db_nodes"> | string | null
    target_position?: StringNullableWithAggregatesFilter<"db_nodes"> | string | null
  }

  export type db_edgesWhereInput = {
    AND?: db_edgesWhereInput | db_edgesWhereInput[]
    OR?: db_edgesWhereInput[]
    NOT?: db_edgesWhereInput | db_edgesWhereInput[]
    id?: StringFilter<"db_edges"> | string
    source_id?: StringFilter<"db_edges"> | string
    target_id?: StringFilter<"db_edges"> | string
    type?: StringFilter<"db_edges"> | string
    animated?: BoolFilter<"db_edges"> | boolean
    source_handle?: StringNullableFilter<"db_edges"> | string | null
    target_handle?: StringNullableFilter<"db_edges"> | string | null
  }

  export type db_edgesOrderByWithRelationInput = {
    id?: SortOrder
    source_id?: SortOrder
    target_id?: SortOrder
    type?: SortOrder
    animated?: SortOrder
    source_handle?: SortOrderInput | SortOrder
    target_handle?: SortOrderInput | SortOrder
    _relevance?: db_edgesOrderByRelevanceInput
  }

  export type db_edgesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: db_edgesWhereInput | db_edgesWhereInput[]
    OR?: db_edgesWhereInput[]
    NOT?: db_edgesWhereInput | db_edgesWhereInput[]
    source_id?: StringFilter<"db_edges"> | string
    target_id?: StringFilter<"db_edges"> | string
    type?: StringFilter<"db_edges"> | string
    animated?: BoolFilter<"db_edges"> | boolean
    source_handle?: StringNullableFilter<"db_edges"> | string | null
    target_handle?: StringNullableFilter<"db_edges"> | string | null
  }, "id">

  export type db_edgesOrderByWithAggregationInput = {
    id?: SortOrder
    source_id?: SortOrder
    target_id?: SortOrder
    type?: SortOrder
    animated?: SortOrder
    source_handle?: SortOrderInput | SortOrder
    target_handle?: SortOrderInput | SortOrder
    _count?: db_edgesCountOrderByAggregateInput
    _max?: db_edgesMaxOrderByAggregateInput
    _min?: db_edgesMinOrderByAggregateInput
  }

  export type db_edgesScalarWhereWithAggregatesInput = {
    AND?: db_edgesScalarWhereWithAggregatesInput | db_edgesScalarWhereWithAggregatesInput[]
    OR?: db_edgesScalarWhereWithAggregatesInput[]
    NOT?: db_edgesScalarWhereWithAggregatesInput | db_edgesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"db_edges"> | string
    source_id?: StringWithAggregatesFilter<"db_edges"> | string
    target_id?: StringWithAggregatesFilter<"db_edges"> | string
    type?: StringWithAggregatesFilter<"db_edges"> | string
    animated?: BoolWithAggregatesFilter<"db_edges"> | boolean
    source_handle?: StringNullableWithAggregatesFilter<"db_edges"> | string | null
    target_handle?: StringNullableWithAggregatesFilter<"db_edges"> | string | null
  }

  export type db_nodesCreateInput = {
    id?: string
    materi: string
    position_x: number
    position_y: number
    node_style?: NullableJsonNullValueInput | InputJsonValue
    type?: string | null
    source_position?: string | null
    target_position?: string | null
    children?: db_nodesCreateNestedManyWithoutParentInput
    parent?: db_nodesCreateNestedOneWithoutChildrenInput
  }

  export type db_nodesUncheckedCreateInput = {
    id?: string
    materi: string
    position_x: number
    position_y: number
    parent_id?: string | null
    node_style?: NullableJsonNullValueInput | InputJsonValue
    type?: string | null
    source_position?: string | null
    target_position?: string | null
    children?: db_nodesUncheckedCreateNestedManyWithoutParentInput
  }

  export type db_nodesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    materi?: StringFieldUpdateOperationsInput | string
    position_x?: IntFieldUpdateOperationsInput | number
    position_y?: IntFieldUpdateOperationsInput | number
    node_style?: NullableJsonNullValueInput | InputJsonValue
    type?: NullableStringFieldUpdateOperationsInput | string | null
    source_position?: NullableStringFieldUpdateOperationsInput | string | null
    target_position?: NullableStringFieldUpdateOperationsInput | string | null
    children?: db_nodesUpdateManyWithoutParentNestedInput
    parent?: db_nodesUpdateOneWithoutChildrenNestedInput
  }

  export type db_nodesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    materi?: StringFieldUpdateOperationsInput | string
    position_x?: IntFieldUpdateOperationsInput | number
    position_y?: IntFieldUpdateOperationsInput | number
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    node_style?: NullableJsonNullValueInput | InputJsonValue
    type?: NullableStringFieldUpdateOperationsInput | string | null
    source_position?: NullableStringFieldUpdateOperationsInput | string | null
    target_position?: NullableStringFieldUpdateOperationsInput | string | null
    children?: db_nodesUncheckedUpdateManyWithoutParentNestedInput
  }

  export type db_nodesCreateManyInput = {
    id?: string
    materi: string
    position_x: number
    position_y: number
    parent_id?: string | null
    node_style?: NullableJsonNullValueInput | InputJsonValue
    type?: string | null
    source_position?: string | null
    target_position?: string | null
  }

  export type db_nodesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    materi?: StringFieldUpdateOperationsInput | string
    position_x?: IntFieldUpdateOperationsInput | number
    position_y?: IntFieldUpdateOperationsInput | number
    node_style?: NullableJsonNullValueInput | InputJsonValue
    type?: NullableStringFieldUpdateOperationsInput | string | null
    source_position?: NullableStringFieldUpdateOperationsInput | string | null
    target_position?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type db_nodesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    materi?: StringFieldUpdateOperationsInput | string
    position_x?: IntFieldUpdateOperationsInput | number
    position_y?: IntFieldUpdateOperationsInput | number
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    node_style?: NullableJsonNullValueInput | InputJsonValue
    type?: NullableStringFieldUpdateOperationsInput | string | null
    source_position?: NullableStringFieldUpdateOperationsInput | string | null
    target_position?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type db_edgesCreateInput = {
    id?: string
    source_id: string
    target_id: string
    type: string
    animated: boolean
    source_handle?: string | null
    target_handle?: string | null
  }

  export type db_edgesUncheckedCreateInput = {
    id?: string
    source_id: string
    target_id: string
    type: string
    animated: boolean
    source_handle?: string | null
    target_handle?: string | null
  }

  export type db_edgesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source_id?: StringFieldUpdateOperationsInput | string
    target_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    animated?: BoolFieldUpdateOperationsInput | boolean
    source_handle?: NullableStringFieldUpdateOperationsInput | string | null
    target_handle?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type db_edgesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source_id?: StringFieldUpdateOperationsInput | string
    target_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    animated?: BoolFieldUpdateOperationsInput | boolean
    source_handle?: NullableStringFieldUpdateOperationsInput | string | null
    target_handle?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type db_edgesCreateManyInput = {
    id?: string
    source_id: string
    target_id: string
    type: string
    animated: boolean
    source_handle?: string | null
    target_handle?: string | null
  }

  export type db_edgesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    source_id?: StringFieldUpdateOperationsInput | string
    target_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    animated?: BoolFieldUpdateOperationsInput | boolean
    source_handle?: NullableStringFieldUpdateOperationsInput | string | null
    target_handle?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type db_edgesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    source_id?: StringFieldUpdateOperationsInput | string
    target_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    animated?: BoolFieldUpdateOperationsInput | boolean
    source_handle?: NullableStringFieldUpdateOperationsInput | string | null
    target_handle?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type Db_nodesListRelationFilter = {
    every?: db_nodesWhereInput
    some?: db_nodesWhereInput
    none?: db_nodesWhereInput
  }

  export type Db_nodesNullableScalarRelationFilter = {
    is?: db_nodesWhereInput | null
    isNot?: db_nodesWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type db_nodesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type db_nodesOrderByRelevanceInput = {
    fields: db_nodesOrderByRelevanceFieldEnum | db_nodesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type db_nodesCountOrderByAggregateInput = {
    id?: SortOrder
    materi?: SortOrder
    position_x?: SortOrder
    position_y?: SortOrder
    parent_id?: SortOrder
    node_style?: SortOrder
    type?: SortOrder
    source_position?: SortOrder
    target_position?: SortOrder
  }

  export type db_nodesAvgOrderByAggregateInput = {
    position_x?: SortOrder
    position_y?: SortOrder
  }

  export type db_nodesMaxOrderByAggregateInput = {
    id?: SortOrder
    materi?: SortOrder
    position_x?: SortOrder
    position_y?: SortOrder
    parent_id?: SortOrder
    type?: SortOrder
    source_position?: SortOrder
    target_position?: SortOrder
  }

  export type db_nodesMinOrderByAggregateInput = {
    id?: SortOrder
    materi?: SortOrder
    position_x?: SortOrder
    position_y?: SortOrder
    parent_id?: SortOrder
    type?: SortOrder
    source_position?: SortOrder
    target_position?: SortOrder
  }

  export type db_nodesSumOrderByAggregateInput = {
    position_x?: SortOrder
    position_y?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type db_edgesOrderByRelevanceInput = {
    fields: db_edgesOrderByRelevanceFieldEnum | db_edgesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type db_edgesCountOrderByAggregateInput = {
    id?: SortOrder
    source_id?: SortOrder
    target_id?: SortOrder
    type?: SortOrder
    animated?: SortOrder
    source_handle?: SortOrder
    target_handle?: SortOrder
  }

  export type db_edgesMaxOrderByAggregateInput = {
    id?: SortOrder
    source_id?: SortOrder
    target_id?: SortOrder
    type?: SortOrder
    animated?: SortOrder
    source_handle?: SortOrder
    target_handle?: SortOrder
  }

  export type db_edgesMinOrderByAggregateInput = {
    id?: SortOrder
    source_id?: SortOrder
    target_id?: SortOrder
    type?: SortOrder
    animated?: SortOrder
    source_handle?: SortOrder
    target_handle?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type db_nodesCreateNestedManyWithoutParentInput = {
    create?: XOR<db_nodesCreateWithoutParentInput, db_nodesUncheckedCreateWithoutParentInput> | db_nodesCreateWithoutParentInput[] | db_nodesUncheckedCreateWithoutParentInput[]
    connectOrCreate?: db_nodesCreateOrConnectWithoutParentInput | db_nodesCreateOrConnectWithoutParentInput[]
    createMany?: db_nodesCreateManyParentInputEnvelope
    connect?: db_nodesWhereUniqueInput | db_nodesWhereUniqueInput[]
  }

  export type db_nodesCreateNestedOneWithoutChildrenInput = {
    create?: XOR<db_nodesCreateWithoutChildrenInput, db_nodesUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: db_nodesCreateOrConnectWithoutChildrenInput
    connect?: db_nodesWhereUniqueInput
  }

  export type db_nodesUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<db_nodesCreateWithoutParentInput, db_nodesUncheckedCreateWithoutParentInput> | db_nodesCreateWithoutParentInput[] | db_nodesUncheckedCreateWithoutParentInput[]
    connectOrCreate?: db_nodesCreateOrConnectWithoutParentInput | db_nodesCreateOrConnectWithoutParentInput[]
    createMany?: db_nodesCreateManyParentInputEnvelope
    connect?: db_nodesWhereUniqueInput | db_nodesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type db_nodesUpdateManyWithoutParentNestedInput = {
    create?: XOR<db_nodesCreateWithoutParentInput, db_nodesUncheckedCreateWithoutParentInput> | db_nodesCreateWithoutParentInput[] | db_nodesUncheckedCreateWithoutParentInput[]
    connectOrCreate?: db_nodesCreateOrConnectWithoutParentInput | db_nodesCreateOrConnectWithoutParentInput[]
    upsert?: db_nodesUpsertWithWhereUniqueWithoutParentInput | db_nodesUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: db_nodesCreateManyParentInputEnvelope
    set?: db_nodesWhereUniqueInput | db_nodesWhereUniqueInput[]
    disconnect?: db_nodesWhereUniqueInput | db_nodesWhereUniqueInput[]
    delete?: db_nodesWhereUniqueInput | db_nodesWhereUniqueInput[]
    connect?: db_nodesWhereUniqueInput | db_nodesWhereUniqueInput[]
    update?: db_nodesUpdateWithWhereUniqueWithoutParentInput | db_nodesUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: db_nodesUpdateManyWithWhereWithoutParentInput | db_nodesUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: db_nodesScalarWhereInput | db_nodesScalarWhereInput[]
  }

  export type db_nodesUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<db_nodesCreateWithoutChildrenInput, db_nodesUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: db_nodesCreateOrConnectWithoutChildrenInput
    upsert?: db_nodesUpsertWithoutChildrenInput
    disconnect?: db_nodesWhereInput | boolean
    delete?: db_nodesWhereInput | boolean
    connect?: db_nodesWhereUniqueInput
    update?: XOR<XOR<db_nodesUpdateToOneWithWhereWithoutChildrenInput, db_nodesUpdateWithoutChildrenInput>, db_nodesUncheckedUpdateWithoutChildrenInput>
  }

  export type db_nodesUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<db_nodesCreateWithoutParentInput, db_nodesUncheckedCreateWithoutParentInput> | db_nodesCreateWithoutParentInput[] | db_nodesUncheckedCreateWithoutParentInput[]
    connectOrCreate?: db_nodesCreateOrConnectWithoutParentInput | db_nodesCreateOrConnectWithoutParentInput[]
    upsert?: db_nodesUpsertWithWhereUniqueWithoutParentInput | db_nodesUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: db_nodesCreateManyParentInputEnvelope
    set?: db_nodesWhereUniqueInput | db_nodesWhereUniqueInput[]
    disconnect?: db_nodesWhereUniqueInput | db_nodesWhereUniqueInput[]
    delete?: db_nodesWhereUniqueInput | db_nodesWhereUniqueInput[]
    connect?: db_nodesWhereUniqueInput | db_nodesWhereUniqueInput[]
    update?: db_nodesUpdateWithWhereUniqueWithoutParentInput | db_nodesUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: db_nodesUpdateManyWithWhereWithoutParentInput | db_nodesUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: db_nodesScalarWhereInput | db_nodesScalarWhereInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type db_nodesCreateWithoutParentInput = {
    id?: string
    materi: string
    position_x: number
    position_y: number
    node_style?: NullableJsonNullValueInput | InputJsonValue
    type?: string | null
    source_position?: string | null
    target_position?: string | null
    children?: db_nodesCreateNestedManyWithoutParentInput
  }

  export type db_nodesUncheckedCreateWithoutParentInput = {
    id?: string
    materi: string
    position_x: number
    position_y: number
    node_style?: NullableJsonNullValueInput | InputJsonValue
    type?: string | null
    source_position?: string | null
    target_position?: string | null
    children?: db_nodesUncheckedCreateNestedManyWithoutParentInput
  }

  export type db_nodesCreateOrConnectWithoutParentInput = {
    where: db_nodesWhereUniqueInput
    create: XOR<db_nodesCreateWithoutParentInput, db_nodesUncheckedCreateWithoutParentInput>
  }

  export type db_nodesCreateManyParentInputEnvelope = {
    data: db_nodesCreateManyParentInput | db_nodesCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type db_nodesCreateWithoutChildrenInput = {
    id?: string
    materi: string
    position_x: number
    position_y: number
    node_style?: NullableJsonNullValueInput | InputJsonValue
    type?: string | null
    source_position?: string | null
    target_position?: string | null
    parent?: db_nodesCreateNestedOneWithoutChildrenInput
  }

  export type db_nodesUncheckedCreateWithoutChildrenInput = {
    id?: string
    materi: string
    position_x: number
    position_y: number
    parent_id?: string | null
    node_style?: NullableJsonNullValueInput | InputJsonValue
    type?: string | null
    source_position?: string | null
    target_position?: string | null
  }

  export type db_nodesCreateOrConnectWithoutChildrenInput = {
    where: db_nodesWhereUniqueInput
    create: XOR<db_nodesCreateWithoutChildrenInput, db_nodesUncheckedCreateWithoutChildrenInput>
  }

  export type db_nodesUpsertWithWhereUniqueWithoutParentInput = {
    where: db_nodesWhereUniqueInput
    update: XOR<db_nodesUpdateWithoutParentInput, db_nodesUncheckedUpdateWithoutParentInput>
    create: XOR<db_nodesCreateWithoutParentInput, db_nodesUncheckedCreateWithoutParentInput>
  }

  export type db_nodesUpdateWithWhereUniqueWithoutParentInput = {
    where: db_nodesWhereUniqueInput
    data: XOR<db_nodesUpdateWithoutParentInput, db_nodesUncheckedUpdateWithoutParentInput>
  }

  export type db_nodesUpdateManyWithWhereWithoutParentInput = {
    where: db_nodesScalarWhereInput
    data: XOR<db_nodesUpdateManyMutationInput, db_nodesUncheckedUpdateManyWithoutParentInput>
  }

  export type db_nodesScalarWhereInput = {
    AND?: db_nodesScalarWhereInput | db_nodesScalarWhereInput[]
    OR?: db_nodesScalarWhereInput[]
    NOT?: db_nodesScalarWhereInput | db_nodesScalarWhereInput[]
    id?: StringFilter<"db_nodes"> | string
    materi?: StringFilter<"db_nodes"> | string
    position_x?: IntFilter<"db_nodes"> | number
    position_y?: IntFilter<"db_nodes"> | number
    parent_id?: StringNullableFilter<"db_nodes"> | string | null
    node_style?: JsonNullableFilter<"db_nodes">
    type?: StringNullableFilter<"db_nodes"> | string | null
    source_position?: StringNullableFilter<"db_nodes"> | string | null
    target_position?: StringNullableFilter<"db_nodes"> | string | null
  }

  export type db_nodesUpsertWithoutChildrenInput = {
    update: XOR<db_nodesUpdateWithoutChildrenInput, db_nodesUncheckedUpdateWithoutChildrenInput>
    create: XOR<db_nodesCreateWithoutChildrenInput, db_nodesUncheckedCreateWithoutChildrenInput>
    where?: db_nodesWhereInput
  }

  export type db_nodesUpdateToOneWithWhereWithoutChildrenInput = {
    where?: db_nodesWhereInput
    data: XOR<db_nodesUpdateWithoutChildrenInput, db_nodesUncheckedUpdateWithoutChildrenInput>
  }

  export type db_nodesUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    materi?: StringFieldUpdateOperationsInput | string
    position_x?: IntFieldUpdateOperationsInput | number
    position_y?: IntFieldUpdateOperationsInput | number
    node_style?: NullableJsonNullValueInput | InputJsonValue
    type?: NullableStringFieldUpdateOperationsInput | string | null
    source_position?: NullableStringFieldUpdateOperationsInput | string | null
    target_position?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: db_nodesUpdateOneWithoutChildrenNestedInput
  }

  export type db_nodesUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    materi?: StringFieldUpdateOperationsInput | string
    position_x?: IntFieldUpdateOperationsInput | number
    position_y?: IntFieldUpdateOperationsInput | number
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    node_style?: NullableJsonNullValueInput | InputJsonValue
    type?: NullableStringFieldUpdateOperationsInput | string | null
    source_position?: NullableStringFieldUpdateOperationsInput | string | null
    target_position?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type db_nodesCreateManyParentInput = {
    id?: string
    materi: string
    position_x: number
    position_y: number
    node_style?: NullableJsonNullValueInput | InputJsonValue
    type?: string | null
    source_position?: string | null
    target_position?: string | null
  }

  export type db_nodesUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    materi?: StringFieldUpdateOperationsInput | string
    position_x?: IntFieldUpdateOperationsInput | number
    position_y?: IntFieldUpdateOperationsInput | number
    node_style?: NullableJsonNullValueInput | InputJsonValue
    type?: NullableStringFieldUpdateOperationsInput | string | null
    source_position?: NullableStringFieldUpdateOperationsInput | string | null
    target_position?: NullableStringFieldUpdateOperationsInput | string | null
    children?: db_nodesUpdateManyWithoutParentNestedInput
  }

  export type db_nodesUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    materi?: StringFieldUpdateOperationsInput | string
    position_x?: IntFieldUpdateOperationsInput | number
    position_y?: IntFieldUpdateOperationsInput | number
    node_style?: NullableJsonNullValueInput | InputJsonValue
    type?: NullableStringFieldUpdateOperationsInput | string | null
    source_position?: NullableStringFieldUpdateOperationsInput | string | null
    target_position?: NullableStringFieldUpdateOperationsInput | string | null
    children?: db_nodesUncheckedUpdateManyWithoutParentNestedInput
  }

  export type db_nodesUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    materi?: StringFieldUpdateOperationsInput | string
    position_x?: IntFieldUpdateOperationsInput | number
    position_y?: IntFieldUpdateOperationsInput | number
    node_style?: NullableJsonNullValueInput | InputJsonValue
    type?: NullableStringFieldUpdateOperationsInput | string | null
    source_position?: NullableStringFieldUpdateOperationsInput | string | null
    target_position?: NullableStringFieldUpdateOperationsInput | string | null
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