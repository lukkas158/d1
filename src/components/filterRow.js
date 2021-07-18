import React from "react";
import styled from "styled-components";
import Avatar from "./avatar";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-top: 10px;
  color: #3e4157;
  font-size: 13px;
`;

const Icon = styled.div`
  display: flex;
  flex: 1;
`;

const Text = styled.span`
  display: flex;
  flex: 4;
`;

const Value = styled.div`
  display: flex;
  flex: 4;
  color: #9196ab;
`;

export default function FilterRow({ text, value, children, onClick }) {
  return (
    <Wrapper>
      <Icon>{children}</Icon>
      <Text>{text}</Text>
      <Value>
        <Avatar color="#E4E6F1" size={22} text={value} />
      </Value>
    </Wrapper>
  );
}
