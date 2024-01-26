pipeline {
  agent any

  environment {
    CYPRESS_INSTALL_BINARY = '3.7.0' // Specify your Cypress version here
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

    stage('Run Cypress Tests') {
      steps {
        sh 'npx cypress run' // Adjust this command based on your Cypress test setup
      }
    }
  }
}
