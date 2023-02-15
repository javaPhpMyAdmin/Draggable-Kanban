import { ColumnType } from '@/utils';

export interface TaskModel {
  id: string;
  title: string;
  column: ColumnType;
  color: string;
}
