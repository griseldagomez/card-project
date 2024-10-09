import React from 'react';

interface LayoutPropTypes {
    children: React.ReactElement;
}

export function Layout({ children }: LayoutPropTypes) {
    return (
        <>
            <h1>Header</h1>
            {children}
            <h3>Footer</h3>
        </>
    );
}
