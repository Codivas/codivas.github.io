export const url = process.env.URL || 'http://localhost:8080';
export const siteName = 'Codivas';
export const siteDescription = 'Somos uma comunidade dedicada a empoderar mulheres no campo da tecnologia.';
export const siteType = 'Person'; // schema
export const locale = 'pt_BR';
export const lang = 'pt';
export const skipContent = 'Skip to content';
export const author = {
  name: 'coletivo codivas', // i.e. Lene Saile - page / blog author's name. Must be set.
  avatar: '/l.png', // path to the author's avatar. In this case just using a favicon.
  email: 'coletivocodivas@gmail.com', // i.e. hola@lenesaile.com - email of the author
  website: 'https://www.codivas.com.br' // i.e. https.://www.lenesaile.com - the personal site of the author
};
export const creator = {
  name: 'Coletivo Codivas', // i.e. Lene Saile - creator's (developer) name.
  email: 'coletivocodivas@gmail.com',
  website: 'https://www.codivas.com.br',
  social: 'https://codivas.com.br/social'
};
export const pathToSvgLogo = 'src/assets/images/logo.jpg'; // used for favicon generation
export const themeColor = '#DD4462'; //  Manifest: defines the default theme color for the application
export const themeBgColor = '#FBFBFB'; // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
export const opengraph_default = '/assets/images/template/opengraph-default.jpg'; // fallback/default meta image
export const opengraph_default_alt =
  "Visible content: An Eleventy starter with CUBE CSS, Cube CSS, Every Layout, Design Tokens and Tailwind for uitility classes. A workflow for building modern and resilient websites, introduced by Andy Bell's project buildexcellentwebsit.es"; // alt text for default meta image"
export const blog = {
  // RSS feed
  name: 'My Web Development Blog',
  description: 'Tell the word what you are writing about in your blog. It will show up on feed readers.',
  // feed links are looped over in the head. You may add more to the array.
  feedLinks: [
    {
      title: 'Atom Feed',
      url: '/feed.xml',
      type: 'application/atom+xml'
    }
  ],
  // Tags
  tagSingle: 'Tag',
  tagPlural: 'Tags',
  tagMore: 'More tags:',
  // pagination
  paginationLabel: 'Blog',
  paginationPage: 'Page',
  paginationPrevious: 'Previous',
  paginationNext: 'Next',
  paginationNumbers: true
};
export const details = {
  aria: 'section controls',
  expand: 'expand all',
  collapse: 'collapse all'
};
export const navigation = {
  navLabel: 'Menu',
  ariaTop: 'Main',
  ariaBottom: 'Complementary',
  ariaPlatforms: 'Platforms',
  drawerNav: false
};
export const themeSwitch = {
  title: 'Tema: ',
  light: 'light',
  dark: 'dark'
};
export const initial = 'select';
export const greenweb = {
  // this goes into src/common/greenweb.njk
  providers: {
    // if you want to add more than one, edit the array directly.
    domain: 'netlify.com',
    service: 'cdn'
  },
  credentials: {
    // optional, eg: 	{ domain='my-org.com', doctype = 'webpage', url = 'https://my-org.com/our-climate-record'}
    domain: '',
    doctype: '',
    url: ''
  }
};
export const viewRepo = {
  // this is for the view/edit on github link. The value in the package.json will be pulled in.
  allow: false,
  infoText: 'View this page on GitHub'
};
export const easteregg = true;
