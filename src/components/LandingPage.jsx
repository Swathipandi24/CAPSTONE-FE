import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const LandingPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  animation: ${fadeInAnimation} 2s ease;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const LandingPage = () => {
  return (
    <LandingPageWrapper style={{ backgroundImage: `url(https://img.freepik.com/free-vector/pink-watercolor-banner_41066-1945.jpg?w=1380&t=st=1726351754~exp=1726352354~hmac=171e6e17d3b0147cd6281c6e224b6763aff152b84fd90b5ddf30ff6c8bceb2c7)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Container>
        <Row>
          <Col lg={6}>
            <img
              src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDdnMGN2cnJvcWhkZ2dhcTFlM2dqZ2JhcnY2d3R2amJzd3kzYmQ2eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/w8j2t9Rc28TSLavmt0/giphy.webp"
              alt="CleanEase"
              style={{
                borderRadius: '10px', 
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
                backgroundColor: '#AED6F1 ', 
                maxWidth: '100%', 
              }}
            />

          </Col>
          <Col lg={6}>
            <ContentWrapper style={{ color: "#2471A3", backgroundColor: '#FEFEFE' }}>
              <h1 className="display-4">CleanEase</h1>
              <h2>Your Cleanliness Partner</h2>
              <Link to="/register">
                <Button variant="primary" size="lg" style={{ color: "#F4D03F" }}>Get Started</Button>
              </Link>
            </ContentWrapper>
          </Col>
        </Row>
      </Container>
    </LandingPageWrapper>
  );
};

export default LandingPage;