import { View, Text, Pressable } from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={GlobalStyle.container}>

      <Text style={GlobalStyle.title}>
        Settings
      </Text>

      <Text style={GlobalStyle.subtitle}>
        Manage your preferences
      </Text>

      <View style={GlobalStyle.card}>
        <Text style={GlobalStyle.cardTitle}>
          Notifications
        </Text>

        <Text style={GlobalStyle.text}>
          Manage your notification settings.
        </Text>
      </View>

      <View style={GlobalStyle.card}>
        <Text style={GlobalStyle.cardTitle}>
          Account
        </Text>

        <Text style={GlobalStyle.text}>
          Manage your account settings.
        </Text>
      </View>

      <Pressable
        style={GlobalStyle.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={GlobalStyle.buttonText}>
          Back to Home
        </Text>
      </Pressable>

    </View>
  );
};

export default SettingsScreen;