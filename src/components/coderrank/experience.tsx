import { useEffect } from "react";
import styles from './coderrank.module.css';

const CoderRankExperience = ({ username }: { username: string }) => {
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
    <codersrank-work-experience username={username} logos className={styles.widget}></codersrank-work-experience>
  );
};
export default CoderRankExperience