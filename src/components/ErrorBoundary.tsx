import React, { Component, ReactNode } from "react";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-[60vh] flex items-center justify-center p-6">
            <div className="max-w-md w-full text-center space-y-6">
              <div className="h-16 w-16 mx-auto rounded-full bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="h-8 w-8 text-destructive" />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-foreground">¡Lo siento! Something went wrong</h2>
                <p className="text-sm text-muted-foreground">
                  We encountered an unexpected error. Please try again or contact support if the problem persists.
                </p>
                {this.state.error && (
                  <code className="block p-3 rounded-lg bg-muted text-xs text-muted-foreground overflow-auto max-h-32">
                    {this.state.error.message}
                  </code>
                )}
              </div>
              <div className="flex items-center justify-center gap-3">
                <Button onClick={this.handleReset} variant="outline" className="gap-2">
                  <RotateCcw className="h-4 w-4" />
                  Try Again
                </Button>
                <Link href="/dashboard">
                  <Button className="gap-2">
                    <Home className="h-4 w-4" />
                    Dashboard
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}