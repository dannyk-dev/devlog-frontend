/* eslint-disable react/prop-types */
import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught my boundary", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // return <h1>Something happened</h1>;
      console.log("error happened");
    }

    // eslint-disable-next-line react/prop-types
    return this.props?.children;
  }
}

export default ErrorBoundary;
