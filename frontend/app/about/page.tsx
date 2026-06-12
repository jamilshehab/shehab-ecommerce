import AboutComponent from "../components/About/AboutComponent";
import FollowUs from "../components/About/FollowUs";
import Breadcrumb from "../components/common/Breadcrumb";

export default function AboutPage() {
  return (
    <main>
      <Breadcrumb items={[{ label: "About " }]} />
      <AboutComponent />
      <FollowUs />
    </main>
  );
}
