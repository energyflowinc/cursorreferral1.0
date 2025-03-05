import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen bg-indigo-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">HomeProReferrals</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sign in to your account to manage your referrals
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <Link href="/dashboard" passHref>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </Link>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
                  </svg>
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.7808 14.5042C19.6566 14.4561 19.5396 14.419 19.4296 14.3928C19.4296 14.3928 19.2908 14.338 19.2006 14.3006C18.8206 14.123 18.5571 14.0159 18.5571 13.6358C18.5571 13.2558 18.8206 12.9922 19.0841 12.9922C19.2301 12.9922 19.7107 13.1479 19.7107 13.1479C20.5807 13.4114 21.4507 12.9324 21.7142 12.0624L21.7166 12.0555C21.9744 11.1961 21.4977 10.2827 20.6383 10.0249C20.6383 10.0249 19.9943 9.79845 19.1773 9.60145C19.1773 8.87245 19.1773 7.36545 19.1773 7.36545C19.1764 6.93442 18.8269 6.58517 18.3959 6.58447H17.1954C16.7644 6.58447 16.4149 6.93397 16.4141 7.36475V9.23045C16.0341 9.23045 15.6542 9.20495 15.2742 9.20495C14.8941 9.20495 14.6306 9.46845 14.6306 9.84845V10.8175C14.6306 11.1975 14.8941 11.461 15.2742 11.461C15.6542 11.461 16.0341 11.4354 16.4141 11.4354C16.4141 13.4115 15.6541 15.3875 13.4215 15.3875C11.1889 15.3875 10.4289 13.8295 10.4289 11.8535V7.36475C10.428 6.93372 10.0786 6.58447 9.64758 6.58447H8.44708C8.01605 6.58447 7.6666 6.93397 7.66661 7.36475V11.8535C7.66661 15.8064 9.37561 18.5 13.4215 18.5C17.4673 18.5 19.1764 15.8064 19.1764 11.8535C19.1764 11.8535 19.1769 11.6275 19.1774 11.4355C19.3679 11.4843 19.5583 11.5332 19.7482 11.582C20.1282 11.7073 20.3046 11.9236 20.3046 12.3036C20.3046 12.6837 20.0411 12.8481 19.7776 12.8481C19.7121 12.8481 19.1431 12.7186 19.1431 12.7186C18.2731 12.4823 17.4031 12.9342 17.1396 13.8042C16.8761 14.6743 17.3551 15.5443 18.2251 15.8078C18.2251 15.8078 19.2006 16.1409 19.7776 16.1409C21.7536 16.1409 22.5091 14.8309 22.5091 12.8549C22.5091 10.8789 21.2471 9.83945 19.7808 9.56945C19.592 9.52114 19.4089 9.46653 19.272 9.4248C19.2387 9.41545 19.2175 9.40945 19.2097 9.40745C19.1994 9.40445 19.1944 9.40345 19.1944 9.40345C19.1881 9.40107 19.1818 9.39856 19.1755 9.39594C19.1761 9.34178 19.1764 9.28631 19.1764 9.23045V7.36475C19.1756 6.93372 18.8261 6.58447 18.3951 6.58447H17.1946C16.7635 6.58447 16.414 6.93397 16.4133 7.36475V9.23045C16.0333 9.23045 15.6533 9.20495 15.2733 9.20495C14.8933 9.20495 14.6298 9.46845 14.6298 9.84845V10.8175C14.6298 11.1975 14.8933 11.461 15.2733 11.461C15.6533 11.461 16.0333 11.4354 16.4133 11.4354C16.4133 13.4115 15.6533 15.3875 13.4206 15.3875C11.188 15.3875 10.428 13.8295 10.428 11.8535V7.36475C10.4272 6.93372 10.0777 6.58447 9.64668 6.58447H8.44618C8.01515 6.58447 7.66571 6.93397 7.66571 7.36475V11.8535C7.66571 15.8064 9.37471 18.5 13.4206 18.5C17.4664 18.5 19.1755 15.8064 19.1755 11.8535C19.1755 11.6537 19.1758 11.4765 19.1761 11.4355C19.5561 11.6179 20.1282 11.7073 20.1282 11.7073C20.9982 11.9708 21.4772 12.8408 21.2137 13.7108C20.9502 14.5809 20.0802 15.0599 19.2101 14.7964C19.2101 14.7964 18.7926 14.653 18.4851 14.653C17.9081 14.653 17.2481 15.0857 17.2481 16.0591C17.2481 17.0324 18.2251 17.4634 18.8851 17.4634C19.0862 17.4634 19.4878 17.4089 19.8094 17.3404C21.9233 16.8342 23.1638 15.3697 22.8551 13.2624C22.5465 11.1553 21.0008 14.9539 19.7808 14.5042Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link href="/(auth)/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                Register now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 