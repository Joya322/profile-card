import React from "react";
import styled from "styled-components";

const UserInfo = () => {
  return (
    <UserInfoContainer>
      <UserName>Jannat</UserName>
      <UserBio>I am a React Native developer</UserBio>
    </UserInfoContainer>
  );
};

const UserName = styled.h1`
  font-size: 30px;
  margin-bottom: 10px;
`;
const UserBio = styled.p`
  font-size: 20px;
`;

const UserInfoContainer = styled.div`
    text-align: center;
`

export default UserInfo;
