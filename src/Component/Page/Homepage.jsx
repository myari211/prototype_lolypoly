import { useEffect, useState } from 'react';
import { Carousel, Col, Row, Flex, Card, Button } from 'antd';
import axios from 'axios';
import CardProduct from '../Atom/CardProduct';
import Slider from "react-slick";

const contentStyle = {
    margin: 0,
    height: '500px',
    color: '#fff',
    lineHeight: '500px',
    textAlign: 'center',
    background: '#364d79',
    width: "100%",
    borderRadius: "8px"
}

const sideBanner = {
    margin: 0,
    height: '240px',
    color: '#fff',
    lineHeight: '235px',
    textAlign: 'center',
    background: '#364d79',
    width: "100%",
    borderRadius: "8px",
}

const category = {
    margin: 0,
    height: '200px',
    color: '#fff',
    lineHeight: '20px',
    textAlign: 'end',
    background: '#364d79',
    width: "100%",
}

const banner = {
    margin: 0,
    height: '200px',
    color: '#fff',
    lineHeight: '20px',
    textAlign: 'end',
    background: '#364d79',
    width: "100%",
    paddingBottom: "20px",
}


const Homepage = () => {
    const [sliderImage, setSliderImage] = useState([]);
    const [product, setProduct] = useState([]);
    const [product6, setProduct6] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchASlider = async () => {
            const response = await axios.get('/storage/slider.json');
            setSliderImage(response.data);
            console.log(sliderImage);
        }

        fetchASlider();
    }, []);

    useEffect(() => {
        const fetchNewArrival = async () => {
            const response = await axios.get('/storage/product-front.json');
            setProduct(response.data);
        }

        fetchNewArrival();
    }, []);

    useEffect(() => {
        const fetchNewArrival = async () => {
            setLoading(true);
            const response = await axios.get('/storage/product-6.json');
            setProduct6(response.data);
        }

        fetchNewArrival();
    }, []);


    return(
        <>
            <Row className="mt-2" gutter={20}>
                <Col span={18}>
                    <Carousel arrows dotPosition="left" infinite={true}>
                        <div>
                            <h3 style={contentStyle}>Herro Banner 1</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>Herro Banner 2</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>Herro Banner 3</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>Herro Banner 4</h3>
                        </div>
                    </Carousel>
                </Col>
                <Col span={6}>
                    <Row>
                        <Col span={24}>
                            <Carousel>
                                <div>
                                    <h3 style={sideBanner}>Side Banner 2</h3>
                                </div>
                            </Carousel>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col span={24}>
                            <div>
                                <h3 style={sideBanner}>Side Banner 2</h3>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col span={24}>
                    <Flex justify="center">
                        <span className="header-1">Category</span>
                    </Flex>
                </Col>
            </Row>
            <Row className="mt-3" gutter={20}>
                <Col span={6}>
                    <Card style={category}>
                        <Flex align="flex-end">
                            <div style={{ marginTop: "120px"}}>
                                <span style={{ fontSize: "20px", fontWeight: 600}}>Category 1</span><br />
                                <span style={{ fontSize: "14px"}}>View Now</span>
                            </div>
                        </Flex>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card style={category}>
                        <Flex align="flex-end">
                            <div style={{ marginTop: "120px"}}>
                                <span style={{ fontSize: "20px", fontWeight: 600}}>Category 2</span><br />
                                <span style={{ fontSize: "14px"}}>View Now</span>
                            </div>
                        </Flex>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card style={category}>
                        <Flex align="flex-end">
                            <div style={{ marginTop: "120px"}}>
                                <span style={{ fontSize: "20px", fontWeight: 600}}>Category 3</span><br />
                                <span style={{ fontSize: "14px"}}>View Now</span>
                            </div>
                        </Flex>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card style={category}>
                        <Flex align="flex-end">
                            <div style={{ marginTop: "120px"}}>
                                <span style={{ fontSize: "20px", fontWeight: 600}}>Category 4</span><br />
                                <span style={{ fontSize: "14px"}}>View Now</span>
                            </div>
                        </Flex>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col span={24}>
                    <Flex justify="center">
                        <span className="header-1">New Arrival</span>
                    </Flex>
                </Col>
            </Row>
            <Row className="mt-3" gutter={20}>
                {/* <Slider {...settings}> */}
                    {product.map((item, index) => (
                        <Col span={4} className="mb-2">
                            <CardProduct 
                                key={index}
                                hot={item.hot}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                                description={item.description}
                            />
                        </Col>
                    ))}
                {/* </Slider> */}
            </Row>
            <Row>
                <Col span={24}>
                    <Card style={banner}>
                        <Flex align="flex-end" justify="flex-end">
                            <div style={{ marginTop: "110px"}}>
                                <span style={{ fontSize: "20px", fontWeight: 600}}>Ads Horizontal</span><br />
                                <Button>View Now</Button>
                                {/* <span style={{ fontSize: "14px"}}>View Now</span> */}
                            </div>
                        </Flex>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col span={24}>
                    <Flex justify="center">
                        <span className="header-1">Best Seller</span>
                    </Flex>
                </Col>
            </Row>
            <Row className="mt-3" gutter={20}>
                {/* <Slider {...settings}> */}
                    {product6.map((item, index) => (
                        <Col span={4} className="mb-2">
                            <CardProduct 
                                key={index}
                                hot={item.hot}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                                description={item.description}
                            />
                        </Col>
                    ))}
                {/* </Slider> */}
            </Row>
            <Row className="mt-4">
                <Col span={24}>
                    <Flex justify="center">
                        <span className="header-1">Custom Case</span>
                    </Flex>
                </Col>
            </Row>
            <Row className="mt-3" gutter={20}>
                {/* <Slider {...settings}> */}
                    {product6.map((item, index) => (
                        <Col span={4} className="mb-2">
                            <CardProduct 
                                key={index}
                                hot={item.hot}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                                description={item.description}
                            />
                        </Col>
                    ))}
                {/* </Slider> */}
            </Row>
            <Row className="mt-4">
                <Col span={24}>
                    <Flex justify="center">
                        <span className="header-1">Phone Case</span>
                    </Flex>
                </Col>
            </Row>
            <Row className="mt-3" gutter={20}>
                {/* <Slider {...settings}> */}
                    {product6.map((item, index) => (
                        <Col span={4} className="mb-2">
                            <CardProduct 
                                key={index}
                                hot={item.hot}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                                description={item.description}
                            />
                        </Col>
                    ))}
                {/* </Slider> */}
            </Row>
            <Row>
                <Col span={24}>
                    <Card style={banner}>
                        <Flex align="flex-end" justify="flex-end">
                            <div style={{ marginTop: "110px"}}>
                                <span style={{ fontSize: "20px", fontWeight: 600}}>Ads Horizontal</span><br />
                                <Button>View Now</Button>
                                {/* <span style={{ fontSize: "14px"}}>View Now</span> */}
                            </div>
                        </Flex>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col span={24}>
                    <Flex justify="center">
                        <span className="header-1">Charger</span>
                    </Flex>
                </Col>
            </Row>
            <Row className="mt-3" gutter={20}>
                {/* <Slider {...settings}> */}
                    {product6.map((item, index) => (
                        <Col span={4} className="mb-2">
                            <CardProduct 
                                key={index}
                                hot={item.hot}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                                description={item.description}
                            />
                        </Col>
                    ))}
                {/* </Slider> */}
            </Row>
            <Row className="mt-4">
                <Col span={24}>
                    <Flex justify="center">
                        <span className="header-1">Audio</span>
                    </Flex>
                </Col>
            </Row>
            <Row className="mt-3" gutter={20}>
                {/* <Slider {...settings}> */}
                    {product6.map((item, index) => (
                        <Col span={4} className="mb-2">
                            <CardProduct 
                                key={index}
                                hot={item.hot}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                                description={item.description}
                            />
                        </Col>
                    ))}
                {/* </Slider> */}
            </Row>
            <Row className="mt-4">
                <Col span={24}>
                    <Flex justify="center">
                        <span className="header-1">Cable</span>
                    </Flex>
                </Col>
            </Row>
            <Row className="mt-3" gutter={20}>
                {/* <Slider {...settings}> */}
                    {product6.map((item, index) => (
                        <Col span={4} className="mb-2">
                            <CardProduct 
                                key={index}
                                hot={item.hot}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                                description={item.description}
                            />
                        </Col>
                    ))}
                {/* </Slider> */}
            </Row>
        </>
    )
}

export default Homepage;