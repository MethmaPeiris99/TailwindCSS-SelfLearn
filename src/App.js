import './App.css';

function App() {
  return (
    <div>
      <div>
        <nav>
          <div>
            <h1>
              <a href="/">Foodies</a>
            </h1>
          </div>
          <ul>
            <li>
              <a href="#">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <main>
        <div>
          <a href="#">Login</a>
          <a href="#">Signup</a>
        </div>

        <header>
          <h2>Recipes</h2>
          <h3>For Foodies</h3>
        </header>

        <div>
          <h4>Latest Recipes</h4>

          <div>
            <div>
              <img src="images/stew.jpg" alt="stew"/>
              <div>
                <span>5 Bean Chilli Stew</span>
                <span>Recipe by Mario</span>
              </div>
            </div>
          </div>

          <h4>Most Popular</h4>

          <div>
            {/* cards go here */}
          </div>

          <div>
            <div>Load More</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
