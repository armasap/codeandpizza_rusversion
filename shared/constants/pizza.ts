export const mapPizzaSize = {
  20: 'Small',
  30: 'Average',
  40: 'Big',
} as const;

export const mapPizzaType = {
  1: 'traditional',
  2: 'thin',
} as const;

export const pizzaSizes = Object.entries(mapPizzaSize).map(([value, name]) => ({
  name,
  value,
}));

export const pizzaTypes = Object.entries(mapPizzaType).map(([value, name]) => ({
  name,
  value,
}));

export type PizzaSize = keyof typeof mapPizzaSize;
export type PizzaType = keyof typeof mapPizzaType;
