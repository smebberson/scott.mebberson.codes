workflow "Publish" {
  on = "push"
  resolves = ["Setup", "Build", "Export"]
}

action "Setup" {
  uses = "./yarn"
  args = ["install"]
}

action "Build" {
  needs = "Setup"
  uses = "./next"
  args = ["build"]
}

action "Export" {
  needs = "Build"
  uses = "./next"
  args = ["export"]
}
