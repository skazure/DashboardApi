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
              bat label: 'Installing dependencies', script: 'npm install'
        }
      }

        stage ('Angular Build') {
        steps { 
              bat label: 'Building the Angular App with prod configuration', script: 'npm run ng -- build --prod'
        }
      }  

        stage('Test') {
            steps {
                echo 'Testing..'
                //bat label: 'Testing the Angular App with prod configuration', script: 'npm run ng test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                bat label: 'Testing the Angular App with prod configuration', script: 'xcopy /s /y "C:\\Program Files (x86)\\Jenkins\\workspace\\DashboardCICDPipeline\\dist\\DashboardApi" "C:\\inetpub\\wwwroot\\Dashboard"'
            }
        }
    }
}