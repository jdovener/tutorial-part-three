import React from "react"
import Layout from "../components/layout"
import TrackList from "../components/audio-player/track-list";
import "../style/index.scss";

const tracks=[
    {
        name: 'Starline',
        badge: 'Title',
        author: 'Jimmy Dovener',
        duration: '3:26',
        link: 'https://soundcloud.com/starline_audio/fixed-point'
    },
    {
        name: 'Stability in Momentum',
        author: 'Jimmy Dovener',
        duration: '3:56'
    },
    {
        name: 'Fixed Point',
        author: 'Jimmy Dovener',
        duration: '4:55'
    },
    {
        name: 'Peacement',
        author: 'Jimmy Dovener',
        duration: '3:35'
    },
    {
        name: 'Companion',
        author: 'Jimmy Dovener',
        duration: '3:38'
    },
    {
        name: 'Continuum',
        badge: 'New!',
        author: 'Jimmy Dovener',
        duration: '5:46'
    },
]

export default function Project() {
    return (
        <Layout>
            <TrackList tracks={tracks}/>
        </Layout>
    )
}