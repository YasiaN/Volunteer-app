import React from 'react'
import styled from 'styled-components/native';
import TopOfApp from '../components/TopOfApp';
import ProjectOptions from '../components/ProjectOptions'
import ProjectSearch from '../components/ProjectSearch'
import ProjectReturnedList from '../components/ProjectReturnedList';



const ProjectList = ({data}) => {
    const SafeArea = styled.SafeAreaView`
    background: #E5E5E5;
    color: #3c3c3b;
`

    const HorizontalLine = styled.View`
    border: 1px solid;
    border-color: #3c3c3b;
    margin: 0px 75px 10px 75px;
`
    return (
        <SafeArea>
            <TopOfApp />
            <ProjectSearch />
            <ProjectOptions />
            <HorizontalLine />
            <ProjectReturnedList data = {data}/>
        </SafeArea>
    )
}

export default ProjectList
