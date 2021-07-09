import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

//Formik
import { Formik } from 'formik';

//Icons
import { Octicons, Ionicons } from '@expo/vector-icons';

//styles
import { StyledButton, StyledButtonText } from '../styles/buttons'
import { Colors } from '../styles/colors'
import { StyledContainer, InnerContainer } from '../styles/containers'
import { LeftIcon, RightIcon } from '../styles/icons'
import { PageLogo } from '../styles/images'
import { StyledTextInput, StyledInputLabel, MessageBox, ExtraText, TextLink, TextLinkContent } from '../styles/texts'
import { PageTitle, SubTitle } from '../styles/titles'
import { StyledFormArea, Line, ExtraView } from '../styles/views'

const { brand, darkLight } = Colors


import { View } from 'react-native'


const Login = () => {

    //useState
    const [hidePassword, setHidePassword] = useState(true)

    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo  resizeMode="cover" source={require("../assets/img1.png")} />
                <PageTitle> Flower Crib </PageTitle>
                <SubTitle> Account Login: </SubTitle>

                <Formik
                    initialValues={{username: '', password: ''}}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                >
                    {/* Funcion que retiene los input fields */}
                    
                    {
                        ({handleChange, handleBlur, handleSubmit, values}) => (
                        <StyledFormArea>
                            <MyTextInput 
                                label="Username"
                                icon="person"
                                placeholder="luisRG123"
                                placeholderTextColor={ darkLight }
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                                keyboardType="default"
                            />


                            <MyTextInput 
                                label="Password"
                                icon="lock"
                                placeholder="********"
                                placeholderTextColor={ darkLight }
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                            <MessageBox>...</MessageBox>
                            <StyledButton>
                                <StyledButtonText>
                                    Login
                                </StyledButtonText>
                            </StyledButton>
                            <Line />
                            <ExtraView>
                                <ExtraText>Don't have an account already? </ExtraText>
                                <TextLink>
                                    <TextLinkContent>Sign Up</TextLinkContent>
                                </TextLink>
                            </ExtraView>
                        </StyledFormArea>)  
                    }
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>

            <StyledInputLabel>
                {label}
            </StyledInputLabel>

            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
                </RightIcon>
            )}
        </View>
    )
}

export default Login;