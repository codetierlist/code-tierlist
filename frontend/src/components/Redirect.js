import { route } from 'preact-router';
import { useEffect } from 'preact/hooks';

export const Redirect = () => {
  useEffect(() => {
    route(this.props.to, true);
  }, []);

  return null;
}
