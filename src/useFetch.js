import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw new Error("got some error, plz check");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((e) => {
          if (e.name === "AbortError") {
            console.log("fetch Aborted");
          } else {
            setIsPending(false);
            setError(e.message);
          }
        });
    }, 0);
    return () => abortCont.abort();
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
