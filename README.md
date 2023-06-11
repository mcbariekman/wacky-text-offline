# Text Editor Web Application

A [web application](https://wacky-text-offline.herokuapp.com) that provides a text editor with features such as bundling JavaScript files, utilizing next-gen JavaScript, storing content using IndexedDB, and enabling offline functionality with service workers.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)

## Installation

1. Clone the repository to your local machine.
2. Navigate to the root directory of the project in your terminal.
3. Run the command `npm install` in each directory containing a package.json to install the project dependencies.
4. Run the command `npm run start:dev` to start the application's backend and serve the client.

Certainly! Here's a shorter and simpler version of the "Usage" section:

## Usage

1. Install the project dependencies by running `npm install`.
2. Start the application's backend and serve the client using `npm run start`.
3. Open the text editor web application in your browser.
4. Enter your content in the text editor.
5. The content will be automatically saved using IndexedDB when you click off the DOM window.
6. If you reopen the text editor, your content will be retrieved from IndexedDB.
7. Click on the "Install" button to download the web application as an icon on your desktop.
8. The web application registers a service worker using Workbox, enabling offline functionality and caching of static assets.
9. Static assets and subsequent pages are pre-cached upon loading for faster performance.
10. If you deploy the application to Heroku, the provided build scripts ensure a smooth webpack application deployment.

Feel free to further customize and adapt the README file according to your project's needs.

## Screenshot


## License

This project is licensed under the [License Name]. Refer to the [LICENSE](LICENSE) file for more information.

## Credits

This project was created by [Your Name]. Special thanks to the following contributors and resources:

- [cautious-meme GitHub Repository](https://github.com/coding-boot-camp/cautious-meme) - This project was based off the code from this repository.

