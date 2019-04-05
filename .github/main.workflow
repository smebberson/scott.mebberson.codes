workflow "Publish" {
  on = "push"
  resolves = [
    "Setup",
    "Build",
    "Slack notification",
  ]
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

action "Slack notification" {
  uses = "Ilshidur/action-slack@ab5f0955362cfdff2e0f0990f0272624e8cb5d13"
  needs = ["Export"]
  args = "Published to gh-pages."
  secrets = ["SLACK_WEBHOOK"]
}
