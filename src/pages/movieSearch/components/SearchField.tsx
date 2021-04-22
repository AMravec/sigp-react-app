import React from 'react';
import { Input } from 'antd';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';

import { setSearch, selectSearch } from '../../../redux/search/searchSlice';

const { Search } = Input;

const SearchField: React.FC = () => {
  const dispatch = useAppDispatch();
  const searchText = useAppSelector(selectSearch);

  return (<div>
    <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={(searchValue) => dispatch(setSearch(searchValue))}
    />
    <div className="mt-2">
      <p className="ml-3">Search text: {searchText}</p>
    </div>
  </div>)
};

export default SearchField;
