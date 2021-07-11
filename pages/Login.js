import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

//Formik
import { Formik } from 'formik';

//Icons
import { Octicons, Ionicons } from '@expo/vector-icons';

//styles
import { SignButton, SignButtonText } from '../styles/buttons'
import { Colors } from '../styles/colors'
import { WrapContainer, InnerContainer } from '../styles/containers'
import { LeftIcon, RightIcon } from '../styles/icons'
import { PageLogo } from '../styles/images'
import { TextInput, InputLabel, MessageBox, ExtraText, TextLink, TextLinkContent } from '../styles/texts'
import { PageTitle, SubTitle } from '../styles/titles'
import { FormArea, Division, ExtraView } from '../styles/views'

const { gray, darkLight } = Colors


import { View } from 'react-native'


const Login = ({ navigation }) => {

    //useState
    const [hidePassword, setHidePassword] = useState(true)


    const pressHandler = () => {
        navigation.navigate('Register')
    }

    return (
        <WrapContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo  resizeMode="cover" source={require("../assets/wunderlist-logo.png")} />
                <PageTitle> Wunderlist </PageTitle>
                <SubTitle> Log to your Account: </SubTitle>

                
                    
                

                <Formik
                    initialValues={{username: '', password: ''}}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                >
                    {/* Funcion que retiene los input fields */}
                    
                    {
                        ({handleChange, handleBlur, handleSubmit, values}) => (
                        <FormArea>
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
                            <SignButton>
                                <SignButtonText>
                                    Sign In
                                </SignButtonText>
                            </SignButton>
                            <Division />
                            <ExtraView>
                                <ExtraText>Don't have an account already? </ExtraText>
                                <TextLink onPress={pressHandler}>
                                    <TextLinkContent>Sign Up</TextLinkContent>
                                </TextLink>
                            </ExtraView>
                        </FormArea>)  
                    }
                </Formik>
            </InnerContainer>
        </WrapContainer>
    );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={gray} />
            </LeftIcon>

            <InputLabel>
                {label}
            </InputLabel>

            <TextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
                </RightIcon>
            )}
        </View>
    )
}

export default Login;