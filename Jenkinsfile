pipeline {
  agent {
    docker {
      image 'cypress/included:latest'
      args '--privileged' // Add any necessary privileged mode if required
    }
  }

  stages {
    stage('Run Cypress Tests') {
      steps {
        sh 'npm install' // Install your project's dependencies if needed
        sh 'npx cypress run' // Adjust this command based on your Cypress test setup
      }
    }
  }
}
