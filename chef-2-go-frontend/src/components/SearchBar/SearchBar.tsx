import { Button, Container, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';


    type Props = {
        onSearch: (query: string) => void
    }
const SearchBar = (props: Props) => {
        const [value, setValue] = useState('');
        const { t } = useTranslation('common');
        const search = () => {
            props.onSearch(value);
        }

        const handleonChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
            console.log(`value: ${e.target.value}`);
            
            setValue(e.target.value);
            console.log(`in value: ${value}`);
            
        }

        return (
            <Container sx={{ mb: 2 }}>
                <TextField variant="outlined" size="small" sx={{ mr: 1 }} onChange={(e) => setValue(e.target.value)}></TextField>
                <Button variant="contained" onClick={search}>Search</Button>
            </Container>
        );
    }
export default SearchBar
