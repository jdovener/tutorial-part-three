import React from "react";
import Layout from "../components/layout";
import "../style/index.scss";

export default function Home() {
  return (
    <Layout>
      <h1>Welcome to JeemDev</h1>
      <p>
        Web Development Portfolio
      </p>
      <br></br>
      <p>
      Welcome to my new website! 
      <br></br>
      <br></br>
      I've been experimenting with deploying 
      static websites to Github Pages using Github Actions as a 
      deployment pipeline.
      <br></br>
      <br></br>
      Please view the Projects page to view my recent work.
      <br></br>
      <br></br>
      Much more to come!
      </p>
    </Layout>
  )
};