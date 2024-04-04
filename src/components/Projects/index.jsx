import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'

const Projects = () => {


    return (
        <div className='h-full bg-[#3a4450]'>
            <div className="flex flex-col sm:flex-row p-10 m-auto">
                <div className="text-white text-5xl font-semibold text-center w-full pb-10">
                    PROJECTS
                </div>
            </div>
            <div>
                <div className="flex flex-col sm:flex-row px-10 m-auto items-center pb-10">
                    <div className='flex w-8/12 pb-10 sm:pr-20'>
                        <img src={image2}></img>
                    </div>
                    <div className='w-6/12'>
                        <div className="flex">
                            <h1 className="text-3xl text-[#9373ec] font-semibold">SnapToApp</h1>
                        </div>

                        <p className="pt-2 text-white">
                            Your mobile application builder in minutes.
                            <br />
                            <br />
                            SnapToApp is a no-code mobile application
                            that uses PWA Technology to generate a web application through an intuitive app builder.
                            <br/>
                            <br/>
                            This is a subscription based service that would allow the client to build a number of applications
                            for commercial use. This project is worked under Hooli Software
                            <br />
                            <br />
                        </p>
                        <a href="https://snaptoapp.com/">
                            <button className="bg-[#9373ec] hover:bg-[#7a5dc9] text-white font-bold py-2 px-4 rounded">
                                Visit
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-col sm:flex-row px-10 m-auto items-center pb-5">
                    <div className='w-6/12 pb-10'>
                        <div className="flex">
                            <h1 className="text-3xl text-[#9373ec] font-semibold">Loan Watch</h1>
                        </div>

                        <p className="pt-2 text-white">
                            A web application that in collaboration with the LoanWatch Team and JPMC
                            <br/>
                            <br/>
                            This Aplication aim to streamline the loan process for businesses. 
                            LoanWatch handles Compiling data, and prompt reporting of key metrics.
                            This project is worked under Hooli Software
                            <br />
                            <br />
                        </p>
                        <a href="https://loanwatch.io/">
                            <button className="bg-[#9373ec] hover:bg-[#7a5dc9] text-white font-bold py-2 px-4 rounded">
                                Visit
                            </button>
                        </a>
                    </div>
                    <div className='flex w-8/12 sm:pl-20'>
                        <img src={image3}></img>
                    </div>
                </div>
            </div>
        </div>
      )
    
    }
    
    export default Projects