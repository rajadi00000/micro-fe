pipeline {
    agent any

    environment {
        AWS_ACCESS_KEY_ID = credentials('AWS_ACCESS_KEY_ID')
        AWS_SECRET_ACCESS_KEY = credentials('AWS_SECRET_ACCESS_KEY')
        AWS_DEFAULT_REGION = ''
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to S3') {
            steps {
                withAWS(credentials: 'aws-credentials', region: "${env.AWS_DEFAULT_REGION}") {
                    sh 'aws s3 sync dist s3://${AWS_S3_BUCKET_NAME}/container/latest'
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}