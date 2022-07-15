import { ComponentProps, FC, ReactNode, forwardRef } from "react";
import { ButtonIcon, ButtonWrapper } from "./styles";

export type ButtonVariant = "prymary" | "secondary" | "default";
interface ButtonProps extends ComponentProps<"button"> {
  children?: null | ReactNode | ReactNode[];
  icon?: FC<ComponentProps<"svg">>;
  fullWidth?: boolean;
  variant?: ButtonVariant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, icon, fullWidth = false, variant = "default", ...props },
    ref
  ) => {
    return (
      <ButtonWrapper
        {...props}
        icon={!!icon}
        fullWidth={fullWidth}
        variant={variant}
        ref={ref}>
        {icon && <ButtonIcon as={icon} />}
        {children}
      </ButtonWrapper>
    );
  }
);
