import styled from "styled-components";

export const Background = styled.div`

  background-color: #cccccc;
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 1100px;
  margin-top: 40px;
  height: 420px;
  background-color: #fff;
  -o-box-shadow: 0 1px 8px 0 rgba(0,0,0,.25);
  box-shadow: 0 1px 8px 0 rgba(0,0,0,.25);
  border-radius: 6px;
  font-size: 14px;
  overflow: hidden;
`;

export const ItemForm = styled.form`

padding: 40px;
min-width: 0;
margin: 0;
border: 0;
  button {
    justify-content: center;
    text-align: center;
    background-color: #3f51b5;
    border-radius: 4px;
    color: #fff
    font-size: 16px;
    cursor: pointer;
  }
`;