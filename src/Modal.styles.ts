import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes` {
  from {
    opacity: 0;
    transform: translate(-50%, -40%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}`;

const up = keyframes`
  /* 하단에서 */
  0% {
    transform: translateY(100%);
  }
  /* 중앙으로 위치 */
  100% {
    transform: translateY(0);
  }
`;

const getCssByLocation = (modalLocation: 'center' | 'bottom') => {
  switch (modalLocation) {
    case 'center':
      return css`
        top: 50%;
        left: 50%;
        right: auto;
        bottom: auto;
        margin-right: -50%;
        transform: translate(-50%, -50%);
        animation: ${fadeIn} 1s;
      `;
    case 'bottom':
      return css`
        bottom: 0;
        animation: ${up} 0.5s;
      `;
  }
};

export const BackDrop = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.35);
`;

export const Wrapper = styled.div<{ modalLocation: 'center' | 'bottom' }>`
  position: fixed;
  ${(props) => {
    return css`
      ${getCssByLocation(props.modalLocation)}
    `;
  }}
`;
