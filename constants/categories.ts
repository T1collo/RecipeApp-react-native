export type CategoryItem = {
  title: string;
  category: string;
  iconName: keyof typeof import('@expo/vector-icons').Ionicons.glyphMap;
};

export const categories: CategoryItem[] = [
  { title: 'All', category: 'all', iconName: 'apps-outline' },
  { title: 'Breakfast', category: 'breakfast', iconName: 'cafe-outline' },
  { title: 'Lunch', category: 'lunch', iconName: 'fast-food-outline' },
  { title: 'Dinner', category: 'dinner', iconName: 'restaurant-outline' },
  { title: 'Salads', category: 'salads', iconName: 'leaf-outline' },
  { title: 'Soups', category: 'soups', iconName: 'restaurant-outline' },
  { title: 'Desserts', category: 'desserts', iconName: 'ice-cream-outline' },
  { title: 'Beverages', category: 'beverages', iconName: 'wine-outline' },
  { title: 'Snacks', category: 'snacks', iconName: 'pizza-outline' },
  { title: 'Vegetarian', category: 'vegetarian', iconName: 'nutrition-outline' },
];
