# Message Board

 Journal, 1-13-2017

 By [Kevin Finley](http://www.kfinley.com)

## Description

With this app you can ask a question or write a message and able to add comments to those those post.

## Setup/Installation Requirements

Clone the repository and `cd` into your directory:
```
$ npm install
$ bower install
$ ember s
```

## Setting API Keys
Go to [Firebase](https://firebase.google.com/) and obtain an api key, then set the api key as a environment variable in the following format. Then make a `.json` file like the one down below and import it into firebase.
```
exports.apiKey = '<API_KEY>'
```
### posts.json
```
{ "questions": [{
    "author": "Bob Joe",
    "description": "How do you work a computer?",
    "notes": "Computers are stupid"
  }]
}
```


## Known Bugs

If you notice any bugs or problems you can fill out an issue [here](http://www.github.com/kftwotwo/message-board/issues) or feel free to submit a pull request.

## Contact details
If you need to contact me my email is `kftwotow@gmail.com`

## Contribute

If you wish to contribute create an issue and describe your idea then fork it and submit a pull request!

### License

*This is under a MIT License*

Copyright (c) 2017 **_Kevin Finley_**
