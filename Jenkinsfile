pipeline{
  agent any

  

  stages {

      

        stage('Git Clone') {
            steps {
                echo 'Cloning..'
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/skazure/DashboardApi.git']]])
            }
        }

        stage ('Npm Install') {
        steps { 
              bat label: '', script: 'npm install'
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