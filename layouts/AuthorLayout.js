import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="w-48 h-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <div>{children}</div>
            <div className="pt-3 pb-3">
              <h2>Experience</h2>
              {/* <div>
                <h3>Keio University</h3>
                <p>Faculty of Policy Management</p>
              </div> */}
              <div className="px-4 pb-7 mb-5 border border-gray-300 rounded-md hover:shadow-lg transition duration-300">
                <h3>JPchain Inc.</h3>
                <div>CEO</div>
                <div>Apr 2022 - Present</div>
              </div>
              <div className="px-4 pb-7 mb-5 border border-gray-300 rounded-md hover:shadow-lg transition duration-300">
                <h3>JPYC Inc.</h3>
                <div>Software Engineer, CS</div>
                <div>shorttime regular employee</div>
                <div>Feb 2021 - Dec 2022</div>
                <div>TypeScript, React, Next, Node, Solidity, GCP, AWS</div>
              </div>
              <div className="px-4 pb-7 mb-5 border border-gray-300 rounded-md hover:shadow-lg transition duration-300">
                <h3>Hopscotch Co., Ltd.</h3>
                <div>Software Engineer</div>
                <div>Aug 2021 - Mar 2022</div>
                <div>TypeScript, React, Firebase, GCP</div>
              </div>
              <div className="px-4 pb-7 mb-5 border border-gray-300 rounded-md hover:shadow-lg transition duration-300">
                <h3>CARCH, Inc.</h3>
                <div>Application Engineer</div>
                <div>Internship</div>
                <div>Nov 2020 - Mar 2021</div>
                <div>Dart, Flutter, Firebase</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
