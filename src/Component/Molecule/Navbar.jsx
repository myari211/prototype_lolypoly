import {useState, useEffect} from 'react';
import { Row, Col, Card, Flex, Segmented } from 'antd';
import { ShoppingCartOutlined, UserOutlined, BellOutlined } from '@ant-design/icons';

const Navbar = () => {
    const [casePopUp, setCasePopUp] = useState(false);

    return(
        <>
            <Row>
                <Col span={24}>
                    <Card style={{ width: "100%" }}>
                        <Row>
                            <Col span={24}>
                                <div className="container">
                                    <Flex justify="space-between" align="center" style={{ width: "100%"}}>
                                        <Col>
                                            {/* LolyPoly */}
                                            Brand
                                        </Col>
                                        <Col>
                                            <ul style={{ textDecoration:"none", listStyle: 'none', display: 'flex', gap: "60px"}}>
                                                <li>Home</li>
                                                <li
                                                    onMouseEnter={() => setCasePopUp(true)}
                                                    onMouseLeave={() => setCasePopUp(false)}
                                                >
                                                    Case
                                                </li>
                                                <li>Accessories</li>
                                            </ul>
                                        </Col>
                                        <Col>
                                            <ul style={{ textDecoration:"none", listStyle: 'none', display: 'flex', gap: "20px" }}>
                                                <li>
                                                    <ShoppingCartOutlined 
                                                        style={{ fontSize: "26px"}}
                                                    />
                                                </li>
                                                <li>
                                                    <BellOutlined 
                                                        style={{ fontSize: "24px"}}
                                                    />
                                                </li>
                                                <li>
                                                    <UserOutlined
                                                        style={{ fontSize: "24px"}}
                                                    />
                                                </li>
                                            </ul>
                                        </Col>
                                    </Flex>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                {casePopUp && (
                                    <Card style={{ position:"fixed", zIndex: 1000, width: "100vw"}}>
                                        <Row>
                                            <Col span={6}>
                                                <Row>
                                                    <Col span={24}>
                                                        <span>View all Case</span>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col span={6}>
                                                <Row>
                                                    <Col span={24}>
                                                        <span className="header-navbar">Category</span>
                                                    </Col>
                                                </Row>
                                                <Row className='mt-2'>
                                                    <Col span={24}>
                                                        <span>Product Category</span>
                                                    </Col>
                                                </Row>
                                                <Row className='mt-2'>
                                                    <Col span={24}>
                                                        <span>Product Category</span>
                                                    </Col>
                                                </Row>
                                                <Row className='mt-2'>
                                                    <Col span={24}>
                                                        <span>Product Category</span>
                                                    </Col>
                                                </Row>
                                                <Row className='mt-2'>
                                                    <Col span={24}>
                                                        <span>Product Category</span>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col span={6}>
                                                <Row>
                                                    <Col span={24}>
                                                        <span className="header-navbar">Other Category</span>
                                                    </Col>
                                                </Row>
                                                <Row className='mt-2'>
                                                    <Col span={24}>
                                                        <span>Product Category</span>
                                                    </Col>
                                                </Row>
                                                <Row className='mt-2'>
                                                    <Col span={24}>
                                                        <span>Product Category</span>
                                                    </Col>
                                                </Row>
                                                <Row className='mt-2'>
                                                    <Col span={24}>
                                                        <span>Product Category</span>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col span={6}>
                                                <Row>
                                                    <Col span={24}>
                                                        <span className="header-navbar">Custom Case</span>
                                                    </Col>
                                                </Row>
                                                <Row className='mt-2'>
                                                    <Col span={24}>
                                                        <span>Product Category</span>
                                                    </Col>
                                                </Row>
                                                <Row className='mt-2'>
                                                    <Col span={24}>
                                                        <span>Product Category</span>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Card>
                                )}
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default Navbar