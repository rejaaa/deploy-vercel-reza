export default function LandingPage() {
  return (
    <div className="w-full min-h-screen p-3 mx-auto lg:w-1/4">
      <header className="flex-none relative z-50 text-sm font-medium shadow-sm py-5 bg-white">
        <nav className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center flex-wrap">
            <div className="flex items-center">
              <img src="https://logos-world.net/wp-content/uploads/2021/02/Facebook-Messenger-Logo.png" alt="logo" className="h-5" />
            </div>
            <div className="flex items-center ">
              <div className="px-3">Home</div>
              <div className="px-3">Countries</div>
              <div className="px-3">Service</div>
              <div className="px-3">Testimonials</div>
              <div className="px-3">Contact</div>
            </div>
          </div>
        </nav>
      </header>
      <div className="lg:w-1/2 mt-5 w-80 px-10">
        <div className="flex-col items-center">
          <div className="font-bold text-3xl">Learn New Skills Online with top educators</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolore repudiand!</p>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="text-sm font-semibold bg-black text-white inline-block mt-5 py-3 px-5 rounded-lg outline-none">Start Learning Today</a>
        </div>
      </div>

    </div>
  );
}
