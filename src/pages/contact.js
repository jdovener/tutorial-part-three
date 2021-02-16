import React from "react"
import ReactPlayer from "react-player"
import Layout from "../components/layout"

export default function Contact() {
  return (
    <Layout>
      <p>
        Email:<br></br>
        <a href="mailto:jdovener16@gmail.com">jdovener16@gmail.com</a>
      </p>
      <br></br>
      <p>
        Telephone:<br></br>
        07581018140
      </p>
      <div>
      <ReactPlayer
        url="https://soundcloud.com/starline_audio/stability-in-momentum"
        width="50"
        height="180"
      />
      </div>
      <br></br>
      <div>
      <ReactPlayer
        url="https://soundcloud.com/starline_audio/peacement"
        width="50"
        height="180"
      />
      </div>
    </Layout>
  )
}