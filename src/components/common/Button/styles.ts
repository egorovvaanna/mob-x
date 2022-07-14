import styled, { CSSObject } from "styled-components";
import { Theme } from "../../../styles/theme";
import { ButtonVariant } from "./Button";
import Color from 'color';

interface ButtonWrapperProps {
  icon: boolean;
  fullWidth: boolean;
  variant: ButtonVariant;
}


const getVariant = (variant:ButtonVariant, theme: Theme): CSSObject => {
    const variants : Record<ButtonVariant, CSSObject> ={
        prymary: {
            color: theme.colors.white,
            background: theme.colors.primary,

            ":hover":{
                background: Color(theme.colors.primary).darken(0.1).toString(),
            },
        },
        secondary:{
            color: theme.colors.black,
            background: theme.colors.glass.regular,

            ":hover":{
                background: theme.colors.glass.dimmed,
            },
        },
        default:{
            color: theme.colors.black,
            background: 'transparent',

            ':hover': {
                background: theme.colors.glass.dimmed,
              },
        }
    }
    return variants[variant]
}


export const ButtonWrapper = styled.button<ButtonWrapperProps>(
  ({ theme, variant, icon, fullWidth }) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: icon ? 'flex-start' : 'center',
    backgroundColor: "red",
    gap: 6,
    border: "none",
    padding: "10px",
    color: "white",
    cursor: "pointer",
    transition: "all .3s ease",
    flex: fullWidth ? 1 : undefined,
    borderRadius: theme.rounding.sm,
    ...getVariant(variant, theme)
  })
);

export const ButtonIcon = styled.svg({
  fontSize: "18px",
});
