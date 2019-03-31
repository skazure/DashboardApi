pipeline{
  agent any

  

  stages {

      stage ('Change directory') {
        steps { 
              bat label: '', script: 'cd C:\\temp\\workspace'
        }
      }

        stage('Git Clone') {
            steps {
                echo 'Cloning..'
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/skazure/DashboardApi.git']]])
            }
        }

        stage('Npm Install') {
            steps {
                echo 'Npm Installa..'
                //npm install
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