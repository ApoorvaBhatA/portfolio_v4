import React from 'react';
export function Card({children}: {children: React.ReactNode}) {
    return (
        <div className="relative grid gap-4 sm:grid-cols-8 p-4 rounded-lg transition hover:bg-hover/10">
            {children}
        </div>
    );
}