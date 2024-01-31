import React from 'react';
import styled from 'styled-components';

type HeaderProps = {
  style?: React.CSSProperties
};

const CustomHeader = styled.h1<HeaderProps>`
  display: flex;
  flex-direction: column;
  font-size: 8vw;
  font-weight: 700;
  line-height: 1;
  row-gap: 0.25em;
  padding: 1.5em 0 1em;
  flex: ${(props) => props.style?.flex};


  @media (min-width: 1024px) {
    font-size: min(5vw, 60px);
  }

  span {
    font-size: 4.2vw;
    font-weight: 400;
    @media (min-width: 1024px) {
      font-size: min(4vw, 48px);
    }
  }
`;

export const Header = (props: HeaderProps): JSX.Element => {
  return (
    <CustomHeader {...props}>
      Masato Hori.
      <span>Profile Site</span>
    </CustomHeader>
  )
}
