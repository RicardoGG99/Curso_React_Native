import styled from 'styled-components/native';

import { darkLight } from './colors'

export const StyledFormArea = styled.View`
    width: 90%;
`; 

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${darkLight};
    margin-vertical: 10px;
`;

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;