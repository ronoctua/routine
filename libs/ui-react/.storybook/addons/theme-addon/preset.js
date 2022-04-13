function config(entry = []) {
  return [...entry, require.resolve('./decorators')];
}

function managerEntries(entry = []) {
  return [...entry, require.resolve('./register')];
}

module.exports = { config, managerEntries };
