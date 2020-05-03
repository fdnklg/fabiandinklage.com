import {
  sitemapBuilder as buildSitemap,
  paramsApplier as applyParams,
} from 'react-router-sitemap';
import path from 'path'; // add path which will be needed for file write
import fs from 'fs'; // import file system object

const routes = ['/home/de', '/home/en', '/contact/de', '/contact/en', '/profile/de', '/legal/de', '/legal/en', '/projects/:slug'];

const config = {
  '/projects/:slug': [
    {
      slug: [
        'gender-equality/de',
        'cityinflux/de',
        'edutech/de',
        'rhythmoftheroad/de',
        'bikesharing/de',
        'curricle/de',
        'candidates/de',
        'invisties/de',
        'gender-equality/en',
        'cityinflux/en',
        'edutech/en',
        'rhythmoftheroad/en',
        'bikesharing/en',
        'curricle/en',
        'candidates/en',
        'invisties/en',
      ],
    },
  ],
};

const paths = applyParams(routes, config);

// use your website root address here. Optimally you can
// include dev and production enviorenments with variable
const hostname = 'https://fabiandinklage.com';

// define our destination folder and sitemap file name
const dest = path.resolve('public/', 'sitemap.xml');

// Generate sitemap and return Sitemap instance
const sitemap = buildSitemap(hostname, paths);

// write sitemap.xml file in /public folder
// Access the sitemap content by converting it with .toString() method
fs.writeFileSync(dest, sitemap.toString());
