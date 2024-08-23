import React from "react";
import { Card, CardBody, Col, Row } from "react-bootstrap";
import { DASHBOARD_ARR } from "../config/Constant";

const Dashboard: React.FC = () => {
  return (
    <div className="p-3">
      <h3 className="text-center display-6 py-2">DashBoard</h3>
      <Card className='shadow py-5'>
        <CardBody>
          <Row className="" >
            {DASHBOARD_ARR.map((element, index) => {
              return (
                <Col className="py-3" md={4} key={index}>
                  <Card>
                    <CardBody>
                      <p>{element}</p>
                    </CardBody>
                  </Card>
                </Col>
              );
            })
            }
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default Dashboard;
