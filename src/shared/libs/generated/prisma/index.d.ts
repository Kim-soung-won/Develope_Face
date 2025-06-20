
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
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model PostImages
 * 
 */
export type PostImages = $Result.DefaultSelection<Prisma.$PostImagesPayload>
/**
 * Model ComponentCategory
 * 
 */
export type ComponentCategory = $Result.DefaultSelection<Prisma.$ComponentCategoryPayload>
/**
 * Model Component
 * 
 */
export type Component = $Result.DefaultSelection<Prisma.$ComponentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posts
 * const posts = await prisma.post.findMany()
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
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
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
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postImages`: Exposes CRUD operations for the **PostImages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostImages
    * const postImages = await prisma.postImages.findMany()
    * ```
    */
  get postImages(): Prisma.PostImagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.componentCategory`: Exposes CRUD operations for the **ComponentCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ComponentCategories
    * const componentCategories = await prisma.componentCategory.findMany()
    * ```
    */
  get componentCategory(): Prisma.ComponentCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.component`: Exposes CRUD operations for the **Component** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Components
    * const components = await prisma.component.findMany()
    * ```
    */
  get component(): Prisma.ComponentDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Post: 'Post',
    PostImages: 'PostImages',
    ComponentCategory: 'ComponentCategory',
    Component: 'Component'
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
      modelProps: "post" | "postImages" | "componentCategory" | "component"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      PostImages: {
        payload: Prisma.$PostImagesPayload<ExtArgs>
        fields: Prisma.PostImagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostImagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostImagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagesPayload>
          }
          findFirst: {
            args: Prisma.PostImagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostImagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagesPayload>
          }
          findMany: {
            args: Prisma.PostImagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagesPayload>[]
          }
          create: {
            args: Prisma.PostImagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagesPayload>
          }
          createMany: {
            args: Prisma.PostImagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostImagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagesPayload>[]
          }
          delete: {
            args: Prisma.PostImagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagesPayload>
          }
          update: {
            args: Prisma.PostImagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagesPayload>
          }
          deleteMany: {
            args: Prisma.PostImagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostImagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostImagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagesPayload>[]
          }
          upsert: {
            args: Prisma.PostImagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagesPayload>
          }
          aggregate: {
            args: Prisma.PostImagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostImages>
          }
          groupBy: {
            args: Prisma.PostImagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostImagesCountArgs<ExtArgs>
            result: $Utils.Optional<PostImagesCountAggregateOutputType> | number
          }
        }
      }
      ComponentCategory: {
        payload: Prisma.$ComponentCategoryPayload<ExtArgs>
        fields: Prisma.ComponentCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComponentCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComponentCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentCategoryPayload>
          }
          findFirst: {
            args: Prisma.ComponentCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComponentCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentCategoryPayload>
          }
          findMany: {
            args: Prisma.ComponentCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentCategoryPayload>[]
          }
          create: {
            args: Prisma.ComponentCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentCategoryPayload>
          }
          createMany: {
            args: Prisma.ComponentCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComponentCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentCategoryPayload>[]
          }
          delete: {
            args: Prisma.ComponentCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentCategoryPayload>
          }
          update: {
            args: Prisma.ComponentCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ComponentCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComponentCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComponentCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentCategoryPayload>[]
          }
          upsert: {
            args: Prisma.ComponentCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentCategoryPayload>
          }
          aggregate: {
            args: Prisma.ComponentCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComponentCategory>
          }
          groupBy: {
            args: Prisma.ComponentCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComponentCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComponentCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ComponentCategoryCountAggregateOutputType> | number
          }
        }
      }
      Component: {
        payload: Prisma.$ComponentPayload<ExtArgs>
        fields: Prisma.ComponentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComponentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComponentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentPayload>
          }
          findFirst: {
            args: Prisma.ComponentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComponentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentPayload>
          }
          findMany: {
            args: Prisma.ComponentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentPayload>[]
          }
          create: {
            args: Prisma.ComponentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentPayload>
          }
          createMany: {
            args: Prisma.ComponentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComponentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentPayload>[]
          }
          delete: {
            args: Prisma.ComponentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentPayload>
          }
          update: {
            args: Prisma.ComponentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentPayload>
          }
          deleteMany: {
            args: Prisma.ComponentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComponentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComponentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentPayload>[]
          }
          upsert: {
            args: Prisma.ComponentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentPayload>
          }
          aggregate: {
            args: Prisma.ComponentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComponent>
          }
          groupBy: {
            args: Prisma.ComponentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComponentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComponentCountArgs<ExtArgs>
            result: $Utils.Optional<ComponentCountAggregateOutputType> | number
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
    post?: PostOmit
    postImages?: PostImagesOmit
    componentCategory?: ComponentCategoryOmit
    component?: ComponentOmit
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
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    images: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | PostCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostImagesWhereInput
  }


  /**
   * Count Type ComponentCategoryCountOutputType
   */

  export type ComponentCategoryCountOutputType = {
    components: number
  }

  export type ComponentCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    components?: boolean | ComponentCategoryCountOutputTypeCountComponentsArgs
  }

  // Custom InputTypes
  /**
   * ComponentCategoryCountOutputType without action
   */
  export type ComponentCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentCategoryCountOutputType
     */
    select?: ComponentCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ComponentCategoryCountOutputType without action
   */
  export type ComponentCategoryCountOutputTypeCountComponentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComponentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    post_id: number | null
  }

  export type PostSumAggregateOutputType = {
    post_id: bigint | null
  }

  export type PostMinAggregateOutputType = {
    post_id: bigint | null
    title: string | null
    markdown_content: string | null
    created_at: Date | null
  }

  export type PostMaxAggregateOutputType = {
    post_id: bigint | null
    title: string | null
    markdown_content: string | null
    created_at: Date | null
  }

  export type PostCountAggregateOutputType = {
    post_id: number
    title: number
    markdown_content: number
    created_at: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    post_id?: true
  }

  export type PostSumAggregateInputType = {
    post_id?: true
  }

  export type PostMinAggregateInputType = {
    post_id?: true
    title?: true
    markdown_content?: true
    created_at?: true
  }

  export type PostMaxAggregateInputType = {
    post_id?: true
    title?: true
    markdown_content?: true
    created_at?: true
  }

  export type PostCountAggregateInputType = {
    post_id?: true
    title?: true
    markdown_content?: true
    created_at?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    post_id: bigint
    title: string
    markdown_content: string
    created_at: Date
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    title?: boolean
    markdown_content?: boolean
    created_at?: boolean
    images?: boolean | Post$imagesArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    title?: boolean
    markdown_content?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    title?: boolean
    markdown_content?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    post_id?: boolean
    title?: boolean
    markdown_content?: boolean
    created_at?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"post_id" | "title" | "markdown_content" | "created_at", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Post$imagesArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      images: Prisma.$PostImagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      post_id: bigint
      title: string
      markdown_content: string
      created_at: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `post_id`
     * const postWithPost_idOnly = await prisma.post.findMany({ select: { post_id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `post_id`
     * const postWithPost_idOnly = await prisma.post.createManyAndReturn({
     *   select: { post_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `post_id`
     * const postWithPost_idOnly = await prisma.post.updateManyAndReturn({
     *   select: { post_id: true },
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
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Post$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Post$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly post_id: FieldRef<"Post", 'BigInt'>
    readonly title: FieldRef<"Post", 'String'>
    readonly markdown_content: FieldRef<"Post", 'String'>
    readonly created_at: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.images
   */
  export type Post$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImages
     */
    select?: PostImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImages
     */
    omit?: PostImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImagesInclude<ExtArgs> | null
    where?: PostImagesWhereInput
    orderBy?: PostImagesOrderByWithRelationInput | PostImagesOrderByWithRelationInput[]
    cursor?: PostImagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostImagesScalarFieldEnum | PostImagesScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model PostImages
   */

  export type AggregatePostImages = {
    _count: PostImagesCountAggregateOutputType | null
    _avg: PostImagesAvgAggregateOutputType | null
    _sum: PostImagesSumAggregateOutputType | null
    _min: PostImagesMinAggregateOutputType | null
    _max: PostImagesMaxAggregateOutputType | null
  }

  export type PostImagesAvgAggregateOutputType = {
    id: number | null
    post_id: number | null
    size_kb: number | null
  }

  export type PostImagesSumAggregateOutputType = {
    id: bigint | null
    post_id: bigint | null
    size_kb: number | null
  }

  export type PostImagesMinAggregateOutputType = {
    id: bigint | null
    post_id: bigint | null
    image_url: string | null
    storage_file_path: string | null
    alt_text: string | null
    file_name: string | null
    mime_type: string | null
    size_kb: number | null
    created_at: Date | null
  }

  export type PostImagesMaxAggregateOutputType = {
    id: bigint | null
    post_id: bigint | null
    image_url: string | null
    storage_file_path: string | null
    alt_text: string | null
    file_name: string | null
    mime_type: string | null
    size_kb: number | null
    created_at: Date | null
  }

  export type PostImagesCountAggregateOutputType = {
    id: number
    post_id: number
    image_url: number
    storage_file_path: number
    alt_text: number
    file_name: number
    mime_type: number
    size_kb: number
    created_at: number
    _all: number
  }


  export type PostImagesAvgAggregateInputType = {
    id?: true
    post_id?: true
    size_kb?: true
  }

  export type PostImagesSumAggregateInputType = {
    id?: true
    post_id?: true
    size_kb?: true
  }

  export type PostImagesMinAggregateInputType = {
    id?: true
    post_id?: true
    image_url?: true
    storage_file_path?: true
    alt_text?: true
    file_name?: true
    mime_type?: true
    size_kb?: true
    created_at?: true
  }

  export type PostImagesMaxAggregateInputType = {
    id?: true
    post_id?: true
    image_url?: true
    storage_file_path?: true
    alt_text?: true
    file_name?: true
    mime_type?: true
    size_kb?: true
    created_at?: true
  }

  export type PostImagesCountAggregateInputType = {
    id?: true
    post_id?: true
    image_url?: true
    storage_file_path?: true
    alt_text?: true
    file_name?: true
    mime_type?: true
    size_kb?: true
    created_at?: true
    _all?: true
  }

  export type PostImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostImages to aggregate.
     */
    where?: PostImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostImages to fetch.
     */
    orderBy?: PostImagesOrderByWithRelationInput | PostImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostImages
    **/
    _count?: true | PostImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostImagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostImagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostImagesMaxAggregateInputType
  }

  export type GetPostImagesAggregateType<T extends PostImagesAggregateArgs> = {
        [P in keyof T & keyof AggregatePostImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostImages[P]>
      : GetScalarType<T[P], AggregatePostImages[P]>
  }




  export type PostImagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostImagesWhereInput
    orderBy?: PostImagesOrderByWithAggregationInput | PostImagesOrderByWithAggregationInput[]
    by: PostImagesScalarFieldEnum[] | PostImagesScalarFieldEnum
    having?: PostImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostImagesCountAggregateInputType | true
    _avg?: PostImagesAvgAggregateInputType
    _sum?: PostImagesSumAggregateInputType
    _min?: PostImagesMinAggregateInputType
    _max?: PostImagesMaxAggregateInputType
  }

  export type PostImagesGroupByOutputType = {
    id: bigint
    post_id: bigint
    image_url: string
    storage_file_path: string
    alt_text: string | null
    file_name: string | null
    mime_type: string | null
    size_kb: number | null
    created_at: Date
    _count: PostImagesCountAggregateOutputType | null
    _avg: PostImagesAvgAggregateOutputType | null
    _sum: PostImagesSumAggregateOutputType | null
    _min: PostImagesMinAggregateOutputType | null
    _max: PostImagesMaxAggregateOutputType | null
  }

  type GetPostImagesGroupByPayload<T extends PostImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostImagesGroupByOutputType[P]>
            : GetScalarType<T[P], PostImagesGroupByOutputType[P]>
        }
      >
    >


  export type PostImagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    post_id?: boolean
    image_url?: boolean
    storage_file_path?: boolean
    alt_text?: boolean
    file_name?: boolean
    mime_type?: boolean
    size_kb?: boolean
    created_at?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postImages"]>

  export type PostImagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    post_id?: boolean
    image_url?: boolean
    storage_file_path?: boolean
    alt_text?: boolean
    file_name?: boolean
    mime_type?: boolean
    size_kb?: boolean
    created_at?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postImages"]>

  export type PostImagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    post_id?: boolean
    image_url?: boolean
    storage_file_path?: boolean
    alt_text?: boolean
    file_name?: boolean
    mime_type?: boolean
    size_kb?: boolean
    created_at?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postImages"]>

  export type PostImagesSelectScalar = {
    id?: boolean
    post_id?: boolean
    image_url?: boolean
    storage_file_path?: boolean
    alt_text?: boolean
    file_name?: boolean
    mime_type?: boolean
    size_kb?: boolean
    created_at?: boolean
  }

  export type PostImagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "post_id" | "image_url" | "storage_file_path" | "alt_text" | "file_name" | "mime_type" | "size_kb" | "created_at", ExtArgs["result"]["postImages"]>
  export type PostImagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostImagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostImagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $PostImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostImages"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      post_id: bigint
      image_url: string
      storage_file_path: string
      alt_text: string | null
      file_name: string | null
      mime_type: string | null
      size_kb: number | null
      created_at: Date
    }, ExtArgs["result"]["postImages"]>
    composites: {}
  }

  type PostImagesGetPayload<S extends boolean | null | undefined | PostImagesDefaultArgs> = $Result.GetResult<Prisma.$PostImagesPayload, S>

  type PostImagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostImagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostImagesCountAggregateInputType | true
    }

  export interface PostImagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostImages'], meta: { name: 'PostImages' } }
    /**
     * Find zero or one PostImages that matches the filter.
     * @param {PostImagesFindUniqueArgs} args - Arguments to find a PostImages
     * @example
     * // Get one PostImages
     * const postImages = await prisma.postImages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostImagesFindUniqueArgs>(args: SelectSubset<T, PostImagesFindUniqueArgs<ExtArgs>>): Prisma__PostImagesClient<$Result.GetResult<Prisma.$PostImagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostImages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostImagesFindUniqueOrThrowArgs} args - Arguments to find a PostImages
     * @example
     * // Get one PostImages
     * const postImages = await prisma.postImages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostImagesFindUniqueOrThrowArgs>(args: SelectSubset<T, PostImagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostImagesClient<$Result.GetResult<Prisma.$PostImagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostImagesFindFirstArgs} args - Arguments to find a PostImages
     * @example
     * // Get one PostImages
     * const postImages = await prisma.postImages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostImagesFindFirstArgs>(args?: SelectSubset<T, PostImagesFindFirstArgs<ExtArgs>>): Prisma__PostImagesClient<$Result.GetResult<Prisma.$PostImagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostImages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostImagesFindFirstOrThrowArgs} args - Arguments to find a PostImages
     * @example
     * // Get one PostImages
     * const postImages = await prisma.postImages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostImagesFindFirstOrThrowArgs>(args?: SelectSubset<T, PostImagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostImagesClient<$Result.GetResult<Prisma.$PostImagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostImagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostImages
     * const postImages = await prisma.postImages.findMany()
     * 
     * // Get first 10 PostImages
     * const postImages = await prisma.postImages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postImagesWithIdOnly = await prisma.postImages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostImagesFindManyArgs>(args?: SelectSubset<T, PostImagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostImages.
     * @param {PostImagesCreateArgs} args - Arguments to create a PostImages.
     * @example
     * // Create one PostImages
     * const PostImages = await prisma.postImages.create({
     *   data: {
     *     // ... data to create a PostImages
     *   }
     * })
     * 
     */
    create<T extends PostImagesCreateArgs>(args: SelectSubset<T, PostImagesCreateArgs<ExtArgs>>): Prisma__PostImagesClient<$Result.GetResult<Prisma.$PostImagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostImages.
     * @param {PostImagesCreateManyArgs} args - Arguments to create many PostImages.
     * @example
     * // Create many PostImages
     * const postImages = await prisma.postImages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostImagesCreateManyArgs>(args?: SelectSubset<T, PostImagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostImages and returns the data saved in the database.
     * @param {PostImagesCreateManyAndReturnArgs} args - Arguments to create many PostImages.
     * @example
     * // Create many PostImages
     * const postImages = await prisma.postImages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostImages and only return the `id`
     * const postImagesWithIdOnly = await prisma.postImages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostImagesCreateManyAndReturnArgs>(args?: SelectSubset<T, PostImagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostImagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostImages.
     * @param {PostImagesDeleteArgs} args - Arguments to delete one PostImages.
     * @example
     * // Delete one PostImages
     * const PostImages = await prisma.postImages.delete({
     *   where: {
     *     // ... filter to delete one PostImages
     *   }
     * })
     * 
     */
    delete<T extends PostImagesDeleteArgs>(args: SelectSubset<T, PostImagesDeleteArgs<ExtArgs>>): Prisma__PostImagesClient<$Result.GetResult<Prisma.$PostImagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostImages.
     * @param {PostImagesUpdateArgs} args - Arguments to update one PostImages.
     * @example
     * // Update one PostImages
     * const postImages = await prisma.postImages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostImagesUpdateArgs>(args: SelectSubset<T, PostImagesUpdateArgs<ExtArgs>>): Prisma__PostImagesClient<$Result.GetResult<Prisma.$PostImagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostImages.
     * @param {PostImagesDeleteManyArgs} args - Arguments to filter PostImages to delete.
     * @example
     * // Delete a few PostImages
     * const { count } = await prisma.postImages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostImagesDeleteManyArgs>(args?: SelectSubset<T, PostImagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostImages
     * const postImages = await prisma.postImages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostImagesUpdateManyArgs>(args: SelectSubset<T, PostImagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostImages and returns the data updated in the database.
     * @param {PostImagesUpdateManyAndReturnArgs} args - Arguments to update many PostImages.
     * @example
     * // Update many PostImages
     * const postImages = await prisma.postImages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostImages and only return the `id`
     * const postImagesWithIdOnly = await prisma.postImages.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostImagesUpdateManyAndReturnArgs>(args: SelectSubset<T, PostImagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostImagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostImages.
     * @param {PostImagesUpsertArgs} args - Arguments to update or create a PostImages.
     * @example
     * // Update or create a PostImages
     * const postImages = await prisma.postImages.upsert({
     *   create: {
     *     // ... data to create a PostImages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostImages we want to update
     *   }
     * })
     */
    upsert<T extends PostImagesUpsertArgs>(args: SelectSubset<T, PostImagesUpsertArgs<ExtArgs>>): Prisma__PostImagesClient<$Result.GetResult<Prisma.$PostImagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostImagesCountArgs} args - Arguments to filter PostImages to count.
     * @example
     * // Count the number of PostImages
     * const count = await prisma.postImages.count({
     *   where: {
     *     // ... the filter for the PostImages we want to count
     *   }
     * })
    **/
    count<T extends PostImagesCountArgs>(
      args?: Subset<T, PostImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostImagesAggregateArgs>(args: Subset<T, PostImagesAggregateArgs>): Prisma.PrismaPromise<GetPostImagesAggregateType<T>>

    /**
     * Group by PostImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostImagesGroupByArgs} args - Group by arguments.
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
      T extends PostImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostImagesGroupByArgs['orderBy'] }
        : { orderBy?: PostImagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostImages model
   */
  readonly fields: PostImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostImages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostImagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PostImages model
   */
  interface PostImagesFieldRefs {
    readonly id: FieldRef<"PostImages", 'BigInt'>
    readonly post_id: FieldRef<"PostImages", 'BigInt'>
    readonly image_url: FieldRef<"PostImages", 'String'>
    readonly storage_file_path: FieldRef<"PostImages", 'String'>
    readonly alt_text: FieldRef<"PostImages", 'String'>
    readonly file_name: FieldRef<"PostImages", 'String'>
    readonly mime_type: FieldRef<"PostImages", 'String'>
    readonly size_kb: FieldRef<"PostImages", 'Int'>
    readonly created_at: FieldRef<"PostImages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostImages findUnique
   */
  export type PostImagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImages
     */
    select?: PostImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImages
     */
    omit?: PostImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImagesInclude<ExtArgs> | null
    /**
     * Filter, which PostImages to fetch.
     */
    where: PostImagesWhereUniqueInput
  }

  /**
   * PostImages findUniqueOrThrow
   */
  export type PostImagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImages
     */
    select?: PostImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImages
     */
    omit?: PostImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImagesInclude<ExtArgs> | null
    /**
     * Filter, which PostImages to fetch.
     */
    where: PostImagesWhereUniqueInput
  }

  /**
   * PostImages findFirst
   */
  export type PostImagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImages
     */
    select?: PostImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImages
     */
    omit?: PostImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImagesInclude<ExtArgs> | null
    /**
     * Filter, which PostImages to fetch.
     */
    where?: PostImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostImages to fetch.
     */
    orderBy?: PostImagesOrderByWithRelationInput | PostImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostImages.
     */
    cursor?: PostImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostImages.
     */
    distinct?: PostImagesScalarFieldEnum | PostImagesScalarFieldEnum[]
  }

  /**
   * PostImages findFirstOrThrow
   */
  export type PostImagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImages
     */
    select?: PostImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImages
     */
    omit?: PostImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImagesInclude<ExtArgs> | null
    /**
     * Filter, which PostImages to fetch.
     */
    where?: PostImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostImages to fetch.
     */
    orderBy?: PostImagesOrderByWithRelationInput | PostImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostImages.
     */
    cursor?: PostImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostImages.
     */
    distinct?: PostImagesScalarFieldEnum | PostImagesScalarFieldEnum[]
  }

  /**
   * PostImages findMany
   */
  export type PostImagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImages
     */
    select?: PostImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImages
     */
    omit?: PostImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImagesInclude<ExtArgs> | null
    /**
     * Filter, which PostImages to fetch.
     */
    where?: PostImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostImages to fetch.
     */
    orderBy?: PostImagesOrderByWithRelationInput | PostImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostImages.
     */
    cursor?: PostImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostImages.
     */
    skip?: number
    distinct?: PostImagesScalarFieldEnum | PostImagesScalarFieldEnum[]
  }

  /**
   * PostImages create
   */
  export type PostImagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImages
     */
    select?: PostImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImages
     */
    omit?: PostImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImagesInclude<ExtArgs> | null
    /**
     * The data needed to create a PostImages.
     */
    data: XOR<PostImagesCreateInput, PostImagesUncheckedCreateInput>
  }

  /**
   * PostImages createMany
   */
  export type PostImagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostImages.
     */
    data: PostImagesCreateManyInput | PostImagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostImages createManyAndReturn
   */
  export type PostImagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImages
     */
    select?: PostImagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostImages
     */
    omit?: PostImagesOmit<ExtArgs> | null
    /**
     * The data used to create many PostImages.
     */
    data: PostImagesCreateManyInput | PostImagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostImages update
   */
  export type PostImagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImages
     */
    select?: PostImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImages
     */
    omit?: PostImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImagesInclude<ExtArgs> | null
    /**
     * The data needed to update a PostImages.
     */
    data: XOR<PostImagesUpdateInput, PostImagesUncheckedUpdateInput>
    /**
     * Choose, which PostImages to update.
     */
    where: PostImagesWhereUniqueInput
  }

  /**
   * PostImages updateMany
   */
  export type PostImagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostImages.
     */
    data: XOR<PostImagesUpdateManyMutationInput, PostImagesUncheckedUpdateManyInput>
    /**
     * Filter which PostImages to update
     */
    where?: PostImagesWhereInput
    /**
     * Limit how many PostImages to update.
     */
    limit?: number
  }

  /**
   * PostImages updateManyAndReturn
   */
  export type PostImagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImages
     */
    select?: PostImagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostImages
     */
    omit?: PostImagesOmit<ExtArgs> | null
    /**
     * The data used to update PostImages.
     */
    data: XOR<PostImagesUpdateManyMutationInput, PostImagesUncheckedUpdateManyInput>
    /**
     * Filter which PostImages to update
     */
    where?: PostImagesWhereInput
    /**
     * Limit how many PostImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostImages upsert
   */
  export type PostImagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImages
     */
    select?: PostImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImages
     */
    omit?: PostImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImagesInclude<ExtArgs> | null
    /**
     * The filter to search for the PostImages to update in case it exists.
     */
    where: PostImagesWhereUniqueInput
    /**
     * In case the PostImages found by the `where` argument doesn't exist, create a new PostImages with this data.
     */
    create: XOR<PostImagesCreateInput, PostImagesUncheckedCreateInput>
    /**
     * In case the PostImages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostImagesUpdateInput, PostImagesUncheckedUpdateInput>
  }

  /**
   * PostImages delete
   */
  export type PostImagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImages
     */
    select?: PostImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImages
     */
    omit?: PostImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImagesInclude<ExtArgs> | null
    /**
     * Filter which PostImages to delete.
     */
    where: PostImagesWhereUniqueInput
  }

  /**
   * PostImages deleteMany
   */
  export type PostImagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostImages to delete
     */
    where?: PostImagesWhereInput
    /**
     * Limit how many PostImages to delete.
     */
    limit?: number
  }

  /**
   * PostImages without action
   */
  export type PostImagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImages
     */
    select?: PostImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImages
     */
    omit?: PostImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImagesInclude<ExtArgs> | null
  }


  /**
   * Model ComponentCategory
   */

  export type AggregateComponentCategory = {
    _count: ComponentCategoryCountAggregateOutputType | null
    _avg: ComponentCategoryAvgAggregateOutputType | null
    _sum: ComponentCategorySumAggregateOutputType | null
    _min: ComponentCategoryMinAggregateOutputType | null
    _max: ComponentCategoryMaxAggregateOutputType | null
  }

  export type ComponentCategoryAvgAggregateOutputType = {
    category_id: number | null
    category_pid: number | null
  }

  export type ComponentCategorySumAggregateOutputType = {
    category_id: number | null
    category_pid: number | null
  }

  export type ComponentCategoryMinAggregateOutputType = {
    category_id: number | null
    category_name: string | null
    category_pid: number | null
    created_at: Date | null
  }

  export type ComponentCategoryMaxAggregateOutputType = {
    category_id: number | null
    category_name: string | null
    category_pid: number | null
    created_at: Date | null
  }

  export type ComponentCategoryCountAggregateOutputType = {
    category_id: number
    category_name: number
    category_pid: number
    created_at: number
    _all: number
  }


  export type ComponentCategoryAvgAggregateInputType = {
    category_id?: true
    category_pid?: true
  }

  export type ComponentCategorySumAggregateInputType = {
    category_id?: true
    category_pid?: true
  }

  export type ComponentCategoryMinAggregateInputType = {
    category_id?: true
    category_name?: true
    category_pid?: true
    created_at?: true
  }

  export type ComponentCategoryMaxAggregateInputType = {
    category_id?: true
    category_name?: true
    category_pid?: true
    created_at?: true
  }

  export type ComponentCategoryCountAggregateInputType = {
    category_id?: true
    category_name?: true
    category_pid?: true
    created_at?: true
    _all?: true
  }

  export type ComponentCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComponentCategory to aggregate.
     */
    where?: ComponentCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComponentCategories to fetch.
     */
    orderBy?: ComponentCategoryOrderByWithRelationInput | ComponentCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComponentCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComponentCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComponentCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ComponentCategories
    **/
    _count?: true | ComponentCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComponentCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComponentCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComponentCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComponentCategoryMaxAggregateInputType
  }

  export type GetComponentCategoryAggregateType<T extends ComponentCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateComponentCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComponentCategory[P]>
      : GetScalarType<T[P], AggregateComponentCategory[P]>
  }




  export type ComponentCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComponentCategoryWhereInput
    orderBy?: ComponentCategoryOrderByWithAggregationInput | ComponentCategoryOrderByWithAggregationInput[]
    by: ComponentCategoryScalarFieldEnum[] | ComponentCategoryScalarFieldEnum
    having?: ComponentCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComponentCategoryCountAggregateInputType | true
    _avg?: ComponentCategoryAvgAggregateInputType
    _sum?: ComponentCategorySumAggregateInputType
    _min?: ComponentCategoryMinAggregateInputType
    _max?: ComponentCategoryMaxAggregateInputType
  }

  export type ComponentCategoryGroupByOutputType = {
    category_id: number
    category_name: string
    category_pid: number
    created_at: Date
    _count: ComponentCategoryCountAggregateOutputType | null
    _avg: ComponentCategoryAvgAggregateOutputType | null
    _sum: ComponentCategorySumAggregateOutputType | null
    _min: ComponentCategoryMinAggregateOutputType | null
    _max: ComponentCategoryMaxAggregateOutputType | null
  }

  type GetComponentCategoryGroupByPayload<T extends ComponentCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComponentCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComponentCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComponentCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ComponentCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ComponentCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    category_name?: boolean
    category_pid?: boolean
    created_at?: boolean
    components?: boolean | ComponentCategory$componentsArgs<ExtArgs>
    _count?: boolean | ComponentCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["componentCategory"]>

  export type ComponentCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    category_name?: boolean
    category_pid?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["componentCategory"]>

  export type ComponentCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    category_name?: boolean
    category_pid?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["componentCategory"]>

  export type ComponentCategorySelectScalar = {
    category_id?: boolean
    category_name?: boolean
    category_pid?: boolean
    created_at?: boolean
  }

  export type ComponentCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"category_id" | "category_name" | "category_pid" | "created_at", ExtArgs["result"]["componentCategory"]>
  export type ComponentCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    components?: boolean | ComponentCategory$componentsArgs<ExtArgs>
    _count?: boolean | ComponentCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ComponentCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ComponentCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ComponentCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ComponentCategory"
    objects: {
      components: Prisma.$ComponentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      category_id: number
      category_name: string
      category_pid: number
      created_at: Date
    }, ExtArgs["result"]["componentCategory"]>
    composites: {}
  }

  type ComponentCategoryGetPayload<S extends boolean | null | undefined | ComponentCategoryDefaultArgs> = $Result.GetResult<Prisma.$ComponentCategoryPayload, S>

  type ComponentCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComponentCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComponentCategoryCountAggregateInputType | true
    }

  export interface ComponentCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ComponentCategory'], meta: { name: 'ComponentCategory' } }
    /**
     * Find zero or one ComponentCategory that matches the filter.
     * @param {ComponentCategoryFindUniqueArgs} args - Arguments to find a ComponentCategory
     * @example
     * // Get one ComponentCategory
     * const componentCategory = await prisma.componentCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComponentCategoryFindUniqueArgs>(args: SelectSubset<T, ComponentCategoryFindUniqueArgs<ExtArgs>>): Prisma__ComponentCategoryClient<$Result.GetResult<Prisma.$ComponentCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ComponentCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComponentCategoryFindUniqueOrThrowArgs} args - Arguments to find a ComponentCategory
     * @example
     * // Get one ComponentCategory
     * const componentCategory = await prisma.componentCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComponentCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ComponentCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComponentCategoryClient<$Result.GetResult<Prisma.$ComponentCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ComponentCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentCategoryFindFirstArgs} args - Arguments to find a ComponentCategory
     * @example
     * // Get one ComponentCategory
     * const componentCategory = await prisma.componentCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComponentCategoryFindFirstArgs>(args?: SelectSubset<T, ComponentCategoryFindFirstArgs<ExtArgs>>): Prisma__ComponentCategoryClient<$Result.GetResult<Prisma.$ComponentCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ComponentCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentCategoryFindFirstOrThrowArgs} args - Arguments to find a ComponentCategory
     * @example
     * // Get one ComponentCategory
     * const componentCategory = await prisma.componentCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComponentCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ComponentCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComponentCategoryClient<$Result.GetResult<Prisma.$ComponentCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ComponentCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ComponentCategories
     * const componentCategories = await prisma.componentCategory.findMany()
     * 
     * // Get first 10 ComponentCategories
     * const componentCategories = await prisma.componentCategory.findMany({ take: 10 })
     * 
     * // Only select the `category_id`
     * const componentCategoryWithCategory_idOnly = await prisma.componentCategory.findMany({ select: { category_id: true } })
     * 
     */
    findMany<T extends ComponentCategoryFindManyArgs>(args?: SelectSubset<T, ComponentCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComponentCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ComponentCategory.
     * @param {ComponentCategoryCreateArgs} args - Arguments to create a ComponentCategory.
     * @example
     * // Create one ComponentCategory
     * const ComponentCategory = await prisma.componentCategory.create({
     *   data: {
     *     // ... data to create a ComponentCategory
     *   }
     * })
     * 
     */
    create<T extends ComponentCategoryCreateArgs>(args: SelectSubset<T, ComponentCategoryCreateArgs<ExtArgs>>): Prisma__ComponentCategoryClient<$Result.GetResult<Prisma.$ComponentCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ComponentCategories.
     * @param {ComponentCategoryCreateManyArgs} args - Arguments to create many ComponentCategories.
     * @example
     * // Create many ComponentCategories
     * const componentCategory = await prisma.componentCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComponentCategoryCreateManyArgs>(args?: SelectSubset<T, ComponentCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ComponentCategories and returns the data saved in the database.
     * @param {ComponentCategoryCreateManyAndReturnArgs} args - Arguments to create many ComponentCategories.
     * @example
     * // Create many ComponentCategories
     * const componentCategory = await prisma.componentCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ComponentCategories and only return the `category_id`
     * const componentCategoryWithCategory_idOnly = await prisma.componentCategory.createManyAndReturn({
     *   select: { category_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComponentCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ComponentCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComponentCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ComponentCategory.
     * @param {ComponentCategoryDeleteArgs} args - Arguments to delete one ComponentCategory.
     * @example
     * // Delete one ComponentCategory
     * const ComponentCategory = await prisma.componentCategory.delete({
     *   where: {
     *     // ... filter to delete one ComponentCategory
     *   }
     * })
     * 
     */
    delete<T extends ComponentCategoryDeleteArgs>(args: SelectSubset<T, ComponentCategoryDeleteArgs<ExtArgs>>): Prisma__ComponentCategoryClient<$Result.GetResult<Prisma.$ComponentCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ComponentCategory.
     * @param {ComponentCategoryUpdateArgs} args - Arguments to update one ComponentCategory.
     * @example
     * // Update one ComponentCategory
     * const componentCategory = await prisma.componentCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComponentCategoryUpdateArgs>(args: SelectSubset<T, ComponentCategoryUpdateArgs<ExtArgs>>): Prisma__ComponentCategoryClient<$Result.GetResult<Prisma.$ComponentCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ComponentCategories.
     * @param {ComponentCategoryDeleteManyArgs} args - Arguments to filter ComponentCategories to delete.
     * @example
     * // Delete a few ComponentCategories
     * const { count } = await prisma.componentCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComponentCategoryDeleteManyArgs>(args?: SelectSubset<T, ComponentCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ComponentCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ComponentCategories
     * const componentCategory = await prisma.componentCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComponentCategoryUpdateManyArgs>(args: SelectSubset<T, ComponentCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ComponentCategories and returns the data updated in the database.
     * @param {ComponentCategoryUpdateManyAndReturnArgs} args - Arguments to update many ComponentCategories.
     * @example
     * // Update many ComponentCategories
     * const componentCategory = await prisma.componentCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ComponentCategories and only return the `category_id`
     * const componentCategoryWithCategory_idOnly = await prisma.componentCategory.updateManyAndReturn({
     *   select: { category_id: true },
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
    updateManyAndReturn<T extends ComponentCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ComponentCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComponentCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ComponentCategory.
     * @param {ComponentCategoryUpsertArgs} args - Arguments to update or create a ComponentCategory.
     * @example
     * // Update or create a ComponentCategory
     * const componentCategory = await prisma.componentCategory.upsert({
     *   create: {
     *     // ... data to create a ComponentCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ComponentCategory we want to update
     *   }
     * })
     */
    upsert<T extends ComponentCategoryUpsertArgs>(args: SelectSubset<T, ComponentCategoryUpsertArgs<ExtArgs>>): Prisma__ComponentCategoryClient<$Result.GetResult<Prisma.$ComponentCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ComponentCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentCategoryCountArgs} args - Arguments to filter ComponentCategories to count.
     * @example
     * // Count the number of ComponentCategories
     * const count = await prisma.componentCategory.count({
     *   where: {
     *     // ... the filter for the ComponentCategories we want to count
     *   }
     * })
    **/
    count<T extends ComponentCategoryCountArgs>(
      args?: Subset<T, ComponentCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComponentCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ComponentCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComponentCategoryAggregateArgs>(args: Subset<T, ComponentCategoryAggregateArgs>): Prisma.PrismaPromise<GetComponentCategoryAggregateType<T>>

    /**
     * Group by ComponentCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentCategoryGroupByArgs} args - Group by arguments.
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
      T extends ComponentCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComponentCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ComponentCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ComponentCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComponentCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ComponentCategory model
   */
  readonly fields: ComponentCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ComponentCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComponentCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    components<T extends ComponentCategory$componentsArgs<ExtArgs> = {}>(args?: Subset<T, ComponentCategory$componentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComponentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ComponentCategory model
   */
  interface ComponentCategoryFieldRefs {
    readonly category_id: FieldRef<"ComponentCategory", 'Int'>
    readonly category_name: FieldRef<"ComponentCategory", 'String'>
    readonly category_pid: FieldRef<"ComponentCategory", 'Int'>
    readonly created_at: FieldRef<"ComponentCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ComponentCategory findUnique
   */
  export type ComponentCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentCategory
     */
    select?: ComponentCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentCategory
     */
    omit?: ComponentCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ComponentCategory to fetch.
     */
    where: ComponentCategoryWhereUniqueInput
  }

  /**
   * ComponentCategory findUniqueOrThrow
   */
  export type ComponentCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentCategory
     */
    select?: ComponentCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentCategory
     */
    omit?: ComponentCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ComponentCategory to fetch.
     */
    where: ComponentCategoryWhereUniqueInput
  }

  /**
   * ComponentCategory findFirst
   */
  export type ComponentCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentCategory
     */
    select?: ComponentCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentCategory
     */
    omit?: ComponentCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ComponentCategory to fetch.
     */
    where?: ComponentCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComponentCategories to fetch.
     */
    orderBy?: ComponentCategoryOrderByWithRelationInput | ComponentCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComponentCategories.
     */
    cursor?: ComponentCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComponentCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComponentCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComponentCategories.
     */
    distinct?: ComponentCategoryScalarFieldEnum | ComponentCategoryScalarFieldEnum[]
  }

  /**
   * ComponentCategory findFirstOrThrow
   */
  export type ComponentCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentCategory
     */
    select?: ComponentCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentCategory
     */
    omit?: ComponentCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ComponentCategory to fetch.
     */
    where?: ComponentCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComponentCategories to fetch.
     */
    orderBy?: ComponentCategoryOrderByWithRelationInput | ComponentCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComponentCategories.
     */
    cursor?: ComponentCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComponentCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComponentCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComponentCategories.
     */
    distinct?: ComponentCategoryScalarFieldEnum | ComponentCategoryScalarFieldEnum[]
  }

  /**
   * ComponentCategory findMany
   */
  export type ComponentCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentCategory
     */
    select?: ComponentCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentCategory
     */
    omit?: ComponentCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ComponentCategories to fetch.
     */
    where?: ComponentCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComponentCategories to fetch.
     */
    orderBy?: ComponentCategoryOrderByWithRelationInput | ComponentCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ComponentCategories.
     */
    cursor?: ComponentCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComponentCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComponentCategories.
     */
    skip?: number
    distinct?: ComponentCategoryScalarFieldEnum | ComponentCategoryScalarFieldEnum[]
  }

  /**
   * ComponentCategory create
   */
  export type ComponentCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentCategory
     */
    select?: ComponentCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentCategory
     */
    omit?: ComponentCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ComponentCategory.
     */
    data: XOR<ComponentCategoryCreateInput, ComponentCategoryUncheckedCreateInput>
  }

  /**
   * ComponentCategory createMany
   */
  export type ComponentCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ComponentCategories.
     */
    data: ComponentCategoryCreateManyInput | ComponentCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ComponentCategory createManyAndReturn
   */
  export type ComponentCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentCategory
     */
    select?: ComponentCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentCategory
     */
    omit?: ComponentCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many ComponentCategories.
     */
    data: ComponentCategoryCreateManyInput | ComponentCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ComponentCategory update
   */
  export type ComponentCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentCategory
     */
    select?: ComponentCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentCategory
     */
    omit?: ComponentCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ComponentCategory.
     */
    data: XOR<ComponentCategoryUpdateInput, ComponentCategoryUncheckedUpdateInput>
    /**
     * Choose, which ComponentCategory to update.
     */
    where: ComponentCategoryWhereUniqueInput
  }

  /**
   * ComponentCategory updateMany
   */
  export type ComponentCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ComponentCategories.
     */
    data: XOR<ComponentCategoryUpdateManyMutationInput, ComponentCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ComponentCategories to update
     */
    where?: ComponentCategoryWhereInput
    /**
     * Limit how many ComponentCategories to update.
     */
    limit?: number
  }

  /**
   * ComponentCategory updateManyAndReturn
   */
  export type ComponentCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentCategory
     */
    select?: ComponentCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentCategory
     */
    omit?: ComponentCategoryOmit<ExtArgs> | null
    /**
     * The data used to update ComponentCategories.
     */
    data: XOR<ComponentCategoryUpdateManyMutationInput, ComponentCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ComponentCategories to update
     */
    where?: ComponentCategoryWhereInput
    /**
     * Limit how many ComponentCategories to update.
     */
    limit?: number
  }

  /**
   * ComponentCategory upsert
   */
  export type ComponentCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentCategory
     */
    select?: ComponentCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentCategory
     */
    omit?: ComponentCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ComponentCategory to update in case it exists.
     */
    where: ComponentCategoryWhereUniqueInput
    /**
     * In case the ComponentCategory found by the `where` argument doesn't exist, create a new ComponentCategory with this data.
     */
    create: XOR<ComponentCategoryCreateInput, ComponentCategoryUncheckedCreateInput>
    /**
     * In case the ComponentCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComponentCategoryUpdateInput, ComponentCategoryUncheckedUpdateInput>
  }

  /**
   * ComponentCategory delete
   */
  export type ComponentCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentCategory
     */
    select?: ComponentCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentCategory
     */
    omit?: ComponentCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentCategoryInclude<ExtArgs> | null
    /**
     * Filter which ComponentCategory to delete.
     */
    where: ComponentCategoryWhereUniqueInput
  }

  /**
   * ComponentCategory deleteMany
   */
  export type ComponentCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComponentCategories to delete
     */
    where?: ComponentCategoryWhereInput
    /**
     * Limit how many ComponentCategories to delete.
     */
    limit?: number
  }

  /**
   * ComponentCategory.components
   */
  export type ComponentCategory$componentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Component
     */
    select?: ComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Component
     */
    omit?: ComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentInclude<ExtArgs> | null
    where?: ComponentWhereInput
    orderBy?: ComponentOrderByWithRelationInput | ComponentOrderByWithRelationInput[]
    cursor?: ComponentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComponentScalarFieldEnum | ComponentScalarFieldEnum[]
  }

  /**
   * ComponentCategory without action
   */
  export type ComponentCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentCategory
     */
    select?: ComponentCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentCategory
     */
    omit?: ComponentCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Component
   */

  export type AggregateComponent = {
    _count: ComponentCountAggregateOutputType | null
    _avg: ComponentAvgAggregateOutputType | null
    _sum: ComponentSumAggregateOutputType | null
    _min: ComponentMinAggregateOutputType | null
    _max: ComponentMaxAggregateOutputType | null
  }

  export type ComponentAvgAggregateOutputType = {
    comp_id: number | null
    comp_category: number | null
  }

  export type ComponentSumAggregateOutputType = {
    comp_id: number | null
    comp_category: number | null
  }

  export type ComponentMinAggregateOutputType = {
    comp_id: number | null
    comp_name: string | null
    comp_category: number | null
    created_at: Date | null
    app_code: string | null
    style_code: string | null
  }

  export type ComponentMaxAggregateOutputType = {
    comp_id: number | null
    comp_name: string | null
    comp_category: number | null
    created_at: Date | null
    app_code: string | null
    style_code: string | null
  }

  export type ComponentCountAggregateOutputType = {
    comp_id: number
    comp_name: number
    comp_category: number
    created_at: number
    app_code: number
    style_code: number
    _all: number
  }


  export type ComponentAvgAggregateInputType = {
    comp_id?: true
    comp_category?: true
  }

  export type ComponentSumAggregateInputType = {
    comp_id?: true
    comp_category?: true
  }

  export type ComponentMinAggregateInputType = {
    comp_id?: true
    comp_name?: true
    comp_category?: true
    created_at?: true
    app_code?: true
    style_code?: true
  }

  export type ComponentMaxAggregateInputType = {
    comp_id?: true
    comp_name?: true
    comp_category?: true
    created_at?: true
    app_code?: true
    style_code?: true
  }

  export type ComponentCountAggregateInputType = {
    comp_id?: true
    comp_name?: true
    comp_category?: true
    created_at?: true
    app_code?: true
    style_code?: true
    _all?: true
  }

  export type ComponentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Component to aggregate.
     */
    where?: ComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Components to fetch.
     */
    orderBy?: ComponentOrderByWithRelationInput | ComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Components from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Components.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Components
    **/
    _count?: true | ComponentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComponentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComponentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComponentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComponentMaxAggregateInputType
  }

  export type GetComponentAggregateType<T extends ComponentAggregateArgs> = {
        [P in keyof T & keyof AggregateComponent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComponent[P]>
      : GetScalarType<T[P], AggregateComponent[P]>
  }




  export type ComponentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComponentWhereInput
    orderBy?: ComponentOrderByWithAggregationInput | ComponentOrderByWithAggregationInput[]
    by: ComponentScalarFieldEnum[] | ComponentScalarFieldEnum
    having?: ComponentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComponentCountAggregateInputType | true
    _avg?: ComponentAvgAggregateInputType
    _sum?: ComponentSumAggregateInputType
    _min?: ComponentMinAggregateInputType
    _max?: ComponentMaxAggregateInputType
  }

  export type ComponentGroupByOutputType = {
    comp_id: number
    comp_name: string
    comp_category: number | null
    created_at: Date
    app_code: string
    style_code: string
    _count: ComponentCountAggregateOutputType | null
    _avg: ComponentAvgAggregateOutputType | null
    _sum: ComponentSumAggregateOutputType | null
    _min: ComponentMinAggregateOutputType | null
    _max: ComponentMaxAggregateOutputType | null
  }

  type GetComponentGroupByPayload<T extends ComponentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComponentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComponentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComponentGroupByOutputType[P]>
            : GetScalarType<T[P], ComponentGroupByOutputType[P]>
        }
      >
    >


  export type ComponentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comp_id?: boolean
    comp_name?: boolean
    comp_category?: boolean
    created_at?: boolean
    app_code?: boolean
    style_code?: boolean
    component_category?: boolean | Component$component_categoryArgs<ExtArgs>
  }, ExtArgs["result"]["component"]>

  export type ComponentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comp_id?: boolean
    comp_name?: boolean
    comp_category?: boolean
    created_at?: boolean
    app_code?: boolean
    style_code?: boolean
    component_category?: boolean | Component$component_categoryArgs<ExtArgs>
  }, ExtArgs["result"]["component"]>

  export type ComponentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comp_id?: boolean
    comp_name?: boolean
    comp_category?: boolean
    created_at?: boolean
    app_code?: boolean
    style_code?: boolean
    component_category?: boolean | Component$component_categoryArgs<ExtArgs>
  }, ExtArgs["result"]["component"]>

  export type ComponentSelectScalar = {
    comp_id?: boolean
    comp_name?: boolean
    comp_category?: boolean
    created_at?: boolean
    app_code?: boolean
    style_code?: boolean
  }

  export type ComponentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"comp_id" | "comp_name" | "comp_category" | "created_at" | "app_code" | "style_code", ExtArgs["result"]["component"]>
  export type ComponentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    component_category?: boolean | Component$component_categoryArgs<ExtArgs>
  }
  export type ComponentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    component_category?: boolean | Component$component_categoryArgs<ExtArgs>
  }
  export type ComponentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    component_category?: boolean | Component$component_categoryArgs<ExtArgs>
  }

  export type $ComponentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Component"
    objects: {
      component_category: Prisma.$ComponentCategoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      comp_id: number
      comp_name: string
      comp_category: number | null
      created_at: Date
      app_code: string
      style_code: string
    }, ExtArgs["result"]["component"]>
    composites: {}
  }

  type ComponentGetPayload<S extends boolean | null | undefined | ComponentDefaultArgs> = $Result.GetResult<Prisma.$ComponentPayload, S>

  type ComponentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComponentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComponentCountAggregateInputType | true
    }

  export interface ComponentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Component'], meta: { name: 'Component' } }
    /**
     * Find zero or one Component that matches the filter.
     * @param {ComponentFindUniqueArgs} args - Arguments to find a Component
     * @example
     * // Get one Component
     * const component = await prisma.component.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComponentFindUniqueArgs>(args: SelectSubset<T, ComponentFindUniqueArgs<ExtArgs>>): Prisma__ComponentClient<$Result.GetResult<Prisma.$ComponentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Component that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComponentFindUniqueOrThrowArgs} args - Arguments to find a Component
     * @example
     * // Get one Component
     * const component = await prisma.component.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComponentFindUniqueOrThrowArgs>(args: SelectSubset<T, ComponentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComponentClient<$Result.GetResult<Prisma.$ComponentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Component that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentFindFirstArgs} args - Arguments to find a Component
     * @example
     * // Get one Component
     * const component = await prisma.component.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComponentFindFirstArgs>(args?: SelectSubset<T, ComponentFindFirstArgs<ExtArgs>>): Prisma__ComponentClient<$Result.GetResult<Prisma.$ComponentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Component that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentFindFirstOrThrowArgs} args - Arguments to find a Component
     * @example
     * // Get one Component
     * const component = await prisma.component.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComponentFindFirstOrThrowArgs>(args?: SelectSubset<T, ComponentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComponentClient<$Result.GetResult<Prisma.$ComponentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Components that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Components
     * const components = await prisma.component.findMany()
     * 
     * // Get first 10 Components
     * const components = await prisma.component.findMany({ take: 10 })
     * 
     * // Only select the `comp_id`
     * const componentWithComp_idOnly = await prisma.component.findMany({ select: { comp_id: true } })
     * 
     */
    findMany<T extends ComponentFindManyArgs>(args?: SelectSubset<T, ComponentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComponentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Component.
     * @param {ComponentCreateArgs} args - Arguments to create a Component.
     * @example
     * // Create one Component
     * const Component = await prisma.component.create({
     *   data: {
     *     // ... data to create a Component
     *   }
     * })
     * 
     */
    create<T extends ComponentCreateArgs>(args: SelectSubset<T, ComponentCreateArgs<ExtArgs>>): Prisma__ComponentClient<$Result.GetResult<Prisma.$ComponentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Components.
     * @param {ComponentCreateManyArgs} args - Arguments to create many Components.
     * @example
     * // Create many Components
     * const component = await prisma.component.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComponentCreateManyArgs>(args?: SelectSubset<T, ComponentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Components and returns the data saved in the database.
     * @param {ComponentCreateManyAndReturnArgs} args - Arguments to create many Components.
     * @example
     * // Create many Components
     * const component = await prisma.component.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Components and only return the `comp_id`
     * const componentWithComp_idOnly = await prisma.component.createManyAndReturn({
     *   select: { comp_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComponentCreateManyAndReturnArgs>(args?: SelectSubset<T, ComponentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComponentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Component.
     * @param {ComponentDeleteArgs} args - Arguments to delete one Component.
     * @example
     * // Delete one Component
     * const Component = await prisma.component.delete({
     *   where: {
     *     // ... filter to delete one Component
     *   }
     * })
     * 
     */
    delete<T extends ComponentDeleteArgs>(args: SelectSubset<T, ComponentDeleteArgs<ExtArgs>>): Prisma__ComponentClient<$Result.GetResult<Prisma.$ComponentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Component.
     * @param {ComponentUpdateArgs} args - Arguments to update one Component.
     * @example
     * // Update one Component
     * const component = await prisma.component.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComponentUpdateArgs>(args: SelectSubset<T, ComponentUpdateArgs<ExtArgs>>): Prisma__ComponentClient<$Result.GetResult<Prisma.$ComponentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Components.
     * @param {ComponentDeleteManyArgs} args - Arguments to filter Components to delete.
     * @example
     * // Delete a few Components
     * const { count } = await prisma.component.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComponentDeleteManyArgs>(args?: SelectSubset<T, ComponentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Components.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Components
     * const component = await prisma.component.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComponentUpdateManyArgs>(args: SelectSubset<T, ComponentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Components and returns the data updated in the database.
     * @param {ComponentUpdateManyAndReturnArgs} args - Arguments to update many Components.
     * @example
     * // Update many Components
     * const component = await prisma.component.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Components and only return the `comp_id`
     * const componentWithComp_idOnly = await prisma.component.updateManyAndReturn({
     *   select: { comp_id: true },
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
    updateManyAndReturn<T extends ComponentUpdateManyAndReturnArgs>(args: SelectSubset<T, ComponentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComponentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Component.
     * @param {ComponentUpsertArgs} args - Arguments to update or create a Component.
     * @example
     * // Update or create a Component
     * const component = await prisma.component.upsert({
     *   create: {
     *     // ... data to create a Component
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Component we want to update
     *   }
     * })
     */
    upsert<T extends ComponentUpsertArgs>(args: SelectSubset<T, ComponentUpsertArgs<ExtArgs>>): Prisma__ComponentClient<$Result.GetResult<Prisma.$ComponentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Components.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentCountArgs} args - Arguments to filter Components to count.
     * @example
     * // Count the number of Components
     * const count = await prisma.component.count({
     *   where: {
     *     // ... the filter for the Components we want to count
     *   }
     * })
    **/
    count<T extends ComponentCountArgs>(
      args?: Subset<T, ComponentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComponentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Component.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComponentAggregateArgs>(args: Subset<T, ComponentAggregateArgs>): Prisma.PrismaPromise<GetComponentAggregateType<T>>

    /**
     * Group by Component.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentGroupByArgs} args - Group by arguments.
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
      T extends ComponentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComponentGroupByArgs['orderBy'] }
        : { orderBy?: ComponentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ComponentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComponentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Component model
   */
  readonly fields: ComponentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Component.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComponentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    component_category<T extends Component$component_categoryArgs<ExtArgs> = {}>(args?: Subset<T, Component$component_categoryArgs<ExtArgs>>): Prisma__ComponentCategoryClient<$Result.GetResult<Prisma.$ComponentCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Component model
   */
  interface ComponentFieldRefs {
    readonly comp_id: FieldRef<"Component", 'Int'>
    readonly comp_name: FieldRef<"Component", 'String'>
    readonly comp_category: FieldRef<"Component", 'Int'>
    readonly created_at: FieldRef<"Component", 'DateTime'>
    readonly app_code: FieldRef<"Component", 'String'>
    readonly style_code: FieldRef<"Component", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Component findUnique
   */
  export type ComponentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Component
     */
    select?: ComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Component
     */
    omit?: ComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentInclude<ExtArgs> | null
    /**
     * Filter, which Component to fetch.
     */
    where: ComponentWhereUniqueInput
  }

  /**
   * Component findUniqueOrThrow
   */
  export type ComponentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Component
     */
    select?: ComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Component
     */
    omit?: ComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentInclude<ExtArgs> | null
    /**
     * Filter, which Component to fetch.
     */
    where: ComponentWhereUniqueInput
  }

  /**
   * Component findFirst
   */
  export type ComponentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Component
     */
    select?: ComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Component
     */
    omit?: ComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentInclude<ExtArgs> | null
    /**
     * Filter, which Component to fetch.
     */
    where?: ComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Components to fetch.
     */
    orderBy?: ComponentOrderByWithRelationInput | ComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Components.
     */
    cursor?: ComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Components from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Components.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Components.
     */
    distinct?: ComponentScalarFieldEnum | ComponentScalarFieldEnum[]
  }

  /**
   * Component findFirstOrThrow
   */
  export type ComponentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Component
     */
    select?: ComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Component
     */
    omit?: ComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentInclude<ExtArgs> | null
    /**
     * Filter, which Component to fetch.
     */
    where?: ComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Components to fetch.
     */
    orderBy?: ComponentOrderByWithRelationInput | ComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Components.
     */
    cursor?: ComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Components from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Components.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Components.
     */
    distinct?: ComponentScalarFieldEnum | ComponentScalarFieldEnum[]
  }

  /**
   * Component findMany
   */
  export type ComponentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Component
     */
    select?: ComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Component
     */
    omit?: ComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentInclude<ExtArgs> | null
    /**
     * Filter, which Components to fetch.
     */
    where?: ComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Components to fetch.
     */
    orderBy?: ComponentOrderByWithRelationInput | ComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Components.
     */
    cursor?: ComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Components from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Components.
     */
    skip?: number
    distinct?: ComponentScalarFieldEnum | ComponentScalarFieldEnum[]
  }

  /**
   * Component create
   */
  export type ComponentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Component
     */
    select?: ComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Component
     */
    omit?: ComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentInclude<ExtArgs> | null
    /**
     * The data needed to create a Component.
     */
    data: XOR<ComponentCreateInput, ComponentUncheckedCreateInput>
  }

  /**
   * Component createMany
   */
  export type ComponentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Components.
     */
    data: ComponentCreateManyInput | ComponentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Component createManyAndReturn
   */
  export type ComponentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Component
     */
    select?: ComponentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Component
     */
    omit?: ComponentOmit<ExtArgs> | null
    /**
     * The data used to create many Components.
     */
    data: ComponentCreateManyInput | ComponentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Component update
   */
  export type ComponentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Component
     */
    select?: ComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Component
     */
    omit?: ComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentInclude<ExtArgs> | null
    /**
     * The data needed to update a Component.
     */
    data: XOR<ComponentUpdateInput, ComponentUncheckedUpdateInput>
    /**
     * Choose, which Component to update.
     */
    where: ComponentWhereUniqueInput
  }

  /**
   * Component updateMany
   */
  export type ComponentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Components.
     */
    data: XOR<ComponentUpdateManyMutationInput, ComponentUncheckedUpdateManyInput>
    /**
     * Filter which Components to update
     */
    where?: ComponentWhereInput
    /**
     * Limit how many Components to update.
     */
    limit?: number
  }

  /**
   * Component updateManyAndReturn
   */
  export type ComponentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Component
     */
    select?: ComponentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Component
     */
    omit?: ComponentOmit<ExtArgs> | null
    /**
     * The data used to update Components.
     */
    data: XOR<ComponentUpdateManyMutationInput, ComponentUncheckedUpdateManyInput>
    /**
     * Filter which Components to update
     */
    where?: ComponentWhereInput
    /**
     * Limit how many Components to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Component upsert
   */
  export type ComponentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Component
     */
    select?: ComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Component
     */
    omit?: ComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentInclude<ExtArgs> | null
    /**
     * The filter to search for the Component to update in case it exists.
     */
    where: ComponentWhereUniqueInput
    /**
     * In case the Component found by the `where` argument doesn't exist, create a new Component with this data.
     */
    create: XOR<ComponentCreateInput, ComponentUncheckedCreateInput>
    /**
     * In case the Component was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComponentUpdateInput, ComponentUncheckedUpdateInput>
  }

  /**
   * Component delete
   */
  export type ComponentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Component
     */
    select?: ComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Component
     */
    omit?: ComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentInclude<ExtArgs> | null
    /**
     * Filter which Component to delete.
     */
    where: ComponentWhereUniqueInput
  }

  /**
   * Component deleteMany
   */
  export type ComponentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Components to delete
     */
    where?: ComponentWhereInput
    /**
     * Limit how many Components to delete.
     */
    limit?: number
  }

  /**
   * Component.component_category
   */
  export type Component$component_categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentCategory
     */
    select?: ComponentCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentCategory
     */
    omit?: ComponentCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentCategoryInclude<ExtArgs> | null
    where?: ComponentCategoryWhereInput
  }

  /**
   * Component without action
   */
  export type ComponentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Component
     */
    select?: ComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Component
     */
    omit?: ComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentInclude<ExtArgs> | null
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


  export const PostScalarFieldEnum: {
    post_id: 'post_id',
    title: 'title',
    markdown_content: 'markdown_content',
    created_at: 'created_at'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const PostImagesScalarFieldEnum: {
    id: 'id',
    post_id: 'post_id',
    image_url: 'image_url',
    storage_file_path: 'storage_file_path',
    alt_text: 'alt_text',
    file_name: 'file_name',
    mime_type: 'mime_type',
    size_kb: 'size_kb',
    created_at: 'created_at'
  };

  export type PostImagesScalarFieldEnum = (typeof PostImagesScalarFieldEnum)[keyof typeof PostImagesScalarFieldEnum]


  export const ComponentCategoryScalarFieldEnum: {
    category_id: 'category_id',
    category_name: 'category_name',
    category_pid: 'category_pid',
    created_at: 'created_at'
  };

  export type ComponentCategoryScalarFieldEnum = (typeof ComponentCategoryScalarFieldEnum)[keyof typeof ComponentCategoryScalarFieldEnum]


  export const ComponentScalarFieldEnum: {
    comp_id: 'comp_id',
    comp_name: 'comp_name',
    comp_category: 'comp_category',
    created_at: 'created_at',
    app_code: 'app_code',
    style_code: 'style_code'
  };

  export type ComponentScalarFieldEnum = (typeof ComponentScalarFieldEnum)[keyof typeof ComponentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    post_id?: BigIntFilter<"Post"> | bigint | number
    title?: StringFilter<"Post"> | string
    markdown_content?: StringFilter<"Post"> | string
    created_at?: DateTimeFilter<"Post"> | Date | string
    images?: PostImagesListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    post_id?: SortOrder
    title?: SortOrder
    markdown_content?: SortOrder
    created_at?: SortOrder
    images?: PostImagesOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    post_id?: bigint | number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    markdown_content?: StringFilter<"Post"> | string
    created_at?: DateTimeFilter<"Post"> | Date | string
    images?: PostImagesListRelationFilter
  }, "post_id">

  export type PostOrderByWithAggregationInput = {
    post_id?: SortOrder
    title?: SortOrder
    markdown_content?: SortOrder
    created_at?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    post_id?: BigIntWithAggregatesFilter<"Post"> | bigint | number
    title?: StringWithAggregatesFilter<"Post"> | string
    markdown_content?: StringWithAggregatesFilter<"Post"> | string
    created_at?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type PostImagesWhereInput = {
    AND?: PostImagesWhereInput | PostImagesWhereInput[]
    OR?: PostImagesWhereInput[]
    NOT?: PostImagesWhereInput | PostImagesWhereInput[]
    id?: BigIntFilter<"PostImages"> | bigint | number
    post_id?: BigIntFilter<"PostImages"> | bigint | number
    image_url?: StringFilter<"PostImages"> | string
    storage_file_path?: StringFilter<"PostImages"> | string
    alt_text?: StringNullableFilter<"PostImages"> | string | null
    file_name?: StringNullableFilter<"PostImages"> | string | null
    mime_type?: StringNullableFilter<"PostImages"> | string | null
    size_kb?: IntNullableFilter<"PostImages"> | number | null
    created_at?: DateTimeFilter<"PostImages"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type PostImagesOrderByWithRelationInput = {
    id?: SortOrder
    post_id?: SortOrder
    image_url?: SortOrder
    storage_file_path?: SortOrder
    alt_text?: SortOrderInput | SortOrder
    file_name?: SortOrderInput | SortOrder
    mime_type?: SortOrderInput | SortOrder
    size_kb?: SortOrderInput | SortOrder
    created_at?: SortOrder
    post?: PostOrderByWithRelationInput
  }

  export type PostImagesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    image_url?: string
    storage_file_path?: string
    AND?: PostImagesWhereInput | PostImagesWhereInput[]
    OR?: PostImagesWhereInput[]
    NOT?: PostImagesWhereInput | PostImagesWhereInput[]
    post_id?: BigIntFilter<"PostImages"> | bigint | number
    alt_text?: StringNullableFilter<"PostImages"> | string | null
    file_name?: StringNullableFilter<"PostImages"> | string | null
    mime_type?: StringNullableFilter<"PostImages"> | string | null
    size_kb?: IntNullableFilter<"PostImages"> | number | null
    created_at?: DateTimeFilter<"PostImages"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id" | "image_url" | "storage_file_path">

  export type PostImagesOrderByWithAggregationInput = {
    id?: SortOrder
    post_id?: SortOrder
    image_url?: SortOrder
    storage_file_path?: SortOrder
    alt_text?: SortOrderInput | SortOrder
    file_name?: SortOrderInput | SortOrder
    mime_type?: SortOrderInput | SortOrder
    size_kb?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: PostImagesCountOrderByAggregateInput
    _avg?: PostImagesAvgOrderByAggregateInput
    _max?: PostImagesMaxOrderByAggregateInput
    _min?: PostImagesMinOrderByAggregateInput
    _sum?: PostImagesSumOrderByAggregateInput
  }

  export type PostImagesScalarWhereWithAggregatesInput = {
    AND?: PostImagesScalarWhereWithAggregatesInput | PostImagesScalarWhereWithAggregatesInput[]
    OR?: PostImagesScalarWhereWithAggregatesInput[]
    NOT?: PostImagesScalarWhereWithAggregatesInput | PostImagesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"PostImages"> | bigint | number
    post_id?: BigIntWithAggregatesFilter<"PostImages"> | bigint | number
    image_url?: StringWithAggregatesFilter<"PostImages"> | string
    storage_file_path?: StringWithAggregatesFilter<"PostImages"> | string
    alt_text?: StringNullableWithAggregatesFilter<"PostImages"> | string | null
    file_name?: StringNullableWithAggregatesFilter<"PostImages"> | string | null
    mime_type?: StringNullableWithAggregatesFilter<"PostImages"> | string | null
    size_kb?: IntNullableWithAggregatesFilter<"PostImages"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"PostImages"> | Date | string
  }

  export type ComponentCategoryWhereInput = {
    AND?: ComponentCategoryWhereInput | ComponentCategoryWhereInput[]
    OR?: ComponentCategoryWhereInput[]
    NOT?: ComponentCategoryWhereInput | ComponentCategoryWhereInput[]
    category_id?: IntFilter<"ComponentCategory"> | number
    category_name?: StringFilter<"ComponentCategory"> | string
    category_pid?: IntFilter<"ComponentCategory"> | number
    created_at?: DateTimeFilter<"ComponentCategory"> | Date | string
    components?: ComponentListRelationFilter
  }

  export type ComponentCategoryOrderByWithRelationInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    category_pid?: SortOrder
    created_at?: SortOrder
    components?: ComponentOrderByRelationAggregateInput
  }

  export type ComponentCategoryWhereUniqueInput = Prisma.AtLeast<{
    category_id?: number
    category_name?: string
    AND?: ComponentCategoryWhereInput | ComponentCategoryWhereInput[]
    OR?: ComponentCategoryWhereInput[]
    NOT?: ComponentCategoryWhereInput | ComponentCategoryWhereInput[]
    category_pid?: IntFilter<"ComponentCategory"> | number
    created_at?: DateTimeFilter<"ComponentCategory"> | Date | string
    components?: ComponentListRelationFilter
  }, "category_id" | "category_name">

  export type ComponentCategoryOrderByWithAggregationInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    category_pid?: SortOrder
    created_at?: SortOrder
    _count?: ComponentCategoryCountOrderByAggregateInput
    _avg?: ComponentCategoryAvgOrderByAggregateInput
    _max?: ComponentCategoryMaxOrderByAggregateInput
    _min?: ComponentCategoryMinOrderByAggregateInput
    _sum?: ComponentCategorySumOrderByAggregateInput
  }

  export type ComponentCategoryScalarWhereWithAggregatesInput = {
    AND?: ComponentCategoryScalarWhereWithAggregatesInput | ComponentCategoryScalarWhereWithAggregatesInput[]
    OR?: ComponentCategoryScalarWhereWithAggregatesInput[]
    NOT?: ComponentCategoryScalarWhereWithAggregatesInput | ComponentCategoryScalarWhereWithAggregatesInput[]
    category_id?: IntWithAggregatesFilter<"ComponentCategory"> | number
    category_name?: StringWithAggregatesFilter<"ComponentCategory"> | string
    category_pid?: IntWithAggregatesFilter<"ComponentCategory"> | number
    created_at?: DateTimeWithAggregatesFilter<"ComponentCategory"> | Date | string
  }

  export type ComponentWhereInput = {
    AND?: ComponentWhereInput | ComponentWhereInput[]
    OR?: ComponentWhereInput[]
    NOT?: ComponentWhereInput | ComponentWhereInput[]
    comp_id?: IntFilter<"Component"> | number
    comp_name?: StringFilter<"Component"> | string
    comp_category?: IntNullableFilter<"Component"> | number | null
    created_at?: DateTimeFilter<"Component"> | Date | string
    app_code?: StringFilter<"Component"> | string
    style_code?: StringFilter<"Component"> | string
    component_category?: XOR<ComponentCategoryNullableScalarRelationFilter, ComponentCategoryWhereInput> | null
  }

  export type ComponentOrderByWithRelationInput = {
    comp_id?: SortOrder
    comp_name?: SortOrder
    comp_category?: SortOrderInput | SortOrder
    created_at?: SortOrder
    app_code?: SortOrder
    style_code?: SortOrder
    component_category?: ComponentCategoryOrderByWithRelationInput
  }

  export type ComponentWhereUniqueInput = Prisma.AtLeast<{
    comp_id?: number
    AND?: ComponentWhereInput | ComponentWhereInput[]
    OR?: ComponentWhereInput[]
    NOT?: ComponentWhereInput | ComponentWhereInput[]
    comp_name?: StringFilter<"Component"> | string
    comp_category?: IntNullableFilter<"Component"> | number | null
    created_at?: DateTimeFilter<"Component"> | Date | string
    app_code?: StringFilter<"Component"> | string
    style_code?: StringFilter<"Component"> | string
    component_category?: XOR<ComponentCategoryNullableScalarRelationFilter, ComponentCategoryWhereInput> | null
  }, "comp_id">

  export type ComponentOrderByWithAggregationInput = {
    comp_id?: SortOrder
    comp_name?: SortOrder
    comp_category?: SortOrderInput | SortOrder
    created_at?: SortOrder
    app_code?: SortOrder
    style_code?: SortOrder
    _count?: ComponentCountOrderByAggregateInput
    _avg?: ComponentAvgOrderByAggregateInput
    _max?: ComponentMaxOrderByAggregateInput
    _min?: ComponentMinOrderByAggregateInput
    _sum?: ComponentSumOrderByAggregateInput
  }

  export type ComponentScalarWhereWithAggregatesInput = {
    AND?: ComponentScalarWhereWithAggregatesInput | ComponentScalarWhereWithAggregatesInput[]
    OR?: ComponentScalarWhereWithAggregatesInput[]
    NOT?: ComponentScalarWhereWithAggregatesInput | ComponentScalarWhereWithAggregatesInput[]
    comp_id?: IntWithAggregatesFilter<"Component"> | number
    comp_name?: StringWithAggregatesFilter<"Component"> | string
    comp_category?: IntNullableWithAggregatesFilter<"Component"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"Component"> | Date | string
    app_code?: StringWithAggregatesFilter<"Component"> | string
    style_code?: StringWithAggregatesFilter<"Component"> | string
  }

  export type PostCreateInput = {
    post_id?: bigint | number
    title: string
    markdown_content: string
    created_at?: Date | string
    images?: PostImagesCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    post_id?: bigint | number
    title: string
    markdown_content: string
    created_at?: Date | string
    images?: PostImagesUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    post_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    markdown_content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: PostImagesUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    post_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    markdown_content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: PostImagesUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    post_id?: bigint | number
    title: string
    markdown_content: string
    created_at?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    post_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    markdown_content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    post_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    markdown_content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostImagesCreateInput = {
    id?: bigint | number
    image_url: string
    storage_file_path: string
    alt_text?: string | null
    file_name?: string | null
    mime_type?: string | null
    size_kb?: number | null
    created_at?: Date | string
    post: PostCreateNestedOneWithoutImagesInput
  }

  export type PostImagesUncheckedCreateInput = {
    id?: bigint | number
    post_id: bigint | number
    image_url: string
    storage_file_path: string
    alt_text?: string | null
    file_name?: string | null
    mime_type?: string | null
    size_kb?: number | null
    created_at?: Date | string
  }

  export type PostImagesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    image_url?: StringFieldUpdateOperationsInput | string
    storage_file_path?: StringFieldUpdateOperationsInput | string
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    mime_type?: NullableStringFieldUpdateOperationsInput | string | null
    size_kb?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutImagesNestedInput
  }

  export type PostImagesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    post_id?: BigIntFieldUpdateOperationsInput | bigint | number
    image_url?: StringFieldUpdateOperationsInput | string
    storage_file_path?: StringFieldUpdateOperationsInput | string
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    mime_type?: NullableStringFieldUpdateOperationsInput | string | null
    size_kb?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostImagesCreateManyInput = {
    id?: bigint | number
    post_id: bigint | number
    image_url: string
    storage_file_path: string
    alt_text?: string | null
    file_name?: string | null
    mime_type?: string | null
    size_kb?: number | null
    created_at?: Date | string
  }

  export type PostImagesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    image_url?: StringFieldUpdateOperationsInput | string
    storage_file_path?: StringFieldUpdateOperationsInput | string
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    mime_type?: NullableStringFieldUpdateOperationsInput | string | null
    size_kb?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostImagesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    post_id?: BigIntFieldUpdateOperationsInput | bigint | number
    image_url?: StringFieldUpdateOperationsInput | string
    storage_file_path?: StringFieldUpdateOperationsInput | string
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    mime_type?: NullableStringFieldUpdateOperationsInput | string | null
    size_kb?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComponentCategoryCreateInput = {
    category_name: string
    category_pid?: number
    created_at?: Date | string
    components?: ComponentCreateNestedManyWithoutComponent_categoryInput
  }

  export type ComponentCategoryUncheckedCreateInput = {
    category_id?: number
    category_name: string
    category_pid?: number
    created_at?: Date | string
    components?: ComponentUncheckedCreateNestedManyWithoutComponent_categoryInput
  }

  export type ComponentCategoryUpdateInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    category_pid?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    components?: ComponentUpdateManyWithoutComponent_categoryNestedInput
  }

  export type ComponentCategoryUncheckedUpdateInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    category_pid?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    components?: ComponentUncheckedUpdateManyWithoutComponent_categoryNestedInput
  }

  export type ComponentCategoryCreateManyInput = {
    category_id?: number
    category_name: string
    category_pid?: number
    created_at?: Date | string
  }

  export type ComponentCategoryUpdateManyMutationInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    category_pid?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComponentCategoryUncheckedUpdateManyInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    category_pid?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComponentCreateInput = {
    comp_name: string
    created_at?: Date | string
    app_code: string
    style_code: string
    component_category?: ComponentCategoryCreateNestedOneWithoutComponentsInput
  }

  export type ComponentUncheckedCreateInput = {
    comp_id?: number
    comp_name: string
    comp_category?: number | null
    created_at?: Date | string
    app_code: string
    style_code: string
  }

  export type ComponentUpdateInput = {
    comp_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    app_code?: StringFieldUpdateOperationsInput | string
    style_code?: StringFieldUpdateOperationsInput | string
    component_category?: ComponentCategoryUpdateOneWithoutComponentsNestedInput
  }

  export type ComponentUncheckedUpdateInput = {
    comp_id?: IntFieldUpdateOperationsInput | number
    comp_name?: StringFieldUpdateOperationsInput | string
    comp_category?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    app_code?: StringFieldUpdateOperationsInput | string
    style_code?: StringFieldUpdateOperationsInput | string
  }

  export type ComponentCreateManyInput = {
    comp_id?: number
    comp_name: string
    comp_category?: number | null
    created_at?: Date | string
    app_code: string
    style_code: string
  }

  export type ComponentUpdateManyMutationInput = {
    comp_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    app_code?: StringFieldUpdateOperationsInput | string
    style_code?: StringFieldUpdateOperationsInput | string
  }

  export type ComponentUncheckedUpdateManyInput = {
    comp_id?: IntFieldUpdateOperationsInput | number
    comp_name?: StringFieldUpdateOperationsInput | string
    comp_category?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    app_code?: StringFieldUpdateOperationsInput | string
    style_code?: StringFieldUpdateOperationsInput | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PostImagesListRelationFilter = {
    every?: PostImagesWhereInput
    some?: PostImagesWhereInput
    none?: PostImagesWhereInput
  }

  export type PostImagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    post_id?: SortOrder
    title?: SortOrder
    markdown_content?: SortOrder
    created_at?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    post_id?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    post_id?: SortOrder
    title?: SortOrder
    markdown_content?: SortOrder
    created_at?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    post_id?: SortOrder
    title?: SortOrder
    markdown_content?: SortOrder
    created_at?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    post_id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostImagesCountOrderByAggregateInput = {
    id?: SortOrder
    post_id?: SortOrder
    image_url?: SortOrder
    storage_file_path?: SortOrder
    alt_text?: SortOrder
    file_name?: SortOrder
    mime_type?: SortOrder
    size_kb?: SortOrder
    created_at?: SortOrder
  }

  export type PostImagesAvgOrderByAggregateInput = {
    id?: SortOrder
    post_id?: SortOrder
    size_kb?: SortOrder
  }

  export type PostImagesMaxOrderByAggregateInput = {
    id?: SortOrder
    post_id?: SortOrder
    image_url?: SortOrder
    storage_file_path?: SortOrder
    alt_text?: SortOrder
    file_name?: SortOrder
    mime_type?: SortOrder
    size_kb?: SortOrder
    created_at?: SortOrder
  }

  export type PostImagesMinOrderByAggregateInput = {
    id?: SortOrder
    post_id?: SortOrder
    image_url?: SortOrder
    storage_file_path?: SortOrder
    alt_text?: SortOrder
    file_name?: SortOrder
    mime_type?: SortOrder
    size_kb?: SortOrder
    created_at?: SortOrder
  }

  export type PostImagesSumOrderByAggregateInput = {
    id?: SortOrder
    post_id?: SortOrder
    size_kb?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type ComponentListRelationFilter = {
    every?: ComponentWhereInput
    some?: ComponentWhereInput
    none?: ComponentWhereInput
  }

  export type ComponentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComponentCategoryCountOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    category_pid?: SortOrder
    created_at?: SortOrder
  }

  export type ComponentCategoryAvgOrderByAggregateInput = {
    category_id?: SortOrder
    category_pid?: SortOrder
  }

  export type ComponentCategoryMaxOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    category_pid?: SortOrder
    created_at?: SortOrder
  }

  export type ComponentCategoryMinOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    category_pid?: SortOrder
    created_at?: SortOrder
  }

  export type ComponentCategorySumOrderByAggregateInput = {
    category_id?: SortOrder
    category_pid?: SortOrder
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

  export type ComponentCategoryNullableScalarRelationFilter = {
    is?: ComponentCategoryWhereInput | null
    isNot?: ComponentCategoryWhereInput | null
  }

  export type ComponentCountOrderByAggregateInput = {
    comp_id?: SortOrder
    comp_name?: SortOrder
    comp_category?: SortOrder
    created_at?: SortOrder
    app_code?: SortOrder
    style_code?: SortOrder
  }

  export type ComponentAvgOrderByAggregateInput = {
    comp_id?: SortOrder
    comp_category?: SortOrder
  }

  export type ComponentMaxOrderByAggregateInput = {
    comp_id?: SortOrder
    comp_name?: SortOrder
    comp_category?: SortOrder
    created_at?: SortOrder
    app_code?: SortOrder
    style_code?: SortOrder
  }

  export type ComponentMinOrderByAggregateInput = {
    comp_id?: SortOrder
    comp_name?: SortOrder
    comp_category?: SortOrder
    created_at?: SortOrder
    app_code?: SortOrder
    style_code?: SortOrder
  }

  export type ComponentSumOrderByAggregateInput = {
    comp_id?: SortOrder
    comp_category?: SortOrder
  }

  export type PostImagesCreateNestedManyWithoutPostInput = {
    create?: XOR<PostImagesCreateWithoutPostInput, PostImagesUncheckedCreateWithoutPostInput> | PostImagesCreateWithoutPostInput[] | PostImagesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostImagesCreateOrConnectWithoutPostInput | PostImagesCreateOrConnectWithoutPostInput[]
    createMany?: PostImagesCreateManyPostInputEnvelope
    connect?: PostImagesWhereUniqueInput | PostImagesWhereUniqueInput[]
  }

  export type PostImagesUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostImagesCreateWithoutPostInput, PostImagesUncheckedCreateWithoutPostInput> | PostImagesCreateWithoutPostInput[] | PostImagesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostImagesCreateOrConnectWithoutPostInput | PostImagesCreateOrConnectWithoutPostInput[]
    createMany?: PostImagesCreateManyPostInputEnvelope
    connect?: PostImagesWhereUniqueInput | PostImagesWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PostImagesUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostImagesCreateWithoutPostInput, PostImagesUncheckedCreateWithoutPostInput> | PostImagesCreateWithoutPostInput[] | PostImagesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostImagesCreateOrConnectWithoutPostInput | PostImagesCreateOrConnectWithoutPostInput[]
    upsert?: PostImagesUpsertWithWhereUniqueWithoutPostInput | PostImagesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostImagesCreateManyPostInputEnvelope
    set?: PostImagesWhereUniqueInput | PostImagesWhereUniqueInput[]
    disconnect?: PostImagesWhereUniqueInput | PostImagesWhereUniqueInput[]
    delete?: PostImagesWhereUniqueInput | PostImagesWhereUniqueInput[]
    connect?: PostImagesWhereUniqueInput | PostImagesWhereUniqueInput[]
    update?: PostImagesUpdateWithWhereUniqueWithoutPostInput | PostImagesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostImagesUpdateManyWithWhereWithoutPostInput | PostImagesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostImagesScalarWhereInput | PostImagesScalarWhereInput[]
  }

  export type PostImagesUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostImagesCreateWithoutPostInput, PostImagesUncheckedCreateWithoutPostInput> | PostImagesCreateWithoutPostInput[] | PostImagesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostImagesCreateOrConnectWithoutPostInput | PostImagesCreateOrConnectWithoutPostInput[]
    upsert?: PostImagesUpsertWithWhereUniqueWithoutPostInput | PostImagesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostImagesCreateManyPostInputEnvelope
    set?: PostImagesWhereUniqueInput | PostImagesWhereUniqueInput[]
    disconnect?: PostImagesWhereUniqueInput | PostImagesWhereUniqueInput[]
    delete?: PostImagesWhereUniqueInput | PostImagesWhereUniqueInput[]
    connect?: PostImagesWhereUniqueInput | PostImagesWhereUniqueInput[]
    update?: PostImagesUpdateWithWhereUniqueWithoutPostInput | PostImagesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostImagesUpdateManyWithWhereWithoutPostInput | PostImagesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostImagesScalarWhereInput | PostImagesScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutImagesInput = {
    create?: XOR<PostCreateWithoutImagesInput, PostUncheckedCreateWithoutImagesInput>
    connectOrCreate?: PostCreateOrConnectWithoutImagesInput
    connect?: PostWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PostUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<PostCreateWithoutImagesInput, PostUncheckedCreateWithoutImagesInput>
    connectOrCreate?: PostCreateOrConnectWithoutImagesInput
    upsert?: PostUpsertWithoutImagesInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutImagesInput, PostUpdateWithoutImagesInput>, PostUncheckedUpdateWithoutImagesInput>
  }

  export type ComponentCreateNestedManyWithoutComponent_categoryInput = {
    create?: XOR<ComponentCreateWithoutComponent_categoryInput, ComponentUncheckedCreateWithoutComponent_categoryInput> | ComponentCreateWithoutComponent_categoryInput[] | ComponentUncheckedCreateWithoutComponent_categoryInput[]
    connectOrCreate?: ComponentCreateOrConnectWithoutComponent_categoryInput | ComponentCreateOrConnectWithoutComponent_categoryInput[]
    createMany?: ComponentCreateManyComponent_categoryInputEnvelope
    connect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
  }

  export type ComponentUncheckedCreateNestedManyWithoutComponent_categoryInput = {
    create?: XOR<ComponentCreateWithoutComponent_categoryInput, ComponentUncheckedCreateWithoutComponent_categoryInput> | ComponentCreateWithoutComponent_categoryInput[] | ComponentUncheckedCreateWithoutComponent_categoryInput[]
    connectOrCreate?: ComponentCreateOrConnectWithoutComponent_categoryInput | ComponentCreateOrConnectWithoutComponent_categoryInput[]
    createMany?: ComponentCreateManyComponent_categoryInputEnvelope
    connect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ComponentUpdateManyWithoutComponent_categoryNestedInput = {
    create?: XOR<ComponentCreateWithoutComponent_categoryInput, ComponentUncheckedCreateWithoutComponent_categoryInput> | ComponentCreateWithoutComponent_categoryInput[] | ComponentUncheckedCreateWithoutComponent_categoryInput[]
    connectOrCreate?: ComponentCreateOrConnectWithoutComponent_categoryInput | ComponentCreateOrConnectWithoutComponent_categoryInput[]
    upsert?: ComponentUpsertWithWhereUniqueWithoutComponent_categoryInput | ComponentUpsertWithWhereUniqueWithoutComponent_categoryInput[]
    createMany?: ComponentCreateManyComponent_categoryInputEnvelope
    set?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    disconnect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    delete?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    connect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    update?: ComponentUpdateWithWhereUniqueWithoutComponent_categoryInput | ComponentUpdateWithWhereUniqueWithoutComponent_categoryInput[]
    updateMany?: ComponentUpdateManyWithWhereWithoutComponent_categoryInput | ComponentUpdateManyWithWhereWithoutComponent_categoryInput[]
    deleteMany?: ComponentScalarWhereInput | ComponentScalarWhereInput[]
  }

  export type ComponentUncheckedUpdateManyWithoutComponent_categoryNestedInput = {
    create?: XOR<ComponentCreateWithoutComponent_categoryInput, ComponentUncheckedCreateWithoutComponent_categoryInput> | ComponentCreateWithoutComponent_categoryInput[] | ComponentUncheckedCreateWithoutComponent_categoryInput[]
    connectOrCreate?: ComponentCreateOrConnectWithoutComponent_categoryInput | ComponentCreateOrConnectWithoutComponent_categoryInput[]
    upsert?: ComponentUpsertWithWhereUniqueWithoutComponent_categoryInput | ComponentUpsertWithWhereUniqueWithoutComponent_categoryInput[]
    createMany?: ComponentCreateManyComponent_categoryInputEnvelope
    set?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    disconnect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    delete?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    connect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    update?: ComponentUpdateWithWhereUniqueWithoutComponent_categoryInput | ComponentUpdateWithWhereUniqueWithoutComponent_categoryInput[]
    updateMany?: ComponentUpdateManyWithWhereWithoutComponent_categoryInput | ComponentUpdateManyWithWhereWithoutComponent_categoryInput[]
    deleteMany?: ComponentScalarWhereInput | ComponentScalarWhereInput[]
  }

  export type ComponentCategoryCreateNestedOneWithoutComponentsInput = {
    create?: XOR<ComponentCategoryCreateWithoutComponentsInput, ComponentCategoryUncheckedCreateWithoutComponentsInput>
    connectOrCreate?: ComponentCategoryCreateOrConnectWithoutComponentsInput
    connect?: ComponentCategoryWhereUniqueInput
  }

  export type ComponentCategoryUpdateOneWithoutComponentsNestedInput = {
    create?: XOR<ComponentCategoryCreateWithoutComponentsInput, ComponentCategoryUncheckedCreateWithoutComponentsInput>
    connectOrCreate?: ComponentCategoryCreateOrConnectWithoutComponentsInput
    upsert?: ComponentCategoryUpsertWithoutComponentsInput
    disconnect?: ComponentCategoryWhereInput | boolean
    delete?: ComponentCategoryWhereInput | boolean
    connect?: ComponentCategoryWhereUniqueInput
    update?: XOR<XOR<ComponentCategoryUpdateToOneWithWhereWithoutComponentsInput, ComponentCategoryUpdateWithoutComponentsInput>, ComponentCategoryUncheckedUpdateWithoutComponentsInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type PostImagesCreateWithoutPostInput = {
    id?: bigint | number
    image_url: string
    storage_file_path: string
    alt_text?: string | null
    file_name?: string | null
    mime_type?: string | null
    size_kb?: number | null
    created_at?: Date | string
  }

  export type PostImagesUncheckedCreateWithoutPostInput = {
    id?: bigint | number
    image_url: string
    storage_file_path: string
    alt_text?: string | null
    file_name?: string | null
    mime_type?: string | null
    size_kb?: number | null
    created_at?: Date | string
  }

  export type PostImagesCreateOrConnectWithoutPostInput = {
    where: PostImagesWhereUniqueInput
    create: XOR<PostImagesCreateWithoutPostInput, PostImagesUncheckedCreateWithoutPostInput>
  }

  export type PostImagesCreateManyPostInputEnvelope = {
    data: PostImagesCreateManyPostInput | PostImagesCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostImagesUpsertWithWhereUniqueWithoutPostInput = {
    where: PostImagesWhereUniqueInput
    update: XOR<PostImagesUpdateWithoutPostInput, PostImagesUncheckedUpdateWithoutPostInput>
    create: XOR<PostImagesCreateWithoutPostInput, PostImagesUncheckedCreateWithoutPostInput>
  }

  export type PostImagesUpdateWithWhereUniqueWithoutPostInput = {
    where: PostImagesWhereUniqueInput
    data: XOR<PostImagesUpdateWithoutPostInput, PostImagesUncheckedUpdateWithoutPostInput>
  }

  export type PostImagesUpdateManyWithWhereWithoutPostInput = {
    where: PostImagesScalarWhereInput
    data: XOR<PostImagesUpdateManyMutationInput, PostImagesUncheckedUpdateManyWithoutPostInput>
  }

  export type PostImagesScalarWhereInput = {
    AND?: PostImagesScalarWhereInput | PostImagesScalarWhereInput[]
    OR?: PostImagesScalarWhereInput[]
    NOT?: PostImagesScalarWhereInput | PostImagesScalarWhereInput[]
    id?: BigIntFilter<"PostImages"> | bigint | number
    post_id?: BigIntFilter<"PostImages"> | bigint | number
    image_url?: StringFilter<"PostImages"> | string
    storage_file_path?: StringFilter<"PostImages"> | string
    alt_text?: StringNullableFilter<"PostImages"> | string | null
    file_name?: StringNullableFilter<"PostImages"> | string | null
    mime_type?: StringNullableFilter<"PostImages"> | string | null
    size_kb?: IntNullableFilter<"PostImages"> | number | null
    created_at?: DateTimeFilter<"PostImages"> | Date | string
  }

  export type PostCreateWithoutImagesInput = {
    post_id?: bigint | number
    title: string
    markdown_content: string
    created_at?: Date | string
  }

  export type PostUncheckedCreateWithoutImagesInput = {
    post_id?: bigint | number
    title: string
    markdown_content: string
    created_at?: Date | string
  }

  export type PostCreateOrConnectWithoutImagesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutImagesInput, PostUncheckedCreateWithoutImagesInput>
  }

  export type PostUpsertWithoutImagesInput = {
    update: XOR<PostUpdateWithoutImagesInput, PostUncheckedUpdateWithoutImagesInput>
    create: XOR<PostCreateWithoutImagesInput, PostUncheckedCreateWithoutImagesInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutImagesInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutImagesInput, PostUncheckedUpdateWithoutImagesInput>
  }

  export type PostUpdateWithoutImagesInput = {
    post_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    markdown_content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateWithoutImagesInput = {
    post_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    markdown_content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComponentCreateWithoutComponent_categoryInput = {
    comp_name: string
    created_at?: Date | string
    app_code: string
    style_code: string
  }

  export type ComponentUncheckedCreateWithoutComponent_categoryInput = {
    comp_id?: number
    comp_name: string
    created_at?: Date | string
    app_code: string
    style_code: string
  }

  export type ComponentCreateOrConnectWithoutComponent_categoryInput = {
    where: ComponentWhereUniqueInput
    create: XOR<ComponentCreateWithoutComponent_categoryInput, ComponentUncheckedCreateWithoutComponent_categoryInput>
  }

  export type ComponentCreateManyComponent_categoryInputEnvelope = {
    data: ComponentCreateManyComponent_categoryInput | ComponentCreateManyComponent_categoryInput[]
    skipDuplicates?: boolean
  }

  export type ComponentUpsertWithWhereUniqueWithoutComponent_categoryInput = {
    where: ComponentWhereUniqueInput
    update: XOR<ComponentUpdateWithoutComponent_categoryInput, ComponentUncheckedUpdateWithoutComponent_categoryInput>
    create: XOR<ComponentCreateWithoutComponent_categoryInput, ComponentUncheckedCreateWithoutComponent_categoryInput>
  }

  export type ComponentUpdateWithWhereUniqueWithoutComponent_categoryInput = {
    where: ComponentWhereUniqueInput
    data: XOR<ComponentUpdateWithoutComponent_categoryInput, ComponentUncheckedUpdateWithoutComponent_categoryInput>
  }

  export type ComponentUpdateManyWithWhereWithoutComponent_categoryInput = {
    where: ComponentScalarWhereInput
    data: XOR<ComponentUpdateManyMutationInput, ComponentUncheckedUpdateManyWithoutComponent_categoryInput>
  }

  export type ComponentScalarWhereInput = {
    AND?: ComponentScalarWhereInput | ComponentScalarWhereInput[]
    OR?: ComponentScalarWhereInput[]
    NOT?: ComponentScalarWhereInput | ComponentScalarWhereInput[]
    comp_id?: IntFilter<"Component"> | number
    comp_name?: StringFilter<"Component"> | string
    comp_category?: IntNullableFilter<"Component"> | number | null
    created_at?: DateTimeFilter<"Component"> | Date | string
    app_code?: StringFilter<"Component"> | string
    style_code?: StringFilter<"Component"> | string
  }

  export type ComponentCategoryCreateWithoutComponentsInput = {
    category_name: string
    category_pid?: number
    created_at?: Date | string
  }

  export type ComponentCategoryUncheckedCreateWithoutComponentsInput = {
    category_id?: number
    category_name: string
    category_pid?: number
    created_at?: Date | string
  }

  export type ComponentCategoryCreateOrConnectWithoutComponentsInput = {
    where: ComponentCategoryWhereUniqueInput
    create: XOR<ComponentCategoryCreateWithoutComponentsInput, ComponentCategoryUncheckedCreateWithoutComponentsInput>
  }

  export type ComponentCategoryUpsertWithoutComponentsInput = {
    update: XOR<ComponentCategoryUpdateWithoutComponentsInput, ComponentCategoryUncheckedUpdateWithoutComponentsInput>
    create: XOR<ComponentCategoryCreateWithoutComponentsInput, ComponentCategoryUncheckedCreateWithoutComponentsInput>
    where?: ComponentCategoryWhereInput
  }

  export type ComponentCategoryUpdateToOneWithWhereWithoutComponentsInput = {
    where?: ComponentCategoryWhereInput
    data: XOR<ComponentCategoryUpdateWithoutComponentsInput, ComponentCategoryUncheckedUpdateWithoutComponentsInput>
  }

  export type ComponentCategoryUpdateWithoutComponentsInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    category_pid?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComponentCategoryUncheckedUpdateWithoutComponentsInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    category_pid?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostImagesCreateManyPostInput = {
    id?: bigint | number
    image_url: string
    storage_file_path: string
    alt_text?: string | null
    file_name?: string | null
    mime_type?: string | null
    size_kb?: number | null
    created_at?: Date | string
  }

  export type PostImagesUpdateWithoutPostInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    image_url?: StringFieldUpdateOperationsInput | string
    storage_file_path?: StringFieldUpdateOperationsInput | string
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    mime_type?: NullableStringFieldUpdateOperationsInput | string | null
    size_kb?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostImagesUncheckedUpdateWithoutPostInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    image_url?: StringFieldUpdateOperationsInput | string
    storage_file_path?: StringFieldUpdateOperationsInput | string
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    mime_type?: NullableStringFieldUpdateOperationsInput | string | null
    size_kb?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostImagesUncheckedUpdateManyWithoutPostInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    image_url?: StringFieldUpdateOperationsInput | string
    storage_file_path?: StringFieldUpdateOperationsInput | string
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    mime_type?: NullableStringFieldUpdateOperationsInput | string | null
    size_kb?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComponentCreateManyComponent_categoryInput = {
    comp_id?: number
    comp_name: string
    created_at?: Date | string
    app_code: string
    style_code: string
  }

  export type ComponentUpdateWithoutComponent_categoryInput = {
    comp_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    app_code?: StringFieldUpdateOperationsInput | string
    style_code?: StringFieldUpdateOperationsInput | string
  }

  export type ComponentUncheckedUpdateWithoutComponent_categoryInput = {
    comp_id?: IntFieldUpdateOperationsInput | number
    comp_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    app_code?: StringFieldUpdateOperationsInput | string
    style_code?: StringFieldUpdateOperationsInput | string
  }

  export type ComponentUncheckedUpdateManyWithoutComponent_categoryInput = {
    comp_id?: IntFieldUpdateOperationsInput | number
    comp_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    app_code?: StringFieldUpdateOperationsInput | string
    style_code?: StringFieldUpdateOperationsInput | string
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