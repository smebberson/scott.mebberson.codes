
# Yarn cli action

This GitHub action wraps the Yarn cli to be used as a GitHub action. You can use it within a GitHub action to run any Yarn command.

Here is an example using the action to install node modules:

```
action "Install node modules" {
  uses = "./yarn"
  args = ["install"]
}
```

Here is an example using the action to run tests:

```
action "Run tests" {
  uses = "./yarn"
  args = ["test"]
}
```