export interface IResponse<T, R> {
  ok: boolean;
  result?: T;
  error?: R;
}
