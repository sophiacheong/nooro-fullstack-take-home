import React, { useCallback } from 'react';
import CircleCheckbox from './Checkbox';
import { ErrorAlert } from './ErrorAlert';

type TaskCardProps = {
  checked: boolean;
  taskTitle: string;
  refetchTasks: () => void;
  id: string;
}

export const TaskCard: React.FC<TaskCardProps> = ({ checked,taskTitle, refetchTasks, id }) => {
  const [error, setError] = React.useState<boolean>(false);

  const onChange = useCallback(async () => {
    try {
      await fetch(`/api/tasks/${id}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !checked })
      });

      await refetchTasks();
    } catch (e) {
      setError(true);
    }
  }, [refetchTasks, checked, setError]);

  const onClose = useCallback(() => setError(false), [setError])

  return (
    <div className="border-[#333333] border-1 border-solid rounded-lg bg-[#262626] p-4 w-full">
      {error && <ErrorAlert message="Please try again" onClose={onClose} />}
      <div className="flex flex-row gap-3">
        <CircleCheckbox checked={checked} onChange={onChange} />
        <p className="text-gray-100 grow">{taskTitle}</p>
        <div className="w-6 h-6 rounded-md flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#808080" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
        </div>
      </div>
    </div>
  )
}