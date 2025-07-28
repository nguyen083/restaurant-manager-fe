import type {
  ClientRequestMethod,
  FetchResponse,
  MaybeOptionalInit,
  Middleware,
} from 'openapi-fetch'
import type { HttpMethod, MediaType, PathsWithMethod, RequiredKeysOf } from 'openapi-typescript-helpers'
import createBaseClient from 'openapi-fetch'

interface ExtraFields {
  doNotShowLoading?: boolean
}

type InitParam<Init> = RequiredKeysOf<Init> extends never
  ? [(Init & ExtraFields & { [key: string]: unknown })?]
  : [Init & ExtraFields & { [key: string]: unknown }]

  type ClientMethod<
    Paths extends Record<string, Record<HttpMethod, {}>>,
    Method extends HttpMethod,
    Media extends MediaType,
  > = <Path extends PathsWithMethod<Paths, Method>, Init extends MaybeOptionalInit<Paths[Path], Method>>(
    url: Path,
    ...init: InitParam<Init>
  ) => Promise<FetchResponse<Paths[Path][Method], Init, Media>>

interface Client<Paths extends {}, Media extends MediaType = MediaType> {
  request: ClientRequestMethod<Paths, Media>
  /** Call a GET endpoint */
  GET: ClientMethod<Paths, 'get', Media>
  /** Call a PUT endpoint */
  PUT: ClientMethod<Paths, 'put', Media>
  /** Call a POST endpoint */
  POST: ClientMethod<Paths, 'post', Media>
  /** Call a DELETE endpoint */
  DELETE: ClientMethod<Paths, 'delete', Media>
  /** Call a OPTIONS endpoint */
  OPTIONS: ClientMethod<Paths, 'options', Media>
  /** Call a HEAD endpoint */
  HEAD: ClientMethod<Paths, 'head', Media>
  /** Call a PATCH endpoint */
  PATCH: ClientMethod<Paths, 'patch', Media>
  /** Call a TRACE endpoint */
  TRACE: ClientMethod<Paths, 'trace', Media>
  /** Register middleware */
  use(...middleware: Middleware[]): void
  /** Unregister middleware */
  eject(...middleware: Middleware[]): void
}

export function createClient<Paths extends {}, Media extends MediaType = MediaType>(
  ...args: Parameters<typeof createBaseClient<Paths, Media>>
): Client<Paths, Media> {
  return createBaseClient(...args) as unknown as Client<Paths, Media>
}
