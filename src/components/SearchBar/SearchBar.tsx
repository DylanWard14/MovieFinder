import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Manager, Reference, Popper } from 'react-popper';
import { Link } from 'react-router-dom';

import { SearchStoreState } from '../../store/Search/Types';
import useModalToggle from '../../hooks/useModalToggle';

const StyledForm = styled.form`
    width: 100%;
`;

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

const Results = styled.ul`
    width: 100%;
    background: black;
    z-index: 100;
    list-style-type: none;
    padding: 0;
    margin: 0.5rem 0;
    position: absolute;
    color: ${props => props.theme.colors.secondary};
`;

const Result = styled(Link)`
    width: 100%;
    display: inline-block;
    box-sizing: border-box;
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: inherit;
    font-size: 1.125rem;

    :hover,
    :focus {
        background: ${props => props.theme.colors.main};
        color: black;
        cursor: pointer;
    }
`;

const NoData = styled.li`
    padding: 0.5rem 1rem;
    font-size: 1.125rem;
`;

interface SearchBarProps {
    searchStore: SearchStoreState;
    handleSearchSubmit: (searchTerm: string) => void;
    className?: string;
}

const SearchBar: React.FunctionComponent<SearchBarProps> = ({ searchStore, handleSearchSubmit, className }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleSubmit = (event: React.FormEvent<EventTarget>) => {
        event.preventDefault();
        handleSearchSubmit(searchTerm);
    };

    const { ref: ModalRef, visible } = useModalToggle(true);

    return (
        <StyledForm onSubmit={handleSubmit} ref={ModalRef} className={className}>
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
                {visible && !searchStore.loading && (
                    <Popper placement="bottom">
                        {({ ref, style, placement, arrowProps }) => (
                            <StyledPopper ref={ref} style={style} data-placement={placement} tabIndex={1}>
                                <Results>
                                    {searchStore?.data?.length
                                        ? searchStore.data.map((item: any) => {
                                              return (
                                                  <li tabIndex={0} key={`${item.title}_Search_Result`}>
                                                      <Result to={`/${item.id}`}>{item.title}</Result>
                                                  </li>
                                              );
                                          })
                                        : searchStore.searchTerm && <NoData>No results found...</NoData>}
                                </Results>
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
