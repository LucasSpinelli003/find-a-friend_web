import { useContext, useEffect, useState } from "react";
import { Context } from "../../../Context/Provider";

export function FetchDataExample() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { city } = useContext(Context);

  useEffect(() => {
    fetch(`http://localhost:3333/pets/city/${city}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, [city]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Fetched Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default FetchDataExample;
