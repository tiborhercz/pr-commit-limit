import * as core from '@actions/core'
import * as github from '@actions/github'

async function run() {
    const amountOfCommitsAllowed = core.getInput('amount', {required: true});
    const amountOfCommitsInPR = github.context.payload.pull_request.commits;
    if (amountOfCommitsInPR <= amountOfCommitsAllowed) {
        core.info(`Amount of commits is within the allowed limit`)
    } else {
        core.setFailed(`Amount of commits exceeds the limit. Limit: ${amountOfCommitsAllowed} Commits in PR: ${amountOfCommitsInPR}`)
    }
}

run()
