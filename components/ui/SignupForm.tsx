interface SignupFormProps {
  variant?: "default" | "inline";
}

export function SignupForm({ variant = "default" }: SignupFormProps) {
  if (variant === "inline") {
    return (
      <a
        href="https://app.zebri.com.au/signup"
        className="inline-flex items-center gap-1.5 px-6 py-3.5 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-md text-sm transition-colors"
      >
        Start Free Trial →
      </a>
    );
  }

  return (
    <a
      href="https://app.zebri.com.au/signup"
      className="flex items-center justify-center w-full px-6 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-md text-sm transition-colors"
    >
      Start Free Trial →
    </a>
  );
}
