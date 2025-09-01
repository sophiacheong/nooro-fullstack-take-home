"use client"

import { Task } from '@prisma/client';
import React, { useCallback, useEffect } from 'react';

export const useGetTasks = () => {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [total, setTotal] = React.useState<number>(0);
  const [completedTotal, setCompletedTotal] = React.useState<number>(0)

  const fetchTasks = useCallback(async () => {
    try {
      const res = await fetch("/api/tasks");
      const data = await res.json();

      setTasks(data.tasks);
      setTotal(data.total);
      setCompletedTotal(data.taskCompletedTotal)
    } catch (err) {
      console.error(err);
    }
  }, [setTasks, setTotal]);

  useEffect(() => { fetchTasks(); }, [fetchTasks]);

  return { tasks, fetchTasks, setTasks, total, completedTotal }
}