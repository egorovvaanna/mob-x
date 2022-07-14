import { FC } from "react";
import { ReactComponent as Logo } from "./../../../utils/logo.svg";
import { HeaderWrapper, LogoWrapper } from "./styles";

export const Header: FC = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo />
        MobX TS
      </LogoWrapper>
    </HeaderWrapper>
  );
};
