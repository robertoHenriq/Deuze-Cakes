interface CakeCardProps {
  name: string;
  priceCents: number;
  imageUrl?: string;
  onClick?: () => void;
  
}


export function CakeCard({ name, priceCents, imageUrl, onClick, }: CakeCardProps) {
  return (
    <div onClick={onClick}  className="rounded-2xl shadow-lg bg-white p-4 text-center hover:shadow-xl transition-shadow">
      
      <img
        src={imageUrl || "https://via.placeholder.com/300"}
        className="rounded-xl mb-4 w-full h-48 object-cover"
        alt={name}
      />
      <h4 className="font-semibold mb-3">{name}</h4>
      <p className="text-pink-600 font-semibold mb-3">
        R$ {(priceCents /100).toFixed(2)}
      </p>
      
      <button type="button" className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded transition-colors">
        <a href="https://wa.me/meuNumero?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido%20de%20um%20bolo" target="_blank" rel="noopener noreferrer">
          Eu quero
        </a>
      </button>
    </div>
  );
}
