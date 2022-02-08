import { Component, ErrorInfo, ReactNode } from "react"
interface Props {
  children: ReactNode;
}

interface State {
  error: Error|null
  errorInfo: ErrorInfo|null
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    error: null,
    errorInfo: null
  };

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    this.setState({
      error,
      errorInfo
    })
  }

  public render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;