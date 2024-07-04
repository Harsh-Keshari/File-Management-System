

import React from 'react';
import { shallowEqual, useSelector } from "react-redux";
import ShowItems from "../ShowItems/ShowItems";

const HomeComponent = () => {
  const files = [{ name: "New File" }, { name: "New File 2" }];

  const { isLoading, userFolders } = useSelector(
    (state) => ({
      isLoading: state.fileFolders.isLoading,
      userFolders: state.fileFolders.userFolders,
    }),
    shallowEqual
  );

  return (
    <div className="col-md-12 w-100">
      {!isLoading ? (
        <h1 className="display-1 my-5 text-center">Loading ... </h1>
      ) : (
        <>
          <ShowItems title={"Created Folders"} items={userFolders} />
          <ShowItems title={"Created Files"} items={files} />
        </>
      )}
    </div>
  );
};

export default HomeComponent;




// import ShowItems from "../ShowItems/ShowItems";

// const HomeComponent = () => {
//   // const folders=[{name: "New folder"},{name:"new folder 2"}];
//   const files = [{ name: "New File" }, { name: "New File 2" }];
//   const userFolders: state.fileFolders.userFolders.map(folder => ({ name: folder }));
  

//   // const { isLoading, userFolders } = useSelector(
//   //   (state) => ({
//   //     isLoading: state.fileFolders.isLoading,
//   //     userFolders: state.fileFolders.userFolders.map(folder => ({ name: folder })),
//   //   }),
//   //   shallowEqual


//   return (
//     <div className="col-md-12 w-100">
     
//           <ShowItems title={"Created Folders"} items={userFolders} />
//           <ShowItems title={"Created Files"} items={files} />
       
//     </div>
//   );
// };

// export default HomeComponent;

// import React from 'react';
// import { useSelector, shallowEqual } from 'react-redux';
// import ShowItems from '../ShowItems/ShowItems';

// const HomeComponent = () => {
//   const { userFolders } = useSelector(
//     (state) => ({
//       // isLoading: state.fileFolders.isLoading,
//       userFolders: state.fileFolders.userFolders,
//     }),
//     shallowEqual
//   );

//   const files = [{ name: "New File" }, { name: "New File 2" }];

//   return (
//     <div className="col-md-12 w-100">
//       <ShowItems title={"Created Folders"} items={userFolders} />
//       <ShowItems title={"Created Files"} items={files} />
//     </div>
//   );
// };

// export default HomeComponent;
