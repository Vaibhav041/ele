import { useState } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const handle = async() => {
        setLoading(true);
        console.log(name);
        console.log(password)
        let data = await axios.post('https://electionapp-92gq.onrender.com/auth/login', {
            name:name,
            password:password
        })
        setLoading(false);
        if (data.data.success === true) {
            localStorage.setItem('logged', 'trkidbkasajfkavue')
            navigate('/home')
        }
    }
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
  return (
    <section class="bg-gray-50 ">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
          <img class="w-8 h-8 mr-2" src="data:image/png;base64,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" alt="logo"/>
          Ward 37
      </a>
      <div class="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your Username</label>
                      <input type="text" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="username" required="" onChange={(e) => setName(e.target.value)}/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                 
                  <button onClick={handle} type="button" class="w-full text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>
                 
              </form>
          </div>
      </div>
  </div>
  <FadeLoader
  color="green"
  loading={loading}
  cssOverride={override}
  size={100}
  aria-label="Loading Spinner"
  data-testid="loader"
  />
</section>
  )
}

export default Login