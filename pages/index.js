import Title from "@/components/macro/title";
import Header from "@/components/macro/header";
import Sub_title from "@/components/macro/sub_title";

export default function Home() {
  return (
   <div className="bg-black min-h-screen">
       <Header/>
       <Title className="pt-20 md:pt-32"/>
       <Sub_title className="pt-24 md:pt-[136px]"/>
   </div>
  );
}
