import React from "react"
import TrackEntry from "./track-entry";
import { Container, Row, Col } from 'react-bootstrap';

export default function TrackList({ tracks }) {
    return (
     <Container className="track-list" fluid>
         <Row className="track-list__label-container">
            <Col xs={6}>
                Track name
            </Col>
            <Col xs={4}>Author</Col>
            <Col xs={1}>Length</Col>
            <Col xs={1}>Link</Col>
        </Row>
        { tracks.map((track) => {
            return (
                <TrackEntry {...track} />
            )
        }) }
      </Container>
    )
}