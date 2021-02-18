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
        url: "https://soundcloud.com/starline_audio/fixed-point"
    },
    {
        url: "https://soundcloud.com/starline_audio/peacement"
    },
    {
        url: "https://soundcloud.com/starline_audio/companion"
    },
    {
        url: "https://soundcloud.com/starline_audio/continuum"
    },
]

export default function Project() {
    return (
        <Layout>
            <h3>Starline</h3>
            <p>A video game I am composing the music for, 
                below are the currently available tracks
            </p>
            <TrackList tracks={tracks}/>
        </Layout>
    )
}