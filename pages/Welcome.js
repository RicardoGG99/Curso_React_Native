import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import { StyledContainer, 
         InnerContainer,
         PageTitle, 
         SubTitle, 
         StyledFormArea,
         StyledButton,
         StyledButtonText,
         Line,
         WelcomeContainer,
         WelcomeImage,
         Avatar
    } 
from '../components/styles';


const Welcome = () => {

    return (
        <StyledContainer>
            <StatusBar style="light" />
            <InnerContainer>
                
                

                <WelcomeContainer>
                    <WelcomeImage resizeMode="cover" source={require("../assets/img1.png")} />
                        <PageTitle welcome={true}> Welcome Buddy </PageTitle>
                        <SubTitle welcome={true}> Olga Simpson </SubTitle>
                        <SubTitle welcome={true}> olga123 </SubTitle>
                        <SubTitle welcome={true}> olga123@gmail.com </SubTitle>
                            <StyledFormArea>
                                <Avatar  resizeMode="cover" source={require("../assets/img1.png")} />
                                <Line />
                                <StyledButton onPress={() => {}}>
                                    <StyledButtonText>
                                        Log Out
                                    </StyledButtonText>
                                </StyledButton>
                                
                            </StyledFormArea>  
                </WelcomeContainer>
            </InnerContainer>
        </StyledContainer>
    );
};

export default Welcome;