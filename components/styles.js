
import styled from "styled-components/native";
import {View, Image, Text, TextInput, TouchableOpacity, ScrollView } from 'react';
import  Constants  from "expo-constants";


const StatusBarHeight = Constants.statusBarHeight;

//Colors 
//https://coolors.co/34252f-f37c19-f3eae3-ecdccd-519872
// عسلي F37C19
// 34252F البني 
// الفاتح F3EAE3
export const Colors = {
    primary_1: '#F3EAE3',     // الفاتح 
    darkPrimary: '#ECDCCD',
    secondary: '#F37C19',   // عسلي
    tertiary: '#34252F',    // بني
    brandTitle: '#F37C19',  // 
    brandColor: '#34252F',
};

const { primary_1, darkPrimary, secondary, tertiary, brandTitle, brandColor } = Colors;

export const StyledContainer = styled.ScrollView`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 30}px;
    background-color: ${primary_1};
`;


export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;

`; 

export const PageLogo = styled.Image`
    width: 200px;
    height: 200px;

`;

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center; 
    font-weight: bold;
    color: ${brandTitle};
    padding: 10px;
`;

export const SubTitle = styled.Text`
    text-align: left; 
    font-size: 18px;
    margin: 15px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${tertiary};
`;

export const StyledFormArea = styled.View`
    flex: 1;
    width: 90%;
    margin-bottom:20px;
    padding-bottom:20px;
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${darkPrimary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    border: 0px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
    color: ${tertiary}; 
    font-size: 13px;
    text-align: left; 
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 32px;
    position: absolute;
    z-index: 1;         
`;
export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 32px;
    position: absolute;
    z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${secondary};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;

    ${(props) => props.google == true && `
        background-color: ${tertiary};
        flex-direction: row;
        justify-content: center;
    `}
`;

export const ButtonText = styled.Text`
    color: ${tertiary};
    font-size: 16px;
    ${(props) => props.google == true && `
        padding-horizontal: 12px
        color: ${secondary};
    `}
`;

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
    color: ${(props) => (props.type == 'SUCCESS' ? 'green' : 'red')};
`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${darkPrimary};
    margin-vertical: 10px;
`;

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    margin-bottom: 20px;
`;

export const ExtraText = styled.Text`
    justify-content: center;
    align-content: center;
    color: ${tertiary};
    font-size: 15px;
    
`;

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;

`;

export const TextLinkContent = styled.Text`
    color: ${brandTitle};
    font-size: 15px;
`;

export const accountReviewView = styled.View`
    marginTop:10,
    
`;