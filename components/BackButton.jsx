import { TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

const BackButton = () => {
    const router = useRouter();

    return (
        <TouchableOpacity 
            className="absolute top-0 left-0" // Use a little padding to make it clearly visible
            onPress={() => router.push('../home')}
        >
            <Image 
                source={require('../assets/back.png')}
                className="w-12 h-12" // Adjusted size for visibility
                resizeMode="contain"
            />
        </TouchableOpacity>
    );
}

export default BackButton;
