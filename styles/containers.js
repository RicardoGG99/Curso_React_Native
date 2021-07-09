import styled from 'styled-components/native';
import constants from 'expo-constants'

import { primary } from './colors'

const StatusBarHeight = constants.statusBarHeight

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: ${primary};
`

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

// export const WelcomeContainer = styled(InnerContainer)`
//     padding: 25px;
//     padding-top: 10px;
//     justify-content: center;
// `;