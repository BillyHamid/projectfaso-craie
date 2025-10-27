import { Card1, Card2, Card3, Card4 } from "./homepage.product";

export function CardsSection() {
  return (
    <div className="mt-12 flex flex-wrap justify-center gap-8 px-6">
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
    </div>
  );
}