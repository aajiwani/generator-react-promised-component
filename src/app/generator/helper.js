import fs from 'fs';
import path from 'path';

export function rimraf(dir_path)
{
  if (fs.existsSync(dir_path))
  {
    fs.readdirSync(dir_path).forEach(function(entry)
    {
      var entry_path = path.join(dir_path, entry);
      if (fs.lstatSync(entry_path).isDirectory())
      {
        rimraf(entry_path);
      }
      else
      {
        fs.unlinkSync(entry_path);
      }
    });

    fs.rmdirSync(dir_path);
  }
}


// ./Components/LoadingComponent
// ./Components/ErrorComponent
// ./Components/SuccessComponent
