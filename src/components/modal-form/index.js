import React from "react";
import ImageUploader from "react-image-upload";
import "react-image-upload/dist/index.css";
import "./styles.css";

function ModalForm({ setShouldRun, setIsOpen }) {
  const getImageFileObject = (imageFile) => {
    console.log({ imageFile });
  };

  const runAfterImageDelete = (file) => {
    console.log({ file });
  };

  return (
    <div>
      <div className="flex flex-col items-center w-full mx-auto">
        <div>
          <p className="text-2xl font-bold mb-5 text-center">
            Update your progress
          </p>
          <div className="flex flex-row items-center"></div>
          <div className="mt-2 mb-2 border rounded-md w-full">
            <textarea
              placeholder="Add your updates"
              className="p-2"
              style={{ width: "50vw", height: "50vh" }}
            />
          </div>
          <div className="border rounded-md flex flex-row mb-2 mt-2">
            <img
              alt="link icon"
              className="bg-gray-300 mr-2 px-4 py-2"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xNC44NTEgMTEuOTIzYy0uMTc5LS42NDEtLjUyMS0xLjI0Ni0xLjAyNS0xLjc0OS0xLjU2Mi0xLjU2Mi00LjA5NS0xLjU2My01LjY1NyAwbC00Ljk5OCA0Ljk5OGMtMS41NjIgMS41NjMtMS41NjMgNC4wOTUgMCA1LjY1NyAxLjU2MiAxLjU2MyA0LjA5NiAxLjU2MSA1LjY1NiAwbDMuODQyLTMuODQxLjMzMy4wMDljLjQwNCAwIC44MDItLjA0IDEuMTg5LS4xMTdsLTQuNjU3IDQuNjU2Yy0uOTc1Ljk3Ni0yLjI1NSAxLjQ2NC0zLjUzNSAxLjQ2NC0xLjI4IDAtMi41Ni0uNDg4LTMuNTM1LTEuNDY0LTEuOTUyLTEuOTUxLTEuOTUyLTUuMTIgMC03LjA3MWw0Ljk5OC00Ljk5OGMuOTc1LS45NzYgMi4yNTYtMS40NjQgMy41MzYtMS40NjQgMS4yNzkgMCAyLjU2LjQ4OCAzLjUzNSAxLjQ2NC40OTMuNDkzLjg2MSAxLjA2MyAxLjEwNSAxLjY3MmwtLjc4Ny43ODR6bS01LjcwMy4xNDdjLjE3OC42NDMuNTIxIDEuMjUgMS4wMjYgMS43NTYgMS41NjIgMS41NjMgNC4wOTYgMS41NjEgNS42NTYgMGw0Ljk5OS00Ljk5OGMxLjU2My0xLjU2MiAxLjU2My00LjA5NSAwLTUuNjU3LTEuNTYyLTEuNTYyLTQuMDk1LTEuNTYzLTUuNjU3IDBsLTMuODQxIDMuODQxLS4zMzMtLjAwOWMtLjQwNCAwLS44MDIuMDQtMS4xODkuMTE3bDQuNjU2LTQuNjU2Yy45NzUtLjk3NiAyLjI1Ni0xLjQ2NCAzLjUzNi0xLjQ2NCAxLjI3OSAwIDIuNTYuNDg4IDMuNTM1IDEuNDY0IDEuOTUxIDEuOTUxIDEuOTUxIDUuMTE5IDAgNy4wNzFsLTQuOTk5IDQuOTk4Yy0uOTc1Ljk3Ni0yLjI1NSAxLjQ2NC0zLjUzNSAxLjQ2NC0xLjI4IDAtMi41Ni0uNDg4LTMuNTM1LTEuNDY0LS40OTQtLjQ5NS0uODYzLTEuMDY3LTEuMTA3LTEuNjc4bC43ODgtLjc4NXoiLz48L3N2Zz4="
            ></img>
            <input type="url" placeholder="http://github.com" />
          </div>
          <ImageUploader
            onFileAdded={(img) => getImageFileObject(img)}
            onFileRemoved={(img) => runAfterImageDelete(img)}
          />
        </div>
        <div>
          <button
            className="launch"
            id="everybodydance"
            onClick={() => {
              setShouldRun(true);
              setIsOpen(false);
            }}
          >
            <span>Update</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalForm;
