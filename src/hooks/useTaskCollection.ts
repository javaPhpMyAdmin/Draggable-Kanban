import { v4 as uuidv } from 'uuid';
import { ColumnType } from '../utils';
import { TaskModel } from '@/utils';
import { useLocalStorage } from 'usehooks-ts';

export function useTaskCollection() {
  return useLocalStorage<{
    [key in ColumnType]: TaskModel[];
  }>('tasks', {
    Todo: [
      {
        id: uuidv(),
        column: ColumnType.TO_DO,
        title: 'Task 1',
        color: 'blue.300',
      },
    ],
    'In Progress': [
      {
        id: uuidv(),
        column: ColumnType.IN_PROGRESS,
        title: 'Task 2',
        color: 'yellow.300',
      },
    ],
    Blocked: [
      {
        id: uuidv(),
        column: ColumnType.BLOCKED,
        title: 'Task 3',
        color: 'red.300',
      },
    ],
    Completed: [
      {
        id: uuidv(),
        column: ColumnType.COMPLETED,
        title: 'Task 4',
        color: 'green.300',
      },
    ],
  });
}
