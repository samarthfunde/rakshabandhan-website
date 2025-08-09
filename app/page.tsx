import Link from "next/link"
import Image from "next/image"
import { Heart, Gift, Sparkles, Handshake } from "lucide-react" // Ganesha removed
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function RakshaBandhanPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-gradient-to-br from-pink-50 to-orange-50 text-gray-800">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center justify-center bg-white shadow-sm sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-pink-600">
          <Heart className="h-8 w-8 fill-pink-600 animate-pulse" />
<span>
  रक्षाबंधन - <span className="text-sm italic">Specialy Fortune Cloud</span>
</span>

        </Link>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-100 via-orange-100 to-yellow-100 opacity-70"></div>
          <div className="container px-4 md:px-6 relative z-10 text-center">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-pink-700 drop-shadow-lg animate-fade-in-up">
                रक्षाबंधन: प्रेम आणि बंधनाचे प्रतीक
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed animate-fade-in-up animation-delay-200">
                भाऊ-बहिणीच्या पवित्र नात्याचा उत्सव!
              </p>
              <div className="flex justify-center mt-8 animate-fade-in-up animation-delay-400">
              <Image
  src="/rakhi-festival.webp"
  width={600}
  height={400}
  alt="Raksha Bandhan Celebration"
  className="rounded-xl shadow-2xl border-4 border-white transform transition-transform duration-500 hover:scale-105"
/>

              </div>
              <p className="text-2xl md:text-3xl font-semibold text-orange-600 mt-8 animate-fade-in-up animation-delay-600">
               सर्व भावाकडून लाडक्या बहिणींना शुभेच्छा!
              </p>
            </div>
          </div>
        </section>

        {/* About Raksha Bandhan Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-600">रक्षाबंधन म्हणजे काय?</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                रक्षाबंधन हा हिंदू धर्मातील एक महत्त्वाचा सण आहे, जो भाऊ आणि बहिणीच्या पवित्र नात्याचा उत्सव साजरा करतो. या दिवशी
                बहीण आपल्या भावाच्या मनगटावर राखी बांधते, त्याच्या दीर्घायुष्यासाठी आणि समृद्धीसाठी प्रार्थना करते. बदल्यात, भाऊ आपल्या
                बहिणीचे रक्षण करण्याचे आणि तिला आयुष्यभर साथ देण्याचे वचन देतो. हा सण केवळ रक्ताच्या नात्यापुरता मर्यादित नसून, प्रेम,
                विश्वास आणि संरक्षणाचे प्रतीक आहे.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                या दिवशी कुटुंबातील सदस्य एकत्र येतात, गोडधोड खातात आणि आनंद साजरा करतात. राखी बांधण्याचा विधी हा केवळ एक धागा
                बांधणे नसून, ते दोन आत्म्यांना जोडणारे एक अदृश्य बंधन आहे. हा सण आपल्याला नात्यांचे महत्त्व आणि एकमेकांबद्दलची जबाबदारी
                शिकवतो.
              </p>
            </div>
            <div className="flex justify-center">
  <Image
  src="/raksha-bandhan.webp"
  width={500}
  height={400}
  alt="Sister tying Rakhi"
  className="rounded-xl shadow-lg border-4 border-orange-100 transform transition-transform duration-500 hover:scale-105"
/>

            </div>
          </div>
        </section>

        {/* Raksha Bandhan Shayari Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-orange-50 to-pink-50">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-12">रक्षाबंधन शायरी</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="text-orange-500">शायरी १</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700 italic">
                    "बहिणीचे प्रेम म्हणजे एक अनमोल ठेवा,
                    <br />
                    भावासाठी ती नेहमीच असते देवा."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="text-orange-500">शायरी २</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700 italic">
                    "राखीचा धागा म्हणजे प्रेमाचे बंधन,
                    <br />
                    भाऊ-बहिणीचे नाते हेच जीवनाचे स्पंदन."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="text-orange-500">शायरी ३</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700 italic">
                    "सुख-दुःखात साथ देणारी बहीण,
                    <br />
                    तिच्याशिवाय जीवन आहे अपूर्ण."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="text-orange-500">शायरी ४</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700 italic">
                    "भाऊ-बहिणीचे नाते हे असे,
                    <br />
                    जिथे प्रेम आणि विश्वास नेहमीच वसे."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="text-orange-500">शायरी ५</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700 italic">
                    "राखी पौर्णिमा आली, आनंदाचा क्षण,
                    <br />
                    भाऊ-बहिणीच्या प्रेमाचे हे सुंदर बंधन."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="text-orange-500">शायरी ६</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700 italic">
                    "तुझ्या रक्षणाचे वचन, माझ्या हाती राखी,
                    <br />
                    हेच नाते आहे, जे कधीही न तुटकी."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Image Gallery Section
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-12">रक्षाबंधन क्षण</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  width={400}
                  height={300}
                  alt="Brother and sister laughing during Raksha Bandhan"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold">आनंदाचे क्षण</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  width={400}
                  height={300}
                  alt="Sister giving gift to brother on Raksha Bandhan"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold">भेटवस्तूंचा आनंद</p>
                </div>
              </div> */}
              {/* <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  width={400}
                  height={300}
                  alt="Family celebrating Raksha Bandhan together"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold">कौटुंबिक सोहळा</p>
                </div>
              </div> */}
              {/* <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  width={400}
                  height={300}
                  alt="Traditional Raksha Bandhan thali"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold">पारंपरिक विधी</p>
                </div>
              </div> */}
              {/* <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  width={400}
                  height={300}
                  alt="Brother and sister hugging after Rakhi ceremony"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold">प्रेमाची मिठी</p>
                </div>
              </div> */}
              {/* <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  width={400}
                  height={300}
                  alt="Collection of colorful rakhis"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold">राखी आणि मिठाई</p>
                </div>
              </div> */}
              {/* <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  width={400}
                  height={300}
                  alt="Brother blessing his sister"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold">भावाचा आशीर्वाद</p>
                </div>
              </div> */}
              {/* <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  width={400}
                  height={300}
                  alt="Children celebrating Raksha Bandhan"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold">लहानग्यांचा आनंद</p>
                </div>
              </div> */}
            {/* </div>
          </div>
        </section> */}

       {/* Ganpati Bappa Blessings Section */}
