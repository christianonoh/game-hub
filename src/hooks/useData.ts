import { useEffect, useState } from "react";
import apiClient from "../utils/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestOptions?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setLoading] = useState<Boolean>(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestOptions,
        })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((error) => {
          if (error instanceof CanceledError) return;
          setError(error.message);
          setLoading(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, isLoading, error };
};

export default useData;
