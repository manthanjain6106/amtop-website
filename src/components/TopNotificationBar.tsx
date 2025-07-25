'use client';

import { useEffect, useState } from 'react';

const TopNotificationBar = () => {
  // Countdown timer logic (example: 2 days, 23 hours, 5 min, 59 sec)
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 23,
    minutes: 5,
    seconds: 59,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) { minutes--; seconds = 59; }
        else if (hours > 0) { hours--; minutes = 59; seconds = 59; }
        else if (days > 0) { days--; hours = 23; minutes = 59; seconds = 59; }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full bg-white text-gray-800 text-lg sm:text-xl flex flex-col sm:flex-row items-center justify-between px-3 sm:px-8 py-2 font-bold shadow z-[999]">
      <div className="flex items-center gap-2 mb-1 sm:mb-0">
        <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 17.924 17.924">
          <g>
            <g>
              <polygon fill="#c2880a" points="12.475,8.868 12.481,8.859 12.48,8.858 "></polygon>
              <path fill="#c2880a" d="M17.211,10.107c0,0-0.183-0.249-0.616-0.415c0,0-0.036-0.011-0.092-0.029 c-0.386-0.181-0.752-0.297-0.752-0.297c-0.078-0.028-0.146-0.056-0.21-0.083c-0.261-0.13-0.45-0.279-0.45-0.279 s-0.002-0.002-0.203-0.203c0.361-0.374,0.626-0.882,0.709-1.368c0.064-0.066,0.129-0.172,0.157-0.341 c0.052-0.188,0.117-0.517,0.002-0.67c-0.007-0.008-0.013-0.015-0.02-0.022c0.108-0.396,0.246-1.214-0.244-1.772 c-0.044-0.056-0.318-0.384-0.906-0.558l-0.28-0.097c-0.463-0.143-0.754-0.174-0.766-0.176c-0.021-0.002-0.043,0-0.063,0.005 c-0.016,0.005-0.071,0.019-0.113,0.013c-0.111-0.016-0.277,0.041-0.307,0.053c-0.038,0.015-0.934,0.374-1.205,1.208 c-0.025,0.067-0.134,0.422,0.01,1.292c-0.021,0.014-0.04,0.032-0.058,0.054c-0.116,0.153-0.051,0.48,0.002,0.669 c0.027,0.167,0.092,0.272,0.155,0.339c0.072,0.48,0.302,0.942,0.605,1.296c0,0,0.23,0.398,0.259,0.435 c0.729,1.08,0.821,3.162,0.83,3.396l0.001,0.015l-0.001,0.016c-0.012,0.728-0.374,0.981-0.568,1.065 c-0.094,0.042-0.192,0.079-0.291,0.117c0.049-0.072,0.097-0.197,0.1-0.418c0,0-0.071-3.059-0.688-3.972 c0,0-0.176-0.24-0.593-0.399c0,0-0.034-0.011-0.089-0.028c-0.37-0.174-0.722-0.285-0.722-0.285 c-0.075-0.027-0.142-0.053-0.202-0.08c-0.25-0.125-0.433-0.268-0.433-0.268s-0.002-0.002-0.195-0.196 c0.347-0.36,0.602-0.848,0.681-1.314c0.063-0.063,0.125-0.166,0.152-0.328c0.049-0.181,0.112-0.497,0.001-0.644 c-0.006-0.007-0.012-0.014-0.018-0.021c0.104-0.381,0.236-1.167-0.235-1.704c-0.043-0.053-0.307-0.369-0.871-0.536l-0.27-0.092 C8.97,3.348,8.69,3.317,8.678,3.316c-0.02-0.002-0.041,0-0.061,0.006C8.601,3.326,8.549,3.34,8.508,3.335 c-0.106-0.016-0.266,0.039-0.294,0.05C8.178,3.399,7.317,3.744,7.056,4.546c-0.024,0.065-0.128,0.406,0.01,1.242 C7.045,5.802,7.027,5.819,7.011,5.84C6.9,5.986,6.963,6.302,7.012,6.483c0.027,0.161,0.089,0.263,0.15,0.326 c0.069,0.461,0.29,0.906,0.582,1.246L7.661,8.182L7.659,8.174L7.656,8.191C7.657,8.188,7.659,8.184,7.66,8.182v0.001L7.655,8.191 C7.538,8.556,6.137,8.982,6.137,8.982C5.721,9.141,5.545,9.381,5.545,9.381c-0.616,0.913-0.688,3.971-0.688,3.971 c0.003,0.219,0.05,0.342,0.097,0.414c-0.095-0.035-0.192-0.071-0.283-0.111c-0.194-0.084-0.557-0.339-0.568-1.066v-0.016v-0.016 c0.009-0.234,0.102-2.314,0.817-3.376c0.039-0.054,0.167-0.214,0.403-0.379c0,0,0-0.001-0.001-0.001 c0.361-0.374,0.626-0.882,0.709-1.368C6.095,7.367,6.16,7.261,6.189,7.092c0.052-0.188,0.117-0.517,0.001-0.67 C6.184,6.414,6.177,6.407,6.171,6.4c0.108-0.396,0.246-1.214-0.244-1.772C5.886,4.572,5.611,4.244,5.023,4.07l-0.28-0.097 C4.28,3.83,3.989,3.799,3.977,3.797c-0.021-0.002-0.043,0-0.063,0.005C3.898,3.808,3.843,3.822,3.8,3.816 C3.69,3.8,3.524,3.857,3.494,3.869C3.456,3.883,2.561,4.242,2.289,5.077c-0.025,0.067-0.133,0.422,0.01,1.292 C2.278,6.383,2.258,6.401,2.241,6.423c-0.116,0.153-0.05,0.48,0.001,0.669c0.027,0.167,0.092,0.272,0.155,0.339 c0.072,0.48,0.302,0.942,0.606,1.296L2.917,8.859L2.915,8.85L2.911,8.868c0.001-0.003,0.004-0.007,0.005-0.01v0.001L2.911,8.868 C2.79,9.248,1.332,9.691,1.332,9.691c-0.433,0.166-0.616,0.415-0.616,0.415C0.075,11.056,0,13.171,0,13.171 c0.008,0.482,0.217,0.533,0.217,0.533c1.473,0.657,3.785,0.773,3.785,0.773c0.125,0.004,0.24-0.003,0.356-0.01l0.003,0.012 c0,0,0.87-0.045,1.881-0.23c1.219,0.295,2.46,0.358,2.46,0.358c0.119,0.003,0.231-0.004,0.342-0.011l0.003,0.012 c0,0,1.295-0.066,2.538-0.379c1.053,0.201,1.979,0.248,1.979,0.248c0.124,0.004,0.24-0.003,0.356-0.01l0.003,0.012 c0,0,2.312-0.117,3.785-0.773c0,0,0.208-0.051,0.216-0.534C17.927,13.173,17.852,11.058,17.211,10.107z"></path>
            </g>
          </g>
        </svg>
        <span className="font-bold text-base sm:text-lg">
          <span className="text-gray-800">Only </span>
          <span className="text-yellow-600">10</span>
          <span className="text-gray-800"> Spots remaining</span>
        </span>
      </div>
      <div className="flex items-center gap-1 sm:gap-2">
        <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="font-bold text-gray-800 text-base sm:text-lg hidden sm:inline">Limited Time Offer Ends In:</span>
        <span className="font-bold text-gray-800 text-base sm:text-lg sm:hidden">Ends In:</span>
        <div className="flex gap-1">
          <span className="bg-red-600 text-white px-2 sm:px-3 py-2 rounded font-extrabold min-w-[32px] sm:min-w-[40px] text-center text-lg sm:text-xl">
            {timeLeft.days.toString().padStart(2, '0')}d
          </span>
          <span className="bg-red-600 text-white px-2 sm:px-3 py-2 rounded font-extrabold min-w-[32px] sm:min-w-[40px] text-center text-lg sm:text-xl">
            {timeLeft.hours.toString().padStart(2, '0')}h
          </span>
          <span className="bg-red-600 text-white px-2 sm:px-3 py-2 rounded font-extrabold min-w-[32px] sm:min-w-[40px] text-center text-lg sm:text-xl">
            {timeLeft.minutes.toString().padStart(2, '0')}m
          </span>
          <span className="bg-red-600 text-white px-2 sm:px-3 py-2 rounded font-extrabold min-w-[32px] sm:min-w-[40px] text-center text-lg sm:text-xl">
            {timeLeft.seconds.toString().padStart(2, '0')}s
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopNotificationBar; 