
import React from 'react';
import { FlatList, View, StyleSheet} from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

export const RepositoryListContainer = ({repositories}) => {

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];


const ItemSeparator = () => <View style={styles.separator} />;

const renderItem=({item})=>{
  return <RepositoryItem item={item}/>;};


  return (
      <View>
        <FlatList
          data={repositoryNodes}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={renderItem}
          keyExtractor={item=>item.id}
        />
    </View>
  );
};



const RepositoryList=()=>{
  
  const  repositories  = useRepositories();

return <RepositoryListContainer repositories={repositories} />;

};


export default RepositoryList;