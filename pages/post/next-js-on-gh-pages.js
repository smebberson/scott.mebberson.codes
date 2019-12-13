import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';

import { bash } from '../../lib/languages';
import withPostProps from '../../lib/with-post-props';
import Bonus from '../../components/Bonus';
import External from '../../components/External';
import Inline from '../../components/Inline';
import Post from '../../components/Post';

SyntaxHighlighter.registerLanguage('bash', bash);

export default withPostProps(({ post }) => (
    <Post post={post}>
        <div className="constrained">
            <p>
                So, you've built an amazing Next.js site. But where do you host
                it?
            </p>

            <p>For free, on GitHub Pages of course 😀</p>

            <p>
                There's always a caveat... this only works if you can statically
                export your site.{' '}
                <External href="https://nextjs.org/docs/#static-html-export">
                    Read more about it on next.js
                </External>
                . If you can, then you're good to go.
            </p>

            <p>
                <External href="https://nextjs.org/docs/#usage">
                    Follow the steps
                </External>{' '}
                to create <Inline>exportPathMap</Inline> in{' '}
                <Inline>next.config.js</Inline> add <Inline>next build</Inline>{' '}
                and <Inline>next export</Inline> scripts to{' '}
                <Inline>package.json</Inline>.
            </p>

            <p>
                All done? You should now have an <Inline>./out</Inline>{' '}
                directory with your entire website in it.
            </p>

            <Bonus>
                I use the <Inline>serve</Inline> module to test the{' '}
                <Inline>out</Inline> directory has everything it needs. Make
                sure you test loading specific URLs to ensure a direct page load
                works (versus client side navigation).
            </Bonus>

            <p>Now comes the tricky part... setting up GitHub Pages.</p>

            <p>Here is how it's going to work:</p>

            <ul>
                <li>
                    Next.js will produce a static version of the site in the{' '}
                    <Inline>out</Inline> directory.
                </li>

                <li>
                    We'll alias the <Inline>out</Inline> directory to a{' '}
                    <Inline>gh-pages</Inline> branch.
                </li>

                <li>
                    We'll then push the contents of the{' '}
                    <Inline>gh-pages</Inline> to GitHub to update the site.
                </li>
            </ul>

            <Bonus>
                The following will only work if you're intending to use a user
                or organisation pages site, or a project pages site with a
                custom domain. If you intend on using a project pages site with
                the standard GitHub domain (i.e.{' '}
                <Inline>
                    https://\{'{'}username{'}'}.github.com/{'{'}reponame{'}'}
                </Inline>
                ) then there are a few extra steps to complete.
            </Bonus>

            <p>
                Okay, let's get started by preparing the <Inline>out</Inline>{' '}
                directory:
            </p>

            <SyntaxHighlighter
                language="shell"
                style={style}
            >{`# Remove files from the out directory
$ rm -rf ./out/

# Exclude the out directory from Git
$ echo "out/" >> .gitignore
$ git add .
$ git commit -m "Ignore the out directory."

# Create an orphan branch named gh-pages
$ git checkout --orphan gh-pages

# Remove all staged files
$ git rm -rf .

# Create an empty commit (remember this is the gh-page branch)
$ git add .
$ git commit --allow-empty -m "Initial empty branch"

# Push the branch
$ git push origin gh-pages
`}</SyntaxHighlighter>

            <p>Now we can create the Git worktree:</p>

            <SyntaxHighlighter
                language="shell"
                style={style}
            >{`# Go back to master
$ git checkout master

# Create the Git Worktree
$ git worktree add out gh-pages
`}</SyntaxHighlighter>

            <p>Let's take a moment here to explore this...</p>

            <p>
                If you run <Inline>git branch</Inline> you should be on{' '}
                <Inline>master</Inline>. Now change into the{' '}
                <Inline>out</Inline> directory and run{' '}
                <Inline>git branch</Inline>, you should be on the{' '}
                <Inline>gh-pages</Inline> branch. So the <Inline>out</Inline>{' '}
                directory has been directly aliased to the{' '}
                <Inline>gh-pages</Inline> branch. That's kinda neat.
            </p>

            <p>
                Let's setup the out directory ready for{' '}
                <Inline>gh-pages</Inline>:
            </p>

            <SyntaxHighlighter
                language="shell"
                style={style}
            >{`# Add a .nojekyll file to out
touch ./out/.nojekyll
`}</SyntaxHighlighter>

            <p>
                With the hard part out of the way 😅, do the following every
                time you want to deploy a new version of your site:
            </p>

            <SyntaxHighlighter
                language="shell"
                style={style}
            >{`# Build and generate an export
$ yarn build
$ yarn export

# Push the updated site to GitHub pages
$ cd ./out
$ git add .
$ git commit -m "Deploy to gh-pages 🚀"
$ git push origin gh-pages
`}</SyntaxHighlighter>

            <p>
                Now you'll need to setup GitHub Pages.{' '}
                <External href="https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages">
                    GitHub have a guide for configuring a publishing source for
                    GitHub pages
                </External>
                , you should be able to follow that. They also have{' '}
                <External href="https://help.github.com/en/articles/quick-start-setting-up-a-custom-domain">
                    a guide for setting up a custom domain
                </External>
                .
            </p>

            <p>...☕️☕️... ☕️️️?</p>

            <p>
                And hey presto, your Next.js site should be super zippy 🚀 on
                the GitHub Pages platform.
            </p>
        </div>
    </Post>
));
