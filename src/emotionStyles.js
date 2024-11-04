// src/emotionStyles.js
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

// Reusable styles for colors
const redText = css`
  color: red;
`;

const blueText = css`
  color: blue;
  font-weight: bold;
`;

// Container style
export const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

// Title and Subtitle styles
export const titleStyle = css`
  ${redText};
  font-size: 24px;
  font-weight: bold;
`;

export const subtitleStyle = css`
  ${blueText};
  font-size: 16px;
  margin-bottom: 20px;
`;

// Base button style
const buttonBase = css`
  padding: 10px 20px;
  border: 2px solid;
  border-radius: 5px;
  font-size: 16px;
  margin: 5px;
  cursor: pointer;
  background-color: #ffff;
`;

// Specific styles for each button using Emotion's styled API
export const BlueButton = styled.button`
  ${buttonBase};
  ${blueText};
  border-color: blue;
`;

export const RedButton = styled.button`
  ${buttonBase};
  ${redText};
  border-color: red;
`;
