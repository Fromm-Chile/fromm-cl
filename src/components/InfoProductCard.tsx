import React from "react";

type InfoProductCardProps = {
  srcImg: string;
  alt: string;
  solution: string;
  product?: string;
  desc: React.JSX.Element;
};

export const InfoProductCard = ({
  srcImg,
  alt,
  solution,
  product,
  desc,
}: InfoProductCardProps) => {
  return (
    <div className="bg-white px-5 py-8 my-5 rounded-md hover:shadow-2xl hover:border-2 hover:border-red transition-all ease duration-500 border border-primaryGray">
      <img src={srcImg} alt={alt} />
      <div>
        <p className="tracking-widest text-red font-extralight text-lg">
          {solution}
        </p>
        <p className="text-lg font-bold mb-8">{product}</p>
        {desc}
      </div>
    </div>
  );
};
