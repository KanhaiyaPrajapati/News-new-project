
import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { NavLink } from "react-router-dom";
import { Hoc } from "../Components/Hoc";


const Dashboard = () => {

  const Data = [
    { id: 1, year: 2016, userGain: 80000, userLost: 823 },
    { id: 2, year: 2017, userGain: 45677, userLost: 345 },
    { id: 3, year: 2018, userGain: 78888, userLost: 555 },
    { id: 4, year: 2019, userGain: 90000, userLost: 4555 },
    { id: 5, year: 2020, userGain: 50000, userLost: 234 },
    { id: 6, year: 2021, userGain: 85000, userLost: 350 },
  ];

  // const [chartData, setChartData] = useState({
  //   labels: Data.map((data) => data.year),
  //   datasets: [{
  //     label: "Users Gained ",
  //     data: Data.map((data) => data.userGain),
  //     backgroundColor: [
  //       "rgba(75,192,192,1)",
  //       "grey",
  //       "#50AF95",
  //       "#f3ba2f",
  //       "#2a71d0",
  //       "black",
  //       "yellow",
  //       "pink"
  //     ],
  //     borderColor: "black",
  //     borderWidth: 1.5
  //   }]
  // });
  
  // useEffect(() => {
    //   AOS.init({ duration: 3000});
    // },[]);
    return (

      // <div className="container-fluid charts border border-warning" style={{ width: '97%' }} >
      //     <div className='d-flex justify-content-evenly mx-auto'   >
      //       <div className="chart-container mt-5" style={{ width: '30%', height: '300px', }}>
      //         <Line
      //           data={chartData}
    //           options={{
      //             maintainAspectRatio: false, // Make the chart responsive
    //             plugins: {
      //               title: {
        //                 display: true,
        //                 text: "Line Chart between 2016-2020"
    //               }
    //             }
    //           }}
    //         />
    //       </div>
                      <h1>Dashboard Content</h1>
    //       <div className="chart-container mt-5" style={{ width: '33%' }}>
    //         <Radar
    //           data={chartData}
    //           options={{
    //             maintainAspectRatio: false, // Make the chart responsive
    //             plugins: {
    //               title: {
    //                 display: true,
    //                 text: "Radar chart between 2020-2022"
    //               }
    //             }
    //           }}
    //         />
    //       </div>
    //       <div className="chart-container mt-5" style={{ width: '33%' }}>
    //         <Line
    //           data={chartData}
    //           options={{
    //             maintainAspectRatio: false, // Make the chart responsive
    //             plugins: {
    //               title: {
    //                 display: true,
    //                 text: "Line chart between 2022-2024"
    //               }
    //             }
    //           }}
    //         />
    //       </div>
    //     </div>
    //   </div>
  );
};

export default Hoc(Dashboard);



