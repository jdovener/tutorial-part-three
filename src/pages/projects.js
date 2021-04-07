import React from "react"
import Layout from "../components/layout"
import TrackList from "../components/audio-player/track-list";
import "../style/index.scss";

const tracks=[
    {
        url: "https://soundcloud.com/starline_audio/starline"
    },
    {
        url: "https://soundcloud.com/starline_audio/stability-in-momentum"
    },
    {
        url: "https://soundcloud.com/starline_audio/peacement"
    },
]

export default function Project() {
    return (
        <Layout>
            <h3>1. To-dos App</h3>
            <p>An organisation app created in React</p>
            <br></br>
            <a href="https://jdovener.github.io/todo" target="_blank">To-Do App</a>
            <br></br>
            <br></br>
            <br></br>
            <h3>2. Starline</h3>
            <p>A video game I am composing the music for, 
                below are 3 of the currently available tracks.
            </p>
            <TrackList tracks={tracks}/>
        </Layout>
    )
}