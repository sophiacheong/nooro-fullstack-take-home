"use client"

import React from 'react';
import { TaskCard } from './TaskCard';
import { useGetTasks } from '../hooks/useGetTasks';

export const TaskList: React.FC = () => {
  const { tasks, fetchTasks, total, completedTotal } = useGetTasks();

  return (
    <div className="w-[60%] sm:w-[80%] lg:w-[60%] flex flex-col gap-8">
      <div className="flex justify-between w-full">
        <div className="flex flex-row gap-2 items-center">
          <p className="font-inter font-bold text-[14px] leading-[14px] tracking-normal m-0 text-[#4EA8DE]">Tasks</p>
          <span className="bg-[#333333] text-[#D9D9D9] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">{total}</span>
        </div>

        <div className="flex flex-row gap-2 items-center">
          <p className="font-inter font-bold text-[14px] leading-[14px] tracking-normal m-0 text-[#8284FA]">Completed</p>
          <span className="bg-[#333333] text-[#D9D9D9] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">{completedTotal} de {total}</span>
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