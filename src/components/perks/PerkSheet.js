import PerkSlider from "./PerkSlider";

const PerkSheet = () => {
  return (
    <section className="bg-secondary">
      <div className="bg-white rounded-t-3xl py-24">
        <h1 className="text-center font-extended font-extrabold text-5xl mb-16">
          Perks of being in good company
        </h1>
        <PerkSlider />
      </div>
    </section>
  );
};

export default PerkSheet;
