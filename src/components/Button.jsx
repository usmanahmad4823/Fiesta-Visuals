import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Button = (props) => {
  return (
    <button className="flex items-center bg-black text-white rounded-full p-1 ">
      <span className="px-3 text-[10px]   ">{props.btn}</span>
      <div className="bg-white text-black rounded-full p-1.5">
        <ArrowRightIcon className="h-4 w-4" />
      </div>
    </button>
  );
};

export default Button;
