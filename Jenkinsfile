pipeline{
  agent any

  

  stages {

      stage ('Change directory') {
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

        stage('Npm Install') {
            steps {
                echo 'Npm Installa..'
                npm install
            }
        }
        
        stage('Build- Npm Install') {
            steps {
                echo 'Building..'
                //npm run ng -- build --prod
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