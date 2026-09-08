import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  declare props: Props;
  state: State = {
    hasError: false,
    error: null,
  };

  constructor(props: Props) {
    super(props);
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('APEX SURYA Error caught by ErrorBoundary:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = window.location.pathname;
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div
          id="error-boundary-screen"
          className="min-h-screen bg-[#070709] text-[#f4f4f7] flex items-center justify-center p-6"
        >
          <div className="max-w-md w-full bg-[#121219] border border-red-500/30 rounded-2xl p-8 text-center shadow-2xl shadow-red-950/50">
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <h1 className="text-xl font-bold font-['Space_Grotesk',sans-serif] tracking-tight uppercase mb-2">
              Something went wrong
            </h1>

            <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
              An unexpected error occurred while loading this section. Please refresh the page to restore the application.
            </p>

            {this.state.error && (
              <div className="p-3 bg-black/40 rounded-lg text-left text-xs font-mono text-red-400/90 mb-6 overflow-x-auto max-h-32 border border-red-500/20">
                {this.state.error.message}
              </div>
            )}

            <div className="flex items-center justify-center gap-3">
              <button
                onClick={this.handleReload}
                className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-200 cursor-pointer shadow-lg shadow-red-600/30"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reload Application</span>
              </button>

              <button
                onClick={this.handleGoHome}
                className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-200 cursor-pointer border border-white/10"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
