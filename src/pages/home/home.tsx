import { Welcome } from "./components/sections/welcome-section";
import { Lastnews } from "./components/sections/last-news";
import { About } from "./components/sections/about";
import { Teachers } from "./components/sections/teachers";
import { Images } from "./components/sections/images";
const Home = () => {
  return (
    <>
      <Welcome />
      <Lastnews />
      <Teachers />
      <About/>
      <Images />
    </>
  );
}
export default Home;