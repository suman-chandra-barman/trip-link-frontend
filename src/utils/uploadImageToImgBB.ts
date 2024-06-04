import axios from "axios";

const uploadImageToImgBB = async (file: File) => {
  const formData = new FormData();
  formData.append("image", file);

  const apiKey = "7e74aeef43f1128d0f03678519a7718e";
  const url = `https://api.imgbb.com/1/upload?key=${apiKey}`;

  const response = await axios.post(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  if (response.data.success) {
    return response.data.data.url;
  } else {
    throw new Error("Image upload failed");
  }
};

export default uploadImageToImgBB;
