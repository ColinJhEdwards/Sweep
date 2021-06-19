import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <h2>Sweep &copy; 2021</h2>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  min-height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #c07d00;

  h2 {
    margin: 0rem;
  }
`;

export default Footer;
