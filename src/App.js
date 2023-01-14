import './App.css';
import useStore from './store/counter';

function App() {
  const counter = useStore();

  return (
    <div>
      <header>
        <nav>
          <span>Learn Zustand</span>
        </nav>
      </header>

      <main>
        <p>{counter.counter}</p>
        <section>
          <button onClick={counter.increase}>+</button>
          <button onClick={counter.decrease}>-</button>
        </section>
      </main>
    </div>
  );
}

export default App;
