import styled from 'styled-components/native';

import { Colors } from './colors'
const { primary, brand } = Colors

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${brand};
    justify-content: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;
`;

export const StyledButtonText = styled.Text`
    color: ${primary};
    font-size: 16px;
    text-align: center;
`;