import styled from "styled-components";


export const AddCardWrapper = styled.div(  {
    display: "inline-flex",
    gap: 10,
    maxWidth: "250px",
    padding: "20px 0",
    
})
export const Input = styled.input(({theme})=> ({
    borderRadius: theme.rounding.sm,
    padding: "8px 15px",
    border: "none",
    maxWidth: "100%",
    backgroundColor: theme.colors.lightGray,
    ":focus":{
        outline: "1px solid gray" 
    }

}))