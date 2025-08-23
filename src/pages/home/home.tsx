import { Welcome } from "./components/sections/welcome-section";
import { Lastnews } from "./components/sections/last-news";
import { Teachers } from "./components/sections/teachers";
import { Images } from "./components/sections/images";
const Home = () => {
  return (
    <>
      <Welcome />
      <Lastnews />
      <Teachers />
      <Images />
    </>
  );
}
export default Home;