import React from 'react';

interface StoreDealPillProps {
    dealText: string | null;
    isOpen: boolean;
}

const StoreDealPill = ({dealText, isOpen}: StoreDealPillProps) => {
    return (
        <div
            className={`flex flex-row items-center w-full space-x-1 ${isOpen ? '' : 'relative bottom-10'}`}
        >
            {dealText &&
                <div className="border border-white rounded-full px-2 py-1 text-white text-xs">{dealText}</div>}
        </div>
    );
};

export default StoreDealPill;