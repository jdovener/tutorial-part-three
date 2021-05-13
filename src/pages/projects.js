import React from "react"
import Layout from "../components/layout"
import TrackList from "../components/audio-player/track-list";
import screenshot from "../../static/screenshot.png"
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
            <div className="paddedDiv">
                <a href="https://jdovener.github.io/todo" target="_blank">Click here to view live page</a>
            </div>
            <div className="paddedDiv">
                <img src={screenshot} />
            </div>
            <h3>2. Starline</h3>
            <p>
                A video game I am composing the music for, 
                below are 3 of the currently available tracks.
            </p>
            <TrackList tracks={tracks}/>
        </Layout>
    )
}