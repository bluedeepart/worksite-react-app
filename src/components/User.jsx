import avatar from "../assets/images/avatar.svg";
import downArrow from "../assets/images/downArrow.svg";

function User({ userName }) {
  return (
    <div className="hidden lg:flex lg:w-1/4 lg:justify-end cursor-pointer text-white items-center space-x-3">
      <img src={avatar} alt={userName} />
      <p className="">{userName}</p>
      <img src={downArrow} alt="Arrow" />
    </div>
  );
}

User.defaultProps = {
  userName: "Olivia Benjamin",
};

export default User;
