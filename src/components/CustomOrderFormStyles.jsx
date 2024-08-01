import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* Center items vertically */
  height: 80vh;
`;

export const CustomOrderFormWrapper = styled.form`
  width: 400px;
  padding: 20px;
  background-color: #bbfad1;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-size: 20px;
  margin-top: 5px;
  margin-bottom: 10px;
  margin-right: 20px;
  margin-left: 20px;
  div {
    margin-bottom: 20px;
    text-align: center; /* Center align text within div */
  }
  label {
    font-weight: bold;
    font-size: 20px;
    display: block; /* Ensure label takes full width */
  }
  input,
  select {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  button {
    width: 100%;
    padding: 14px; /* Increase padding to make the button a bit bigger */
    font-size: 20px; /* Increase font size */
    background-color: #2ecc71; /* Change to green color */
    color: #fff;
    border: none;
    border-radius: 8px; /* Increase border-radius for a rounded button */
    cursor: pointer;
  }
  button:hover {
    background-color: #27ae60; /* Darker green on hover */
  }
`;
