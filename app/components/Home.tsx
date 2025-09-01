import React from 'react';
import { TaskList } from './TaskList';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-16 justify-center">
      <div className="absolute inset-x-0 top-48 flex justify-center -translate-y-1/2">
        <button className="rounded-lg bg-[#1E6F9F] p-4 flex items-center justify-center w-[60%] sm:w-[80%] lg:w-[60%] ">
          <div className="flex flex-row gap-2 items-center">
            <p className="text-gray-100 font-bold m-0">Create Task</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#F2F2F2" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
        </button>
      </div>

      <div className="mt-24 px-4 flex justify-center">
        <TaskList />
      </div>
    </div>
  )
}