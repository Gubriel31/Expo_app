import { View, Text } from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';

const AboutUs = () => {
  return (
    <View style={GlobalStyle.container}>

      <Text style={GlobalStyle.title}>
        About Us
      </Text>

      <Text style={GlobalStyle.subtitle}>
        Get to know us
      </Text>

      <View style={GlobalStyle.card}>
        <Text style={GlobalStyle.cardTitle}>
          Who are we?
        </Text>

        <Text style={GlobalStyle.text}>
          We are a team of passionate students from Copenhagen Business School dedicated to creating a seamless booking experience for our users. Our goal is to provide a user-friendly interface that makes booking reservations easy and efficient.
        </Text>
      </View>

      <View style={GlobalStyle.card}>
        <Text style={GlobalStyle.cardTitle}>
          Our mission
        </Text>

        <Text style={GlobalStyle.text}>
          We want to make bookings simple and accessible for everyone. Our mission is to continuously improve our app based on user feedback and provide the best possible experience for our users.
        </Text>
      </View>

    </View>
  );
};

export default AboutUs;