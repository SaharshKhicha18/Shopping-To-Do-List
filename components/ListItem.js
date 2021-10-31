import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({item, deleteItem}) => {
  return (
    <TouchableOpacity>
      <View style={styles.listItemView}>
        <Text>
          {item.text}
        </Text>
        <View>
          <Icon 
            name = "remove"
            size = {20}
            color = "firebrick"
            onPress = {() => deleteItem(item.id)}
          />
        </View>
      </View>
    </TouchableOpacity>
      
  );
};

const styles = StyleSheet.create({
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft:wp('1%'),
    height: hp('5%'),
    backgroundColor: 'pink',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    padding: 15,
    borderColor: '#eee',
  },
  listItemText: {
    fontSize: 18,
  },
});

export default ListItem;