<section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-yellow-50 to-orange-100 text-center">
  <div className="container px-4 md:px-6 space-y-8">
    <Sparkles className="h-20 w-20 text-orange-700 mx-auto" /> {/* Replaced Ganesha with Sparkles */}
    <h2 className="text-3xl md:text-4xl font-bold text-orange-700">गणपती बाप्पांचे आशीर्वाद</h2>
    <p className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
      या पवित्र रक्षाबंधनाच्या दिवशी, विघ्नहर्ता गणपती बाप्पांचे आशीर्वाद आपल्या सर्वांवर राहोत. त्यांचे कृपाछत्र आपल्या नात्यांना
      अधिक दृढ करो आणि जीवनात सुख-समृद्धी आणो.
    </p>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 justify-items-center">
      
      {/* Card 1 */}
      <div className="relative group overflow-hidden rounded-xl shadow-lg w-[250px] h-[180px]">
        <Image
          src="/bappa.jpg"
          width={250}
          height={180}
          alt="Lord Ganesha Idol"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-lg font-semibold">शुभ आशीर्वाद</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative group overflow-hidden rounded-xl shadow-lg w-[250px] h-[180px]">
        <Image
          src="/bappa 1.avif"
          width={250}
          height={180}
          alt="Detailed Ganesha Idol"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-lg font-semibold">कृपा दृष्टी</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="relative group overflow-hidden rounded-xl shadow-lg w-[250px] h-[180px]">
        <Image
          src="/bappa 2.jpg"
          width={250}
          height={180}
          alt="Festive Ganesha"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-lg font-semibold">मंगलमूर्ती</p>
        </div>
      </div>

    </div>
  </div>
</section>


        {/* Concluding Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-pink-50 to-orange-50 text-center">
          <div className="container px-4 md:px-6 space-y-6">
            <Sparkles className="h-16 w-16 text-orange-500 mx-auto animate-bounce-slow" />
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600">रक्षाबंधनाच्या हार्दिक शुभेच्छा!</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              हे पवित्र बंधन असेच दृढ राहो, प्रेम आणि आपुलकीने भरलेले राहो. प्रत्येक भाऊ-बहिणीचे नाते असेच बहरत राहो, हीच सदिच्छा!
            </p>
            <div className="flex justify-center items-center gap-4 pt-4">
              <Heart className="h-10 w-10 fill-red-500 text-red-500 animate-heart-beat" />
              <Gift className="h-10 w-10 text-green-600 animate-float" />
              <Handshake className="h-10 w-10 text-purple-600 animate-pulse" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white text-gray-600">
        <p className="text-sm">&copy; {new Date().getFullYear()} Raksha Bandhan. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <p className="text-sm font-medium">Created By Samarth</p>
        </nav>
      </footer>
    </div>
  )
}
