import ContentShell from "@/components/shells/content-shell";
import data from "./services.json";
import ServiceComponent from "../_components/service-component";

const Services = () => {
  return (
    <ContentShell
        className="min-h-screen"
        title="Services"
    >
        {data.map((service, index) => (
            <ServiceComponent
                imgSrc={"https://utfs.io/f/3eb6c6b6-367b-4c65-858d-35790e595fbf-9mj5iw.jpg"}
                // imgSrc={service.imgSrc}
                title={service.title}
                subtitle={service.subtitle}
                btnText={service.btnText}
                key={index}
            />
        ))}
    </ContentShell>
  )
}

export default Services
