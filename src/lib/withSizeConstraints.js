import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Sizer = styled.div`
  width: 30vw;
  height: auto;
`;

export default (Component) => (props) => (
  <Wrapper><Sizer><Component {...props} /></Sizer></Wrapper>
);
