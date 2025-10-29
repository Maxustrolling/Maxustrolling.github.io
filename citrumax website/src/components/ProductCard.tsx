interface ProductCardProps {
  name: string;
  image: string;
}

const ProductCard = ({ name, image }: ProductCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-xl transition-smooth bg-card">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-smooth"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent flex items-end">
        <h3 className="text-2xl md:text-3xl font-bold text-white p-6">{name}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
