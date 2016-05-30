import React from 'react';
import { match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import fs from 'fs';

import routes from '../src/routes';

const template = fs.readFileSync('scripts/index.template.html').toString();

['/about', '/feed', '/projects'].forEach(url => {
  match({ routes, location: url }, (error, redirectLocation, renderProps) => {
    const output = renderToString(<RouterContext {...renderProps} />);
    const markup = template.replace('{{markup}}', output);
    fs.writeFileSync(`build/${url}/index.html`, markup);
  });
});
