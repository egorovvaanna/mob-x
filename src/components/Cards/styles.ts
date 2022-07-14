import styled from 'styled-components';

export const Container = styled.div({
    display: "flex",
    justifyContent: "flex-start",
    gap: 15,
})


export const Card = styled.div({
    display: "inline-flex",
    alignItems: "center",
    border: "1px solid gray",
    padding: "10px",
    cursor: "grab",
    backgroundColor: "white",
    gap: 10,
})