import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 15px;

    @media (max-width: 500px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
    }
   `



export const Card = styled.div`
    display: inline-flex;
    align-items: center;
    border: 1px solid gray;
    padding: 10px;
    cursor: grab;
    background-color: white;
    gap: 10;

`