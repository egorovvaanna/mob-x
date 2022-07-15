import { Button } from "../common/Button/Button";
import styled from "styled-components";

type BottomProps = {
  visible: boolean;
};

export const CardBottomWrapper = styled.div<BottomProps>(({ visible }) => ({
  display: visible ? "block" : "none",
  alignItems: "start",
  gap: 10,
  marginTop: "10px",
  maxWidth: "200px",
}));

export const Hight = styled(Button)(({ theme }) => ({
  background: theme.colors.priority.hight,
  height: "10px",
  width: "10px",
  border: "1px solid black",
  marginRight: "5px",
  ":hover": {
    background: theme.colors.priority.hight,
  },
}));
export const Middle = styled(Hight)(({ theme }) => ({
  background: theme.colors.priority.middle,
  ":hover": {
    background: theme.colors.priority.middle,
  },
}));
export const Low = styled(Hight)(({ theme }) => ({
  background: theme.colors.priority.low,
  ":hover": {
    background: theme.colors.priority.low,
  },
}));
