export interface taskData {
  id: number;
  name: string;
  description?: string;
  isEditMode?: boolean;
}
export let listData: taskData[] = [
  {
    id: 1,
    name: 'Task 1',
    isEditMode: false,
    // description: 'Task 1 description....',
  },
];
