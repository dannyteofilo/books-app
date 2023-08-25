import { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

type ApiResponse<T> = {
  data: T | null;
  error: AxiosError | null;
  loading: boolean;
};

const useApi = <T>(
  method: "get" | "post" | "put" | "delete",
  url: string,
  initialData: T | null = null
): ApiResponse<T> => {
  const [data, setData] = useState<T | null>(initialData);
  const [error, setError] = useState<AxiosError | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<T> = await axios({ method, url });
        setData(response.data);
        setError(null);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [method, url]);

  return { data, error, loading };
};

export default useApi;
