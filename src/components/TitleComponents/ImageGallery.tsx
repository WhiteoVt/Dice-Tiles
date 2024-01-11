import { useState } from "react";

interface Props {
  title: string;
  image_url: string;
  description: string;
  images: string[];
  upvotes: number;
  downvotes: number;
  min_players: number;
  max_players: number;
}

const ImageGallery = ({
  title,
  description,
  image_url,
  images,
  upvotes,
  downvotes,
  min_players,
  max_players,
}: Props) => {
  const [selectedImage, setSelectedImage] = useState(image_url);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div className="grid grid-cols-5 mb-20">
      <div className="col-span-5">
        <h2 className="m-4 text-2xl font-bold">{title}</h2>
      </div>
      <div className="mb-4 col-span-3 h-96">
        <img
          src={selectedImage}
          alt="img"
          className="object-cover w-full h-full bg-slate-400"
        />
      </div>
      <div className="col-span-2 pl-4 h-96 overflow-hidden">
        <p>{description}</p>
      </div>
      <ul className="col-span-3 overflow-x-auto flex flex-row gap-1 justify-">
        {images.map((image, index) => (
          <li
            key={index}
            onClick={() => handleImageClick(image)}
            className="w-1/5 flex-none"
          >
            <img
              src={image}
              alt="img"
              className="object-cover w-full h-full bg-slate-400"
            />
          </li>
        ))}
      </ul>
      <div className="col-span-2 pl-4 justify-center flex flex-col">
        <p>
          Up votes {upvotes} / {downvotes} Down votes
        </p>
        <p>
          Players: {min_players} / {max_players}
        </p>
      </div>
    </div>
  );
};

export default ImageGallery;
