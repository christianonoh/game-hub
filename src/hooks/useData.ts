import { useEffect, useState } from "react";
import apiClient from "../utils/api-client";
import { CanceledError } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];}

  interface Props {
    endpoint: string;
  }
const useData = <T>(endpoint : string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>('')  
  const [isLoading, setLoading] = useState<Boolean>(false)  

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
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
  }, []);

  return { data, isLoading, error}
}

export default useData;