import { Alert, Linking } from 'react-native';
import { Camera } from 'react-native-vision-camera';

export async function checkPermissions(): Promise<boolean> {

  const cameraPermission = await Camera.getCameraPermissionStatus();
  const locationPermission = await Camera.getLocationPermissionStatus();
  if (cameraPermission !== 'granted' || locationPermission !== 'granted') {
    return false;
  }

  return true;
}

export function showPermissionAlert() {
  Alert.alert(
    'Permissões necessárias',
    'Você precisa permitir o acesso à câmera e localização para continuar.',
    [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Abrir configurações',
        onPress: () => Linking.openSettings(),
      },
    ],
    { cancelable: true }
  );
}