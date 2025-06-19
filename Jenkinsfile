pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS = credentials('docker-hub-credentials')
        GIT_REPO_URL = 'https://github.com/Carlosfelipepolaniasanabria/paginacolegiocea.git'
        DOCKER_IMAGE_NAME = 'carlosfelipepolaniasanabria/paginacolegiocea'
    }

   stages {
        stage('Clone Repository') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [[url: env.GIT_REPO_URL]]
                ])
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Docker Login') {
            steps {
                sh """
                    docker login -u ${env.DOCKER_HUB_CREDENTIALS_USR} -p ${env.DOCKER_HUB_CREDENTIALS_PSW}
                """
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    def buildNumber = env.BUILD_NUMBER
                    sh """
                        docker build -t ${env.DOCKER_IMAGE_NAME}:${buildNumber} .
                        docker tag ${env.DOCKER_IMAGE_NAME}:${buildNumber} ${env.DOCKER_IMAGE_NAME}:latest
                    """
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    def buildNumber = env.BUILD_NUMBER
                    sh """
                        docker push ${env.DOCKER_IMAGE_NAME}:${buildNumber}
                        docker push ${env.DOCKER_IMAGE_NAME}:latest
                    """
                }
            }
        }

        stage('Docker Logout') {
            steps {
                sh 'docker logout'
            }
        }
    }

    post {
        success {
            echo "Pipeline ejecutado con éxito! Imagen ${env.DOCKER_IMAGE_NAME}:${env.BUILD_NUMBER} subida a Docker Hub."
        }
        failure {
            echo 'Pipeline falló. Revisar los logs para más información.'
        }
    }
}