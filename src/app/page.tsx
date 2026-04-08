import EventCarousel from "@/components/Events/Carousel/EventCarousel";
import Homecontainer from "@/components/Homecontainer/Homecontainer";
import HomePage from "@/components/HomePage/HomePage";
import Gallery from "@/components/Gallery/Gallery";
import Lecture from "@/components/Lectures/Lectures";
import Registration from "@/components/Registration/Registration";
import Sponsors2 from "@/components/Sponsors/Sponsors2";
import Contact from "@/components/ContactUs/Contact";


export default function Page() {
  return (
    <>
      <HomePage />
      <div id="about">
        <Homecontainer
          heading={"About Technobyte"}
          element={<Registration showBtn={true} />}
        />
      </div>
      <div id="Gallery">
        <Homecontainer heading={"Gallery"} element={<Gallery />} />
      </div>
      <div id="events">
        <Homecontainer heading={"Event Categories"} element={<EventCarousel />} />
      </div>
      <div id="lectures">
        <Homecontainer heading={"Guest Lectures"} element={<Lecture />} />
      </div>
      <div id="sponsors">
        <Homecontainer heading={"Meet Our Sponsors"} element={<Sponsors2 />} />
      </div>
      <div id="contact">
        <Homecontainer heading={"Contact Us"} element={<Contact />} />
      </div>
    </>
  );
}
