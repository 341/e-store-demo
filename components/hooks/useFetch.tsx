import {useState, useEffect, useContext} from "react";
import {api} from "@/components/utils/api";
import {AuthContext} from "@/components/contexts/AuthContext";

export enum MethodType {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

const useAxiosFetch = (url: string, methodType: MethodType, autoLoad: boolean = true) => {

  const authContext = useContext(AuthContext);
  const {token, setLoading: setPageLoad} = authContext;

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  const fetchData = async () => {
    setPageLoad(true);
    try {
      const response = await api.request({
        method: methodType, url,
        headers: {
          "Authorization": `Bearer ${token}`,
        }
      });
      const respond = JSON.parse(response.data);
      setData(respond);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
      setPageLoad(false);
    }
  };

  useEffect(() => {
    if(token && autoLoad) {
      fetchData();
    }
  }, [url, token, autoLoad, methodType]);

  return {data, loading, error, fetchData};
};

export default useAxiosFetch;
