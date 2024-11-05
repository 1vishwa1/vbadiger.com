export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    homeTitle: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Vishwanath Badiger',
    homeTitle: "vb.",
    subtitle: 'Personal website of Vishwanath Badiger',
    description: 'Personal website of Vishwanath Badiger',
    image: {
        src: '/favicon.svg',
        alt: 'Personal website of Vishwanath Badier'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
    ],
    footerNavLinks: [
        {
            text: 'Tags',
            href: '/tags'
        },
        {
            text: 'Terms',
            href: '/terms'
        }
    ],
    socialLinks: [
        {
            text: 'Medium',
            href: 'https://medium.com/@vishwanath.masters'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/1vishwanath'
        },
        {
            text: 'LinkedIn',
            href: 'https://linkedin.com/in/vishwanath-badiger'
        }
    ],
    hero: {
        title: "Hey, I'm Vishwanath! 👋",
        text: "I'm currently a Master's student at Northeastern University, Boston, studying Engineering Management. I have about two years of experience working on various end-to-end verticals from supply chain, logistics, marketing, and other verticals for an automotive startup in Bangalore, India, and have also earned a Bachelor of Engineering in Mechanical Engineering from the esteemed Visvesvaraya Technological University. This is my personal website, where I hope to share my experience and knowledge with the world on topics ranging from automotive intricacies and engineering marvels, to the complexities of supply chain, the enchanting world of Indian music, and everything else in-between. Hope you enjoy!",
        // image: {
        //     src: '/hero.jpeg',
        //     alt: 'A person sitting at a desk in front of a computer'
        // },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    // only to be enabled when I have a newsletter
    // subscribe: {
    //     title: 'Subscribe to my newsletter',
    //     text: 'One update per week. All the latest posts directly in your inbox.',
    //     formUrl: '#'
    // },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
