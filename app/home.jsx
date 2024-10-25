import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomTabNavigator from '../components/BottomTabNavigator';
import Header from '../components/Header';
import { categories } from '../data/categories';
import CategoryBox from '../components/CategoryBox';
import { products } from '../data/products';
import ProductHomeItem from '../components/ProductHomeItem';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState()
  const [keyword, setKeyword] = useState()
  const [selectedProducts, setSelectedProducts] = useState(products)

  useEffect(() => {
    if(selectedCategory){
      const updatedSelectedProducts = products.filter((product) =>
      product?.category === selectedCategory )
      setSelectedProducts(updatedSelectedProducts)
  } else if(selectedCategory && keyword){
    const updatedSelectedProducts = products.filter((product) =>
    product?.category === selectedCategory && product?.title?.
    toLowerCase().includes(keyword?.toLowerCase()))
    setSelectedProducts(updatedSelectedProducts)
  } else if(!selectedCategory && keyword) {
    const updatedSelectedProducts = products.filter((product) =>
    product?.title?.toLowerCase().includes(keyword?.toLowerCase()))
    setSelectedProducts(updatedSelectedProducts)
  } else if(!keyword && !selectedCategory){
    setSelectedProducts(products)
  }
}, [selectedCategory, keyword])


  const renderCategoryItem = ({ item }) => {
    return (
      <CategoryBox 
      onPress={() => setSelectedCategory(item?.id)}
      isSelected= {item.id === selectedCategory}
      title={item?.title} 
      image={item?.image}/>
    );
  };

  const renderProductHomeItem = ({ item, index }) => {
    return (
      <View className="flex-1 mx-1 mb-2"> 
        <ProductHomeItem {...item} />
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-none">
        <Header 
        showSearch={true}
        title="Find All You Need"
        onSearchKeyword={setKeyword}
        keyword={keyword}
         />
      </View>
      <View className="flex-1">
        <FlatList 
          showsHorizontalScrollIndicator={false}
          horizontal
          className="py-4" 
          data={categories} 
          renderItem={renderCategoryItem} 
          keyExtractor={(item, index) => String(item.id || index)}
        />
        <FlatList
          data={selectedProducts}
          renderItem={renderProductHomeItem}
          keyExtractor={(item) => String(item.id)}
          numColumns={2} // Two columns
          contentContainerStyle={{ paddingBottom: 20 }} // Optional padding at the bottom
        />
        <Text className="text-lg">Welcome to Home!</Text>
      </View>
      <BottomTabNavigator />
    </SafeAreaView>
  );
};

export default Home;
