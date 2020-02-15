import React from 'react';

import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import TwoColumnLayout from '../../layouts/TwoColumnLayout/TwoColumnLayout';
import MoviePoster from '../../components/MoviePoster/MoviePoster';

const HomePage: React.FunctionComponent = props => {
    return (
        <BackgroundImage imageURLExtension="/4iJfYYoQzZcONB9hNzg0J0wWyPH.jpg">
            <TwoColumnLayout>
                <MoviePoster imageURLExtension="/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg" />
                <div>
                    <p>This is also a test</p>
                    <p>This is also a test</p>
                </div>
            </TwoColumnLayout>
        </BackgroundImage>
    );
};

export default HomePage;
