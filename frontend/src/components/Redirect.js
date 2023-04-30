import { route } from 'preact-router';
import { useEffect } from 'preact/hooks';

export const Redirect = (props) => {
  useEffect(() => {
    route(props.to, true);
  }, []);

  return null;
}
