import { WelcomeAbout } from "./components/about-header";
import { Tab } from "./components/tab";
import { Leadership } from "./components/leadership";
import { Facilities } from "./components/facilities";
export const About = () => {
  return (
    <>
      <WelcomeAbout />
      <Tab />
      <Leadership />
      <Facilities />
    </>
  );
}