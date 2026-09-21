import { View, Text, SectionList } from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';
import { CITIES } from "../data/const";

const BookScreen = () => {
  return (
    <View style={GlobalStyle.container}>

      <Text style={GlobalStyle.title}>
        Book a reservation
      </Text>

      <Text style={GlobalStyle.subtitle}>
        Here you can see the list of all of the cities you can book reservations in.
      </Text>

      <Text style={GlobalStyle.subtitle}>
        We have {CITIES.length} countries.
      </Text>

      <SectionList
        sections={CITIES}

        keyExtractor={(item, index) => item + index}

        renderSectionHeader={({ section }) => (
          <Text style={GlobalStyle.cardTitle}>
            {section.title}
          </Text>
        )}

        renderItem={({ item }) => (
          <View style={GlobalStyle.listItem}>
            <Text style={GlobalStyle.text}>
              {item}
            </Text>
          </View>
        )}

      />

    </View>
  );
};

export default BookScreen;