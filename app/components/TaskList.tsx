"use client"

import React from 'react';
import { TaskCard } from './TaskCard';
import { useGetTasks } from '../hooks/useGetTasks';

export const TaskList: React.FC = () => {
  const { tasks, fetchTasks, total, completedTotal } = useGetTasks();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex space-between">
        <div className="flex flex-row gap-2">
          <article className="prose prose-sm prose-strong:font-bold prose-p:text-[#4EA8DE]">
            Tasks
          </article>
          <span className="bg-gray-400 text-gray-200 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">{total}</span>
        </div>

        <div className="flex flex-row gap-2">
          <article className="prose prose-sm prose-strong:font-bold prose-p:text-[#8284FA]">
            Completed
          </article>
          <span className="bg-gray-400 text-gray-200 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">{completedTotal} de {total}</span>
        </div>
        <div className="flex flex-row gap-2">

        </div>
      </div>
      <div className="flex flex-col gap-3">
        {tasks.map((task) => (
          <div className="flex" key={task.id}>
            <TaskCard checked={task.completed} taskTitle={task.title} refetchTasks={fetchTasks} id={task.id} />
          </div>
        ))}
      </div>
    </div>
  )
}