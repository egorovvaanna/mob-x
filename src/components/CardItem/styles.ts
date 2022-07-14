import styled from "styled-components"

interface CardProps {
    priority: string
}

export const Card = styled.div<CardProps>(({theme, priority})=> ({
maxWidth: "200px",
    alignItems: "center",
    border: "1px solid gray",
    padding: "10px",
    cursor: "grab",
    backgroundColor: "white",
    gap: 10,
    wordWrap: "break-word",
    borderRadius: "5px",
    background: priority !== "none" ? theme.colors.priority[priority] : "none",
}))