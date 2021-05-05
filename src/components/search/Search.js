import React from 'react'
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import { AutoCompleteComponent } from "@syncfusion/ej2-react-dropdowns";


import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function Search() {
    
    
    
    const cityData = [
        "Oslo",
        "Bergen",
        "Stavanger",
        "Sandes",
        "Lofoten",
        "Ås",
        "Fjorden",
        "Rogeland",
        "Sandegjord",
        "ålesund",
      ];

    return (
        <div className="SearchHolder ">
            
        <Container className="SearchHolderInner">
            <Row>
            <Col>
            <AutoCompleteComponent
                id="atcelement"
                dataSource={cityData}
                placeholder="City"
              />
            </Col>
            <Col>
            <AutoCompleteComponent className="Guest-Holder"
                 placeholder="Number of guests"
                id="atcelement"
                type="Number"
              />
            </Col>
            </Row>
            <Row>
            <Col>
            <DateRangePickerComponent placeholder="Enter Date Range" />
            </Col>
            </Row>
            <Row>
            <Col>
            <Button className="Search__SearchButtonnrtwo " variant="outline">    
                    Search Holidayz     
        </Button>
        </Col>
            </Row>
        </Container>
      
        </div>
    )
}
