import React, { useEffect, useState } from "react";
import axios from "axios";

const MaterialCard = () => {
  const [materialsData, setMaterialData] = useState([]);

  const fetchMaterials = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/material/get"
      );

      setMaterialData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMaterials();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {materialsData.map((material) => (
        <div
          key={material._id}
          className="bg-gray-50 shadow-md rounded-md overflow-hidden"
        >
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {material.title}
            </h3>
            <p
              className="text-gray-600 mb-4"
              style={{
                WebkitBoxOrient: "vertical",
                display: "-webkit-box",
                overflow: "hidden",
                WebkitLineClamp: 1,
              }}
            >
              {material.description}
            </p>
            <a
              href={material.materialURL}
              className="bg-red-500 text-white px-4 py-2 rounded-md inline-block hover:bg-red-600"
            >
              Link
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MaterialCard;
