# openui5-web-server
Simple node.js webserver using Grunt (grunt-contrib-connect and grunt-openui5).
With this Gruntfile we can simply run a web server to serve any configured resources.

I typically use this with the SAP OpenUI5 SDK.
I have a folder called openui5 with subfolders containing each version of ui5 that I've downloaded. I have a symlink called latest pointing to the latest version.
With this I can use the included Gruntfile from this repo to launch the SDK documentation and sample apps.

## Setup ##
First we assume you have Node.js, npm and Grunt. Then install grunt-contrib-connect and grunt-openui5 locally as follows:
```npm install grunt-contrib-connect``` ```npm install grunt-openui5```.

Now just specify the resource roots of your web server in the openui5-connect config.

Run the web server with ```grunt```. Navigate your browser to ```http://localhost:8000/index.html```. Note the port is configured in the Gruntfile as well.
