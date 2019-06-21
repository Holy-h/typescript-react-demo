import React from "react";
import styled from "styled-components";

const Container = styled.span<{ isBlue: boolean }>`
  color: ${props => (props.isBlue ? "blue" : props.theme.textColors.secondary)};
`;

interface IProps {
  count: number;
}

const Number: React.FC<IProps> = ({ count }) => {
  return (
    <>
      <Container isBlue={count > 10}>{count}</Container>
    </>
  );
};

export default Number;
