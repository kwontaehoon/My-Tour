async function openDatabase(){
    if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
      await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
    }
    await FileSystem.downloadAsync(
      Asset.fromModule(require('./assets/test.db')).uri,
      FileSystem.documentDirectory + 'SQLite/test.db'
    );
    return SQLite.openDatabase('test.db');
  }

module.exports = openDatabase()