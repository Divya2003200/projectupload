import React from "react";
import FetchData from "./components/fetchdata";
import Query from "./components/usequeryex";
import Page from "./components/paging";
import MutateEx from "./components/mutationex";
import Form from "./components/Form";
import ErrorBoundary from "./components/ErrorBoundry";
import User from "./components/User";
 
function App() {
  return (
    <> 
    <ErrorBoundary> 
      <FetchData />
      <Query />
      <Page />
      <MutateEx />
      <Form />
      <User></User>
      </ErrorBoundary>
      </>
  );
}

export default App;
