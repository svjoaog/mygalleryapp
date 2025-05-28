import * as RNFS from 'react-native-fs';
import Geolocation from '@react-native-community/geolocation';

export const savePhoto = async (path: string, latitude: number, longitude: number): Promise<string> => {
    const time = new Date().toISOString();
    const fileName = path.split('/').pop() || `img_${Date.now()}.jpg`;
    const newPath = RNFS.DocumentDirectoryPath + '/' + fileName;
    await RNFS.moveFile(path, newPath);
    const photoInfo = {
        path: `file://${newPath}`,
        date: time,
        location:{
            latitude: latitude,
            longitude: longitude
        }  
    };
    const jsonName = fileName.replace(/\.(jpg|jpeg|png)$/i, '.json');
    const infoPath = `${RNFS.DocumentDirectoryPath}/${jsonName}`;
    await RNFS.writeFile(infoPath, JSON.stringify(photoInfo), 'utf8');

    return `file://${newPath}`;
}

export const listPhotos = async (): Promise<string[]> => {
    const files = await RNFS.readDir(RNFS.DocumentDirectoryPath);
    const filesMap = files.filter(file => /\.(jpg|jpeg|png)$/i.test(file.name))
                           .map(file => `file://${file.path}`);
    return filesMap;
}

export const getPhotoInfo = async(photoPath: string): Promise<string | null> => {
    const fileName = photoPath.split('/').pop();
    if (!fileName) return null;
    const jsonName = fileName.replace(/\.(jpg|jpeg|png)$/i, '.json');
    const jsonPath = `${RNFS.DocumentDirectoryPath}/${jsonName}`;
    const exists = await RNFS.exists(jsonPath);
    if (!exists) return null;
    const photoInfo = await RNFS.readFile(jsonPath, 'utf8');
    return JSON.parse(photoInfo);
}

export const getLocation = (): Promise<{latitude: number, longitude: number}> => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        resolve({ latitude, longitude });
      },
      error => {
        console.warn('Erro ao pegar localização:', error.message);
        reject(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 10000,
      }
    );
  });
};

  