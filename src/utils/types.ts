export type TStore = {
  idCounterTask: number;
  idCounterColumn: number;
  tasks: TaskList;
  columns: ColumnList;
};

export type Task = {
  id: number;
  text: string;
  columnId: number;
};

export type Column = {
  id: number;
  title: string;
  image: string;
};

export type TaskList = Array<Task>;
export type ColumnList = Array<Column>;