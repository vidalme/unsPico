import { divide } from "lodash";
import { useEffect, useState } from "react";

// const testAPI = "https://randomuser.me/api/";

export default function PicsLoader({ urls }) {
  const { path, urls: nomes } = urls;
  const picsUrls = nomes.map((picUrl) => "/assets" + path + picUrl);

  const [onStage, setOnStage] = useState(0);

  function handleClick() {
    setOnStage(onStage + 1);
    if (onStage + 1 === picsUrls.length) {
      setOnStage(0);
    }
  }

  useEffect(() => {
    const davez = fetch(picsUrls[onStage]).then((e) => console.log(e));
  }, [onStage]);

  return (
    <>
      {picsUrls.map((pic, idx) => {
        return (
          idx === onStage && (
            <img
              className="praias-pics"
              onClick={handleClick}
              src={picsUrls[onStage]}
              alt="oi"
              key={idx}
            />
          )
        );
      })}
    </>
  );
}

// export default function PicsLoader({ urls }) {
//   const { path, urls: picsUrls } = urls;

//   const [imgsLoaded, setImgsLoaded] = useState([]);

//   useEffect(() => {
//     const imagensArray = urls.urls.map((picURL, idx) => {
//       const loadImg = async function (picURL) {
//         const img = await fetch(picURL).then((e) => {
//           return e.url;
//         });
//       };

//       const originalUrl = "../assets" + urls.path + urls.urls[idx];
//       const novaURL = new URL(originalUrl, import.meta.url);
//       loadImg(novaURL.href);
//       return novaURL.href;
//     });

//     console.log(imagensArray);
//     setImgsLoaded(imagensArray);
//   }, []);

//   return (
//     <div className="pics-loader-holder">
//       {imgsLoaded.map((pic) => {
//         return <img className="praias-pics" src={pic} alt="teste" key={pic} />;
//       })}
//     </div>
//   );
// }

// export default function PicsLoader({ urls }) {
//   const { path, urls: picsUrls } = urls;
//   let imgsLoaded = false;

//   useEffect(() => {
//     // img3 = fetch(path + picsUrls[0]).then((e) => e);
//     const imgs = picsUrls.map((pic) => {
//       fetch("/assets" + path + pic).then((img) => (imgsLoaded = true));
//     });
//   }, []);

//   return (
//     <div className="pics-loader-holder">
//       {picsUrls.map((pic) => {
//         return (
//           <img
//             className="praias-pics"
//             src={"/assets" + path + pic}
//             alt="teste"
//             key={pic}
//           />
//         );
//       })}
//     </div>
//   );
// }
