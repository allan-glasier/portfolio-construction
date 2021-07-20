import React from "react";
import Header from "../components/Header";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Phoenix Design</title>
      </Helmet>
      <Header />
    </>
  );
};
export default IndexPage;
