import { useState, useEffect } from "react";
import { axiosInstance } from "../api";

const promiseWrapper = (promise) => {
  let status = "pending";
  let result;

  const s = promise.then(
    (value) => {
      status = "success";
      result = value;
    },
    (error) => {
      status = "error";
      result = error;
    }
  );

  return () => {
    switch (status) {
      case "pending":
        throw s;
      case "success":
        return result;
      case "error":
        throw result;
      default:
        throw new Error("Unknown status");
    }
  };
};

function useFetch(url) {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    if (!url) return;

    const getData = async () => {
      const promise = axiosInstance.get(url).then((response) => response.data);
      setResource(promiseWrapper(promise));
    };

    getData();
  }, [url]);

  return resource;
}

export default useFetch;
