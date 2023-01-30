import PropTypes from "prop-types";

function Step2({
  onSelectEmotion,
  type,
  handleBackgrounds,
  handleMouseOver,
  handleMouseOut,
}) {
  const handleEmotionChange = (emotion) => {
    onSelectEmotion(emotion);
  };
  const positiveEmotions = [
    { value: "joie", label: "Joie" },
    { value: "amour", label: "Amour" },
    { value: "serenite", label: "Sérénité" },
    { value: "amusement", label: "Amusement" },
  ];
  const negativeEmotions = [
    { value: "culpabilite", label: "Culpabilité" },
    { value: "colere", label: "Colère" },
    { value: "tristesse", label: "Tristesse" },
    { value: "peur", label: "Peur" },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-white font-cinzel text-2xl mb-10 pl-5 md:pl-0">
        Choisissez votre type d'émotion
      </h1>
      {type === "reve" ? (
        <div
          className={`transition-all duration-300 ease-in bg-center bg-origin-border z-50 bg-noise-pattern flex flex-col justify-center items-center border-solid border-2 border-medium-grey rounded-xl h-[32rem] w-[20rem] md:w-[40rem] ${handleBackgrounds()}`}
          onMouseOut={handleMouseOut}
          onBlur={() => handleMouseOut}
        >
          {positiveEmotions.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              className="z-10 flex bg-yellow justify-center py-3 my-5 md:py-4 md:my-7 rounded-full font-sans md:text-2xl text-xl text-white font-thin w-3/6"
              onClick={() => handleEmotionChange(value)}
              onMouseOver={() => handleMouseOver({ value, label })}
              onFocus={() => handleMouseOver}
            >
              {label}
            </button>
          ))}
        </div>
      ) : (
        <div
          className={`transition-all duration-300 ease-in bg-center bg-origin-border z-50 bg-noise-pattern flex flex-col justify-center items-center border-solid border-2 border-medium-grey rounded-xl h-[32rem] w-[20rem] md:w-[40rem] ${handleBackgrounds()}`}
          onMouseOut={handleMouseOut}
          onBlur={() => handleMouseOut}
        >
          {negativeEmotions.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              className="z-10 flex bg-yellow justify-center py-3 my-5 md:py-4 md:my-7 rounded-full font-sans md:text-2xl text-xl text-white font-thin w-3/6"
              onClick={() => handleEmotionChange(value)}
              onMouseOver={() => handleMouseOver({ value, label })}
              onFocus={() => handleMouseOver}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
Step2.propTypes = {
  onSelectEmotion: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  handleBackgrounds: PropTypes.func.isRequired,
  handleMouseOut: PropTypes.func.isRequired,
  handleMouseOver: PropTypes.func.isRequired,
};

export default Step2;
