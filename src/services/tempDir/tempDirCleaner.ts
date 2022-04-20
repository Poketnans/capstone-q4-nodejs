import fs from 'fs';

const tempDirCleaner = () => {
  fs.readdir(`${__dirname.split('src')[0]}temp/`, (readdirerr, files) => {
    if (readdirerr) {
      return readdirerr;
    }
    files.forEach((file) =>
      fs.unlink(`${__dirname.split('src')[0]}temp/${file}`, (err) => {
        if (err) {
          return err;
        }
        return `${file} deleted`;
      })
    );
    return 'temp dir is empty';
  });
};

export default tempDirCleaner;
