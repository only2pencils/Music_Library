import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import GalleryItem from "./GalleryItem";

// Because we are using Context now, we can remove references to props-this component will no longer need to accept props!
// function Gallery(props) {
//   const display = props.data.map((item, index) => {
//     return <GalleryItem item={item} key={index} />;
//   });
//   return <div>{display}</div>;
// }
const Gallery = () => {
  const data = useContext(DataContext);

  const display = data.map((item, index) => {
    return <GalleryItem key={index} item={item} />;
  });

  return <div>{display}</div>;
};
export default Gallery;
