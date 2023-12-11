import { Button, Container, TextField } from '@mui/material';
import React, { useState } from 'react';
import { setSearchTerm } from '../../store/slice/recipe-slice';
import { useDispatch } from 'react-redux';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    dispatch(setSearchTerm(searchInput));
    // You can also perform additional actions here, like fetching data based on the search term.
  };
  return (
    <Container sx={{ mb: 2 }}>
      <TextField variant="outlined" size="small" sx={{ mr: 1 }} onChange={handleInputChange} value={searchInput}></TextField>
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
    </Container>
  );
};

export default SearchBar;
