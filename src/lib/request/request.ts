const BASE_URI = 'http://localhost:8080';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

type Body = string | FormData;

type ParseType = 'text' | 'json' | 'noparse';

type Options = {
  baseUri?: string;
  parse?: ParseType;
  headers?: { [key: string]: string };
  body?: Body;
};

type BaseResponse = {
  statusCode: number;
  response: Response;
};

interface SuccessfulResponse<T> extends BaseResponse {
  data: T;
  statusCode: number;
  ok: true;
}

interface UnSuccessfulResponse<E> extends BaseResponse {
  data: E;
  statusCode: number;
  ok: false;
}

export async function request<S, E = undefined>(
  method: Method,
  url: string,
  options: Options = {}
): Promise<SuccessfulResponse<S> | UnSuccessfulResponse<E>> {
  let uri = `${options.baseUri || BASE_URI}/${url}`;

  let headers = new Headers({
    ...createContentType(options),
    ...options.headers
  });

  let { body, ...restOptions } = options;

  let config = new Request(uri, {
    ...restOptions,
    method,
    headers,
    body: createBody(body, headers)
  });

  return fetch(config).then((r) => fetchResponse(r, options.parse));
}

function createContentType(options: Options): { 'Content-Type': string } | {} {
  let header = contentTypeFromOptions(options);

  return header ? { 'Content-Type': header } : {};
}

function contentTypeFromOptions(options: Options) {
  if (options && options.headers && options.headers['Content-Type']) {
    return options.headers['Content-Type'];
  }

  if (options && options.body && options.body instanceof FormData) {
    return 'multipart/form-data';
  }

  return typeof options.body === 'object'
    ? 'application/json'
    : (options.headers && options.headers['Content-Type']) || '';
}

function createBody(body: Body | undefined, headers: Headers) {
  let contentType = headers.get('content-type');

  if (body && contentType && contentType.includes('json')) {
    return JSON.stringify(body);
  }

  if (body instanceof FormData) {
    return body;
  }

  return undefined;
}

async function fetchResponse(response: Response, parse?: ParseType) {
  let baseData = {
    statusCode: response.status,
    ok: response.ok,
    response: response.clone()
  };

  if (parse === 'text') {
    return { data: await response.text(), ...baseData };
  }

  if (parse === 'noparse') {
    return { data: response, ...baseData };
  }

  let contentType = response.headers.get('Content-Type');

  if (contentType && contentType.includes('json')) {
    return { data: await response.json(), ...baseData };
  }

  throw new TypeError('Unexpected content-type');
}
