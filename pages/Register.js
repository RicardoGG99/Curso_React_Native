import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

//Formik
import { Formik } from 'formik';

//Icons
import { Octicons, Ionicons } from '@expo/vector-icons';

import { StyledContainer, 
         InnerContainer, 
         PageLogo, 
         PageTitle, 
         SubTitle, 
         StyledFormArea,
         StyledTextInput,
         StyledInputLabel,
         LeftIcon,
         RightIcon,
         StyledButton,
         StyledButtonText,
         Colors,
         MessageBox,
         Line,
         ExtraView,
         ExtraText,
         TextLink,
         TextLinkContent
          } 
from '../components/styles';
import { View } from 'react-native'

const { brand, darkLight } = Colors;


const Register = () => {

    //useState
    const [hidePassword, setHidePassword] = useState(true)

    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo  resizeMode="cover" source={require("../assets/img1.png")} />
                <PageTitle> Flower Crib </PageTitle>
                <SubTitle> Account Register: </SubTitle>

                <Formik
                    initialValues={{username: '', email: '', password: '', confPassword: ''}}
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
                                label="Email Address"
                                icon="mail"
                                placeholder="richardg@gmail.com"
                                placeholderTextColor={ darkLight }
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
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

                            <MyTextInput 
                                label="Confirm Password"
                                icon="lock"
                                placeholder="********"
                                placeholderTextColor={ darkLight }
                                onChangeText={handleChange('confPassword')}
                                onBlur={handleBlur('confPassword')}
                                value={values.confPassword}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                            <MessageBox>...</MessageBox>
                            <StyledButton>
                                <StyledButtonText>
                                    Sign Up
                                </StyledButtonText>
                            </StyledButton>
                            <Line />
                            <ExtraView>
                                <ExtraText>Already have an account? </ExtraText>
                                <TextLink>
                                    <TextLinkContent>Sign In</TextLinkContent>
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

export default Register;