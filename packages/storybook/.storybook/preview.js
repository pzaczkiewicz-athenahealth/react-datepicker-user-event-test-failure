import './demo.css';
import React, { StrictMode } from 'react';

const DemoWrapper = (storyFn) => <StrictMode>{storyFn()}</StrictMode>;
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    console.log(error); // eslint-disable-line no-console
    console.log(info); // eslint-disable-line no-console
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export const decorators = [DemoWrapper, (story) => <ErrorBoundary>{story()}</ErrorBoundary>];
export const parameters = {
  a11y: {},
};
