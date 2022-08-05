import styled from 'styled-components';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';


export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;

`;
export const ArrowRigth = styled(AiFillCaretRight)`
   height: 60px;
  width: 20px
`

export const Modal = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const SwitchButton = styled.button`
  width: 30px;
  height: 100px;
  opacity: 0.6;
`;
export const ArrowLeft = styled(AiFillCaretLeft)`
  height: 60px;
  width: 20px
`;

