import styled from 'styled-components';

export const Container = styled.div`
  color: #000;
  &:hover {
    color: var(--color-white);
    text-decoration: none !important;
  }
  .busca {
    width: 300px;
    margin: 0 auto;
    margin-top: 10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  max-width: 1128px;
  color: #fff;
  text-decoration: none;
  padding-top: 40px;
  margin: 0 auto;
  height: 52px;
  .pagination {
    margin: 0 auto;
  }
  a {
    color: #ff9900;
    text-decoration: none;
  }
  .card {
    text-align: center;
    color: #333;
    &:hover {
      color: #ff9900;
      text-decoration: none !important;
    }
  }

  .card-block {
    color: #fff !important;
  }

  .left,
  .right nav {
    display: flex;
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