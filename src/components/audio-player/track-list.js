import React from "react"
import TrackEntry from "./track-entry";
import { Container } from 'react-bootstrap';

export default function TrackList({ tracks }) {
    return (
     <Container className="track-list" fluid>
        { tracks.map((track) => {
            return (
                <TrackEntry 
                    url={ track.url }
                />
            )
        }) }
      </Container>
    )
}