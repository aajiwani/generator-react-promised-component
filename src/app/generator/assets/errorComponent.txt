import React from 'react';

export default class ErrorComponent extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  retryPromise()
  {
    // Use retry from props, in case you want to implement retry-able promise
    this.props.retry();
  }

  render()
  {
    // Add your render code here for the Error Component
    return (
      null
    );
  }
}
