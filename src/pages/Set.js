import React from "react";

const images = [
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    id: 1,
    colSpan: "col-span-1",
    rowSpan: "row-span-2",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    id: 2,
    colSpan: "",
    rowSpan: "",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    id: 3,
    colSpan: "",
    rowSpan: "",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    id: 4,
    colSpan: "",
    rowSpan: " row-span-3",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    id: 5,
    colSpan: "",
    rowSpan: "row-span-3",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    id: 6,
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    id: 7,
    colSpan: " col-span-1",
    rowSpan: " row-span-1",
  },
];

const Set = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 grid-rows-3 gap-4 p-4  md:px-10 lg:px-20">
      {images.map((image, index) => (
        <div
          key={index}
          className={`${image.colSpan} ${image.rowSpan} bg-gray-200`}
        >
          <img
            src={image.img}
            alt={image.title}
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};
export default Set;
