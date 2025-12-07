import styled from "styled-components";
import Avatar from "./Avatar";
import UserInfo from "./UserInfo";

const Card = () => {
  return (
    <StyledCard>
          <Avatar />
          <UserInfo/>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  color: ${(props) => props.theme.color};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 8px;
  box-shadow: 5px 5px 8px #9dafca;
`;
export default Card;
