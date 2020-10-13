import styled from 'styled-components';
import landing from '../../assets/images/landing.svg';

export const PageLanding = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 110rem;
  height: 100%;
  max-height: 68rem;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: url(${landing}) no-repeat 80% center;

  main {
    max-width: 35rem;
    h1 {
      font-size: 7.6rem;
      font-weight: 900;
      line-height: 7rem;
    }

    p {
      margin-top: 4rem;
      font-size: 2.4rem;
      line-height: 3.4rem;
    }
  }

  a {
    position: absolute;
    right: 0;
    bottom: 0; 

    width: 8rem;
    height: 8rem;

    background: #ffd666;
    border-radius: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: #96feff;
    }
  }
`;
export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  
  font-size: 2.4rem;
  line-height: 3.4rem;

  display: flex;
  flex-direction: column;

  text-align: right;
  
  strong {
    font-weight: 800;
  }
`;


