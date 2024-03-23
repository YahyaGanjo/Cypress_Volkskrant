## Pre-requisities

1. Install modules 'npm install'

2. Install Cypress 'npm install cypress --save-dev' 

3. use 'npx cypress open' command to run the test cases

4. Run The Scripts Using Command

    #Headless

    npx cypress run  --spec ".\cypress\e2e\* ts"

    #With UI

    npx cypress run --headed --spec ".\cypress\e2e\*.ts"

