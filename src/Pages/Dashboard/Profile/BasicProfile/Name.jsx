import React, { useState } from "react";
import { Pencil, Upload } from "lucide-react";

import Popup from "../../../../Components/Popup";

export default function Name({ name, img, post }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleEditClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="dark:bg-[#24292E] dark:border-0 dark:text-white p-[12px] rounded-[8px] border border-Grey200 w-[20rem] flex items-start justify-stretch gap-[20px]">
      <img src={img} alt="" className="rounded-[8px] h-24 w-24 flex-2" />
      <div className="flex flex-col items-start flex-1">
        <div
          onClick={handleEditClick}
          className="cursor-pointer flex items-center justify-end w-full"
        >
          <Pencil style={{ fontWeight: "normal" }} size={20} />
        </div>
        <p className="font-semibold bg-Gradient text-transparent bg-clip-text text-[18px]">
          {name}
        </p>
        <p className="text-[16px] font-semibold">{post}</p>

        <div className="">
          {showPopup && (
            <Popup onClose={closePopup} Component={<Component name={name} post={post} />} />
          )}
        </div>
      </div>
    </div>
  );
}

function Component({name,post}) {
  const [data, setData] = useState([{ name: "", post: "" }]);
  const handleSubmit=()=>{
    name=data.name;
    post=data.post;
    console.log(name,post)
  }
  return (
    <>
      <div className="flex flex-col justify-start">
        <p className="text-[20px] font-bold">A little bit about you </p>
        <p className="text-[14px] text-Gray700 mt-4">Upload your picture</p>
        <div className="flex items-center justify-center flex-col rounded-[50%] bg-[#f0f1f4] p-4 aspect-square h-[6rem] w-[6rem] mt-2">
          <Upload />
          <input type="file" name="uploadfile" id="img" className="hidden" />
          <label htmlFor="img" className="text-[12px] text-center">
            Upload image
          </label>{" "}
        </div>

        <p className="text-[14px] mt-4">Name</p>
        <div className="mt-2 border rounded-lg p-2">
          <input
            type="text"
            placeholder="What Do we Call You?"
            className="w-full"
            name="name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <p className="text-[14px] mt-4">Profession</p>
        <div className="mt-2 border rounded-lg p-2">
          <input
            type="text"
            placeholder="What Do you do?"
            className="w-full"
            name="post"
            value={data.post}
            onChange={(e) => setData({ ...data, post: e.target.value })}
          />
        </div>
      </div>
      <div className="flex items-center justify-end mt-8">
        <button onClick={handleSubmit} className="px-4 py-2 bg-Gradient rounded-lg font-bold text-Grey">
          Submit
        </button>
      </div>
    </>
  );
}
