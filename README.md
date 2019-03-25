# scott.mebberson.codes

Source code and content for my scott.mebberson.codes website.

## Usage

### First time setup

- Clone this repository.
- Execute `yarn` to install dependencies.

### Development

To develop the website (including authoring content):

- Execute `yarn dev`.
- Visit http://localhost:4040.

### Production

To prepare for production:

- Execute `yarn build && yarn export`.
- If you'd like to test website execute `yarn serve`.
- Visit http://localhost:4040.

### Content

To add more content, follow the steps for development, then:

- Add an entry to `posts.js`.
- Create a page in `pages/post` with the same name as the `slug` from `posts.js`.
- Author the page as required.

## License

The content of this project itself is licensed under the [Attribution-NonCommercial-NoDerivatives 4.0 International](http://creativecommons.org/licenses/by-nc-nd/4.0/) license, and the underlying source code used to format and display that content is licensed under the [GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/).