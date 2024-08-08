import { useEffect, useState } from "react";

type DType<T> = {
  data: T;
};

export const useFetch = function <T>(URL: string) {
  const [data, setData] = useState<DType<T>>({} as DType<T>);
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
        const data: T = await response.json();
        if (!response.ok) throw new Error();
        setData({
          data: data,
        });
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
    data: DType<T>,
    loading: boolean,
    error: boolean
  ];
};
