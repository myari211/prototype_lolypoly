import { Row, Col, Card, Flex, Segmented } from 'antd';
import { ShoppingCartOutlined, UserOutlined, BellOutlined } from '@ant-design/icons';

const Navbar = () => {
    return(
        <>
            <Row>
                <Col span={24}>
                    <Card style={{ width: "100%" }}>
                        <Row>
                            <Flex justify="space-between" align="center" style={{ width: "100%"}}>
                                <Col>
                                    LolyPoly
                                </Col>
                                <Col>
                                    <ul style={{ textDecoration:"none", listStyle: 'none', display: 'flex', gap: "60px"}}>
                                        <li>Home</li>
                                        <li>Case</li>
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
                        </Row>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default Navbar