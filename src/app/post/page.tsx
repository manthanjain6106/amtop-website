import Image from 'next/image';

export default function PostPage() {
  return (
    <>
      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/post-page.png"
          alt="Post Page Background"
          fill
          className="object-cover z-0"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900 }}>
            <span className="text-white">How to Transform Your Knowledge<br className="hidden md:block" /> into a </span>
            <span className="text-[#F7C948]">Million-Dollar eBook Empire</span>
          </h1>
          <p className="text-lg sm:text-xl text-white max-w-2xl mx-auto" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
            We are the catalyst for extraordinary business transformation. Our proven methodologies don&apos;t just improve performance—they revolutionize how leaders think, act, and achieve.
          </p>
        </div>
      </div>
      {/* Content Section */}
      <div className="bg-white w-full min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Placeholder for image/video */}
          <div className="w-full h-64 bg-[#B3B4B7] rounded-2xl mb-10" />
          {/* Centered paragraph */}
          <p className="text-center text-xl text-[#222] mb-10 font-serif max-w-3xl mx-auto" style={{ fontFamily: 'Lora, serif', fontWeight: 400 }}>
            Lorem ipsum dolor sit amet consectetur. Suspendisse sed et diam id mattis amet. Volutpat id ipsum eu ut tellus praesent feugiat tellus. Quam quisque lacus nulla leo. Amet ut in leo amet. Risus feugiat cursus in in elit urna dictumst et sed.
          </p>
          {/* Table of Content Heading */}
          <h2 className="text-2xl font-extrabold text-center mb-6 font-serif tracking-wide text-black" style={{ fontFamily: 'Lora, serif', fontWeight: 700 }}>Table of Content</h2>
          {/* Table of Contents List */}
          <ol className="text-xl text-[#444] font-serif max-w-2xl mx-auto list-decimal pl-6" style={{ fontFamily: 'Lora, serif', fontWeight: 400 }}>
            <li> Lorem ipsum dolor sit amet consectetur
              <ol className="list-decimal pl-6 text-lg text-gray-500" style={{ fontFamily: 'Lora, serif', fontWeight: 400 }}>
                <li>Quam quisque lacus nulla leo.</li>
                <li>Quam quisque lacus nulla leo.</li>
                <li>uam quisque lacus nulla leo.</li>
              </ol>
            </li>
            <li> Rutrum sem aenean aliquet diam cursus consectetur sit id.
              <ol className="list-decimal pl-6 text-lg text-gray-500" style={{ fontFamily: 'Lora, serif', fontWeight: 400 }}>
                <li>Quam quisque lacus nulla leo</li>
                <li>Quam quisque lacus nulla leo.</li>
                <li>Quam quisque lacus nulla leo.</li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
      {/* Parts Section */}
      <div className="bg-gradient-to-r from-[#C7C8D7] to-[#F3E9D6] w-full py-8 px-12">
        <div className="space-y-10">
          {/* Part 1 */}
          <div>
            <h3 className="font-bold text-black text-xl mb-2" style={{ fontFamily: 'Lora, serif', fontWeight: 700 }}>Part 1 :- Lorem ipsum dolor sit amet consectetur</h3>
            <div className="w-full h-48 bg-[#B3B4B7] rounded-2xl mb-3" />
            <p className="text-base text-gray-700 mb-6" style={{ fontFamily: 'Lora, serif', fontWeight: 400 }}>Lorem ipsum dolor sit amet consectetur. Ut lobortis dui vitae massa ullamcorper eu adipiscing tellus tortor. Dignissim faucibus non honect egestas senectus. Sed cursus id aliquam tristique lobortis. Purus placerat vestibulum nec eget. In nunc augue sed tristique. Vitae placerat in ultricies tempor. Erat pharetra lacus congue massa pellentesque ornare non venenatis ultricies.</p>
            {/* Subsections */}
            <div className="space-y-3">
              <div>
                <h4 className="font-bold text-base text-black mb-1" style={{ fontFamily: 'Lora, serif', fontWeight: 700 }}>1.1 Lorem ipsum dolor sit amet consectetur.</h4>
                <p className="text-base text-gray-700 mb-6" style={{ fontFamily: 'Lora, serif', fontWeight: 400 }}>Lorem ipsum dolor sit amet consectetur. Ut lobortis dui vitae massa ullamcorper eu adipiscing tellus tortor. Dignissim faucibus non honect egestas senectus. Sed cursus id aliquam tristique lobortis. Purus placerat vestibulum nec eget. In nunc augue sed tristique. Vitae placerat in ultricies tempor. Erat pharetra lacus congue massa pellentesque ornare non venenatis ultricies.</p>
              </div>
              <div>
                <h4 className="font-bold text-base text-black mb-1" style={{ fontFamily: 'Lora, serif', fontWeight: 700 }}>1.2 Lorem ipsum dolor sit amet consectetur.</h4>
                <div className="w-full h-64 bg-[#B3B4B7] rounded-2xl mb-3" />
                <p className="text-base text-gray-700 mb-6" style={{ fontFamily: 'Lora, serif', fontWeight: 400 }}>Lorem ipsum dolor sit amet consectetur. Ut lobortis dui vitae massa ullamcorper eu adipiscing tellus tortor. Dignissim faucibus non honect egestas senectus. Sed cursus id aliquam tristique lobortis. Purus placerat vestibulum nec eget. In nunc augue sed tristique. Vitae placerat in ultricies tempor. Erat pharetra lacus congue massa pellentesque ornare non venenatis ultricies.</p>
              </div>
              <div>
                <h4 className="font-bold text-base text-black mb-1" style={{ fontFamily: 'Lora, serif', fontWeight: 700 }}>1.3 Lorem ipsum dolor sit amet consectetur.</h4>
                <p className="text-base text-gray-700 mb-6" style={{ fontFamily: 'Lora, serif', fontWeight: 400 }}>Lorem ipsum dolor sit amet consectetur. Ut lobortis dui vitae massa ullamcorper eu adipiscing tellus tortor. Dignissim faucibus non honect egestas senectus. Sed cursus id aliquam tristique lobortis. Purus placerat vestibulum nec eget. In nunc augue sed tristique. Vitae placerat in ultricies tempor. Erat pharetra lacus congue massa pellentesque ornare non venenatis ultricies.</p>
              </div>
            </div>
          </div>
          {/* Part 2 */}
          <div>
            <h3 className="font-bold text-black text-xl mb-2" style={{ fontFamily: 'Lora, serif', fontWeight: 700 }}>Part 2 :- Lorem ipsum dolor sit amet consectetur</h3>
            <div className="w-full h-48 bg-[#B3B4B7] rounded-2xl mb-3" />
            <p className="text-base text-gray-700 mb-6" style={{ fontFamily: 'Lora, serif', fontWeight: 400 }}>Lorem ipsum dolor sit amet consectetur. Ut lobortis dui vitae massa ullamcorper eu adipiscing tellus tortor. Dignissim faucibus non honect egestas senectus. Sed cursus id aliquam tristique lobortis. Purus placerat vestibulum nec eget. In nunc augue sed tristique. Vitae placerat in ultricies tempor. Erat pharetra lacus congue massa pellentesque ornare non venenatis ultricies.</p>
            {/* Subsections */}
            <div className="space-y-3">
              <div>
                <h4 className="font-bold text-base text-black mb-1" style={{ fontFamily: 'Lora, serif', fontWeight: 700 }}>2.1 Lorem ipsum dolor sit amet consectetur.</h4>
                <p className="text-base text-gray-700 mb-6" style={{ fontFamily: 'Lora, serif', fontWeight: 400 }}>Lorem ipsum dolor sit amet consectetur. Ut lobortis dui vitae massa ullamcorper eu adipiscing tellus tortor. Dignissim faucibus non honect egestas senectus. Sed cursus id aliquam tristique lobortis. Purus placerat vestibulum nec eget. In nunc augue sed tristique. Vitae placerat in ultricies tempor. Erat pharetra lacus congue massa pellentesque ornare non venenatis ultricies.</p>
              </div>
              <div>
                <h4 className="font-bold text-base text-black mb-1" style={{ fontFamily: 'Lora, serif', fontWeight: 700 }}>Lorem ipsum dolor sit amet consectetur</h4>
                <p className="text-base text-gray-700 mb-2" style={{ fontFamily: 'Lora, serif', fontWeight: 400 }}>Lorem ipsum dolor sit amet consectetur. Ut lobortis dui vitae massa ullamcorper eu adipiscing tellus tortor. Dignissim faucibus non honect egestas senectus. Sed cursus id aliquam tristique lobortis. Purus placerat vestibulum nec eget. In nunc augue sed tristique. Vitae placerat in ultricies tempor. Erat pharetra lacus congue massa pellentesque ornare non venenatis ultricies.</p>
                <h4 className="font-bold text-base text-black mb-1" style={{ fontFamily: 'Lora, serif', fontWeight: 700 }}>2.2 Lorem ipsum dolor sit amet consectetur.</h4>
                <p className="text-base text-gray-700 mb-6" style={{ fontFamily: 'Lora, serif', fontWeight: 400 }}>Lorem ipsum dolor sit amet consectetur. Ut lobortis dui vitae massa ullamcorper eu adipiscing tellus tortor. Dignissim faucibus non honect egestas senectus. Sed cursus id aliquam tristique lobortis. Purus placerat vestibulum nec eget. In nunc augue sed tristique. Vitae placerat in ultricies tempor. Erat pharetra lacus congue massa pellentesque ornare non venenatis ultricies.</p>
              </div>
              <div>
                <h4 className="font-bold text-base text-black mb-1" style={{ fontFamily: 'Lora, serif', fontWeight: 700 }}>2.3 Lorem ipsum dolor sit amet consectetur.</h4>
                <p className="text-base text-gray-700 mb-6" style={{ fontFamily: 'Lora, serif', fontWeight: 400 }}>Lorem ipsum dolor sit amet consectetur. Ut lobortis dui vitae massa ullamcorper eu adipiscing tellus tortor. Dignissim faucibus non honect egestas senectus. Sed cursus id aliquam tristique lobortis. Purus placerat vestibulum nec eget. In nunc augue sed tristique. Vitae placerat in ultricies tempor. Erat pharetra lacus congue massa pellentesque ornare non venenatis ultricies.</p>
              </div>
            </div>
          </div>
          {/* Part 3 */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <h4 className="font-bold text-base text-black mb-1" style={{ fontFamily: 'Lora, serif', fontWeight: 700 }}>3.1 Lorem ipsum dolor sit amet consectetur.</h4>
              <p className="text-base text-gray-700 mb-6" style={{ fontFamily: 'Lora, serif', fontWeight: 400 }}>Lorem ipsum dolor sit amet consectetur. Ut lobortis dui vitae massa ullamcorper eu adipiscing tellus tortor. Dignissim faucibus non honect egestas senectus. Sed cursus id aliquam tristique lobortis. Purus placerat vestibulum nec eget. In nunc augue sed tristique. Vitae placerat in ultricies tempor. Erat pharetra lacus congue massa pellentesque ornare non venenatis ultricies.</p>
              <h4 className="font-bold text-base text-black mb-1 mt-4" style={{ fontFamily: 'Lora, serif', fontWeight: 700 }}>3.2 Lorem ipsum dolor sit amet consectetur.</h4>
              <p className="text-base text-gray-700 mb-6" style={{ fontFamily: 'Lora, serif', fontWeight: 400 }}>Lorem ipsum dolor sit amet consectetur. Ut lobortis dui vitae massa ullamcorper eu adipiscing tellus tortor. Dignissim faucibus non honect egestas senectus. Sed cursus id aliquam tristique lobortis. Purus placerat vestibulum nec eget. In nunc augue sed tristique. Vitae placerat in ultricies tempor. Erat pharetra lacus congue massa pellentesque ornare non venenatis ultricies.</p>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="w-full h-48 bg-[#B3B4B7] rounded-2xl mb-3" />
            </div>
          </div>
          <div>
            <h4 className="font-bold text-base text-black mb-1" style={{ fontFamily: 'Lora, serif', fontWeight: 700 }}>3.3 Lorem ipsum dolor sit amet consectetur.</h4>
            <p className="text-base text-gray-700 mb-6" style={{ fontFamily: 'Lora, serif', fontWeight: 400 }}>Lorem ipsum dolor sit amet consectetur. Ut lobortis dui vitae massa ullamcorper eu adipiscing tellus tortor. Dignissim faucibus non honect egestas senectus. Sed cursus id aliquam tristique lobortis. Purus placerat vestibulum nec eget. In nunc augue sed tristique. Vitae placerat in ultricies tempor. Erat pharetra lacus congue massa pellentesque ornare non venenatis ultricies.</p>
          </div>
        </div>
      </div>
    </>
  );
} 