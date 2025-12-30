import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icon({ icon, className, size }) {
  return <FontAwesomeIcon icon={icon} className={className} size={size} />;
}
