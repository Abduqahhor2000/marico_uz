import Title from "@/components/macro/title";
import Header from "@/components/macro/header";
import Sub_title from "@/components/macro/sub_title";
import Mean_title from "@/components/macro/mean_title";
import Step from "@/components/macro/step";
import Monitor from "@/components/macro/monitor";
import Services from "@/components/macro/services";
import Comments from "@/components/macro/comments";
import Character from "@/components/macro/character";
import End from "@/components/macro/end";
import Footer from "@/components/macro/footer";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Title className="pt-20 md:pt-32" />
      <Sub_title className="pt-24 md:pt-[136px]" />
      <Mean_title className="pt-[120px] md:pt-[188px]" />
      <Step
        className="pt-[100px] md:pt-[162px]"
        haveButton={true}
        title="Connect Your Content"
        descreption="Bring all of your content together and get a Homepage that automatically updates whenever you create anywhere online."
        count={1}
      />
      <Monitor
        words={{
          title: "Your Homepage",
          one: "Your Content.",
          two: "All in",
          three: "One Spot",
          pin1: " Bring all of your content together into one homepage.",
          pin2: " Your page automatically updates whenever you create.",
          img: "/screen1.png",
        }}
        className="pt-[120px] md:pt-[182px]"
      />
      <Step
        className="pt-[100px] md:pt-[162px]"
        title="Share Your Homepage"
        descreption="Share your Wavium homepage link with your followers, and
        we'll handle the rest."
        count={2}
      />
      <Services className={"pt-24 md:pt-44"} />
      <Step
        className="pt-[100px] md:pt-[162px]"
        title="Send Emails & Text Messages"
        descreption="No more going through a social platform. Reach and engage
        your audience directly over email and text massage."
        count={3}
      />
      <Monitor
        words={{
          title: "Create & Share",
          one: "Reach Your",
          two: "Audience",
          three: "Directly.",
          pin1: " Embed content or create something new to share.",
          pin2: " Share content over email, text message or your homepage.",
          img: "/screen2.png",
        }}
        className="pt-[100px] md:pt-[182px]"
      />
      <Comments className={"pt-20 sm:pt-24"}/>
      <Character className={"pt-16 md:pt-44"} />
      <End className="pt-16 sm:pt-44" />
      <Footer className={"pt-[80px] sm:pt-[188px] pb-[45px] sm:pb-[100px]"} />
    </div>
  );
}
