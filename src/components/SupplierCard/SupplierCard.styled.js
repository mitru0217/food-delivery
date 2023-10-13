
import styled from '@emotion/styled'

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 400px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Image = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 2rem;
`;

export const Title = styled.h2`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const Price = styled.p`
    font-size: 16px;
    text-align: center;
`;

