import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Chart from 'react-google-charts'
import { ArrowLeftSquare, Bookmark, Category, ChevronRight, Danger, Document, Filter, Game, InfoCircle, Location, Message, Notification, People, Setting, ShieldDone, TicketStar, Wallet,ChevronUp, Voice2, Bag, Buy, ArrowUp, ChevronDown } from 'react-iconly'
import { useSelector } from 'react-redux'
import styles from '../styles/css/home.module.css'

export default function Home({ dashboard }) {
    const { loggedIn } = useSelector(state => state.user)
    const router = useRouter()
    const {
        gross_sales,
        lifetime_sales,
        net_income,
        new_customers,
        revenue,
        today_sales,
        total_cost,
        total_profit,
        total_sales,
        web_visitors
    } = dashboard[0]

    useEffect(()=>{
        if (!loggedIn) {
            router.push('sign-in')
        }
    }, [loggedIn])

    const currencyFormatter = new Intl.NumberFormat('en-us', {
        currency : 'USD',
        style:'currency',
        notation : 'compact'
    })
    
    const formatter = new Intl.NumberFormat('en-us')

    const lineChartData = [
        ["", ""],
        ['Jan', gross_sales.jan],
        ['Feb', gross_sales.feb],
        ['Mar', gross_sales.mar],
        ['Apr', gross_sales.apr],
        ['May', gross_sales.may],
        ['Jun', gross_sales.jun],
        ['Jul', gross_sales.jul],
        ['Aug', gross_sales.aug],
    ]
    
    const lineChartOptions = {
        curveType: "function",
        legend: { position: "none" },
        chartArea : {top:'15%',width:'85%',height:'75%', left:'10%'},
        vAxis:{gridlines:{color:'transparent'}, baselineColor : '#E9ECEF'},
        hAxis:{gridlines:{color:'transparent'}, baselineColor : 'transparent'},
        titlePosition:'none'
    }

    const pieChartData = [
        ["Task", "Hours per Day"],
        ["Fashion", .9],
        ["Accessories", .2]
    ];
      
    const pieChartOptions = {
        pieHole: 0.9,
        chartArea : {top:'10%',width:'85%',height:'80%'},
        is3D: false,
        slices : [
            { color: '#3A57E8' },
            { color: '#85F4FA' },
        ],
        legend : {
            alignment : 'center',
        }
    };
    
    const barChartData = [
        ["", "",],
        ["S", 60,],
        ["M", 110],
        ["T", 85],
        ["W", 120],
        ["T", 85],
        ["F", 130],
        ["S", 85],
        ["M", 70],
        ["T", 90],
        ["W", 85],
    ];
      
    const barChartOptions = {
        legend : {position:'none'},
        chartArea : {width:'90%',height:'75%'},
        vAxis:{gridlines:{color:'transparent'}, baselineColor : '#E9ECEF'},
        hAxis:{gridlines:{color:'transparent'}, baselineColor : 'transparent'},
    };

    function HeroChart ({ text, amount }) {
        return (
            <div className={styles.chartsInfo}>
                <img src='/images/hero-arrows.svg' alt='chart-arrows'/>
                <div>
                    <span>{text}</span>
                    <h4>{amount}</h4>
                </div>
            </div>
        )
    }

    function ActivityContainer () {
        return (
            <div className={styles.activityCont}>
                <div className={styles.indicator}></div>
                <div className={styles.content}>
                    <h6>$2400, Purchase</h6>
                    <span>11 JUL 8:10 PM</span>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.navBar}>
                <div className={styles.navToggle}>
                    <FontAwesomeIcon className={styles.bars} icon={faBars} />
                </div>
                <div className={styles.searchCont}>
                    <ArrowLeftSquare set="curved" primaryColor="#3A57E8" filled size='large' stroke='bold'/>
                    <input placeholder='Search...' />
                </div>
                <div className={styles.profileSection}>
                    <img src='/images/uk-flag.png' alt='flag'/>
                    <Notification set="bulk" primaryColor="#8A92A6"/>
                    <Message set="bulk" primaryColor="#8A92A6"/>
                    <img src='/images/profile-pic.png' alt='profile-pic' />
                    <div className={styles.profileName}>
                        <span>Austin Robertson</span>
                        <p>Marketing Administrator</p>
                    </div>
                </div>
            </div>

            <div className={styles.sideNav}>
                <div className={styles.sideNavCont}>
                    <div className={styles.navSection}>
                        <h6>Home</h6>
                        <div className={styles.selectedBtn}><Category set="bulk" primaryColor="white"/><span>Dashboard</span></div>
                        <div className={styles.sectionBtn}><Filter set="bulk" primaryColor="#8A92A6"/><span>Menu Style</span><ChevronRight style={{marginLeft:'auto'}} size='small' set="light" primaryColor="#8A92A6"/></div>
                    </div>
                    <div className={styles.navSection}>
                        <h6>Pages</h6>
                        <div className={styles.sectionBtn}><Game set="bulk" primaryColor="#8A92A6"/><span>Example</span><ChevronRight style={{marginLeft:'auto'}} size='small' set="light" primaryColor="#8A92A6"/></div>
                        <div className={styles.sectionBtn}><TicketStar set="bulk" primaryColor="#8A92A6"/><span>Widgets</span><ChevronRight style={{marginLeft:'auto'}} size='small' set="light" primaryColor="#8A92A6"/></div>
                        <div className={styles.sectionBtn}><Location set="bulk" primaryColor="#8A92A6"/><span>Maps</span><ChevronRight style={{marginLeft:'auto'}} size='small' set="light" primaryColor="#8A92A6"/></div>
                        <div className={styles.sectionBtn}><ShieldDone set="bulk" primaryColor="#8A92A6"/><span>Authentication</span><ChevronRight style={{marginLeft:'auto'}} size='small' set="light" primaryColor="#8A92A6"/></div>
                        <div className={styles.sectionBtn}><People set="bulk" primaryColor="#8A92A6"/><span>Users</span><ChevronRight style={{marginLeft:'auto'}} size='small' set="light" primaryColor="#8A92A6"/></div>
                        <div className={styles.sectionBtn}><InfoCircle set="bulk" primaryColor="#8A92A6"/><span>Error 404</span></div>
                        <div className={styles.sectionBtn}><Danger set="bulk" primaryColor="#8A92A6"/><span>Error 405</span></div>
                        <div className={styles.sectionBtn}><Bookmark set="bulk" primaryColor="#8A92A6"/><span>Maintenance</span></div>
                    </div>
                    <div className={styles.navSection}>
                        <h6>Elements</h6>
                        <div className={styles.sectionBtn}><Wallet set="bulk" primaryColor="#8A92A6"/><span>Components</span><ChevronRight style={{marginLeft:'auto'}} size='small' set="light" primaryColor="#8A92A6"/></div>
                        <div className={styles.sectionBtn}><Document set="bulk" primaryColor="#8A92A6"/><span>Form</span><ChevronRight style={{marginLeft:'auto'}} size='small' set="light" primaryColor="#8A92A6"/></div>
                        <div className={styles.sectionBtn}><Setting set="bulk" primaryColor="#8A92A6"/><span>Table</span><ChevronRight style={{marginLeft:'auto'}} size='small' set="light" primaryColor="#8A92A6"/></div>
                        <div className={styles.sectionBtn}><ChevronUp set="bulk" primaryColor="#8A92A6"/><span>Icons</span><ChevronRight style={{marginLeft:'auto'}} size='small' set="light" primaryColor="#8A92A6"/></div>
                    </div>
                </div>
            </div>

            <div className={styles.main}>
                <div className={styles.heroBanner}>
                    <div className={styles.hero}>
                        <div className={styles.heroText}>
                            <div>
                                <h1>Hello Devs !</h1>
                                <p>We are on a mission to help developers like you to build beautiful projects for free</p>
                            </div>
                            <div className={styles.announcements}>
                                <Voice2 set="bulk" primaryColor="white"/>
                                <span>Announcements</span>
                            </div>
                        </div>
                        <div className={styles.heroCharts}>
                            <HeroChart text='Total Sales' amount={currencyFormatter.format(total_sales)} />
                            <HeroChart text='Total Profit' amount={currencyFormatter.format(total_profit)} />
                            <HeroChart text='Total Cost' amount={currencyFormatter.format(total_cost)} />
                            <HeroChart text='Revenue' amount={currencyFormatter.format(revenue)} />
                            <HeroChart text='Net Income' amount={currencyFormatter.format(net_income)} />
                            <HeroChart text='Today' amount={currencyFormatter.format(today_sales)} />
                        </div>
                    </div>
                </div>

                <div className={styles.mainContent}>
                    <div className={styles.section1}>
                        <div className={styles.mainChart}>
                            <div className={styles.head}>
                                <div>
                                    <h3>$855.8k</h3>
                                    <span>Gross Sales</span>
                                </div>
                                <button><span>This Week </span> <ChevronDown size='small' set='light' /></button>
                            </div>
                            <div className={styles.chart}>
                                <Chart 
                                    chartType="LineChart"
                                    width="100%"
                                    height="100%"
                                    data={lineChartData}
                                    options={lineChartOptions}
                                />
                            </div>
                        </div>
                        <div className={styles.earningsConversions}>
                            <div className={styles.earnings}>
                                <div className={styles.head}>
                                    <h3>Earnings</h3>
                                    <button><span>This Week </span> <ChevronDown size='small' set='light' /></button>
                                </div>
                                <div style={{width:'100%', height:'90%'}}>
                                    <Chart 
                                        chartType="PieChart"
                                        width="100%"
                                        height="100%"
                                        data={pieChartData}
                                        options={pieChartOptions}
                                    />
                                </div>
                            </div>
                            <div className={styles.conversions}>
                                <div className={styles.head}>
                                    <h3>Conversions</h3>
                                    <button><span>This Week </span> <ChevronDown size='small' set='light' /></button>
                                </div>
                                <div style={{width:'100%', height:'90%'}}>
                                    <Chart
                                        chartType="Bar"
                                        width="100%"
                                        height="100%"
                                        data={barChartData}
                                        options={barChartOptions}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.enterprise}></div>
                    </div>
                    <div className={styles.section2}>
                        <div className={styles.debitCard}>
                            <img src='/images/credit-card.svg' />
                            <div className={styles.salesInfo}>
                                <div className={styles.icons}>
                                    <div className={styles.icon1Cont}>
                                        <div className={styles.icon1}>
                                            <Bag set='bulk' size='small' primaryColor='#0048B3' />
                                        </div>
                                        <div><p>1153</p><span>Products</span></div>
                                    </div>
                                    <div className={styles.icon2Cont}>
                                        <div className={styles.icon2}>
                                            <Buy set='bulk' size='small' primaryColor='#409900' />
                                        </div>
                                        <div><p>81k</p><span>Order served</span></div>
                                    </div>
                                </div>
                                <div className={styles.lifetime}>
                                    <div className={styles.text}>
                                        <h2>{currencyFormatter.format(lifetime_sales)}</h2>
                                        <span>Life time sales</span>
                                    </div>
                                    <div className={styles.badge}>YoY 24%</div>
                                </div>
                                <div className={styles.salesCTA}>
                                    <button>View Project</button>
                                    <button>Analytics</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.visitors}>
                            <div>
                                <h2>{formatter.format(web_visitors)}</h2>
                                <span>Website Visitors</span>
                            </div>
                            <div>
                                <h2>{formatter.format(new_customers)}</h2>
                                <span>New Customers</span>
                            </div>
                        </div>
                        <div className={styles.activity}>
                            <h3>Activity overview</h3>
                            <div className={styles.subHead}><ArrowUp set='light' stroke='bold' size='small' primaryColor='#1AA053' /><span>16% this month</span></div>

                            <ActivityContainer />
                            <ActivityContainer />
                            <ActivityContainer />
                            <ActivityContainer />
                            <ActivityContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps () {
    const dashboard = await fetch(`https://639a3f4b16b0fdad77584051.mockapi.io/api/v3/users/2/dashboard`, {
        method : 'get'
    }).then(res => res.json())

    return {
        props : {
            dashboard
        }
    }
}