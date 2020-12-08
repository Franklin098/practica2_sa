pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                dir('backend'){
                    nodejs('Node-12-7'){
                        sh 'npm install'
                        sh 'node . &'
                    }
                }
            }
        }
        stage('Test') {
            steps {
                nodejs('Node-12-7'){
                        dir('backend'){
                        sh 'npm test'
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                dir('frontend'){
                    nodejs('Node-12-7'){
                         sh 'BUILD_ID=dontKillMe http-server -p 9000 . &'
                    }    
                }
            }
        }
    }
}