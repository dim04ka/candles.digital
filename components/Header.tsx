import Image from 'next/image'
import img from '../public/hero.jpg'

export default function Header() { 
  return (
    <header className="relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div className="mx-auto">
        <div className="relative shadow-xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <Image
              priority
              fill
              className="h-full w-full object-cover"
              src={img}
              placeholder="blur" 
              alt="Coffee grinder"
            />
            <div className="absolute inset-0 bg-orange-100 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <p className="relative left-0 right-0 mx-auto mt-5 max-w-xl text-center text-xl  font-semibold uppercase tracking-wide text-white">
              из натуральных ингредиентов
            </p>
            <h1 className="mt-1 text-center font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-7xl">
              <span className="block text-white">Свечи ручной работы </span>
              <span className="block text-white">в Тбилиси</span>
            </h1>
 
          </div>
        </div>
      </div>
    </header>



  )
}
