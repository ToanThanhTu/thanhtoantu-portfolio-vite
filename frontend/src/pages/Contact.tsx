import contactMethods from '../data/contactMethods.json';

import EmailIcon from '@mui/icons-material/Email';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const iconMap: { [key: string]: JSX.Element } = {
    Email: <EmailIcon sx={{ fontSize: 35, marginRight: 1 }} />,
    Phone: <SmartphoneIcon sx={{ fontSize: 35, marginRight: 1 }} />,
    LinkedIn: <LinkedInIcon sx={{ fontSize: 35, marginRight: 1 }} />,
    GitHub: <GitHubIcon sx={{ fontSize: 35, marginRight: 1 }} />
};

function Contact() {
    return (
        <div className="portfolio-width py-96 text-center">
            <p className='italic'>Let's work together!</p>
            <h2 className='font-semibold'>Contact Me</h2>
            <ul className='flex justify-center space-x-4 mt-10'>
                {contactMethods.map(({ name, icon, url }) => {
                    return (
                        <li key={name} className="text-2xl">                            
                            <a href={url} target="_blank" rel="noreferrer">{iconMap[icon]}{name}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Contact;