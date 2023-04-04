import { Component, ErrorInfo, ReactNode } from 'react'

interface IErrorBoundary {
  children: ReactNode
}

interface IErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<IErrorBoundary, IErrorBoundaryState> {
  constructor (props: IErrorBoundary) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError () {
    return { hasError: true };
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo) {
    console.log('Error', error, errorInfo);
  }

  render () {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <h1>!!!</h1>;
    }

    return children;
  }
}

export default ErrorBoundary;
