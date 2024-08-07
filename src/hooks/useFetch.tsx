import { useEffect, useState } from "react";

export const useFetch = function (URL: string) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.status_message);
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

  return [data, loading, error];
};
