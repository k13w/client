import styled from "styled-components";

export const Background = styled.div`

  background-color: #83588a;
  #6f42c1
`;

export const Container = styled.div`
  display: flex;
  background: #fff;
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
      color: black;
    }
    select {
      background: transparent;
      color: white;
    }
    option {
      color: black;
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