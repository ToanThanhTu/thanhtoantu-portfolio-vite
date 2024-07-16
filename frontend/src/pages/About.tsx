// Import icons from Material-UI
import CodeIcon from '@mui/icons-material/Code';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

// Import profile picture, skills and professional development data
import profilePic from "../assets/profile-pic.png";
import skills from "../data/skills.json";
import developments from "../data/professional-dev.json";

function About() {
    return (
        <section className="flex-col justify-between items-center">
            {/* Intro section */} 
            <section className="flex justify-between items-center h-1/2 portfolio-width pt-44 pb-32">
                {/* div with Profile pic and name */} 
                <div className="w-1/2">
                    <img src={profilePic} alt="profile picture" className="w-14 rounded-full mb-6" />
                    <h1>Hello! I'm Thanh Toan Tu</h1>
                    <p className="mt-1 italic">You can also call me Trevor</p>
                </div>
                {/* div with brief profile description and buttons */}
                <div className="w-1/2 space-y-5">
                    <h2>A Software Engineer based in Sydney, Australia</h2>
                    <p>I have a passion for web application development and I'm always looking to learn new things.</p>
                    <div className="pt-5 space-x-4">
                        <button className="btn">Talk with me</button>
                        <button className="btn">See my work</button>
                    </div>
                </div>
            </section>
            {/* Skills and Professional Development section */}
            <section className="bg-primary-background">                
                <section className="flex justify-between space-x-4 portfolio-width py-20">
                    {/* Skills Summary section */}
                    <div className="w-1/2">
                        <h2>Skills Summary</h2>
                        <ul>
                            {skills.map(({ name, content }) => {
                                return (
                                    <li key={name} className='flex mt-6'>
                                        <CodeIcon className='mr-2' />
                                        <div>
                                            <h4>{name}</h4>
                                            <p>{content}</p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    {/* Professional Development section */}
                    <div className="w-1/2">
                        <h2>Professional Development</h2>
                        <ul>
                            {developments.map(({ name, origin }) => {
                                return (
                                    <li key={name} className='flex mt-6'>
                                        <KeyboardDoubleArrowRightIcon className='mr-2' />
                                        <div>
                                            <h4>{name}</h4>
                                            <p>{origin}</p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </section>
            </section>
        </section>
    );
}

export default About;