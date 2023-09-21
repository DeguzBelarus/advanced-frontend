import { Component, type ErrorInfo, type ReactNode } from 'react';

import { ErrorPage } from 'pages/ErrorPage';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage?: string;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    console.error(error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info.componentStack);
    this.setState({
      errorMessage: error.message,
    });
  }

  render(): ReactNode {
    const { hasError, errorMessage } = this.state;
    const { children } = this.props;
    return hasError ? <ErrorPage errorMessage={errorMessage as string} /> : children;
  }
}

export default ErrorBoundary;
