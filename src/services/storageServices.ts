import * as RNFS from 'react-native-fs';

export const savePhoto = async (path: string): Promise<string> => {
    const fileName = path.split('/').pop() || `img_${Date.now()}.jpg`;
    const newPath = RNFS.DocumentDirectoryPath + '/' + fileName;
    await RNFS.moveFile(path, newPath);
    return newPath;
}

export const listPhotos = async (): Promise<string[]> => {
    const files = await RNFS.readDir(RNFS.DocumentDirectoryPath);
    const filesMap = files.filter(file => /\.(jpg|jpeg|png)$/i.test(file.name))
                           .map(file => `file://${file.path}`);
    return filesMap;
}
