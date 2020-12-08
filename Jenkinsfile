pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                dir('backend'){
                    sh 'npm install'
                    sh 'node . &'
                }
            }
        }
        stage('Test') {
            steps { 
                dir('backend'){
                    sh 'npm test'
                }
                
            }
        }
        stage('Deploy') {
            steps {
                dir('frontend'){
                    sh 'npm install --global http-server'
                    sh 'http-server -p 9000 . &'  
                }
            }
        }
    }
}