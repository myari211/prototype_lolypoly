import { Row, Col, Card, Flex, Badge } from 'antd';

export const formatRupiah = (param) => {
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    });

    return formatter.format(param);
}

const CardProduct = (props) => {
    return(
        <>
        <Badge.Ribbon text={props.hot && "Promo"} color={props.hot && "red"}>
            <Card>
                <Row>
                    <Col span={24}>
                        <img src={props.image} alt="product" style={{ width: "100%"}} />
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        {/* <Flex justify="space-between" align="center"> */}
                            <span className="header-product">{props.name}</span>
                        {/* </Flex> */}
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <span>{formatRupiah(props.price)}</span>
                    </Col>
                </Row>
            </Card>
            </Badge.Ribbon>
        </>
    );
}

export default CardProduct