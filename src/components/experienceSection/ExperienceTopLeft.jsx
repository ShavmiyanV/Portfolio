import CountUp from "react-countup";

const stats = [
  {
    num: 15,
    text: "Projects Completed",
  },
  {
    num: 13,
    text: "Technologies Masterd",
  },
  {
    num: 600,
    text: "Total Commits",
  },
];

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      
      <div className="flex justify-center items-center gap-6 flex-wrap">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <h2 className="font-bold text-7xl text-cyan">
              <CountUp end={stat.num} duration={2} />+
            </h2>
            <p className="text-white text-lg text-center">{stat.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTopLeft;
