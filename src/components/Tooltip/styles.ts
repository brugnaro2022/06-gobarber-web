import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  span {
    background: #ff9000;
    border-radius: 4px;
    color: #312e38;
    font-size: 14px;
    left: 50%;
    padding: 8px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    position: absolute;
    transform: translateX(-50%);
    visibility: hidden;
    bottom: calc(100% + 12px);
    width: 160px;
    &::before {
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      content: '';
      left: 50%;
      position: absolute;
      transform: translateX(-50%);
    }
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
