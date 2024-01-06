import React from 'react';

export default function Loading() {
    
  return (
    <div className='flex gap-2'>
    <div className="rounded-full h-2 w-2 dark:bg-primary bg-primaryDark animate-ping "></div>
    <div className="rounded-full h-2 w-2 dark:bg-primary bg-primaryDark  animate-ping"></div>
    <div className="rounded-full h-2 w-2 dark:bg-primary bg-primaryDark  animate-ping"></div>
    </div>
  );
}
