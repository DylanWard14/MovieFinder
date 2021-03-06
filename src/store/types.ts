import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { RootState } from './store';

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export type Genre = {
    id: number;
    name: string;
};

export type ProductionCompanyResponse = {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
};

export type ProductionCompany = {
    id: number;
    logoPath: string;
    name: string;
    originCountry: string;
};

export type ProductionCountryResponse = {
    iso_3166_1: string;
    name: string;
};

export type ProductionCountry = {
    iso: string;
    name: string;
};
