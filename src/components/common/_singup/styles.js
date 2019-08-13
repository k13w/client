import styled from "styled-components";

export const Background = styled.div`

  background-color: #cccccc;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Content = styled.div`
  padding: 90px;
  width: 680px;
  height: 540px;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #222838;
  -o-box-shadow: 0 1px 8px 0 rgba(0,0,0,.25);
  box-shadow: 0 1px 8px 0 rgba(0,0,0,.25);
  border-radius: 10px;
  font-size: 14px;
  overflow: hidden;
  p {
    margin-top: 34px;
    color: #3f51b5;
  }
`;

export const LoginForm = styled.form`
  min-width: 0;
  margin: 0;
  border: 0;
  button {
    margin-top: 18px;
    background-color: #3f51b5;
    padding: 12px 28px;
    border-radius: 4px;
    color: #fff;
    border: 0;
    font-size: 16px;
    cursor: pointer;
    margin-left: 60px;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    margin-right: 244px;
  }
  input {
    color: PaleTurquoise;
  }
`;
export const Error = styled.div`
p {
  color: lightcoral;
  font-size: 1.1em;
}
`;