import imgg from '../assets/imgg.jpg'

function Hero() {
  return (
    <div className="flex w-100 h-dvh items-center bg-custom-gradient justify-center">
        <div className="w-4/12">
            <h1 className="text-4xl font-bold text-gray-900 h-fit">Hi, I'm Akchayat Yasser</h1>
            <p className="mt-4 text-gray-600">A FrontEnd Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, reiciendis aliquam dolor quod assumenda fuga alias voluptatum accusamus dicta architecto? Tenetur necessitatibus beatae praesentium, iusto atque ducimus sit modi aliquid.</p>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">Get Started</button>
        </div>
        <div className="w-4/12">
           <h1 className="text-4xl font-bold text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
           <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum rem tempora architecto ut, atque porro aspernatur sit perferendis at id laborum minima, debitis facilis quisquam voluptas nihil beatae nesciunt.
           </p>
        </div>
      
    </div>
  )
}

export default Hero
