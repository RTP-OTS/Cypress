pipeline {
    agent {
        docker {
            image 'cypress/included:latest'
        }
    }
    stages {
        stage('test') {
            steps {
                sh "npm install"
                sh "npm run test:ci"
            }
        }
    }
}