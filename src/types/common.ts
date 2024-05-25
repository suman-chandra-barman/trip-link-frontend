export type TMeta = {
  page: number;
  limit: number;
  total: number;
};

export type TSuccessResponse = {
  data: any;
  meta?: TMeta;
};

export type TGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type TGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: TGenericErrorMessage;
};
