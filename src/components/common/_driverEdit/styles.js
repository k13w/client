import styled from "styled-components";

export const Background = styled.div`

  background-color: #cccccc;
`;

export const Container = styled.div`
  width: 760px;
  height: 460px;
  padding: 100px;
  display: flex;
  background-color: #fff;
  -o-box-shadow: 0 1px 8px 0 rgba(0,0,0,.25);
  box-shadow: 0 1px 8px 0 rgba(0,0,0,.25);
  border-radius: 10px;
  font-size: 14px;
  overflow: hidden;
`;

export const LoginForm = styled.form`
min-width: 0;
margin: 0;
border: 0;
  button {
    margin-top: 20px;
    justify-content: center;
    text-align: center;
    background-color: #3f51b5;
    border-radius: 4px;
    color: #fff
    font-size: 16px;
    cursor: pointer;
  }
`;