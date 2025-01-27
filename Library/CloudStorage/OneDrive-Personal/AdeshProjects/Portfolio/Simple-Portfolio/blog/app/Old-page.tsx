/*import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About Me
      </h1>
      <p className="mb-4">
        {`Accomplished Presales Solution Architect with over 16 years of experience in Telecom BSS, Security-based solutions, and headless commerce-based solution design. My expertise lies in providing quality RFX Responses & bridging business requirements with innovative technology solutions, helping enterprises achieve digital transformation and operational efficiency.`}
      </p>
      <p className="mb-4">
        {`Hands on solution design & product experiences: Telecom BSS, Biometric Authentication, Digital Marketplace, API Marketplace, Campaign Management, Headless Commerce, B2B, B2C, Product Catalog, Order Management, Enterprise SaaS, KYC, Solution Architecture, Secure Document Issuance, Fraud Prevention Systems, Cloud-Based Solutions, Partner Management, and Digital Transformation.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}*/

import Image from 'next/image';
import { BlogPosts } from 'app/components/posts';

export default function Page() {
  return (
    <section>
      <div className="flex flex-col sm:flex-row items-center mb-8">
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
          <h1 className="text-2xl font-semibold tracking-tighter">
            Hello, I am Adesh.
          </h1>
          <h2 className="text-lg text-gray-600">
            A Presales Solution Architect.
          </h2>
        </div>
      </div>

      <h2 className="mb-8 text-2xl font-semibold tracking-tighter">
        About Me
      </h2>

      {/* First Paragraph Justified */}
      <p className="mb-4 text-justify">
        {`Accomplished `}
        <span className="font-bold text-gray-800">Presales Solution Architect</span>
        {` with over `}
        <span className="font-bold text-gray-800">16 years of experience</span>
        {` in `}
        <span className="text-gray-800">Telecom BSS</span>, 
        <span className="text-gray-800"> Security-based solutions</span>, 
        and <span className="text-gray-800">headless commerce-based solution design</span>. 
        My expertise lies in providing quality 
        <span className="font-bold text-gray-800"> RFX Responses</span> & bridging business requirements with 
        <span className="font-bold text-gray-800"> innovative technology solutions</span>, 
        helping enterprises achieve <span className="text-gray-800">digital transformation</span> and 
        <span className="text-gray-800">operational efficiency</span>.
      </p>

      {/* Second Paragraph Bold with Two-Column Bullet Points */}
      <p className="mb-4 font-bold">
        Hands on solution design & product experiences:
      </p>
      <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
        <li className="text-gray-800">Telecom BSS</li>
        <li className="text-gray-800">Biometric Authentication</li>
        <li className="text-gray-800">Digital Marketplace</li>
        <li className="text-gray-800">API Marketplace</li>
        <li className="text-gray-800">Campaign Management</li>
        <li className="text-gray-800">Headless Commerce</li>
        <li className="text-gray-800">B2B</li>
        <li className="text-gray-800">B2C</li>
        <li className="text-gray-800">Product Catalog</li>
        <li className="text-gray-800">Order Management</li>
        <li className="text-gray-800">Enterprise SaaS</li>
        <li className="text-gray-800">KYC</li>
        <li className="text-gray-800">Solution Architecture</li>
        <li className="text-gray-800">Secure Document Issuance</li>
        <li className="text-gray-800">Fraud Prevention Systems</li>
        <li className="text-gray-800">Cloud-Based Solutions</li>
        <li className="text-gray-800">Partner Management</li>
        <li className="text-gray-800">Digital Transformation</li>
      </ul>

      <h2 className="mb-8 text-2xl font-semibold tracking-tighter">
        Have a look at my blogs and architectures
      </h2>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}


