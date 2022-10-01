const { status, role_id } = require('../../config.json');

module.exports = (client, oldPresence, newPresence) => {

    // bot check because bots have different ids and owner ids
  if(newPresence.guild.ownerId != newPresence.userId) return; 

  if(!newPresence?.activities[0]?.state) return;
  if(oldPresence === newPresence) return;

  if(status.includes(newPresence.activities[0]?.state)) {
    // function to be run when user includes keywords
    const role = newPresence.guild.roles.cache.find(role => role.id === role_id);

    if(newPresence.member.roles.cache.has(role_id)) return;

    newPresence.member.roles.add(role).catch( err => { return; });
  }
  };
