import styled from "styled-components";

type TitleProps = {
  completed: boolean;
};

export const Check = styled.svg(({ theme }) => ({
  cursor: "pointer",
  minWidth: "1em",
  //   fontSize: "15px"
}));

export const Delete = styled(Check)(({ theme }) => ({
  cursor: "pointer",
  minWidth: "1em",
}));

export const CheckItem = styled.div(({ theme }) => ({
    maxWidth: "inherit",
  position: "relative",
  display: "flex",
  padding: "5px",
  borderRadius: theme.rounding.sm,
  alignItems: "start",
  justifyContent: "start",
  gap: 10,
  marginBottom: "5px",
  ":hover": {
    backgroundColor: theme.colors.glass.dimmed,
  },
}));

export const Title = styled.p<TitleProps>(({ completed }) => ({
  textDecoration: completed ? "line-through" : "none",
  opacity: completed ? "0.4" : "1",
  width: "70%",
}));
