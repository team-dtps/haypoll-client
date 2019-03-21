import styled from 'styled-components';

export const Main = styled.main`
  h1 {
    font-size: 6em;
    font-weight: 200;
    text-align: center;
  }
  .container {
    margin: auto;
    width: 80%;
    height: 30%;
    background-color: transparent;
  }
  .path {
    position: relative;
    overflow: hidden;
    width: 800px;
    height: 84px;
    background-color: #c1c1c1;
    margin: auto;
  }
  .shape {
    position: absolute;
    left: 0;
    display: block;
    top: 0;
    x-transition: all 1s ease-in-out;
    animation: ani 2.5s infinite;
  }
  @keyframes ani {
    0% {
      left: 0;
    }
    50% {
      left: 600px;
    }
    100% {
      left: 0;
    }
  }
  margin-bottom: 350px;
  position: relative;
  margin-top: 100px;
  img {
    width: 300px;
  }
`;
