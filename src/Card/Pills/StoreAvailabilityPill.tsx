import React from 'react';

interface StoreAvailabilityPillProps {
    isOnline: boolean;
    isPickup: boolean;
    isOpen: boolean;
}

const StoreAvailabilityPill = ({isOnline, isPickup, isOpen}: StoreAvailabilityPillProps) => {
    return (
        <div
            className={`flex flex-row items-center w-full space-x-1 ${isOpen ? '' : ''}`}
        >
            {isOnline && <div className="border border-white rounded-full px-2 py-1 text-white text-xs">Online</div>}
            {isPickup && <div className="border border-white rounded-full px-2 py-1 text-white text-xs">Pickup</div>}
</div>
);
};

export default StoreAvailabilityPill;