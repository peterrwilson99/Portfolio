import { Box, ButtonBase } from "@mui/material";
import React, { useState } from "react";

interface ImageGalleryProps {
    images: string[];
}

function ImageGallery({ images }: ImageGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const handleGalleryClick = (image: string) => {
        setSelectedImage(image);
    };

    return (
        <Box className="my-4">
            <div className="selected-image md:min-h-[500px]">
                <img src={selectedImage} alt="" />
            </div>
            {images.length && images.length > 1 ? (
                <div className="gallery flex flex-row flex-wrap justify-left my-4">
                    {images.map((image, index) => (
                        <ButtonBase
                            key={index}
                            className={`m-2 ${image === selectedImage ? "" : "brightness-50"}`}
                            onClick={() => {
                                handleGalleryClick(image);
                            }}
                        >
                            <img src={image} width="150px" style={{ borderRadius: 2 }} />
                        </ButtonBase>
                    ))}
                </div>
            ) : (
                <></>
            )}
        </Box>
    );
}

export default ImageGallery;
