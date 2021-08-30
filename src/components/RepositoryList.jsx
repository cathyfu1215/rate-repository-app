

import React from 'react';
import { FlatList, View, StyleSheet} from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { Button, Menu} from 'react-native-paper';
import { Searchbar } from 'react-native-paper';




const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

export const RepositoryListContainer = ({repositories,setOrderBy,setOrderDirection,searchKeyword,setSearchKeyword}) => {

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];


const ItemSeparator = () => <View style={styles.separator} />;

const renderItem=({item})=>{
  return <RepositoryItem item={item}/>;};

//below is the sorter
const Sorter = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    
      <View
        style={{
          paddingTop: 10,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>sort repo</Button>}>

          <Menu.Item onPress={() => {
            setOrderBy('CREATED_AT');
            setOrderDirection('DESC');
          }} title="Latest repo" />

          <Menu.Item onPress={() => {
            setOrderBy('RATING_AVERAGE');
            setOrderDirection('DESC');
          }} title="Highest rated repo" />

          <Menu.Item onPress={() => {
            setOrderBy('RATING_AVERAGE');
            setOrderDirection('ASC');
          }} title="Lowest rated repo" />
        </Menu>
      </View>
    
  );
};

//below is the filter
const Filter = () => {

  const onChangeSearch = query => setSearchKeyword(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchKeyword}
    />
  );
};



//below is sorter plus filter component

const SorterAndFilter=()=>{
  return(
    <View>
    <Sorter/>
    <Filter/>
    </View>
  );
};



  return (
      <View>
        <FlatList
          data={repositoryNodes}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={renderItem}
          keyExtractor={item=>item.id}
          ListHeaderComponent={SorterAndFilter}
        />
    </View>
  );
};



const RepositoryList=({orderBy,orderDirection,searchKeyword,setOrderBy,setOrderDirection,setSearchKeyword})=>{
 
  
  const  repositories  = useRepositories({orderBy,orderDirection,searchKeyword});

return <RepositoryListContainer repositories={repositories} setOrderBy={setOrderBy} setOrderDirection={setOrderDirection} searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword}/>;

};


export default RepositoryList;