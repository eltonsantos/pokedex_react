import styled from 'styled-components';

export const Container = styled.div`
  background: var(--color-pokemon);
  padding: 10px 10px;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  
  .header {
    margin: 0 auto;
  }
  @media (min-width: 1180px) {
    display: block;
  }
  .left {
    color: var(--color-white);
    text-decoration: none;
    font-size: 2rem;
    font-weight: 600;
    margin-top: 100px;
  }
  .right {
    color: var(--color-white);
    float: right;
    text-decoration: none;
    line-height: 3.725;
    margin-left: 30px;
  }
  .logo {
    line-height: 3;
    margin: 0 auto;
    text-align: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  max-width: 1128px;
  margin-top: 20px;
  margin: 0 auto;
  height: 52px;
  .left,
  .right nav {
    align-items: center;
  }
  .right nav {
    height: 100%;
    button {
      background: none;
      border: 0;
      outline: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-width: 90px;
      min-height: 100%;
      color: var(--color-icons);
      cursor: pointer;
      &:hover {
        color: var(--color-white);
      }
      &.active {
        border-bottom: 2px solid var(--color-white);
      }
    }
  }
`;