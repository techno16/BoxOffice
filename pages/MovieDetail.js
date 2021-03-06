import React from 'react';
import styled from 'styled-components/native';
import axios from 'axios';
import {ActivityIndicator} from 'react-native';
import moment from 'moment';
import fetch from '../net/fetch';


const Container = styled.SafeAreaView`
    flex:1;
    padding: 24px;
`;

const Contents = styled.View`
    padding: 24px;
`;

const Title = styled.Text`
    font-size:24px;
    font-weight: bold;
    margin: 12px;
`;

const Description = styled.Text`
    font-size:18px;
    margin: 12px;
    line-height: 26px;
`;

const Back = styled.TouchableOpacity`
    height: 50px;
    padding: 12px;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 0;
`;

const BackLabel = styled.Text`
    font-size: 18px;
    color: #0000cc;

`;

const Header = styled.View`
    height: 50px;
    border-bottom-color: #e5e5e5;
    border-bottom-width: 1px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

const HeaderTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;




function MovieDetail(props){
    const[info,setInfo] = React.useState(null);

    React.useEffect(()=>{
        let url= 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=c19a7118188e63f1f386b517dff65fa8'
        url += '&movieCd=' + props.route.params.movieCd;
        fetch(url)
            .then(data=>{
                setInfo(data.movieInfoResult.movieInfo)
            })
            .catch(error=>{
                alert(error.message)
            })
        
    },[])
    return(
        <Container>
            <Header>
                <Back onPress={()=> props.navigation.goBack()}>
                    <BackLabel>back</BackLabel>
                </Back>
                <HeaderTitle>영화정보조회</HeaderTitle>
            </Header>
            <Contents>
                {info === null ? (
                    <ActivityIndicator size={'large'}/>
                ):(
                    <>
                    <Title>{info.movieNm}</Title>
                    <Description>제작년도: {info.prdtYear}년</Description>
                    <Description>개봉일: {moment(info.openDt, 'YYYYMMDD').format('YYYY년 MM월 DD일')}</Description>
                    <Description>상영시간: {info.showTm}분</Description>
                    <Description>국가: {info.nations.map(item=>item.nationNm).join(',')}</Description>
                    <Description>감독: {info.directors.map(item=>item.peopleNm).join(',')}</Description>
                    <Description>배우: {info.actors.map(item=>item.peopleNm).join(',')}</Description>
                    </>
                )}
                <Back title={'돌아가기'} onPress={() => props.navigation.goBack()}/>
                
            </Contents>
        </Container>
    )
}

export default MovieDetail;