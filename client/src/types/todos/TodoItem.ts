export interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
  creationDate: Date;
  updateDate?: Date;
}
