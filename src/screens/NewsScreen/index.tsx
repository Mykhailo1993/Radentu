import React, { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import MediumText from "../../components/MediumText";
import News from "../../components/News";

import { newsData } from "../../data/news.json";
import { typeNews } from "../../http/types";
import { StackScreenProps } from "@react-navigation/stack";
import { NewsParamList } from "../../../navigation/NewsStackNavigator";

import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { SAVE_THE_NEWS } from "../../reducers/newsReducer";
import { AppState } from "../../reducers";
import styles from "./style";

type PropsFromRedux = ConnectedProps<typeof connector>;

const NewsScreen: React.FC<StackScreenProps<NewsParamList> & PropsFromRedux> = ({ navigation, saveNews, news }) => {

  const openNews = (news: typeNews) => {
    navigation.navigate('NewsDetails');
    saveNews(news);
  };

  return (
    <View style={styles.container}>
      <MediumText style={styles.label}>TProger</MediumText>
      <FlatList data={newsData}
        renderItem={({ item }) => (<News uri={item.imageUri} title={item.title} time={item.time} onPress={() => openNews(item)}/>)}
        keyExtractor={({ title }) => title}/>
    </View>
  )
};



const mapStateToProps = (state: AppState) => ({
  news: state.news.news
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  saveNews: (news: typeNews) => dispatch({ news, type: SAVE_THE_NEWS }),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(NewsScreen);