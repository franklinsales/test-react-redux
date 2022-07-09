import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirect = () => {
  const navigate = useNavigate();

    useEffect(() => {
        navigate("/home")

        // eslint-disable-next-line react-hooks/exhaustive-deps       
    }, [])
  
  return <></>;
};

export default Redirect;