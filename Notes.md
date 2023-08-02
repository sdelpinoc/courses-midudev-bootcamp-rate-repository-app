# React Native

## Installations
  - Install expo-cli globally
    - `npm install -g expo-cli`

  - Install 
    - `npx expo install react-native-web@~0.18.10 react-dom@18.2.0 @expo/webpack-config@^18.0.1`

  - Linter
    - `npm install --save-dev eslint-config-standard eslint-config-standard-jsx eslint-config-standard-react eslint-plugin-promise eslint-plugin-import eslint-plugin-node eslint-plugin-react`

  - Use @babel/eslint-parser instead of babel-eslint
    - `npm install --save-dev @babel/eslint-parser`

  - Then, in package.json, add:
    ~~~
    "eslintConfig": {
      "parser": "@babel/eslint-parser",
      "extends": ["standard", "standard-jsx", "standard-react"]
    }
    ~~~

  - Also create the .eslintrc.* file, with:
    - `npm init @eslint/config`
  - And to remove the error of 'react must be in scope when using jsx', add:
    ~~~
      rules: {
        'react/react-in-jsx-scope': 'off'
      }
    ~~~

  - Formik(forms)
    - `npm install formik`

  - yup(validations)
    - `npm install yup`

## Start a project
  - `expo init rate-repository-app`
  - Select blank

  - Then go to the project folder and run:
    - `npm start`

  - To run in a web browser, Press w

## Emulation in android Studio(PC)
  - Install Android Studio
    - `sudo snap install android-studio --classic`
    - https://developer.android.com/studio
    - https://ubunlog.com/android-studio-instacion-ubuntu-22-04/
    - https://reactnative.dev/docs/environment-setup?guide=native

  - Install Open JDK
    - `sudo apt install default-jdk`

  - Configure the ANDROID_HOME environment variable
  - In $HOME/.bashrc add($HOME -> home/sdelpinoc):
    ~~~
    export ANDROID_HOME=$HOME/Android/Sdk
    export PATH=$PATH:$ANDROID_HOME/emulator
    export PATH=$PATH:$ANDROID_HOME/platform-tools
    ~~~
  - Then run `source $HOME/.bashrc` to load the config into the current shell
  - Yo can use `echo $ANDROID_HOME` or `echo $PATH`, to check the paths
  - Also you can check the correct Android SDK path in Android Studio:
    - Appearance & Behavior → System Settings → Android SDK.

  - Then run:
     `npm start`
  - And then select the web o android option

  <!-- - Also in the app.json file, you need to add:
    ~~~
    "jsEngine": "hermes",
    ~~~ -->

## Run in mobile device
  - Install expo go from the play store and scan the qr code

## React Native Debugger
  - Install https://github.com/jhen0409/react-native-debugger/blob/master/docs/getting-started.md
  - Ubuntu: Download the .deb file, then go to the same directory of the file, and install it with:
    - `sudo dpkg -i react-native-debugger_0.13.0_amd64.deb`
  - To use react-native-debugger, in the app.json file add:
    ~~~
    "jsEngine": "jsc",
    ~~~

  - Then run the debugger with the --no-sandbox option:
    - `react-native-debugger --no-sandbox`

  - Open a new window, and setup the port in 19000, after that, start the application, and then go to the menu(press M 
  in the terminal of the app), and select Debug Remote JS

## React Router Native
  - Install react-router-native
    - `npm install react-router-native`

  <!-- - Install @expo/webpack-config
    - `npm --save-dev @expo/webpack-config` -->

## Backend api
- Clone the repository https://github.com/fullstack-hy2020/rate-repository-api

- Run: `npm install`

- For the api you need to create a OAuth application, in Github, go to Settings -> Developer Settings -> OAuth Apps, and
 register a new one.

- Create a .env file, and replace GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET, with the ones of the OAuth application

- Run: `npm run build`

- To add information to the database, run: `npm run seed:run`, this will delete all existing data

- Then run: `npm run start`

- For the Graphql, go to: http://locahost:4000

- For the Api, go to: http://localhost:5000/api/repositories

- Use the IP of your local machine instead of localhost, for android emulator y/o physical device

## Apollo
- Install:
  - `npm install apollo-boost @apollo/client graphql`
  - Update, remove apollo-boost, and only use @apollo/client