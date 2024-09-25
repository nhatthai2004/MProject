pipeline {
    agent any

    tools {
        maven 'Maven 3.8.8' 
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                withMaven(maven: 'Maven 3.8.8') {
                    sh 'mvn clean install'
                }
            }
        }

        stage('Test') {
            steps {
                withMaven(maven: 'Maven 3.8.8') {
                    sh 'mvn test'
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            cleanWs()
        }
    }
}
