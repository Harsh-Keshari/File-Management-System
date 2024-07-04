import fire from "../../config/firebase";
import * as types from "../actionTypes/fileFoldersActionTypes";

//Actions 

const addFolder = (payload) => ({
    type: types.CREATE_FOLDER,
    payload,
});

const addFolders = (payload) => ({
    type: types.ADD_FOLDERS,
    payload,
});

const setLoading = (payload) => ({
    type: types.SET_LOADING,
    payload,
});

//Action Creator

export const createFolder = (data) => (dispatch) => {
    // console.log(data);
    fire.firestore().collection("folders").add(data).then(async (folder) => {
        const folderData = await (await folder.get()).data();
        dispatch(addFolder(folderData));
        alert("Folder Created Successfully");
    })
};

export const getFolders = (userId) => (dispatch) =>{
    dispatch(setLoading(true));
    fire
    .firestore()
    .collection("folders")
    .where("userId","==",userId)
    .get()
    .then(async(folders)=>{
        const foldersData = await folders.docs.map((folder) => folder.data());
        dispatch(addFolder(foldersData));
        dispatch(setLoading(false));
    })
}