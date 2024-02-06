import { useEffect, useState } from "react";
import apiClient from "../utils/api-client";
import { CanceledError } from "axios";


export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface GenreResponse {
  count: number;
  results: Genre[];
}
const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState<string>('')  
  const [isLoading, setLoading] = useState<Boolean>(false)  
  
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<GenreResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, isLoading, error}
}

export default useGenres;