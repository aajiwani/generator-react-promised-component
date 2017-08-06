import Generator from 'yeoman-generator';
import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import questions from './questions.js';

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

    this.log('Generation path : ', this.options.gen_path);

    if (!fs.accessSync(this.options.gen_path, fs.constants.R_OK | fs.constants.W_OK))
    {
      this.log('Supplied generation path must be visible to the generator and must have a read and write access');
      throw new Error('Invalid directory path');
    }
  }

  prompting()
  {
    return this.prompt(questions)
    .then((answers) =>
    {
      this.log('Component Name', answers.componentName);
      this.log('Require parent props', answers.shallRequireParentProps);
      this.log('Generate wrapper', answers.isSeperateScreen);
      this.log('Overwrite path', answers.shallOverwrite);
    });
  }
};
