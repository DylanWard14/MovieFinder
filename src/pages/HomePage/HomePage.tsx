import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect, useLocation } from 'react-router-dom';
import qs from 'qs';
import { useMount } from 'react-use';

import TwoColumnLayout from '../../layouts/TwoColumnLayout/TwoColumnLayout';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import MoviePoster from '../../components/MoviePoster/MoviePoster';
import MediaDetails from '../../components/MediaDetails/MediaDetails';
import { RootState } from '../../store/store';
import { setMovie } from '../../store/Movie/actions';
import { login, getRequestToken } from '../../store/User-auth/actions';
import Page from '../Page';

const HomePage: React.FunctionComponent = props => {
    const dispatch = useDispatch();
    const location = useLocation();

    const params: { movieId?: string } = useParams();

    useMount(() => {
        const query = qs.parse(location.search, { ignoreQueryPrefix: true });
        dispatch(login(query['request_token'] as string));
    });

    React.useEffect(() => {
        if (params?.movieId) {
            dispatch(setMovie(Number(params.movieId)));
        }
    }, [params.movieId, dispatch, params]);

    const movie = useSelector((state: RootState) => state.movie.data);
    const user = useSelector((state: RootState) => state.user);

    if (!params?.movieId) {
        return <Redirect to="/11" />;
    }

    if (movie) {
        return (
            <Fragment>
                {/* TODO add a loading state while these are loading */}
                {!user.auth.data?.authorized || !user.details.data ? (
                    <button onClick={() => dispatch(getRequestToken())}>Login</button>
                ) : (
                    <p style={{ color: 'white' }}>{user.details.data.username}</p>
                )}

                <BackgroundImage imageURLExtension={movie?.backdropPath} />
                <Page>
                    <TwoColumnLayout backgroundColor={'rgba(0, 0, 0, 0.85)'}>
                        <MoviePoster imageURLExtension={movie?.posterPath} />
                        <MediaDetails
                            title={movie?.originalTitle}
                            tagLine={movie?.tagline}
                            overview={movie?.overview}
                            genres={movie?.genres}
                            productionCompanies={movie?.productionCompanies}
                            release={movie?.releaseDate}
                            runTime={movie?.runtime}
                            boxOffice={movie?.revenue}
                            averageVote={movie?.voteAverage}
                        />
                    </TwoColumnLayout>
                </Page>
            </Fragment>
        );
    }

    return null;
};

export default HomePage;
