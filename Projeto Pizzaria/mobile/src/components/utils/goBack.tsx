import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation();


export default function handleGoBack() {
    navigation.goBack();
}