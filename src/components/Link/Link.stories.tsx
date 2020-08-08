import React from 'react';

import { ReactComponent as GithubMark } from '../../svgs/github-mark.svg';
import Link from './Link';

export default {
    title: 'Components/Link',
};

export const DefaultExample = () => <Link href="www.google.com">Link text</Link>;

export const WithIconExample = () => (
    <Link href="www.google.com" icon={<GithubMark />}>
        Link text
    </Link>
);
