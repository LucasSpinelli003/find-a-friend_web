import { useState } from "react";

function PostDataExample() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    const request = {
      key1: "value1",
      key2: "value2",
    };

    fetch("https://api.example.com/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setResponse(data))
      .catch((error) => setError(error));
  };

  return (
    <div>
      <button onClick={handleSubmit}>Send POST Request</button>
      {error && <div>Error: {error}</div>}
      {response && (
        <div>
          <h1>Response Data</h1>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default PostDataExample;
