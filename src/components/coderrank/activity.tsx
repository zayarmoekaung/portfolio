import { useEffect } from "react";
import styles from './coderrank.module.css';

const CoderRankActivity = ({ username }: { username: string }) => {
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
    <codersrank-activity username={username} className={styles.widget}></codersrank-activity>
  );
};
export default CoderRankActivity;