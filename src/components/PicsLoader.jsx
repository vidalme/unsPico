import { useEffect } from "react";
import Img1 from "../assets/imgs/fortaleza/praiadofuturo/pf02.jpg";

export default function PicsLoader({ urls }) {
  const { path, urls: picsUrls } = urls;

  useEffect(() => {
    console.log(path + picsUrls[0]);
  }, []);
  return (
    <div>
      <img src={"/assets" + path + picsUrls[0]} alt=""></img>
    </div>
  );
}
