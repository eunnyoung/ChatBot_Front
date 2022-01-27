import { useState } from "react";
import { FiFolderPlus } from "react-icons/fi";
import "./SelectFile.css";

function SelectFile() {
  const [myImage, setMyImage] = useState([]);
  const addImage = (e) => {
    const nowSelectImageList = e.target.files;
    const nowImageURLList = [...myImage];
    for (let i = 0; i < nowSelectImageList.length; i += 1) {
      const nowImageUrl = URL.createObjectURL(nowSelectImageList[i]);
      nowImageURLList.push(nowImageUrl);
    }
    setMyImage(nowImageURLList);

    // const reader = new FileReader();

    // reader.onload = () => (img)
  };

  // document.getElementById("files").onchange = function () {
  //   var reader = new FileReader();

  //   reader.onload = function (e) {
  //     // get loaded data and render thumbnail.
  //     document.getElementById("image").src = e.target.result;
  //   };

  //   // read the image file as a data URL.
  //   reader.readAsDataURL(this.files[0]);
  // };

  return (
    <div>
      <label htmlFor="input-file" className="fileUpload" onChange={addImage}>
        <FiFolderPlus className="btnFolder" size="2rem" />
        <input
          type="file"
          multiple="multiple"
          id="input-file"
          style={{ display: "none" }}
        />
      </label>
    </div>
  );
}

export default SelectFile;
