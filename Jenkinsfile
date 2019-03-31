pipeline{
  agent any

  dir('C:/temp/workspace') {
    echo 'workspace changed'
   }

  stages {

        stage('Git Clone') {
            steps {
                echo 'Cloning..'
                git clone 'https://github.com/skazure/DashboardApi.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}