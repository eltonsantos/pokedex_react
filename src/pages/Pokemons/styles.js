import styled from 'styled-components';

export const Container = styled.div`
  color: #000;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  max-width: 1128px;
  padding-top: 40px;
  margin: 0 auto;
  height: 52px;
  .pagination {
    margin: 0 auto;
  }

  .card {
    color: #ff9900;
    text-align: center;
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