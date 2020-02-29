import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux';

import { searchRequest } from '../../store/Search/Actions';

const StyledInput = styled.input`
    width: 100%;
    background: none;
    color: white;
    border: none;
    border-bottom: 1px solid white;
    font-size: 1rem;
    height: 1.5625rem;
    position: absolute;
    bottom: 1rem;
    box-sizing: border-box;
    padding: 0 0.5rem 0.5rem;

    @media (max-width: 750px) {
        position: static;
    }
`;

const SearchBar: React.FunctionComponent = props => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (event: React.FormEvent<EventTarget>) => {
        event.preventDefault();
        dispatch(searchRequest(searchTerm));
    };
    return (
        <form onSubmit={handleSubmit}>
            <StyledInput
                type="text"
                id="search"
                name="search"
                placeholder="Search For Movie Here..."
                autoComplete="off"
                value={searchTerm}
                onChange={(event: React.FormEvent<HTMLInputElement>) => {
                    setSearchTerm(event.currentTarget.value);
                }}
            />
        </form>
    );
};

export default SearchBar;
