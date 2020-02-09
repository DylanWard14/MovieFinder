import React from 'react';

import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import CenterLayout from '../../layouts/CenterLayout/CenterLayout';
import TwoColumnLayout from '../../layouts/TwoColumnLayout/TwoColumnLayout';
import MoviePoster from '../../components/MoviePoster/MoviePoster';

const HomePage: React.FunctionComponent = props => {
    return (
        <BackgroundImage imageURLExtension="/4iJfYYoQzZcONB9hNzg0J0wWyPH.jpg">
            <CenterLayout>
                <TwoColumnLayout>
                    <MoviePoster imageURLExtension="/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg" />
                    <p>This is also a test</p>
                </TwoColumnLayout>
            </CenterLayout>
        </BackgroundImage>
    );
};

export default HomePage;
