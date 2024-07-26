import { createContext, useEffect, useState } from "react";
import { fetchdata } from "../service/Apiservice";

export const Apicontext = createContext();

const ContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getdata = async () => {
      try {
        const response = await fetchdata();
        setData(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getdata();
  }, []);

  const api = { data, error, loading };

  return (
    <Apicontext.Provider value={api}>{props.children}</Apicontext.Provider>
  );
};

export default ContextProvider;
