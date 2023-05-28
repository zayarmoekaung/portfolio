import { useEffect } from "react";

const CoderRankExperience = ({username})=>{
    useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@codersrank/work-experience@x.x.x/codersrank-work-experience.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <codersrank-work-experience username={username} logos></codersrank-work-experience>
  );
}
export default CoderRankExperience