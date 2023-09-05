import React from 'react';
import NotFoundImage from "../assets/images/404_image.png";
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
    return (
        <Container
            style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <Link to="/">
                <img
                    src={NotFoundImage}
                    alt="404 Not Found"
                    style={{
                        height: '30rem',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                />
            </Link>
        </Container>
    );
};

export default NotFoundPage;
