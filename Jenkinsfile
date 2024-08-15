#!/bin/bash

pipeline {
    agent any
    
    tools {nodejs "nodejs"}

    // environment {
    //     AWS_ACCESS_KEY_ID = credentials('AWS_ACCESS_KEY_ID')
    //     AWS_SECRET_ACCESS_KEY = credentials('AWS_SECRET_ACCESS_KEY')
    //     AWS_DEFAULT_REGION = ''
    // }

    stages {
        stage('Git') {
            steps {
                git branch: 'main',
                    credentialsId: 'a43b9f95-6c31-4a76-bcf7-dcd1399cffb4',
                    url: 'git@github.com:rajadi00000/micro-fe.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('packages/container') {
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                dir('packages/container') {
                    sh 'npm run build'
                }
            }
        }

        // stage('Deploy to S3') {
        //     steps {
        //         dir('packages/container') {
        //             withAWS(credentials: 'aws-credentials', region: "${env.AWS_DEFAULT_REGION}") {
        //                 sh 'aws s3 sync dist s3://${AWS_S3_BUCKET_NAME}/container/latest'
        //             }
        //         }
        //     }
        // }
    }

    post {
        always {
            script {
                if (env.WORKSPACE) {
                    cleanWs()
                } else {
                    echo 'Workspace not available, skipping cleanWs'
                }
            }
        }
    }
}