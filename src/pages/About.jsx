import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

// Import this to style the vertical timeline component
import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, We're{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Stratwings
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        Stratwings' website development team, based in Bangalore, specializes in creating 
        impactful websites and delivering successful projects for a diverse range of clients.

        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>Our Expertise</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>

              {/* btn-back is the class in css which provides some kind of animation with css */}
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            At Stratwings, we've collaborated with a wide array of clients, enhancing our expertise and working with brilliant minds. Here’s the scoop on what we do:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement

              // Keys are the wasy to identify unique element and here VerticalTimeElement element was created too many times using loop so they also same keys if key are not assigned and if they all have same keys the react will re-render all the elements even if there is a change in one element. So keys  are used to change the tell the react which needs to be re-render.
                key={experience.company_name}
                date={experience.date}

                // This fills the colors in teh icons to look good
                iconStyle={{ background: experience.iconBg }}

                // Here the images will be put. alt is the text which get displays when the image doesn't display due to network issue.
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }

                // This add the background border in each elment
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      
      {/* This creates a line */}
      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;