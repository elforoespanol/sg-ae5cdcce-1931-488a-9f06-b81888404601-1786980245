import { NextPageContext } from "next";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, RotateCcw, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorProps {
  statusCode?: number;
}

export default function ErrorPage({ statusCode }: ErrorProps) {
  return (
    <>
      <Head>
        <title>¡Lo siento! Something went wrong</title>
      </Head>

      <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-[#fdfbf7] via-[#fcf9f2] to-[#fef3e2]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg w-full text-center space-y-8"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-20 w-20 mx-auto rounded-full bg-destructive/10 flex items-center justify-center"
          >
            <AlertTriangle className="h-10 w-10 text-destructive" />
          </motion.div>

          <div className="space-y-3">
            <h1 className="text-3xl font-serif font-bold text-foreground">¡Lo siento!</h1>
            <p className="text-lg text-muted-foreground">Something went wrong</p>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto">
              {statusCode
                ? `A server error occurred (${statusCode}). Our team has been notified.`
                : "An unexpected error occurred. Please try again or contact support if the problem persists."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              onClick={() => window.location.reload()}
              variant="outline"
              className="gap-2 w-full sm:w-auto"
            >
              <RotateCcw className="h-4 w-4" />
              Try Again
            </Button>
            <Link href="/dashboard">
              <Button className="gap-2 w-full sm:w-auto">
                <Home className="h-4 w-4" />
                Dashboard
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};