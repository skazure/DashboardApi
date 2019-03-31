pipeline{
  agent any

  

  stages {

      stage () {
        steps { 
              dir('C:/temp/workspace') 
              {
                  echo 'workspace changed'
              }
        }
      }

        stage('Git Clone') {
            steps {
                echo 'Cloning..'
                git 'https://github.com/skazure/DashboardApi.git'
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