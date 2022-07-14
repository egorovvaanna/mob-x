import styled from "styled-components";

export const LogoWrapper = styled.div(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  fontSize: "30px",
  fontWeight: "600",
  color: theme.colors.white,
  gap: 15,
}));

export const HeaderWrapper = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.glass.regular,
  textAlign: "start",
  padding: "10px 20px",
}));
