# Next.js cli action

This GitHub action wraps the Next.js cli to be used as a GitHub action. You can use it within a GitHub action to run a Next.js command:

Here is an example using the action to build a Next.js website:

```
action "Build" {
  uses = "./next"
  args = ["build"]
}
```

Here is an example using the action to export a static version of the site:

```
action "Export" {
  uses = "./next"
  args = ["export"]
}
```
