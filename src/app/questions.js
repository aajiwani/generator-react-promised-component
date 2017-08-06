export default [
  {
    name: 'componentName',
    type: 'input',
    message: 'Enter component name:',
    validate: function( value )
    {
      var re = new RegExp('^[A-Za-z]+\\w*$', 'g');
      return re.test(value) ? true : 'Please enter a component name matching regex(^[A-Za-z]+\\w*$)';
    }
  },
  {
    name: 'generateErrorComponent',
    type: 'confirm',
    message: 'Shall generate error component scaffolding? :',
    default: true,
    store: true
  },
  {
    name: 'generateLoadingComponent',
    type: 'confirm',
    message: 'Shall generate loading component scaffolding? :',
    default: true,
    store: true
  }
];
