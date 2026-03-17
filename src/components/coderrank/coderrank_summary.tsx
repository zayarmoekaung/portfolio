import { useEffect } from 'react';
import styles from './coderrank.module.css';

const CodersRankSummary = ({ username }: { username: string }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@codersrank/summary@x.x.x/codersrank-summary.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <codersrank-summary username={username} className={styles.widget} />
  );
};

export default CodersRankSummary;
