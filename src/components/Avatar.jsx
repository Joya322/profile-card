import React from 'react';
import styled from 'styled-components';

const Avatar = () => {
    return (
        <StyledAvatar src='./avatar.jpg'/>
    );
};

const StyledAvatar = styled.img`
    border-radius: 100%;
    /* border: 1px solid black; */
`

export default Avatar;