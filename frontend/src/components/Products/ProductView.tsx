import product from "../../assets/featured_pictures/product.jpg"
export default function ProductView() {

    const staticProducts = [
        { id: 1, name: "Product 1", price: "29.99", image: product },
        { id: 2, name: "Product 2", price: "20.99", image: product },
        { id: 3, name: "Product 3", price: "30.99", image: product },
        { id: 4, name: "Product 4", price: "40.99", image: product },
        { id: 5, name: "Product 5", price: "50.99", image: product },
        { id: 6, name: "Product 6", price: "60.99", image: product },
    ];

    return (
        <div className="mb-20">
            <div className="mt-4">
            <h1 className="font-pixel text-center text-6xl py-4">Products curated just for you</h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 rounded-t-3xl pt-10">
                {staticProducts.map((product) => (
                    <div key={product.id} className="shadow-sm">
                        <div className="md:h-[380px] md:w-full overflow-hidden">
                        <img src={product.image} alt={product.name} 
                         className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"/>
                        </div>
                        <div className="flex flex-col items-start pl-1.5">
                            <h1 className="font-bold text-lg border-b-2 border-black">{product.name}</h1>
                            <p className="font-pixel text-xl">${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}