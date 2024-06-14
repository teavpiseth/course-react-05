/* eslint-disable react/prop-types */
import { useState } from 'react';

function Panel({ title, children, active, onShow }) {
//   const [isActive, setIsActive] = useState(false);
  return (
    <section className="panel" style={{ border: "1px solid #ccc" }}>
      <h3>{title}</h3>
      {active ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => onShow()}>
          Show
        </button>
      )}
    </section>
  );
}

export default function ShareStateBetweenComponent() {
    const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div >
      <h2>Almaty, Kazakhstan</h2>
      <Panel title="About" active={activeIndex === 0} onShow={() => setActiveIndex(0)}>
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel title="Etymology" active={activeIndex === 1} onShow={() => setActiveIndex(1)}>
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </div>
  );
}
