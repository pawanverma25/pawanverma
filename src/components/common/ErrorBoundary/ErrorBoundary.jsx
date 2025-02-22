import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-navy text-accent">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Something went wrong.</h2>
            <button 
              onClick={() => window.location.reload()} 
              className="border border-accent px-4 py-2 rounded hover:bg-accent/10"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};

export default ErrorBoundary; 