import { useEffect } from "react";
import Img1 from "../assets/imgs/fortaleza/praiadofuturo/pf01.jpg";
import Img2 from "../assets/imgs/fortaleza/praiadofuturo/pf02.jpg";

// const testAPI = "https://randomuser.me/api/";

export default function PicsLoader({ urls }) {
  const { path, urls: picsUrls } = urls;
  let imgsLoaded = false;

  useEffect(() => {
    // img3 = fetch(path + picsUrls[0]).then((e) => e);
    const imgs = picsUrls.map((pic) => {
      fetch("/assets" + path + pic).then((img) => (imgsLoaded = true));
    });
  }, []);

  return (
    <div className="pics-loader-holder">
      {picsUrls.map((pic) => {
        return (
          <img
            className="praias-pics"
            src={"/assets" + path + pic}
            alt="teste"
            key={pic}
          />
        );
      })}
    </div>
  );
}
