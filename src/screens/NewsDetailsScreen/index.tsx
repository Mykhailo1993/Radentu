import React, { useEffect } from "react";
import { View } from "react-native";
import MediumText from "../../components/MediumText";
import { AppState } from "../../reducers"
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { typeNews } from "../../http/types";
import { SAVE_THE_NEWS } from "../../reducers/newsReducer";
import Avatar from "../../components/Avatar";
import { Entypo, Feather, FontAwesome } from '@expo/vector-icons';

type PropsFromRedux = ConnectedProps<typeof connector>;

const NewsDetailsScreen:React.FC<PropsFromRedux> = ({ news, clearNews }) => {

  return (
  <>
     <Avatar uri={news?.imageUri} style={{width: '100%', borderRadius: 0,}}/>
     <View style={{ height: 40, backgroundColor: 'gray', width:'100%'}}/>
     <View style={{ paddingVertical: 20, flexDirection: 'row', alignItems:'center', justifyContent:'space-between', borderBottomWidth: 1, borderBottomColor: 'gray' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: 200 }}>
          <Entypo name="facebook-with-circle" size={40} />
          <Entypo name="twitter" size={40}/>
          <FontAwesome name="comment" size={35}/>
          <Entypo name="instagram-with-circle" size={35}/>
        </View>
        <View style={{ flexDirection: 'row', alignItems:'center'}}>
          <Feather 
            name="eye" 
            size={25}/>
            <MediumText style={{marginHorizontal: 5 }}>{news.views}</MediumText>
        </View>
     </View>
     <MediumText style={{paddingHorizontal: 20, fontSize: 20, marginVertical: 10}}>{news.title}</MediumText>
     <MediumText style={{paddingHorizontal: 20, fontSize: 18}}>{news.content}</MediumText>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
    news: state.news.news
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  clearNews: (news: typeNews) => dispatch({ news, type: SAVE_THE_NEWS }),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(NewsDetailsScreen);
