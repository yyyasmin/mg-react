import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 300px; /* Set your desired width */
  height: auto; /* Allow the height to adjust based on content */
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px; /* Adjust padding as needed */
  margin: 10px;
  text-align: center;
`;



const CardImage = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 5px;
`;

const Button = styled.a`
  display: inline-block;
  color: #fff;
  background-color: #007bff;
  padding: 10px;
  text-decoration: none;
  border-radius: 20px;
  font-weight: bold;
  margin-top: 10px;
`;

const GameCard = ({ title, description, imageUrl, playUrl }) => {
  return (
    <Card>
      <CardImage src={imageUrl} alt={title} />
      <p>{title}</p>
      <p>{description}</p>
      <Button href={playUrl} target="_blank" rel="noopener noreferrer">Play Now</Button>
    </Card>
  );
};

export default GameCard;
