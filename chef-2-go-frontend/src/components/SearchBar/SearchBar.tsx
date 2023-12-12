import { Button, Container, TextField } from '@mui/material';
import React, { useState } from 'react';
import { setSearchTerm } from '../../store/slice/recipe-slice';
import { setSearchTerm as setChefSeachTerm } from '../../store/slice/user-slice';
import { useDispatch } from 'react-redux';

interface SearchBarProps {
    searchCategory: 'chef' | 'recipe';
}

const SearchBar = (props: SearchBarProps) => {
    const [searchInput, setSearchInput] = useState('');
    const dispatch = useDispatch();
    const searchCategory = props.searchCategory;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    const handleSearch = () => {
        if (searchCategory === 'chef') {
            dispatch(setChefSeachTerm(searchInput));
        } else if (searchCategory === 'recipe') {
            dispatch(setSearchTerm(searchInput));
        }
        // You can also perform additional actions here, like fetching data based on the search term.
    };
    return (
        <Container sx={{ mb: 2, display: 'flex', alignItems: 'center', padding: '16px' }}>
            <TextField variant="outlined" size="small" sx={{ mr: 1, flex: 1, width: '400px', fontSize: '16px' }} onChange={handleInputChange} value={searchInput} placeholder="Enter Recipe Name"></TextField>
            <Button variant="contained" sx={{ fontSize: '16px', height: '40px',backgroundColor: '#4CAF50', color: '#ffffff', '&:hover': { backgroundColor: '#45a049' }}} onClick={handleSearch}>
                Search
            </Button>
        </Container>
    );
};

export default SearchBar;
