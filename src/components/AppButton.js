import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AppButton = ({ icon, text, iconClasses, btnClasses }) => {
  return (
    <button
      className={`hover:bg-gray-300 btn w-full rounded-full text-gray-800 font-semibold bg-white ${btnClasses}`}
    >
      <FontAwesomeIcon icon={icon} className={iconClasses} /> {text}
    </button>
  );
};

export default AppButton;
