import React, { Component } from 'react'

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: '',
  }
  componentDidCatch(error) {
    this.setState({ ...this.state, hasError: true, error })
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