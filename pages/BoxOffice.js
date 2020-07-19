import React from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';
import Title from '../components/Title';
import ListItem from '../components/ListItem';
import MovieName from '../components/MovieName';
import fetch from '../net/fetch';

const Container = styled.SafeAreaView`
    flex:1;
    padding: 24px;
`;

const Contents = styled.View`
    padding: 24px;
`;



const Rank = styled.Text`
    font-size: 14px;
    color: #999999;
    margin-right: 12px;
`;


function BoxOffice(props) {

    const [list,setList] = React.useState([]);
    React.useEffect(()=>{
        fetch('http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=c19a7118188e63f1f386b517dff65fa8&targetDt=20200717')
            .then(data=>{
                setList(data.boxOfficeResult.dailyBoxOfficeList)
            })
            .catch(error=>{
                alert(error.message)
            })
    },[])
    return(
        <Container>
            <Contents>
            <Title>박스오피스 </Title>
            {list.length === 0 && (
                <ActivityIndicator size={'large'}/>
            )}
            { list.map(item => (
                <ListItem key={item.movieCd} onPress={()=>{
                    props.navigation.navigate('MovieDetail',{movieCd: item.movieCd})
                }}>
                <Rank>{item.rank}</Rank>
                <MovieName>{item.movieNm}</MovieName>
            </ListItem>
            ))}
            </Contents>
        </Container>
    )
}

export default BoxOffice;