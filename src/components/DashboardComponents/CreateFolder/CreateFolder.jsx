import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { createFolder } from "../../../pages/actionCreators/fileFoldersActionCreator";

const CreateFolder = ({ setIsCreateFolderModalOpen }) => {
  const [folderName, setFolderName] = useState("");

  const { userFolders,user,currentFolder } = useSelector(
    (state) => ({
      userFolders: state.fileFolders.userFolders,
      user: state.auth.user,
      currentFolder: state.fileFolders.currentFolder,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  const checkFolderAlreadyPresent = (name) => {
    const folderPresent = userFolders.find((folder) => folder.name === name);
    if (folderPresent) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`${fileName}`);
    if (folderName) {
      if (folderName.length > 3) {
        if (!checkFolderAlreadyPresent(folderName)) {
          //   alert("Folder Created " + folderName);
          const data = {
            createdAt: new Date(),
            name: folderName,
            userId: user.uid,
            createdBy: user.displayName,
            path: currentFolder === "root" ? [] : ["parent folder path!"],
            parent: currentFolder,
            lastAccessed: null,
            updatedAt : new Date(),
          }
        //   console.log(data);
        dispatch(createFolder(data));
        } else {
          alert("Folder already present");
        }
      } else {
        alert("Folder name must be at least of 3 Characters!");
      }
    } else {
      alert("Folder name cannot be Empty!");
    }
  };

  return (
    <div
      className="col-md-12 position-fixed top-0 w-100 h-100"
      style={{ background: "rgba(0, 0, 0, 0.4)", zIndex: 9999 }}
    >
      <div className="row align-items-center justify-content-center">
        <div className="col-md-4 mt-5 bg-white rounded p-4">
          <div className="d-flex justify-content-between">
            <h4>Create Folder</h4>
            <button
              className="btn"
              onClick={() => setIsCreateFolderModalOpen(false)}
            >
              <FontAwesomeIcon
                icon={faTimes}
                className="text-black"
                size="sm"
              />
            </button>
          </div>
          <hr />
          <div className="d-flex flex-column align-items-center">
            <form className="mt-3 w-100" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  className="form-control"
                  id="folderName"
                  placeholder="Folder Name"
                  value={folderName}
                  onChange={(e) => setFolderName(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary mt-5 form-control"
              >
                Create Folder
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateFolder;
