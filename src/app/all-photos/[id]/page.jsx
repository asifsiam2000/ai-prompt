import { Card, Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaArrowDown, FaHeart } from "react-icons/fa";

const PhotoDetails = async ({ params }) => {
  const { id } = await params;
  const data = await fetch(
    "https://ai-prompt-lemon-seven.vercel.app/data.json",
  );
  const photos = await data.json();
  const photo = photos.find((data) => data.id == id);
  console.log("hime", photo);
  return (
    <div className="flex justify-center my-5">
      <div className="space-y-4">
              <div className="w-full max-w-xl">
  <Image
    src={photo.imageUrl}
    height={600}
    width={600}
    alt="photo"
    className="rounded-2xl w-full h-auto"
  />
</div>
              <h1 className="text-2xl font-bold">{photo.title}</h1>
              <p className="text-gray-600">{photo.prompt}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <p className="text-red-500">
              <FaHeart />
            </p>
            <p>{photo.likes}</p>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-blue-500">
              <FaArrowDown />
            </p>
            <p>{photo.downloads}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetails;
