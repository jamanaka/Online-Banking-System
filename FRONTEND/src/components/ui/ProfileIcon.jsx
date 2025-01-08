import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function ProfileIcon() {
  return <FontAwesomeIcon icon={faUser} className="text-blue-500 cursor-pointer text-1xl border p-2 rounded-full border-blue-gray-500" />;
}

export default ProfileIcon;
