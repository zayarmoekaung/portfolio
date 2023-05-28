import { useEffect } from "react";

const CoderRankActivity = ({username})=>{
    useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@codersrank/activity@x.x.x/codersrank-activity.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <codersrank-activity username={username}></codersrank-activity>
  );
}
export default CoderRankActivity