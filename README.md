# Firebase-emulator-practice
This is sample express application with firebase cloud functions and run using firebase emulators

## Steps

First we need to install firebase CLI 

```
npm install -g firebase-tools
```

Then run 

```
firebase init functions
```
With above command CLI will prompt for language support and project configuration (whether need to create a new project or use an existion project)

After Execution this will generate a basic project structure 

Then to run it using emulator run the command

```
firebase emulators:start
```
This will give two urls in output one for emulator UI site and other for HTTP function
