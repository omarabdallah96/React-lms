import styled from "styled-components";
export default function Input({ onChange, type, placeholder }) {
  return (
    <StyledInput onChange={onChange} type={type} placeholder={placeholder} />
  );
}

const StyledInput = styled.input`
  background: rgba(255, 255, 255);
  border:1px solid black !important;
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    color: black;
    inline: red;
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #042077;
    backdrop-filter: blur(12rem);
    border-radius: 1rem;
  }
  &::placeholder {
    color: black;
    font-weight: 100;
    font-size: rem;
  }
`;
