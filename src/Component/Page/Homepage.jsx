import { useEffect, useState } from 'react';
import { Carousel, Col, Row, Flex } from 'antd';
import axios from 'axios';

const contentStyle = {
    margin: 0,
    height: '80vh',
    color: '#fff',
    lineHeight: '600px',
    textAlign: 'center',
    background: '#364d79',
    width: "100%",
}

const Homepage = () => {
    const [sliderImage, setSliderImage] = useState([]);

    useEffect(() => {
        const fetchASlider = async () => {
            const response = await axios.get('/storage/slider.json');
            setSliderImage(response.data);
            console.log(sliderImage);
        }

        fetchASlider();
    }, []);

    return(
        <>
            <Carousel arrows dotPosition="left" infinite={true}>
                {sliderImage.map((slider, index) => (
                    <div>
                        <img src={slider.url} style={contentStyle} />
                    </div>
                ))}
            </Carousel>
            <Row className="mt-4">
                <Col span={24}>
                    <Flex justify="center">
                        <span className="header-1">New Arrival</span>
                    </Flex>
                </Col>
            </Row>
        </>
    )
}

export default Homepage;