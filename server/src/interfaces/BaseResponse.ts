export interface IResponse<T, R> {
  status: number;
  result: Array<T>;
  meta: R;
  message: string;
}
