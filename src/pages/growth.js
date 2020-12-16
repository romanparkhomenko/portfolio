import React from "react"
import "../styles/style.scss"
import Appbar from "../components/Appbar"
import { Helmet } from "react-helmet"
import CodeBlock from "../components/CodeBlock"
import { PieChart } from 'react-minimal-pie-chart';


function Growth({ data }) {

  const dataMock = [
    { title: 'One', value: 10, color: '#E38627' },
  ];

  return (
    <div className="container growth-page">
      <Appbar />

      <Helmet>
        <meta charSet="utf-8" />
        <title>Growth | Roman Parkhomenko</title>
      </Helmet>

      <h1 className="header" style={{ color: "#0099cc" }}>
        <span>{"//"}</span>
        <span style = {{color : "white"}}>Growth Engineering</span>
      </h1>

      <div className="content">
        <CodeBlock title="renderGrowth()">
          <h3 className="growth-header">In the last two weeks, our team has been running several experiments to improve product conversion and awareness.</h3>

          <div className="experiments">
            <div className="experiment">
              <h4 className="experiment-title">Ecosystem Growth</h4>
              <p className="experiment-description">An experiment with getting new users to download applications/resources to increase trial conversion and usability.</p>
              <div className="experiment-metrics">
                <div className="experiment-metric">
                  <PieChart
                    data={[{ value: 85, color: '#0099cc' }]}
                    totalValue={85}
                    lineWidth={15}
                    label={({ dataEntry }) => `${dataEntry.value} clicks`}
                    labelStyle={{
                      fontSize: '1rem',
                      fontFamily: 'sans-serif',
                      fill: '#0099cc',
                    }}
                    labelPosition={0}
                    rounded
                    animate
                    startAngle={90}
                    background="#1f2b3b"
                  />
                  <p className="chart-description">
                    The number of clicks to download a resource outside of the primary web app.
                  </p>
                </div>
                <div className="experiment-metric">
                  <PieChart
                    data={[{ value: 35, color: '#0099cc' }]}
                    totalValue={100}
                    lineWidth={15}
                    label={({ dataEntry }) => `${dataEntry.value}%`}
                    labelStyle={{
                      fontSize: '1rem',
                      fontFamily: 'sans-serif',
                      fill: '#0099cc',
                    }}
                    labelPosition={0}
                    rounded
                    animate
                    startAngle={90}
                    background="#1f2b3b"
                  />
                  <p className="chart-description">
                    The increased conversion rate from being pointed to a resource during trial.
                  </p>
                </div>
              </div>
            </div>

            <div className="experiment">
              <h4 className="experiment-title">Team Upgrades</h4>
              <p className="experiment-description">An experiment to push certain users to upgrading to a team in-app.</p>
              <div className="experiment-metrics">
                <div className="experiment-metric">
                  <PieChart
                    data={[{ value: 38, color: '#ffcc00' }]}
                    totalValue={38}
                    lineWidth={15}
                    label={({ dataEntry }) => `${dataEntry.value} clicks`}
                    labelStyle={{
                      fontSize: '1rem',
                      fontFamily: 'sans-serif',
                      fill: '#ffcc00',
                    }}
                    labelPosition={0}
                    rounded
                    animate
                    startAngle={90}
                    background="#1f2b3b"
                  />
                  <p className="chart-description">
                    Clicks on new upgrade option.
                  </p>
                </div>
                <div className="experiment-metric">
                  <PieChart
                    data={[{ value: 16, color: '#ffcc00' }]}
                    totalValue={100}
                    lineWidth={15}
                    label={({ dataEntry }) => `${dataEntry.value}%`}
                    labelStyle={{
                      fontSize: '1rem',
                      fontFamily: 'sans-serif',
                      fill: '#ffcc00',
                    }}
                    labelPosition={0}
                    rounded
                    animate
                    startAngle={90}
                    background="#1f2b3b"
                  />
                  <p className="chart-description">
                    Team Conversion from the experimental route.
                  </p>
                </div>
                <div className="experiment-metric">
                  <PieChart
                    data={[{ value: 58, color: '#ffcc00' }]}
                    totalValue={100}
                    lineWidth={15}
                    label={({ dataEntry }) => `${dataEntry.value}%`}
                    labelStyle={{
                      fontSize: '1rem',
                      fontFamily: 'sans-serif',
                      fill: '#ffcc00',
                    }}
                    labelPosition={0}
                    rounded
                    animate
                    startAngle={90}
                    background="#1f2b3b"
                  />
                  <p className="chart-description">
                    Conversion to upgraded plan from experimental route.
                  </p>
                </div>
              </div>
            </div>

            <div className="experiment">
              <h4 className="experiment-title">Upgrade Options</h4>
              <p className="experiment-description">An experiment for providing clearer upgrade options for existing users.</p>
              <div className="experiment-metrics">
                <div className="experiment-metric">
                  <PieChart
                    data={[{ value: 215, color: '#6bb220' }]}
                    totalValue={215}
                    lineWidth={15}
                    label={({ dataEntry }) => `${dataEntry.value} clicks`}
                    labelStyle={{
                      fontSize: '1rem',
                      fontFamily: 'sans-serif',
                      fill: '#6bb220',
                    }}
                    labelPosition={0}
                    rounded
                    animate
                    startAngle={90}
                    background="#1f2b3b"
                  />
                  <p className="chart-description">
                    The number of clicks to upgrade page.
                  </p>
                </div>
                <div className="experiment-metric">
                  <PieChart
                    data={[{ value: 29, color: '#6bb220' }]}
                    totalValue={100}
                    lineWidth={15}
                    label={({ dataEntry }) => `${dataEntry.value}%`}
                    labelStyle={{
                      fontSize: '1rem',
                      fontFamily: 'sans-serif',
                      fill: '#6bb220',
                    }}
                    labelPosition={0}
                    rounded
                    animate
                    startAngle={90}
                    background="#1f2b3b"
                  />
                  <p className="chart-description">
                    The conversion rate from being led to the upgrade options.
                  </p>
                </div>
              </div>
            </div>

            <div className="experiment">
              <h4 className="experiment-title">Feature PQLs </h4>
              <p className="experiment-description">An experiment in highlighting product features that require upgrades to trial users.</p>
              <div className="experiment-metrics">
                <div className="experiment-metric">
                  <PieChart
                    data={[{ value: 13, color: '#ff6600' }]}
                    totalValue={100}
                    lineWidth={15}
                    label={({ dataEntry }) => `${dataEntry.value}%`}
                    labelStyle={{
                      fontSize: '1rem',
                      fontFamily: 'sans-serif',
                      fill: '#ff6600',
                    }}
                    labelPosition={0}
                    rounded
                    animate
                    startAngle={90}
                    background="#1f2b3b"
                  />
                  <p className="chart-description">
                    Conversion increase from the email features page.
                  </p>
                </div>
                <div className="experiment-metric">
                  <PieChart
                    data={[{ value: 36, color: '#ff6600' }]}
                    totalValue={100}
                    lineWidth={15}
                    label={({ dataEntry }) => `${dataEntry.value}%`}
                    labelStyle={{
                      fontSize: '1rem',
                      fontFamily: 'sans-serif',
                      fill: '#ff6600',
                    }}
                    labelPosition={0}
                    rounded
                    animate
                    startAngle={90}
                    background="#1f2b3b"
                  />
                  <p className="chart-description">
                    Conversion increase from the contact features page.
                  </p>
                </div>
                <div className="experiment-metric">
                  <PieChart
                    data={[{ value: 15, color: '#ff6600' }]}
                    totalValue={100}
                    lineWidth={15}
                    label={({ dataEntry }) => `${dataEntry.value}%`}
                    labelStyle={{
                      fontSize: '1rem',
                      fontFamily: 'sans-serif',
                      fill: '#ff6600',
                    }}
                    labelPosition={0}
                    rounded
                    animate
                    startAngle={90}
                    background="#1f2b3b"
                  />
                  <p className="chart-description">
                    Conversion increase from the quicksender feature.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </CodeBlock>
      </div>
    </div>
  )
}

export default Growth;

