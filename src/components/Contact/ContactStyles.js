import styled from 'styled-components';

export const ContactSection = styled.section`
a
  margin-top: -40px; 
  ${'' /* background-color: #0a0b10; */}
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.nopadding ? "0" : "32px 48px 0" };

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0" } ;

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 1rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--pink);
  }
`;

export const Icons = styled.div`
  display: flex;
  margin-bottom: 3rem;
  margin-top: -1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -1rem;
  input {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 3rem;
    background: linear-gradient(270deg, rgba(15,22,36,1) 0%, rgba(32,27,38,1) 8%, rgba(87,43,45,1) 88%, rgba(107,48,48,1) 100%, rgba(107,48,48,1) 100%);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    &:active,
    &:focus {
      border: 2px solid #6B3030;
      border-radius: 4px;
      outline: none;
      background:none; 
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.7;
      font-weight: 500;
    }
    &[name="name"] {
      margin-right: 2rem;
    }
  }
  textarea {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    height: 21 rem !important;
    width: 55rem;
    border:none;
    border-radius: 4px;
    background: linear-gradient(270deg, rgba(15,22,36,1) 0%, rgba(32,27,38,1) 8%, rgba(87,43,45,1) 88%, rgba(107,48,48,1) 100%, rgba(107,48,48,1) 100%);
    resize:none;
    overflow: auto;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    overflow:hidden;
    box-shadow: none;
    color: #eff7f8;
    margin-bottom: 2rem;
    &:focus,
    &:active {
      border: 2px solid #6B3030;
      border-radius: 4px;
      outline: none;
      background:none; 
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.7;
      font-weight: 500;
    }
  }
  button {
    padding: 0.8rem 2rem;
    background-color: var(--white);
    border-radius: 20px;
    font-size: 1.5rem;
    color: #ffff;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

export const Row = styled.div`
  @media only Screen and (max-width: 40em) {
    display: flex;
    flex-direction: column;
    input {
      &[name="name"] {
        margin-right: 0;
      }
    }
  }
`;