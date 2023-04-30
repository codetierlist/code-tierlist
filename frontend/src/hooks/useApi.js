import axios from "axios";
import { userContext } from "../contexts/userContext";
import { useState, useEffect, useContext} from 'preact/hooks';
import { setAuthToken } from "../utils/setAuthToken";

const backendUri = 'http://localhost:3000';

function f(endpoint, payload) {
  if (payload.method.toLowerCase() === 'get') {
    return axios.get(backendUri + endpoint, payload);
  }
  if (payload.method.toLowerCase() === 'post') {
    return axios.post(backendUri + endpoint, payload);
  }
}

export default function useAuthApi(endpoint, payload) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [user,setUser] = useContext(userContext);

  useEffect(() => {
    f(endpoint, payload)
    .then(res => {
      setData(() => res.data);
      setLoading(() => false);
      setError(() => null);
      console.log("FUCCCC1");
    })
      .catch(err => {
        console.log("FUCCCC2");
        if (err.response.status === 401)
        {
          axios.post(backendUri + '/auth/login', { refreshToken: localStorage.getItem('refresh_token') })
          .then(res => {
            console.log("FUCCCC4");
            setAuthToken(res.data);    
            axios.get(backendUri + '/auth/profile')
            .then(res => {
              console.log("FUCCCC5");
               setUser(res.data);
            });

            return f(endpoint, payload)
            .then(res => {
              setData(() => res.data);
              setLoading(() => false);
              setError(() => null);
            })
          })
          .catch(err => {
            setLoading(false);
            setError(err);
          });
        } else {
          setLoading(false);
          setError(err);
        }
      });
  }, []);
  
  return [loading, data, error];
}