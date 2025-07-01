// components/common/TabNavigation.js
import { Text, TouchableOpacity, View } from 'react-native';
import { tabs } from '../../data/mockData';
import { styles } from '../../styles/styles';

const TabNavigation = ({ selectedTab, setSelectedTab }) => {
  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          style={[
            styles.tab,
            selectedTab === tab.id && styles.activeTab
          ]}
          onPress={() => setSelectedTab(tab.id)}
        >
          <Text style={styles.tabIcon}>{tab.icon}</Text>
          <Text style={[
            styles.tabText,
            selectedTab === tab.id && styles.activeTabText
          ]}>
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TabNavigation;