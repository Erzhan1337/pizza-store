export type Item = {
  name: string;
  price: number;
}

export interface ResultProps {
  items: Item[];
  onSelected: () => void;
}