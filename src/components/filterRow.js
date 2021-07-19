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
  font-weight: ${(props) => props.selected && "Bold"};
  cursor: pointer;
`;

const Icon = styled.div`
  display: flex;
  flex: 1;
`;

const Text = styled.span`
  display: flex;
  flex: 4;
  color: ${(props) => props.selected && "#117EFF"};
`;

const Value = styled.div`
  display: flex;
  flex: 4;
  color: ${(props) => (props.selected ? "white" : "#9196ab")};
`;

export default function FilterRow({
  text,
  value,
  children,
  selected,
  onClick,
}) {
  return (
    <Wrapper onClick={onClick} selected={selected}>
      <Icon>{children}</Icon>
      <Text selected={selected}>{text}</Text>
      <Value selected={selected}>
        <Avatar
          color={selected ? "#117EFF" : "#E4E6F1"}
          size={22}
          text={value}
        />
      </Value>
    </Wrapper>
  );
}
