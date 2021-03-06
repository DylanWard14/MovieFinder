import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Manager, Reference, Popper } from 'react-popper';

import useModalToggle from '../../hooks/useModalToggle';

import SearchResults from './SearchResults';

const StyledForm = styled.form`
    width: 100%;
`;

StyledForm.displayName = 'search-form';

const StyledInput = styled.input`
    width: 100%;
    background: none;
    color: white;
    border: none;
    border-bottom: 1px solid white;
    font-size: 1rem;
    height: 1.5625rem;
    box-sizing: border-box;
    padding: 0.5rem 0.5rem;
`;

const StyledPopper = styled.div`
    width: 100%;
    background: black;
    z-index: 100;
`;

interface SearchBarProps {
    searchStore: {
        loading: boolean;
        searchTerm: string;
        data?: {
            title: string;
            id: number;
        }[];
        error?: Error;
    };
    handleSearchSubmit: (searchTerm: string) => void;
    className?: string;
}

const SearchBar: React.FunctionComponent<SearchBarProps> = ({ searchStore, handleSearchSubmit, className }) => {
    const [searchTerm, setSearchTerm] = useState(searchStore.searchTerm);
    const handleSubmit = (event: React.FormEvent<EventTarget>) => {
        event.preventDefault();

        if (searchTerm) {
            handleSearchSubmit(searchTerm);
        }
    };

    const { ref: ModalRef, visible, setVisible } = useModalToggle(true);

    return (
        <StyledForm onSubmit={handleSubmit} ref={ModalRef} className={className} id="search_form">
            <Manager>
                <Reference>
                    {({ ref }) => (
                        <StyledInput
                            type="text"
                            id="search"
                            name="search"
                            placeholder="Search For Movie Here..."
                            autoComplete="off"
                            ref={ref}
                            value={searchTerm}
                            onChange={(event: React.FormEvent<HTMLInputElement>) => {
                                setSearchTerm(event.currentTarget.value);
                            }}
                        />
                    )}
                </Reference>
                {visible && (
                    <Popper placement="bottom">
                        {({ ref, style, placement, arrowProps }) => (
                            <StyledPopper ref={ref} style={style} data-placement={placement} tabIndex={1}>
                                <SearchResults searchStore={searchStore} setVisible={setVisible} />
                                <div ref={arrowProps.ref} style={arrowProps.style} />
                            </StyledPopper>
                        )}
                    </Popper>
                )}
            </Manager>
        </StyledForm>
    );
};

export default SearchBar;
