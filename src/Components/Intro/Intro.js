import React from 'react'
import styled from 'styled-components';
import oceanVid from './Ocean.mp4'
const VideoDiv = styled.div`
height: 100%;
width: 100%;
float: left;
top: 0;
padding: none;
position: fixed; 

`
export default function Intro() {
    return (
        <VideoDiv>
            <video src={oceanVid} type="video/mp4" loop autoPlay/>
        </VideoDiv>
    )
}
