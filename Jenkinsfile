pipeline {
    agent any 

    environment {
        // Set the paths for Java and Maven
        JAVA_HOME = 'C:\\Program Files\\Java\\jdk-22' // Path to your JDK
        MAVEN_HOME = 'D:\\apache-maven-3.8.8-bin\\apache-maven-3.8.8' // Path to your Maven
        PATH = "${MAVEN_HOME}\\bin;${JAVA_HOME}\\bin;${env.PATH}" // Update PATH to include Maven and Java
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
                sh "${MAVEN_HOME}\\bin\\mvn clean package" // Use the Maven command
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh "${MAVEN_HOME}\\bin\\mvn test" // Run tests using Maven
            }
        }

        stage('Package') {
            steps {
                echo 'Packaging the application...'
                sh "${MAVEN_HOME}\\bin\\mvn package" // Package the application
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                sh "${MAVEN_HOME}\\bin\\mvn deploy" // Deploy the application
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
