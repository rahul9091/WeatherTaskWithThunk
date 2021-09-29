//import liraries
import React, { useState} from 'react';
import { View, Text, StyleSheet, Button,TouchableOpacity } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
// import { Icon } from 'native-base';

// create a component
const Home = (props) => {
    const [index,setIndex] = useState(0)
    const [form,setForm] = useState([]);

    const [morningTimeSlot, setMorningTimeSlot] = useState([
        {
          id: 1,
          name: '10:00 AM',
          selected: false,
        },
        {
          id: 1,
          name: '10:15 AM',
          selected: false,
        },
        {
          id: 1,
          name: '10:30 AM',
          selected: false,
        },
        {
          id: 1,
          name: '10:45 AM',
          selected: false,
        },
        {
          id: 1,
          name: '11:00 AM',
          selected: false,
        },
        {
          id: 1,
          name: '11:15 AM',
          selected: false,
        },
        {
          id: 1,
          name: '11:30 AM',
          selected: false,
        },
        {
          id: 1,
          name: '11:45 AM',
          selected: false,
        },
      ]);
      const [afternoonTimeSlot, setAfterTimeSlot] = useState([
        {
          id: 2,
          name: '12:00 PM',
          selected: false,
        },
        {
          id: 2,
          name: '12:15 PM',
          selected: false,
        },
        {
          id: 2,
          name: '12:30 PM',
          selected: false,
        },
        {
          id: 2,
          name: '12:45 PM',
          selected: false,
        },
        {
          id: 2,
          name: '1:00 PM',
          selected: false,
        },
        {
          id: 2,
          name: '1:15 PM',
          selected: false,
        },
        {
          id: 2,
          name: '1:30 PM',
          selected: false,
        },
        {
          id: 2,
          name: '1:45 PM',
          selected: false,
        },
      ]);
      const [eveningTimeSlot, setEveningTimeSlot] = useState([
        {
          id: 3,
          name: '4:00 PM',
          selected: false,
        },
        {
          id: 3,
          name: '4:15 PM',
          selected: false,
        },
        {
          id: 3,
          name: '4:30 PM',
          selected: false,
        },
        {
          id: 3,
          name: '4:45 PM',
          selected: false,
        },
        {
          id: 3,
          name: '5:00 PM',
          selected: false,
        },
        {
          id: 3,
          name: '5:15 PM',
          selected: false,
        },
        {
          id: 3,
          name: '5:30 PM',
          selected: false,
        },
        {
          id: 3,
          name: '5:45 PM',
          selected: false,
        },
      ]);
    
   
   
      const dataArray = [
        {
          title: 'Morning',
          content: morningTimeSlot,
        },
        {
          title: 'Afternoon',
          content: afternoonTimeSlot,
        },
        {
          title: 'Evening',
          content: eveningTimeSlot,
        },
      ];

      const renderHeader = (item, expanded) => {
        return (
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#fff',
              borderBottomWidth: 1,
              paddingBottom: 15,
            }}>
            <Text style={{ fontWeight: '600' }}> {item.title}</Text>
            {expanded ? null :<Text>Down</Text>}
          </View>
        );
      };
    
      const renderContent = (item,index) => {

        return (
          <View
            style={{
              flexDirection: 'row',
            //   alignItems: 'center',
              flexWrap: 'wrap',
            }}>
            {item.content.map((time, index) => (
              <View style={{ width: '25%' }}>
                <TouchableOpacity
                  style={[
                    {
                      padding: 5,
                      margin: 5,
                      borderWidth: 1,
                      borderRadius: 8,
                      borderColor: '#000000',
                    },
                    (form.isChosen && form.idChosen == time.id) ? { backgroundColor: 'blue' } : null,
                  ]}
                  onPress={() => handleTimeSlot(time, index)}
                  >
                  <Text style={{ fontSize: 16, color: '#000' }}>{time.name}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        );
      };

      const handleTimeSlot = (time,index) =>{
          setForm({ ... form , time: time.name,isChosen: !time.selected,idChosen: time.id})
          console.log(time,'time')
          console.log(form,'frim')

      } 
    
    return (
        <View style={styles.container}>
            <Accordion
                activeSections={[1]}
                expandFromBottom={true}
                sections={dataArray}
                // renderSectionTitle={renderSectionTitle}
                renderHeader={renderHeader}
                renderContent={renderContent}
                // onChange={updateSections}
            />
            <Button title="Message" onPress={() => props.navigation.navigate('Message',{form:form})} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
   
});

//make this component available to the app
export default Home;
