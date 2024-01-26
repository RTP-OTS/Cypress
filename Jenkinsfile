pipeline {
  agent any

  environment {
    CYPRESS_INSTALL_BINARY = 'latest' // Specify your Cypress version here
  }

  tools {
    nodejs 'NodeJS 20.9' // Make sure you have NodeJS tool configured
  }

  stages {
    stage('Install Cypress') {
      steps {
        sh 'npm install cypress@${CYPRESS_INSTALL_BINARY}'
      }
    }

    stage('Regression test') {
      steps {
        sh 'npx cypress run --spec "cypress/e2e/regression.cy.js"'
      }
    }
      stage('Smoke test') {
      steps {
        sh 'npx cypress run --spec "cypress/e2e/smoketest.cy.js"'
      }
    }
  }
}
