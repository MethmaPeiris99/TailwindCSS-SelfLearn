import './App.css';

function App() {
  return (
    <body className='text-gray-600 font-body'>
      <div className='grid md:grid-cols-3'>
        <div className='md:col-span-1'>
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>About</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                    </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Contact</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <main className='px-16 py-6 bg-gray-100 md:col-span-2'>
          <div className='flex justify-center md:justify-end'>
            <a href="#" className='btn text-primary border-primary md:border-2'>Login</a>
            <a href="#" className='btn text-primary ml-2 border-primary md:border-2'>Signup</a>
          </div>

          <header>
            <h2 className='text-gray-700 text-6xl font-semibold'>Recipes</h2>
            <h3 className='text-2xl font-semibold'>For Foodies</h3>
          </header>

          <div>
            <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Latest Recipes</h4>

            <div className='mt-8 grid lg:grid-cols-3 gap-10'>
              <div className='card'>
                <img src="images/stew.jpg" alt="stew" className='w-full h-32 sm:h-48 object-cover'/>
                <div className='m-4'>
                  <span className='font-bold'>5 Bean Chilli Stew</span>
                  <span className='block text-gray-500 text-sm'>Recipe by Mario</span>
                </div>
                <div className='badge'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>25 mins</span>
                </div>
              </div>
            </div>

            <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Most Popular</h4>

            <div className='mt-8'>
              {/* cards go here */}
            </div>

            <div className='flex justify-center'>
              <div className='btn bg-secondary-100 text-secondary-200'>Load More</div>
            </div>
          </div>
        </main>
      </div>
    </body>
  );
}

export default App;
