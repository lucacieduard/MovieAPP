import { useEffect, useState } from "react";
import { MovieType } from "../types";

export type DataType = {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
};

export const useFetch = function (URL: string) {
  const [data, setData] = useState<DataType>({} as DataType);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}${URL}`, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
        });
        const data: DataType = await response.json();
        if (!response.ok) throw new Error();
        setData(data);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return [data, loading, error] as [
    data: DataType,
    loading: boolean,
    error: boolean
  ];
};
