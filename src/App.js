import './App.css';

function App() {
  return (
    <div className='text-gray-600 font-body'>
      <div>
        <nav>
          <div>
            <h1 className='font-bold uppercase p-4 border-b border-gray-100'>
              <a href="/">Foodies</a>
            </h1>
          </div>
          <ul>
            <li className='text-gray-700 font-bold'>
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

      <main className='px-16 py-6'>
        <div>
          <a href="#" className='text-primary'>Login</a>
          <a href="#">Signup</a>
        </div>

        <header>
          <h2 className='text-gray-700 text-6xl font-semibold'>Recipes</h2>
          <h3 className='text-2xl font-semibold'>For Foodies</h3>
        </header>

        <div>
          <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Latest Recipes</h4>

          <div className='mt-8'>
            <div>
              <img src="images/stew.jpg" alt="stew"/>
              <div>
                <span>5 Bean Chilli Stew</span>
                <span>Recipe by Mario</span>
              </div>
            </div>
          </div>

          <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Most Popular</h4>

          <div className='mt-8'>
            {/* cards go here */}
          </div>

          <div>
            <div className='bg-secondary-100 text-secondary-200'>Load More</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
