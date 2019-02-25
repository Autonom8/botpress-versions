const USER = 'saisasanka8';
const PASS = 'hQct52SL6NRdeP2';
const REPO = 'github.com/Autonom8/botpress-versions.git';
 
const git = require('simple-git/promise');
const remote = `https://${USER}:${PASS}@${REPO}`;
 
/*git().silent(true)
  .clone(remote)
  .then(() => console.log('finished'))
  .catch((err) => console.error('failed: ', err));
*/

require('simple-git')()
     .init()
     .add('./*')
     .commit("first commit!")
     .addRemote('origin', 'https://github.com/Autonom8/botpress-versions.git')
     .push('origin', 'master');

 
