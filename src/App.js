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

      <main className='px-16 py-6 bg-gray-100'>
        <div className='flex justify-center md:justify-end'>
          <a href="#" className='text-primary'>Login</a>
          <a href="#" className='text-primary ml-2'>Signup</a>
        </div>

        <header>
          <h2 className='text-gray-700 text-6xl font-semibold'>Recipes</h2>
          <h3 className='text-2xl font-semibold'>For Foodies</h3>
        </header>

        <div>
          <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Latest Recipes</h4>

          <div className='mt-8'>
            <div className='card'>
              <img src="images/stew.jpg" alt="stew" className='w-full h-32 sm:h-48 object-cover'/>
              <div className='m-4'>
                <span className='font-bold'>5 Bean Chilli Stew</span>
                <span className='block text-gray-500 text-sm'>Recipe by Mario</span>
              </div>
              <div className='badge'>
                <span>25 mins</span>
              </div>
            </div>

            <div className='card'>
              <img src="images/noodles.jpg" alt="noodles" className='w-full h-32 sm:h-48 object-cover'/>
              <div className='m-4'>
                <span className='font-bold'>Veg Noodles</span>
                <span className='block text-gray-500 text-sm'>Recipe by Mario</span>
              </div>
              <div className='badge'>
                <span>25 mins</span>
              </div>
            </div>

            <div className='card'>
              <img src="images/curry.jpg" alt="curry" className='w-full h-32 sm:h-48 object-cover'/>
              <div className='m-4'>
                <span className='font-bold'>Tofu Curry</span>
                <span className='block text-gray-500 text-sm'>Recipe by Mario</span>
              </div>
              <div className='badge'>
                <span>25 mins</span>
              </div>
            </div>
          </div>

          <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Most Popular</h4>

          <div className='mt-8'>
            {/* cards go here */}
          </div>

          <div className='flex justify-center'>
            <div className='bg-secondary-100 text-secondary-200'>Load More</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
