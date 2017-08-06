import Generator from 'yeoman-generator';
import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import questions from './questions.js';
import localGenerator from './generator';

export default class ReactPromisedComponentGenerator extends Generator
{
  constructor(args, opts)
  {
    super(args, opts);

    // This makes `gen-path` a required argument.
    this.argument('gen_path', {
      type: String,
      required: true,
      desc: 'A generation path for promised component'
    });

    fs.accessSync(this.options.gen_path, fs.constants.R_OK | fs.constants.W_OK);
  }

  prompting()
  {
    return this.prompt(questions)
    .then((answers) =>
    {
      var gen = new localGenerator(this.options.gen_path, answers);
      var logs = gen.startGeneration();
      if (logs.length > 0)
      {
        for (var i = 0; i < logs.length; i++)
        {
          this.log(logs[i]);
        }
      }
    });
  }
};
