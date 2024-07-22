import { useState } from "react";
import { Pencil } from "lucide-react";
import Popup from "../../../../Components/Popup";

export default function Bio() {
  const [showPopup, setShowPopup] = useState(false);

  const handleEditClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className="dark:bg-[#24292E] dark:border-0 dark:text-white p-[12px] rounded-[8px] border border-Grey200 w-[20rem]">
      <div
        onClick={handleEditClick}
        className="cursor-pointer flex justify-between items-center self-stretch text-[16px] font-bold leading-[24px]"
      >
        Bio
        <Pencil style={{ fontWeight: "normal" }} />
      </div>
      <p className="text mt-[16px] text-justify text-[14px]">
        I am Amira Singh, a product designer driven by a passion for crafting
        user-centric experiences that seamlessly blend form and function. With a
        keen eye for detail and a creative approach to problem-solving, I
        specialize in designing intuitive interfaces and products that enhance
        user satisfaction and usability.
      </p>
      <div className="">
        {showPopup && (
          <Popup
            onClose={closePopup}
            Component={<Component  />}
          />
        )}
      </div>
    </div>
  );
}

function Component({  }) {
  const [data, setData] = useState([{ name: "", post: "" }]);
  const handleSubmit = () => {
    name = data.name;
    post = data.post;
    console.log(name, post);
  };
  return (
    <>
      <div className="flex flex-col justify-start">
        <p className="text-[20px] font-bold">A little bit about you </p>
        <p className="text-[14px] mt-4">Bio</p>
        <div className="mt-2 border rounded-lg p-2">
          <textarea
            type="text"
            placeholder="Tell us about yourself"
            className="w-full"
            name="name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>

      </div>
      <div className="flex items-center justify-end mt-8">
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-Gradient rounded-lg font-bold text-Grey"
        >
          Submit
        </button>
      </div>
    </>
  );
}
