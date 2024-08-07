import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { FaShoppingBasket } from 'react-icons/fa';
import { AiFillShopping } from 'react-icons/ai';
import { TbShoppingBagX } from 'react-icons/tb';
import { MdArrowForwardIos } from 'react-icons/md';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { MdArrowDropUp } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { BiSolidDownArrowAlt } from "react-icons/bi";
import { AiFillDollarCircle } from "react-icons/ai";
import { IoLogoAppleAr } from "react-icons/io5";
import { GiBerriesBowl } from "react-icons/gi";
import { TbBowlSpoonFilled } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";


// Register required components for ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [timeframe, setTimeframe] = useState('monthly');
  const [chartData, setChartData] = useState(getData('monthly'));

  useEffect(() => {
    setChartData(getData(timeframe));
  }, [timeframe]);

  function getData(timeframe) {
    let labels = [];
    let data = [];

    if (timeframe === 'daily') {
      const daily = [1, 2, 5, 10, 15, 20, 25, 26, 27, 28, 29, 30, 31];
      labels = daily;
      data = daily.map(() => Math.floor(Math.random() * 10000));
    } else if (timeframe === 'weekly') {
      const weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
      labels = weeks;
      data = [4500, 5600, 7800, 9200];
    } else if (timeframe === 'monthly') {
      const months = ['January', 'February', 'March', 'April', 'May', 'June'];
      labels = months;
      data = [1200, 1900, 3000, 5000, 2000, 3000];
    }

    return {
      labels: labels,
      datasets: [
        {
          label: `${timeframe.charAt(0).toUpperCase() + timeframe.slice(1)} Activity`,
          data: data,
          backgroundColor: (context) => {
            const chart = context.chart;
            const { ctx, chartArea } = chart;

            if (!chartArea) {
              return null;
            }
            const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
            gradient.addColorStop(0, 'rgba(80, 192, 192, 0.5)');
            gradient.addColorStop(1, 'rgba(80, 192, 192, 0.2)');
            return gradient;
          },
          hoverBackgroundColor: 'rgba(80, 192, 192, 0.8)',
        },
      ],
    };
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14,
            family: 'Arial, sans-serif',
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.dataset.label + ': ' + tooltipItem.raw;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          autoSkip: false,
          font: {
            size: 12,
            family: 'Arial, sans-serif',
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          callback: function (value) {
            if (value === 1000) return '1k';
            if (value === 5000) return '5k';
            if (value === 10000) return '10k';
            return null; // Remove other ticks
          },
          stepSize: 1000,
          font: {
            size: 12,
            family: 'Arial, sans-serif',
          },
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        min: 0,
        max: 12000,
      },
    },
    elements: {
      bar: {
        barThickness: 'flex',
        borderRadius: {
          topLeft: 15,
          topRight: 15,
          bottomLeft: 0,
          bottomRight: 0,
        },
        borderSkipped: 'bottom',
      },
    },
  };

  const orders = [
    {
      customer: 'John Doe',
      profileImage: 'https://via.placeholder.com/40',
      orderNo: '12345',
      amount: '$150',
      status: 'Delivered',
    },
    {
      customer: 'Jane Smith',
      profileImage: 'https://via.placeholder.com/40',
      orderNo: '12346',
      amount: '$200',
      status: 'Pending',
    },
  ];

  const progress = 70; // Example value
  const totalTarget = 10000; // Example target value
  const progressText = `${progress}%`;

  return (
    <div className="flex-1 p-10  bg-black h-screen overflow-y-auto ">
      <h1 className="text-3xl text-white font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-3 mb-10 gap-4">
        {/* First Column: 60% width */}
        <div className="col-span-2 space-y-4 mb-4">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg mb-4">
              <div className="bg-blue-600 max-w-max p-2 bg-opacity-15 rounded-md">
                <FaShoppingBasket className="text-blue-800" />
                <p className="text-xs -mt-3 ml-2 max-h-max rounded-full">+</p>
              </div>
              <h6 className="font-bold mb-2">Total Orders</h6>
              <div className='flex gap-20'>
                <div>
                  <p className="text-md">$1,234</p>
                </div>

                <div className='flex text-center '>
                  <MdArrowDropUp className='text-green-600 text-md text-center mt-1' />
                  <p className='text-green-600 text-md text-center'>3%</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg mb-4">
              <div className="bg-green-600 max-w-max p-2 bg-opacity-15 rounded-md">
                <AiFillShopping className="text-green-600" />
                <p className="text-xs ml-2 -mt-3 max-h-max rounded-full">+</p>
              </div>
              <h6 className="font-bold mb-2">Total Delivered</h6>
              <div className='flex gap-20'>
                <div>
                  <p className="text-md">45</p>
                </div>

                <div className='flex text-center '>
                  <MdArrowDropDown className='text-red-600 text-md text-center mt-1' />
                  <p className='text-red-600 text-md text-center'>3%</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg mb-4">
              <div className="bg-red-600 max-w-max p-2 bg-opacity-15 rounded-md">
                <TbShoppingBagX className="text-red-600" />
              </div>
              <h6 className="font-bold mb-2">Total Cancelled</h6>
              <div className='flex gap-20'>
                <div>
                  <p className="text-md">05</p>
                </div>

                <div className='flex text-center '>
                  <MdArrowDropUp className='text-green-600 text-md text-center mt-1' />
                  <p className='text-green-600 text-md text-center'>3%</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg mb-4">
              <div className='flex bg-pink-500 p-2 pb-0.5 rounded-md text-pink-500 max-w-max bg-opacity-15'>
                < BiSolidDownArrowAlt className='mt-2 text-md  text-pink-500' />
                <AiFillDollarCircle className=' -ml-4  z-25' />
                < BiSolidDownArrowAlt className='-ml-1' />
              </div>
              <h6 className="font-bold mb-2">Total Revenue</h6>
              <div className='flex gap-20'>
                <div>
                  <p className="text-md">$12k</p>
                </div>

                <div className='flex text-center '>
                  <MdArrowDropDown className='text-red-600 text-md text-center mt-1' />
                  <p className='text-red-600 text-md text-center'>3%</p>
                </div>
              </div>

            </div>
          </div>

          {/* Activity Section with Bar Chart */}
          <div className="bg-gray-800 text-white p-2 rounded-lg shadow-lg mb-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl pt-6 pl-6 font-bold">Activity</h2>
              <select
                id="timeframe"
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                className="p-2 bg-gray-700 text-white rounded-full"
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
            <div className="h-56 ml-10 mr-10 mb-10">
              <Bar data={chartData} options={options} />
            </div>
          </div>

          {/* Recent Orders Section */}
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mb-4">
            <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-2 px-4 text-left">Customer</th>
                  <th className="py-2 px-4 text-left">Order No</th>
                  <th className="py-2 px-4 text-left">Amount</th>
                  <th className="py-2 px-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <React.Fragment key={index}>
                    <tr className="border-b border-gray-700">
                      <td className="py-2 px-4 flex items-center">
                        <img src={order.profileImage} alt="Profile" className="w-8 h-8 rounded-full mr-2" />
                        {order.customer}
                      </td>
                      <td className="py-2 px-4">{order.orderNo}</td>
                      <td className="py-2 px-4">{order.amount}</td>
                      <td className="py-2 px-4">
                        <span className={`inline-block px-2 py-1 rounded-full text-white ${order.status === 'Delivered' ? 'bg-green-600' : 'bg-red-600'}`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Second Column: 30% width */}
        <div className="space-y-4 mb-4">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mb-8">
            <h1 className="text-sm font-bold mb-2 -mt-3">Net Profit</h1>
            <div className="flex items-center justify-between">
              <div className='grid  grid-flow-row'>
                <p className="text-xl">$6,759.25</p>
                <div className='flex text-center mt-2'>
                  <MdArrowDropUp className='text-green-600 text-xl text-center mt-1' />
                  <p className='text-green-600 text-md text-center'>3%</p>
                </div>
              </div>

              <div className=" justify-center text-center mx-auto gap-2 -mt-3">
                <CircularProgressbar
                  value={progress}
                  text={progressText}
                  className='w-16 ml-20 -mt-6'
                  styles={buildStyles({
                    pathColor: 'lightskyblue',
                    textColor: '#ffffff',
                    trailColor: 'darkblue',
                  })}
                />

                <p className='text-xs mx-auto'>The Value here has been the rounded off.</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 text-white p-6  rounded-lg shadow-lg mb-4">


            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="p-6 bg-red-400 text-red-600 bg-oapcity-15 text-2xl rounded-full">
                  <IoLogoAppleAr className='text-4xl' />
                </span>
                <h3 className="text-lg">Goals</h3>
              </div>
              <div className="flex items-center p-2 bg-gray-500 text-white rounded-full">
                <MdArrowForwardIos />
              </div>
            </div>

            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="p-6 bg-blue-800 bg-opacity-15 text-blue-800 text-2xl rounded-full">
                  <GiBerriesBowl className='text-5xl' />
                </span>
                <h3 className="text-lg">Popular Dishes</h3>
              </div>
              <div className="flex items-center p-2 bg-gray-500 text-white rounded-full">
                <MdArrowForwardIos />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="p-6 bg-blue-400 text-blue-400 bg-opacity-15 text-2xl rounded-full">
                  <TbBowlSpoonFilled className='text-5xl' />
                </span>
                <h3 className="text-lg">Menus</h3>
              </div>
              <div className="flex items-center p-2 bg-gray-500 text-white rounded-full">
                <MdArrowForwardIos />
              </div>
            </div>
          </div>
          <div className="bg-gray-800  text-white p-6 overflow-y-scroll h-60 rounded-lg shadow-lg mb-4">
            <h2 className="text-2xl font-bold mb-4">Customer Feedback</h2>
            <div>
              <div className='flex gap-2 '>
                <img src="" alt="Profile" className="w-8 h-8 rounded-full mr-2" />
                <h5>Jenny Wilson</h5>
              </div>
              <div className='flex text-yellow-400 mt-2 mb-2'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar  />
              <FaRegStar />
              </div>
              <p className='text-xs'>The food was excellent and so was the services. </p>
            </div>

            <hr className='mt-2 mb-2'></hr>
            <div>
              <div className='flex gap-2 '>
                <img src="" alt="Profile" className="w-8 h-8 rounded-full mr-2" />
                <h5>Jenny Wilson</h5>
              </div>
              <div className='flex text-yellow-400 mt-2 mb-2'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar  />
              <FaRegStar />
              </div>
              <p className='text-xs'>The food was excellent and so was the services. </p>
            </div>

            <hr className='mt-2 mb-2'></hr>
            

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
