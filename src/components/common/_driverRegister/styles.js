import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: #2F2F4F;
  width: 1200px;
  height: 600px;
  margin-top: 100px;
  border-radius: 4px;
`;

export const Panel = styled.div`
  width: 1100px;
  height: 500px;  
  margin: 0 auto;
  margin-top: 50px;
  form {
    margin-top: 80px;
    input {
      color: #fff;
    }
    select {
      background: transparent;
      border: 1px solid #fff;
    }
    button {
      margin-top: 20px;
      margin-left: 850px;
      background-color: #626ed4;
      padding: 16px 28px;
      border: 0;
      border-radius: 4px;
      color: #fff;
      cursor: pointer;
    }
    .error-submit {
      margin-top: 40px;
      color: lightcoral;
      font-size: 1.2em
    }
  }
`;