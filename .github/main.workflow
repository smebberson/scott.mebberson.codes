workflow "Publish" {
  on = "push"
  resolves = ["Build"]
}

action "Build" {
  uses = "./publish"
}
