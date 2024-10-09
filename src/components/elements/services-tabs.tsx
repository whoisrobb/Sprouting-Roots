import { Tabs } from "../ui/tabs";
import image from "/gardem-huckleberries.jpg";


export function ServicesTabs() {
  const tabs = [
    {
      title: "Consultation",
      value: "consult",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
            <p>Home Garden Consultation and Training</p>
            <DummyContent
                imgSrc={image}
                subtitle="Receive personalized advice and hands-on training to start or improve your home garden. Tailored recommendations to help you cultivate a flourishing garden."
            />
        </div>
      ),
    },
    {
      title: "Training",
      value: "training",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Customized Garden Training</p>
            <DummyContent
                imgSrc={image}
                subtitle="Training sessions designed to meet your specific gardening needs and objectives. Gain the knowledge and skills needed for a successful garden."
            />
        </div>
      ),
    },
    {
      title: "Planning",
      value: "planning",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Garden Planning</p>
            <DummyContent
                imgSrc={image}
                subtitle="Comprehensive garden planning services, including layout design, plant selection, and seasonal schedules, to ensure your garden thrives year-round."
            />
        </div>
      ),
    },
    {
      title: "Veggie Garden",
      value: "veggie",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Vegetable Gardens</p>
            <DummyContent
                imgSrc={image}
                subtitle="Grow fresh, organic vegetables with our expert guidance. Design, plant, and maintain a productive vegetable garden tailored to your space and preferences."
            />
        </div>
      ),
    },
    {
      title: "Maintenance",
      value: "maintenance",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Maintenance, Harvest & Cleanup</p>
            <DummyContent
                imgSrc={image}
                subtitle="Keep your garden in top shape with our maintenance, harvest, and cleanup services. Ongoing support for a healthy and productive garden."
            />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = ({ imgSrc, subtitle }: { imgSrc: string, subtitle: string }) => {
    return (
      <div className="space-y-2">
          <p className="text-base">{subtitle}</p>
          
          <img
              src={imgSrc}
              className="object-cover w-full aspect-square rounded-lg"
              // className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
    );
  };
  