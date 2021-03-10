const Fact = ({ fact }) => {
  return (
    <div className="info-card-container lg:min-w-0">
      <div
        className={`${fact.shadow} info-card mx-auto flex justify-center flex-col mt-20`}
        style={{
          backgroundColor: fact.color,
          marginRight: fact.id === 4 ? "1rem" : 0,
        }}
      >
        <div className="mx-auto -mt-16 lg:-mt-32">
          <img src={fact.icon} alt={fact.header} />
        </div>

        <div className="p-8 mt-4 lg:mt-12">
          <h3 className="font-extrabold lg:text-4xl font-extended text-3xl">
            {fact.header}
          </h3>
          <p className="font-semibold text-lg lg:text-xl mt-4">{fact.detail}</p>
        </div>
      </div>
    </div>
  );
};

export default Fact;
