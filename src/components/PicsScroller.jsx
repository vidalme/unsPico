export default function PicsScroller() {
  const modules = import.meta.glob(
    "../assets/imgs/fortaleza/praiadofuturo/*.jpg"
  );
  Object.values(modules).map((e) => {
    console.log(e());
  });
}
