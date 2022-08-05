import styled from 'styled-components';

export const GallaryListItem = styled.li`
  flex-basis: 23%;
  list-style: none;
  margin-bottom: 10px;
  cursor: pointer;
  transition-property: transform;
  transition-duration: 300ms;
  :hover {
    transform: scale(1.07);
  }
`;
