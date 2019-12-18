# scott.mebberson.codes

Source code and content for my scott.mebberson.codes website.

## Usage

### First time setup

-   Clone this repository.
-   Execute `yarn` to install dependencies.

### Development

To develop the website (including authoring content):

-   Execute `yarn dev`.
-   Visit http://localhost:4040.

If you'd like to test the production version:

-   Execute `yarn build && yarn export`.
-   Execute `yarn serve`.
-   Visit http://localhost:4040.

### Content

To add more content, follow the steps for development, then:

-   Add an entry to `posts.js`.
-   Create a page in `pages/post` with the same name as the `slug` from `posts.js`.
-   Author the page as required.

## Publishing

To publish new content simply push to `master`. The GitHub Actions within this repository will kick-in and build, export and commit on the `gh-pages` branch.

See [Hosting](#hosting) for more information.

## Hosting

This website is hosted entirely on GitHub Pages, fronted by the awesome Varnish Cache. It works like this:

-   The `out` directory is a [Git Worktree](https://git-scm.com/docs/git-worktree) aliased to the `gh-pages` branch.
-   Some GitHub Actions will build and export a new version of the website.
-   A final GitHub Action will commit the contents of the out directory to the `gh-pages` branch.

This results in GitHub publishing the last version of the website 🌮.

## License

The content of this project itself is licensed under the [Attribution-NonCommercial-NoDerivatives 4.0 International](http://creativecommons.org/licenses/by-nc-nd/4.0/) license, and the underlying source code used to format and display that content is licensed under the [GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/).
