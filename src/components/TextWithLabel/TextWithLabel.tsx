import React from 'react';
import styled from 'styled-components/macro';

const Component = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`;

const Heading = styled.p<{ labelSize: SizeType }>`
    ${props => (props.labelSize === 'large' ? props.theme.typography.largeLabel : props.theme.typography.smallLabel)}
`;

const Content = styled.p<{ contentSize: SizeType }>`
    ${props => (props.contentSize === 'large' ? props.theme.typography.largeLabel : props.theme.typography.smallLabel)}
`;

type SizeType = 'small' | 'large';

interface TextWithLabelProps {
    label: string;
    content: string;
    labelSize?: SizeType;
    contentSize?: SizeType;
    className?: string;
}

const TextWithLabel: React.FunctionComponent<TextWithLabelProps> = ({
    label,
    content,
    labelSize = 'large',
    contentSize = 'small',
    className,
}) => {
    return (
        <Component className={className}>
            <Heading labelSize={labelSize}>{label}</Heading>
            <Content contentSize={contentSize}>{content}</Content>
        </Component>
    );
};

export default TextWithLabel;
