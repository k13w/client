import styled from 'styled-components';

export const Container = styled.div`
    display: flex;    
    background: #fff;
`;

export const Row = styled.div`
    width: 1050px;
    table {
        th {    
            padding-left: 30px;
        }
        td {
            padding: 30px;
            overflow: hidden;
        }
    }
    button {
        margin-top: 28px;
        width: 40px;
        height: 27px;
        background: #626ed4;
        font-size: 12px;
        color: white;
        border: 1px solid #626ed4;
        border-radius: 2px;
        cursor: pointer;
    }
`;

export const Header = styled.div`
    height: 30px;
    h6 {
        color: black;
        text-align: left;
        margin-left: 12px;
        margin-top: 20px;
    }
`;