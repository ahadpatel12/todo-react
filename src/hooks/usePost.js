import { useState, useCallback } from 'react';
import axiosConfig from "../axios/axiosConfig"

export default function usePost(url) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const makeRequest = useCallback(async (requestData) => {
    setIsLoading(true);
    setError(null);
    try {

      var res = await axiosConfig.post(url, requestData)

      console.log("Respone from url", res)
      setData(res.data);
      // const json = await response.json();

    } catch (err) {
      console.log("Error", err.response.data)
      setError(err.response.data);
    }
    setIsLoading(false);
  }, [url]);

  return { makeRequest, data, isLoading, error };
}