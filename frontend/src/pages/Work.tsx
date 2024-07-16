import selectedProjects from '../data/selectedProjects.json';
import drumMachineImage from '../assets/drum-machine.png';
import markdownPreviewerImage from '../assets/markdown-previewer.png';
import pokemonSearchAppImage from '../assets/pokemon-search-app.png';
import palindromeCheckerImage from '../assets/palindrome-checker.png';

const imageMap: { [key: string]: string } = {
    'Drum Machine': drumMachineImage,
    'Markdown Previewer': markdownPreviewerImage,
    'Pokemon Search App': pokemonSearchAppImage,
    'Palindrome Checker': palindromeCheckerImage
};

function Work() {
    return (
        <div className="bg-primary-background">
            <div className="m-auto max-w-3xl text-center py-20">
                <h2 className='font-semibold'>Selected Projects</h2>
                <ul className='grid gap-4 grid-cols-2 mt-10'>
                    {selectedProjects.map(({ name, description, url }) => {
                        return (
                            <li key={name} className="text-left space-y-4 rounded-lg bg-primary-white p-4">
                                <img src={imageMap[name]} alt={name} className='w-full rounded-lg' />
                                <h4>{name}</h4>
                                <p>{description}</p>
                                <a href={url} className='btn mt-8 inline-block'>View this project</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Work;