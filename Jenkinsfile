pipeline{
  agent any  

  stages {      

        // Checkout not required
        // stage('Git Clone') {
        //     steps {
        //         echo 'Cloning..'
        //         checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/skazure/DashboardApi.git']]])
        //     }
        // }

        stage ('Npm Install') {
        steps { 
              sh "npm install"
        }
      }

        stage ('Angular Build') {
        steps { 
              sh "npm run ng -- build --prod"
              echo "Current directory on build server"
              sh "pwd"
        }
      }  

        stage('Test') {
            steps {
                echo 'Testing..'
               // sh "npm run ng test --progress false --watch false"
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh "cp -a /var/lib/jenkins/workspace/AngularNginX/dist/DashboardApi/. /var/www/html/"
            }
        }
    }
}