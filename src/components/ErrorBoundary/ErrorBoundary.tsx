import React, { Component } from 'react'

interface Props {}

interface State {
  hasError: boolean
  error: Error
}

class ErrorBoundary extends Component<Props, State> {
  state = {
    hasError: false,
    error: new Error(),
  }
  componentDidCatch(error: Error, info: any) {
    this.setState({ ...this.state, hasError: true, error })

    // report the details about error
    console.log(
      'React-TableQL Error: ',
      error,
      '\nMore info about error: ',
      info,
    )
  }

  render() {
    const { error, hasError } = this.state

    if (hasError) {
      return (
        <div className="ErrorBoundary">
          <h1>Something went wrong!</h1>
          <p style={{ color: 'red' }}>
            <b>ERROR: </b>
            {error.message}
          </p>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
