import { useEffect, useRef, useState } from 'react';
import ScrollArrow from './ScrollArrow';

function Section({ id, title, prevId, nextId, children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.35 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className={`section ${visible ? 'section--visible' : ''}`}>
      {prevId && <ScrollArrow direction="up" targetId={prevId} className="scroll-arrow--top" />}
      <h2 className="section__title">{title}</h2>
      <div className="section__grid">{children}</div>
      {nextId && <ScrollArrow direction="down" targetId={nextId} className="scroll-arrow--bottom" />}
    </section>
  );
}

export default Section;