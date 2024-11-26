# how_to_publish

package.json
"main": "index2.js"     ----> then only <index2.js> will be published

`option 1`
- update <package.json> version number
- make sure [.npmrc] isnt there... just rename it [.npmrc23]
- also, you can have [.npmignore] file to not push readme file into npmjs
- npm login
- npm whoami        <!-- to verify -->
- npm publish
- new version is PUBLISHED


`option 2`
- use <authToken> & [.npmrc] to publish
- npm logout
- rename [.npmrc23] to [.npmrc] & use authToken in [.npmrc]
- update package.json
- npm publish

<!-- ------------------------------------------------ --->

# publish to AWS CodeArtifcat

npm run publish_aws_codeartifact23          npm configuration is updated
npm publish                                 our package is published to AWS CodeArtifact

we published 143.143.143 version of this library in AWS CodeArtifact
this version isnt available in npmjs