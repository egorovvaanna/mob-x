export interface checkList {
  idCard: number;
  title: string;
  completed: boolean;
}

export type Priority = "none" | "hight" | "middle" | "low";
export interface CardTypes {
  id: number;
  order: number;
  title: string;
  priority: Priority;
  addCheckList: boolean;
}
