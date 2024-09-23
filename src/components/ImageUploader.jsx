import { useState } from "react";

/* eslint-disable react/prop-types */
export function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };
  return (
    <div className="imageUploaderContainer">
      <div className="imagePreviewContainer">
        {selectedImage ? (
          <img src={selectedImage} alt="uploaded" className="uploadedImage" />
        ) : (
          <img
            className="profilePicture"
            src="https://preview.redd.it/h5gnz1ji36o61.png?width=225&format=png&auto=webp&s=84379f8d3bbe593a2e863c438cd03e84c8a474fa"
          />
        )}
      </div>
      <input
        className="inputImageProfile"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />
    </div>
  );
}
