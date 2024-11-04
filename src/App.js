// src/App.js
import React from 'react';
/** @jsxImportSource @emotion/react */
import { containerStyle, titleStyle, subtitleStyle, BlueButton, RedButton } from './emotionStyles';

function App() {
  return (
    <div css={containerStyle}>
      <h1 css={titleStyle}>Selamat datang di pelajaran CSS-in-JS</h1>
      <p css={subtitleStyle}>JayJay</p>
    <div>
      <BlueButton>Lanjut Belajar!</BlueButton>
      <RedButton>Kembali</RedButton>
    </div>
    </div>
  );
}

export default App;
