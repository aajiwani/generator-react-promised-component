import compile from 'es6-template-strings/compile';
import resolveToString from 'es6-template-strings/resolve-to-string';
import fs from 'fs';
import lib_path from 'path';

const COMPONENTS_DIR = 'components';
const LOADING_COMPONENT_FILE_NAME = 'loading_component.js';
const ERROR_COMPONENT_FILE_NAME = 'error_component.js';
const SUCCESS_COMPONENT_FILE_NAME = 'success_component.js';
const MAIN_COMPONENT_FILE_NAME = 'index.js';

export default class Generator
{
  constructor(path, options)
  {
    this.generation_options = options;
    this.generation_path = this._prepareFolderStructure(path, options.componentName);
  }

  _prepareFolderStructure(path, componentName)
  {
    fs.mkdirSync(lib_path.join(path, componentName));
    fs.mkdirSync(lib_path.join(path, componentName, COMPONENTS_DIR));

    return {
      componentsPath: lib_path.join(path, componentName, COMPONENTS_DIR),
      rootPath: lib_path.join(path, componentName)
    };
  }

  generateLoadingComponent(shallGenerate)
  {
    if (shallGenerate)
    {
      var loadingComponentFile = lib_path.join(
        this.generation_path.componentsPath,
        LOADING_COMPONENT_FILE_NAME
      );

      var loadingComponent = fs.readFileSync(
        lib_path.resolve(__dirname, 'assets', 'loadingComponent.txt'),
        'utf8'
      );

      fs.writeFileSync(loadingComponentFile, loadingComponent);
      return './' + COMPONENTS_DIR + '/' + LOADING_COMPONENT_FILE_NAME;
    }

    return '?';
  }

  generateErrorComponent(shallGenerate)
  {
    if (shallGenerate)
    {
      var errorComponentFile = lib_path.join(
        this.generation_path.componentsPath,
        ERROR_COMPONENT_FILE_NAME
      );

      var errorComponent = fs.readFileSync(
        lib_path.resolve(__dirname, 'assets', 'errorComponent.txt'),
        'utf8'
      );

      fs.writeFileSync(errorComponentFile, errorComponent);
      return './' + COMPONENTS_DIR + '/' + ERROR_COMPONENT_FILE_NAME;
    }

    return '?';
  }

  generateSuccessComponent()
  {
    var successComponentFile = lib_path.join(
      this.generation_path.componentsPath,
      SUCCESS_COMPONENT_FILE_NAME
    );

    var successComponent = fs.readFileSync(
      lib_path.resolve(__dirname, 'assets', 'successComponent.txt'),
      'utf8'
    );

    fs.writeFileSync(successComponentFile, successComponent);
    return './' + COMPONENTS_DIR + '/' + SUCCESS_COMPONENT_FILE_NAME;
  }

  generateMainComponent(options)
  {
    var mainComponentFile = lib_path.join(
      this.generation_path.rootPath,
      MAIN_COMPONENT_FILE_NAME
    );

    var mainComponent = fs.readFileSync(
      lib_path.resolve(__dirname, 'assets', 'mainComponent.txt'),
      'utf8'
    );
    mainComponent = compile(mainComponent);
    mainComponent = resolveToString(mainComponent, options);

    fs.writeFileSync(mainComponentFile, mainComponent);
  }

  startGeneration()
  {
    var loadingComponent = this.generateLoadingComponent(this.generation_options.generateLoadingComponent);
    var errorComponent = this.generateErrorComponent(this.generation_options.generateErrorComponent);
    var successComponent = this.generateSuccessComponent();

    this.generateMainComponent({
      loadingComponentPath: loadingComponent,
      errorComponentPath: errorComponent,
      successComponentPath: successComponent,
    });

    var logMessages = [];

    if (!this.generation_options.generateLoadingComponent)
    {
      logMessages.push('Replace `?` in index.js with your Loading Component file path');
    }

    if (!this.generation_options.generateErrorComponent)
    {
      logMessages.push('Replace `?` in index.js with your Error Component file path');
    }

    logMessages.push('Code generation successful for Component: ' + this.generation_options.componentName);
    return logMessages;
  }
}
