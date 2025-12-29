import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CardIcon({ icon }) {
  return (
    <div className="flex flex-col text-center items-center justify-center">
      <div className="p-4 bg-neutral-800 rounded-xl">
        <FontAwesomeIcon icon={icon} className="text-white" />
      </div>
    </div>
  );
}
