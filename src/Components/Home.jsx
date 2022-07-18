import React, { useState } from 'react';
import ProductTable from './ProductTable';
import Searchbar from './Searchbar';

const Home = ({ itemList, updateCart }) => {
    const [filterSearch, setFilterSearch] = useState("");
    const [filterList, setFilterList] = useState(itemList);

    const updateTable = (searchKey) => {
        setFilterSearch(searchKey);
      if (searchKey) {
        setFilterList(
          itemList.filter((item) =>
            item.model.toLowerCase().includes(searchKey.toLowerCase())
          )
        );
        console.log(filterList);
      } else {
        setFilterList(itemList);
      }
    };

    return ( 
        <div>
            <Searchbar updateTable={updateTable} searchWord={filterSearch} />
            <ProductTable itemList={filterList} updateCart={updateCart}/>
        </div>
     );
}

export default Home;