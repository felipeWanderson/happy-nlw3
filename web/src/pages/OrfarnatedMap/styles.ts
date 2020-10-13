import styled from 'styled-components';

export const PageMap = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;

  > a {
    position: absolute;
    right: 4rem;
    bottom: 4rem;

    width: 6.4rem;
    height: 6.4rem;
    background: #15c3d6;
    border-radius: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;

    &:hover {
      background: #17d6ed;
    }
  }
`;
export const SideBar = styled.aside`
  width: 44rem;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
  padding: 8rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 4rem;
    font-weight: 800;
    line-height: 4.2rem;
    margin-top: 6.4rem; 
  }

  p {
    line-height: 2.8rem;
    margin-top: 2.4rem;
    font-size: 1.8rem;
  }

  footer {
    display: flex;
    flex-direction: column;

    line-height: 2.4rem;

    strong {
      font-weight: 800;
      font-size: 1.8rem;
    }
    span {
      font-size: 1.8rem;
    }
  }
`;
