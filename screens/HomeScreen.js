import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, SafeAreaView, ScrollView, FlatList} from 'react-native';
import Article from "../components/Article";
import axios from "axios";



const HomeScreen = () => {
    const [articles, setArticles] = useState([]);
    const getNews = () => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=9bcfea2155ff42fc8c1885e4290f1fdb',{
        params: {
            category: "technology"
        }
    })
        .then((response) => {
            console.log(response.data.articles);
            setArticles(response.data.articles);

    })
            .catch(function(error) {
            console.log(error);
        })
            .then(function () {
            }
    )};
    useEffect(() =>{
            getNews();
        },[]);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={articles} renderItem={
                ({item}) => <Article
                    urlToImage = {item.urlToImage}
                    title = {item.title}
                    description = {item.description}
                    author = {item.author}
                    publishedAt = {item.publishedAt}
                    sourceName = {item.source.name}
                    />}
                      keyExtractor={(item) => item.title}
            />
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{

    }
})
