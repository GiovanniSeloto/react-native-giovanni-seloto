import './Header.css'
const Random = ['Fundamenal', 'Core', 'Crucial']

function genRandom(max) {
  return Math.floor(Math.random() * (max + 1))
}

export default function Header() {
    const description = Random[genRandom(2)]
    return (
      <div>
        <header>
          <h1>React Essentials</h1>
          <p>
            {description} Fundamental React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
        <main>
          <h2>Time to get started!</h2>
        </main>
      </div>
    )
  }