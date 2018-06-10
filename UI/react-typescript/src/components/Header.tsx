import * as React from 'react';

interface Props {
    title: string;
    subHeading: string;
}

export default function Header(props: Props) {
    const { title, subHeading } = props;
    return (
        <header role="banner">
            <h1>{title}</h1>
            <p>{subHeading}</p>
        </header>
    );
}