import React from 'react'
import {View, Text, Image, FlatList, I18nManager, Platform}from 'react-native'
import { useTheme } from '@/Hooks'

import { MySlides } from './Slides'

const isAndroidRTL = I18nManager.isRTL && Platform.OS === 'android';

const WelcomeSlider = ({setActiveIndex, windowHeight, windowWidth}) => {
    const slides = MySlides()
    const { Layout, Fonts } = useTheme()

    const myFlatlistRef = React.createRef()
    const rtlSafeIndex = (i: number) => (isAndroidRTL ? slides.length - 1 - i : i);

    const renderItem = ({item}) => {
        return(
        <View style={[{flex:0.9, width:378, alignItems:'center' }]}>
            {item.image}
            <View style={[{width:357, paddingHorizontal:8}]}>
            <Text style={[Fonts.bebasNeue, {textAlign:'center', fontSize:64, marginVertical:25}]}>{item.title}</Text>
            <Text style={[Fonts.poppins, { textAlign:'center', fontSize:18}]}>{item.text}</Text>
            </View>
        </View>
        )
    }

    const handleMomentumScrollEnd = (e) => {
        const offset = e.nativeEvent.contentOffset.x;
        const newIndex = rtlSafeIndex(Math.round(offset / windowWidth));
        setActiveIndex(newIndex)
    }
    const ref = React.createRef()

    return (
        <View style={[{flex:0.9, width:378 }]}>
            <FlatList
                ref = {(list) => {list}}
                data={slides} 
                horizontal // items (slides) are stacked horizontally instead of vertically
                pagingEnabled 
                showsHorizontalScrollIndicator={false}
                bounces={false}
                style={{flex:0.9}}
                renderItem={renderItem}
                keyExtractor = {(item, index) => index.toString()}
                onMomentumScrollEnd={handleMomentumScrollEnd}
                extraData={windowWidth} // to avoid screen rotation to landscape mode bug
                // onLayout={handleLayout}
                initialNumToRender={3}
                />
        </View>
    )
}

export default WelcomeSlider