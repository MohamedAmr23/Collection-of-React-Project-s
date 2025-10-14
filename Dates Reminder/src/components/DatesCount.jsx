import React from 'react'
import { Row, Col } from 'react-bootstrap'

const DatesCount = ({person}) => {
    return (
        <Row className="justify-content-center mb-3">
            <Col sm="8" className="">
                لديك {person.length} مواعيد
            </Col>
        </Row>
    )
}

export default DatesCount