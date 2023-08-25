export type RequestConfig = {
  method: "get" | "post" | "put" | "delete";
  url: string;
  data?: any;
};

export type UseAxiosResponse<T> = {
  data: T | null;
  error: Error | null;
  loading: boolean;
};
