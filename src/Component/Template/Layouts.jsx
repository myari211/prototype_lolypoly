import {useEffect , useState } from 'react';
import { Navigate, Outlet, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../Molecule/Navbar';
import { Row, Col } from 'antd';

const Layouts = () => {
    return (
        <>
            <Row>
                <Col span={24}>
                    <Row>
                        <Col span={24}>
                            <Navbar />
                            <Outlet style={{ marginTop: "20px !important", marginLeft: "20px !important"}} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default Layouts;