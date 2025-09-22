import { useRouteError } from "react-router";

const Error = () => {

    const err = useRouteError();
    console.log(err);
    
    return (
    <div>
      <h3>Error code: {err.status}</h3>
      <h4>{err.data}</h4>
    </div>
  );
};

export default Error;
