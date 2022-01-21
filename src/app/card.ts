export interface Card {
  color: Color;
  value: Value;
}

export interface Color {
  cardColor: string;
  order: number;
}

export interface Value {
  cardValue: string;
  order: number;
}
