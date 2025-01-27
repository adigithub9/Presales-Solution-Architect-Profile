import Image from 'next/image';
import { BlogPosts } from 'app/components/posts';
import { AiFillLinkedin } from 'react-icons/ai'; // Official LinkedIn icon from react-icons
import { FileText } from 'lucide-react'; // Resume icon from Lucide

export default function Page() {
  return (
    <section className="prose font-geist">
      <div className="flex flex-col sm:flex-row items-center mb-6">
        {/* Avatar Image */}
        <div className="w-24 h-24 rounded-full overflow-hidden mr-6">
          <Image
            src="/media/avatar.png"
            alt="Adesh's profile picture"
            width={96}
            height={96}
            className="object-cover"
          />
        </div>
        {/* Title and Subtitle */}
        <div>
          <h1 className="text-4xl font-medium tracking-tight leading-[1.278em]">
            Hello, I am Adesh.
          </h1>
          <h2 className="text-xl font-medium tracking-tight leading-[1.455em] text-gray-600">
            Presales Solution Architect: Designing Success, Winning Deals!
          </h2>
        </div>
      </div>

      {/* Links Section */}
      <div className="flex justify-end items-center space-x-4 mb-8">
        {/* LinkedIn Link */}
        <a
          href="https://www.linkedin.com/in/adesh-balyan-45230014/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition underline"
        >
          <AiFillLinkedin className="w-6 h-6" /> {/* Official LinkedIn Icon */}
          <span className="text-link">LinkedIn</span>
        </a>

        {/* Resume Link */}
        <a
          href="/media/Adesh_Resume.pdf" // Path to your PDF file
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition underline"
        >
          <FileText className="w-5 h-5" /> {/* Resume Icon */}
          <span className="text-link">Resume</span>
        </a>
      </div>

      {/* Partition Line */}
      <hr className="border-gray-300 dark:border-gray-600 my-8" />

      <h2 className="text-2xl font-medium tracking-tight leading-[1.385em] mb-8">
        About Me
      </h2>

      {/* Paragraph 1: Expertise and Experience */}
      <p className="mb-6 text-neutral-800 dark:text-neutral-200 leading-[1.556em]">
        As an <span className="font-semibold text-gray-800">Accomplished Presales Solution Architect</span> with 
        <span className="font-semibold text-gray-800"> 16+ years of experience</span>, I specialize in 
        <span className="font-semibold text-gray-800"> Telecom BSS</span>, <span className="font-semibold text-gray-800">KYC</span>, and 
        <span className="font-semibold text-gray-800"> Security-related solutions</span>. 
        My expertise lies in bridging customer needs with 
        <span className="font-semibold text-gray-800"> innovative technology solutions</span>, driving 
        <span className="font-semibold text-gray-800"> digital transformation</span>, and delivering 
        <span className="font-semibold text-gray-800"> operational efficiency</span>. I excel in end-to-end 
        <span className="font-semibold text-gray-800"> RFX processes</span>, ensuring the creation of winning deals tailored to customer requirements, while keeping a strong acumen as a 
        <span className="font-semibold text-gray-800"> Solution Architect</span>.
      </p>

      {/* Paragraph 2: Solutions and Capabilities */}
      <p className="mb-6 text-neutral-800 dark:text-neutral-200 leading-[1.556em]">
        I bring in-depth knowledge of <span className="font-semibold text-gray-800">Digital and API Marketplaces</span>, 
        <span className="font-semibold text-gray-800"> Campaign Management</span>, <span className="font-semibold text-gray-800"> Product Catalog</span>, 
        <span className="font-semibold text-gray-800"> Order Management</span>, 
        <span className="font-semibold text-gray-800"> Enterprise SaaS</span>, <span className="font-semibold text-gray-800"> KYC systems</span>, 
        <span className="font-semibold text-gray-800"> Secure Document Issuance</span>, and 
        <span className="font-semibold text-gray-800"> Fraud Prevention Systems</span>, seamlessly integrating them with cloud-based architectures. 
        My ability to manage multiple deals simultaneously and translate customer requirements into actionable, high-level technical frameworks ensures 
        <span className="font-semibold text-gray-800"> compliance</span>, <span className="font-semibold text-gray-800"> scalability</span>, and 
        <span className="font-semibold text-gray-800"> cost-efficiency</span>.
      </p>

      {/* Paragraph 3: Individual Contributions and Impact */}
      <p className="mb-6 text-neutral-800 dark:text-neutral-200 leading-[1.556em]">
        A strong individual contributor, I bridge the gap between customers and technical teams, facilitating seamless communication and alignment. 
        My expertise in <span className="font-semibold text-gray-800">Partner Management</span>, 
        <span className="font-semibold text-gray-800"> Solution Architecture</span>, and 
        <span className="font-semibold text-gray-800"> Digital Transformation</span> enables me to deliver 
        <span className="font-semibold text-gray-800"> revenue-generating solutions</span> that drive measurable success in competitive markets, 
        while ensuring timely execution and industry alignment.
      </p>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}