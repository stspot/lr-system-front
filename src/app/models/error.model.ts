export interface IHttpErrorResponse {
  headers: any;
  status: number;
  statusText: string;
  url: string;
  ok: boolean;
  name: string;
  message: string;
  error: IBackendErrorResponse;
}

export interface IBackendErrorResponse {
  httpStatus: string;
  message: string;
  errors: string[];
}
