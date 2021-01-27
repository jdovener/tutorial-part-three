import React from "react"
import { Row, Col } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';


export default function TrackEntry({ name, author, duration, badge, link }) {
    return (
        <Row className="track-entry">
            <Col xs={6}>
                { name }
                { badge && <Badge pill variant="success">{ badge }</Badge> }
            </Col>
            <Col xs={4}>{ author}</Col>
            <Col xs={1}>{ duration }</Col>
            <Col xs={1}>{ link }</Col>
        </Row>
    )
}