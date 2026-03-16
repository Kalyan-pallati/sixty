type Card = {
  title: string;
  description: string;
};

const cards: Card[] = [
  {
    title: "Design",
    description: "Minimal silhouettes with brutal street energy."
  },
  {
    title: "Fabric",
    description: "Heavyweight cotton engineered for durability."
  },
  {
    title: "Culture",
    description: "Built from underground aesthetics."
  },
  {
    title: "Identity",
    description: "SIXTY is not fashion. It’s attitude."
  }
];

export default function StackScroll() {
  return (
    <>
      <section className="relative w-full bg-red-700 px-4 pt-24 -translate-y-1">
        <div className="mx-auto max-w-[500px] w-full flex flex-col">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="sticky w-full h-[420px] rounded-3xl bg-white shadow-2xl border border-black/5 p-10 flex flex-col justify-between"
              style={{
                top: `${100 + i * 16}px`, 
                marginBottom: "40vh",
              }}
            >
              <div>
                <h2 className="text-4xl font-pixel mb-4">{card.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="text-sm text-gray-400 font-mono font-medium">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

    </>
  );
}