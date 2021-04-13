import React, { useEffect, useRef, useState } from "react";
import { View, Alert} from "react-native";
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import Button from "../../components/Button";
import { sendPhoto } from "../../http/api";

const SendPhotoScreen: React.FC = () => {
  const [type, setType] = useState(Camera.Constants.Type.back);
  const camera = useRef<Camera>(null);

  const getPermissionCamera = async () => {
    const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    if (status !== 'granted') {
      Alert.alert('Для збереження фото потрібно надати доступ до камери');
    }
  };


  useEffect(() => {
    getPermissionCamera();
    (async () => {
      await Camera.requestPermissionsAsync();
    })();
  }, []);

  const sendPhotoFromCamera = async (photo: string) => {
   const response = await sendPhoto(photo)
   Alert.alert(response.data.message);
  }

  const takePhoto = async () => {
    if (camera.current) {
      const result = await camera.current.takePictureAsync({
        quality: 0.1,
        base64: true,
      });
      sendPhotoFromCamera(result.uri)
    }
  };
  

  return (
    <View style={{ padding: 30 }}>
      <Camera  type={type} style={{ height: 300,  }} ref={camera}/>
      <Button onPress={takePhoto} label="Зробити фото"/>
    </View>
  )
};

export default SendPhotoScreen;