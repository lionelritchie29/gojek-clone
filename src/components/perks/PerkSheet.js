import PerkSlider from "./PerkSlider";

const PerkSheet = () => {
  return (
    <section className="bg-secondary">
      <div
        className="bg-white py-24"
        style={{ borderTopLeftRadius: "6rem", borderTopRightRadius: "6rem" }}
      >
        <h1 className="text-center font-extended font-extrabold text-5xl mb-16">
          Perks of being in good company
        </h1>
        <PerkSlider />
      </div>
    </section>
  );
};

export default PerkSheet;
