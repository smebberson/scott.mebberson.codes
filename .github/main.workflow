workflow "Build, export and publish" {
  on = "push"
  resolves = ["Slack notification"]
}

action "On master only" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Setup" {
  needs = "On master only"
  uses = "./actions/setup"
  secrets = ["GH_TOKEN"]
}

action "Build" {
  needs = "Setup"
  uses = "./actions/next"
  args = ["build"]
}

action "Export" {
  needs = "Build"
  uses = "./actions/next"
  args = ["export"]
}

action "Publish" {
  needs = "Export"
  uses = "./actions/publish"
}

action "Slack notification" {
  uses = "Ilshidur/action-slack@ab5f0955362cfdff2e0f0990f0272624e8cb5d13"
  needs = ["Publish"]
  args = "Published to gh-pages."
  secrets = ["SLACK_WEBHOOK"]
}
