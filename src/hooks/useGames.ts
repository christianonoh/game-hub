import React, { useEffect, useState } from 'react'
import apiClient from '../utils/api-client';
import { CanceledError } from 'axios';

export interface Game {
  id: string;
  name: string;
  background_image: string;
}
export interface Response {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController()
    apiClient
      .get<Response>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((error) => error instanceof CanceledError ? '' : setError(error.message));

      return () => controller.abort();
  }, []);

  return {games, setGames, error}
}

export default useGames
