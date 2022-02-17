export interface ProductsProps {
  id: string;
  name: string;
  full_name: string;
  brand: string;
  amount: number;
  img_url: string;
  description: string;
  onClick: () => void;
}
