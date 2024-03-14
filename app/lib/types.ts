export interface LayoutProps {
  children: React.ReactNode,
}

export interface UserPageProps {
  params: {
    id: string
  }
}

type Rating = {
  rate: number,
  count: number
}

export interface Product {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: Rating,
}