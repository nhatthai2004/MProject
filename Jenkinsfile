pipeline {
    agent any 

    environment {
        // Correct paths for Java and Maven
        JAVA_HOME = 'C:\\Program Files\\Java\\jdk-22' // Path to your JDK
        MAVEN_HOME = 'D:\\apache-maven-3.8.8-bin\\apache-maven-3.8.8' // Path to your Maven
        PATH = "${MAVEN_HOME}\\bin;${JAVA_HOME}\\bin;${env.PATH}" // Update PATH
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm // Checkout the source code from the configured SCM
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project...'
                bat "${MAVEN_HOME}\\bin\\mvn clean package" // Use 'bat' for Windows command execution
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                bat "${MAVEN_HOME}\\bin\\mvn test" // Use 'bat' for Windows command execution
            }
        }

        stage('Package') {
            steps {
                echo 'Packaging the application...'
                bat "${MAVEN_HOME}\\bin\\mvn package" // Use 'bat' for Windows command execution
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                bat "${MAVEN_HOME}\\bin\\mvn deploy" // Use 'bat' for Windows command execution
            }
        }
    }

    post {
        always {
            cleanWs() // Clean up the workspace after the build
        }
        success {
            echo 'Build completed successfully!'
        }
        failure {
            echo 'Build failed. Check the logs for details.'
        }
    }
}
