import image1 from '../../assets/image1.png'
const Home = () => {


return (
    <div className="flex flex-col px-10 m-auto items-center py-24 sm:flex-row">
        <div className='flex w-8/12 pb-10 sm:pb-2'>
            <img src={image1}></img>
        </div>
        <div className='w-6/12'>
            <div className="flex">
                <h1 className="text-3xl text-[#9373ec]">I am Mark&nbsp;</h1>
                <h1 className="text-3xl text-white">Victorio</h1>]
            </div>

            <p className="pt-2 text-white">
                A professional software engineer building 
                elegant web applications. I am a skilled full-stack
                developer with experience in both front-end and back-end
                development.
            </p>
        </div>

    </div>
  
    )

}

export default Home