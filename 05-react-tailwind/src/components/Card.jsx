import React from "react";
import { AtSign, Plus } from "lucide-react";
import { RiInstagramLine, RiTwitterXLine } from "@remixicon/react";

const Card = (props) => {
  return (
    <>
      <div className="p-8 flex gap-8 flex-wrap">
        <div className="bg-white w-85 h-full rounded-[30px] border border-gray-100 shadow-2xl p-3 flex flex-col justify-between">
          <div className="w-full h-44 rounded-4xl relative border border-gray-200/90">
            <img
              className="object-cover w-full h-full rounded-4xl absolute"
              src={props.bgImage}
              alt="Background Image"
              onContextMenu={(e) => e.preventDefault()} // Disables Right Click on the image
              onDragStart={(e) => e.preventDefault()} // Disables Dragging the Image
              draggable={false}
            />

            <button className="absolute bg-white/80 backdrop-blur-md top-4 right-4 p-2 rounded-full shadow-sm hover:bg-white transition-colors">
              <Plus size={20} className="text-gray-600" />
            </button>

            <div className="absolute left-1/2 -bottom-12 -translate-x-1/2">
              <div className="p-0.75 rounded-full bg-linear-to-tr from-orange-400 via-purple-500 to-green-400">
                <div className="bg-white p-1 rounded-full">
                  <img
                    src={props.profileImage}
                    alt="Profile Image"
                    className="w-24 h-24 rounded-full object-cover bg-slate-200"
                    onContextMenu={(e) => e.preventDefault()} // Disables Right Click on the image
                    onDragStart={(e) => e.preventDefault()} // Disables Dragging the Image
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="h-[45vh] flex flex-col gap-6">
            <div>
              <h1 className="text-center pt-15 font-semibold text-2xl tracking-tight">
                {props.userName}
              </h1>
              <p className="text-center pt-2 text-base tracking-tight text-gray-500">
                {props.userDescription}
              </p>
            </div>

            <div className="flex justify-evenly items-center w-full h-24 rounded-3xl shadow-2xl bg-gray-200/50">
              <div className="flex flex-col items-center">
                <h2 className="text-lg font-bold">{props.likesCount}</h2>
                <p className="text-gray-500/70">Likes</p>
              </div>

              <div className="flex flex-col items-center">
                <h2 className="text-lg font-bold">{props.postCount}</h2>
                <p className="text-gray-500/70">Posts</p>
              </div>

              <div className="flex flex-col items-center">
                <h2 className="text-lg font-bold">{props.viewsCount}</h2>
                <p className="text-gray-500/70">Views</p>
              </div>
            </div>

            <div className="flex gap-8 justify-center">
              <RiInstagramLine size={21} />
              <RiTwitterXLine size={21} />
              <AtSign size={21} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
