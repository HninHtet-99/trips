import { useEffect, useRef, useState } from "react";

function useFetch(url, _option) {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  // solving infinite loop with useRef
  let option = useRef(_option).current;

  useEffect(() => {
    console.log(option);
    let abortController = new AbortController();
    let signal = abortController.signal;

    setLoading(true);
    fetch(url, { signal })
      .then((res) => {
        //throw error
        console.log(res);
        if (!res.ok) {
          throw Error("something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
        setLoading(false);
      })
      .catch((err) => setError(err.message));

    // cleanup function
    return () => {
      abortController.abort();
    };
  }, [url, option]);

  return { data, loading, error };
}
export default useFetch;
