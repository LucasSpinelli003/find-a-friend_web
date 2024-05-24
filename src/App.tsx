import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { Provider } from "./Context/Provider";

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Router />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
