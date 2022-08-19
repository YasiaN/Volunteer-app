import React from 'react'
import {TouchableOpacity, Text} from 'react-native'
import styled from 'styled-components/native'
import { goBack, navigateAndSimpleReset } from '@/Navigators/utils'

const GetStartedButton = () => {

    const GetStartedButton = styled.TouchableOpacity`
        backgroundColor:#EC6730;
        width:244px;
        height:42px;
        borderRadius:8px;
        display:flex;
        alignItems:center;
        justifyContent:center;
        elevation: 2;
    `

    const GetStartedText = styled.Text`
        color:white;
        lineHeight:24px;
        fontSize:18px;
        fontWeight:400;
    `

    const handlePress = () => {
        navigateAndSimpleReset('Main')
    }

    return (
        <GetStartedButton onPress={handlePress}>
            <GetStartedText>Get Started</GetStartedText>
        </GetStartedButton>
    )
}

export default GetStartedButton