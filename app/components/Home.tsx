import React from 'react';
import { TaskList } from './TaskList';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-16">
      <button className="rounded-lg bg-[#1E6F9F]">
        <div className="flex flex-row gap-2">
          <article className="prose prose-p:text-gray-100 prose-strong:font-bold">
            <p>Create Task</p>
          </article>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
      </button>
      <TaskList />
    </div>
  )
}