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
              script: 'npm install'
        }
      }

        stage ('Angular Build') {
        steps { 
              script: 'npm run ng -- build --prod'
        }
      }  

        stage('Test') {
            steps {
                echo 'Testing..'
                script: 'npm run ng test --progress false --watch false'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
               // script: 'xcopy /s /y "C:\\Program Files (x86)\\Jenkins\\workspace\\DashboardCICDPipeline\\dist\\DashboardApi" "C:\\inetpub\\wwwroot\\Dashboard"'
            }
        }
    }
}