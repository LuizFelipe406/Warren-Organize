export interface MoneyMovementModel {
  id: number | string;
  userId: number | string;
  name: string;
  amount: number;
  date: Date;
  category: string;
}
